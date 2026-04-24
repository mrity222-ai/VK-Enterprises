
'use client';

import { useEffect, useState, useTransition, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDebounce } from 'use-debounce';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQuoteModal } from '@/hooks/use-quote-modal';
import { submitQuote } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2 } from 'lucide-react';
import { aiServiceAdvisor, ServiceAdvisorOutput } from '@/ai/flows/ai-service-advisor';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  service: z.enum(['Solar Panel Installation', 'Water Fountain Design', 'Turnkey Projects', 'Other']),
  message: z.string().min(10, { message: 'Please describe your project in at least 10 characters.' }),
});

export function GetQuoteModal() {
  const { isOpen, setIsOpen } = useQuoteModal();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const [aiSuggestion, setAiSuggestion] = useState<ServiceAdvisorOutput | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'Other',
      message: '',
    },
  });
  
  const projectDescription = form.watch('message');
  const [debouncedDescription] = useDebounce(projectDescription, 1000);

  const getAiSuggestion = useCallback(async (description: string) => {
    if (description.length < 20) {
      setAiSuggestion(null);
      return;
    }
    setIsAiLoading(true);
    try {
      const result = await aiServiceAdvisor({ projectDescription: description });
      setAiSuggestion(result);
      if (result.suggestedServices && result.suggestedServices.length > 0) {
        // This check is to avoid type errors if the AI returns an unexpected value.
        const validService = result.suggestedServices[0] as 'Solar Panel Installation' | 'Water Fountain Design' | 'Turnkey Projects';
        if (['Solar Panel Installation', 'Water Fountain Design', 'Turnkey Projects'].includes(validService)) {
           form.setValue('service', validService, { shouldValidate: true });
        }
      }
    } catch (error) {
      console.error('AI suggestion failed:', error);
      setAiSuggestion(null);
    } finally {
      setIsAiLoading(false);
    }
  }, [form]);

  useEffect(() => {
    getAiSuggestion(debouncedDescription);
  }, [debouncedDescription, getAiSuggestion]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitQuote(values);
      if (result.success) {
        toast({
          title: 'Quote Request Sent!',
          description: 'Thank you for your interest. We will get back to you shortly.',
        });
        form.reset();
        setIsOpen(false);
        setAiSuggestion(null);
      } else {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: result.message,
        });
      }
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-headline">Get a Free Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below, and our experts will contact you to discuss your project.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 9415212271" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I'm looking to install solar panels on my 3-bedroom house roof."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {isAiLoading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>AI Advisor is analyzing your project...</span>
              </div>
            )}

            {aiSuggestion && (
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-bold">AI Service Advisor</AlertTitle>
                <AlertDescription>{aiSuggestion.tailoredInformation}</AlertDescription>
              </Alert>
            )}

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Solar Panel Installation">Solar Panel Installation</SelectItem>
                      <SelectItem value="Water Fountain Design">Water Fountain Design</SelectItem>
                      <SelectItem value="Turnkey Projects">Turnkey Projects</SelectItem>
                      <SelectItem value="Other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Request
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export function OpenQuoteModalButton({ children }: { children: React.ReactNode }) {
    const { setIsOpen } = useQuoteModal();
    return (
        <div onClick={() => setIsOpen(true)} className="inline-block cursor-pointer">
            {children}
        </div>
    )
}
