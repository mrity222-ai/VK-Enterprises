'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Loader2,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


export default function ContactPage() {
    const { toast } = useToast();
    const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const linkHoverClasses = "pb-1 bg-gradient-to-r from-primary to-primary bg-no-repeat bg-left-bottom bg-[length:0%_1px] hover:bg-[length:100%_1px] transition-all duration-300 hover:text-primary hover:tracking-wide";

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzyFiMW3jnXSwJqY8RJG3DyFQaW05WLG1QWnls40g1F9U-TA8a9WIQ0J1WFYiX4uqA6/exec", {
                method: "POST",
                body: formData,
            });

            toast({
                title: "✅ Message Sent Successfully!",
            });
            form.reset();
        } catch (err) {
            console.error(err);
            toast({
                variant: 'destructive',
                title: "❌ Error! Try Again",
                description: "There was a problem sending your message.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }


  return (
    <div>
        <section className="relative overflow-hidden py-20 sm:py-24">
            {heroBgImage && (
                <Image
                    src={heroBgImage.imageUrl}
                    alt={heroBgImage.description}
                    data-ai-hint={heroBgImage.imageHint}
                    fill
                    className="object-cover"
                    priority
                />
            )}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div className="container relative mx-auto px-4">
                <header className="text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
                        Contact Us for a Free Quote
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        We're here to help you start your green energy journey. Contact the experts at VK Enterprises for a free consultation on solar or water fountain projects anywhere in Uttar Pradesh.
                    </p>
                </header>
            </div>
        </section>
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
                <Card className="transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                  <CardContent className="p-6">
                    <ul className="space-y-6 text-muted-foreground">
                      <li className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Address</h3>
                          <p>Shope No. 4 Pushpanjali Complex, Shahi Market, Golghar Gorakhpur, Uttar Pradesh, India.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Phone</h3>
                          <a href="tel:+919415212271" className={linkHoverClasses}>
                            +91 9415212271
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Email</h3>
                          <a href="mailto:info@vkenterprisess.com" className={`${linkHoverClasses} block`}>info@vkenterprisess.com</a>
                          <a href="mailto:sale@vkenterprisess.com" className={`${linkHoverClasses} block`}>sale@vkenterprisess.com</a>
                          <a href="mailto:director@vkenterprisess.com" className={`${linkHoverClasses} block`}>director@vkenterprisess.com</a>
                          <a href="mailto:account@vkenterprisess.com" className={`${linkHoverClasses} block`}>account@vkenterprisess.com</a>
                          <a href="mailto:admin@vkenterprisess.com" className={`${linkHoverClasses} block`}>admin@vkenterprisess.com</a>
                          <a href="mailto:enterprisesvk01@gmail.com" className={`${linkHoverClasses} block`}>enterprisesvk01@gmail.com</a>
                        </div>
                      </li>
                       <li className="flex items-start gap-4">
                        <Clock className="h-6 w-6 flex-shrink-0 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Working Hours</h3>
                          <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 border-t pt-6">
                        <h3 className="font-semibold text-foreground">Follow Us</h3>
                        <div className="mt-2 flex space-x-2">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                            </Button>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <h2 className="font-headline text-2xl font-bold">Send Us a Message for a Free Quote</h2>
                <Card className="transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile">MOBLE NUMBER</Label>
                          <Input id="mobile" name="mobile" type="tel" placeholder="+91 9415212271" required pattern="[0-9]{10}" />
                        </div>
                      </div>
                      <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" name="subject" placeholder="e.g., Solar Panel Installation in Lucknow" required />
                        </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Your message..." required />
                      </div>
                       <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Send Message
                        </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12">
                <h2 className="text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  Find Our Office in Gorakhpur, UP
                </h2>
                <div className="mt-8 overflow-hidden rounded-xl">
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113998.40699478146!2d83.29031734335937!3d26.7634351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a6f6cf37d%3A0x33b32d16c2d1b11!2sGorakhpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1684321098765"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of VK Enterprises office in Gorakhpur, Uttar Pradesh"
                  ></iframe>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
