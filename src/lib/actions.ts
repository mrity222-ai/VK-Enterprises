'use server';

import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string(),
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
