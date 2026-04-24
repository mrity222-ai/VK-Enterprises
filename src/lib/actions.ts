'use server';

import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string(),
  message: z.string().min(10),
});

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email().optional(),
    phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
    subject: z.string().min(3),
    message: z.string().min(10),
});

export async function submitQuote(values: z.infer<typeof quoteSchema>) {
  const validatedFields = quoteSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would process this data:
  // - Save to a database
  // - Send an email notification
  console.log('New Quote Request:', validatedFields.data);

  return { success: true, message: 'Quote request submitted successfully.' };
}


export async function submitContact(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid data provided.',
        };
    }

    // In a real application, you would process this data:
    console.log('New Contact Form Submission:', validatedFields.data);

    return { success: true, message: 'Your message has been sent!' };
}
