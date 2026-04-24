'use server';
/**
 * @fileOverview An AI service advisor for EcoHelio.
 *
 * - aiServiceAdvisor - A function that analyzes user project descriptions and suggests relevant services with tailored information.
 * - ServiceAdvisorInput - The input type for the aiServiceAdvisor function.
 * - ServiceAdvisorOutput - The return type for the aiServiceAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceAdvisorInputSchema = z.object({
  projectDescription: z
    .string()
    .describe("A natural language description of the client's project needs."),
});
export type ServiceAdvisorInput = z.infer<typeof ServiceAdvisorInputSchema>;

const ServiceAdvisorOutputSchema = z.object({
  suggestedServices: z
    .array(z.enum(['Solar Panel Installation', 'Water Fountain Design', 'Turnkey Projects']))
    .describe(
      'An array of suggested services from EcoHelio that are most relevant to the project description. Choose from: "Solar Panel Installation", "Water Fountain Design", "Turnkey Projects".'
    ),
  tailoredInformation: z
    .string()
    .describe(
      'Detailed and tailored information explaining how EcoHelio can assist with the suggested services based on the provided project description.'
    ),
});
export type ServiceAdvisorOutput = z.infer<typeof ServiceAdvisorOutputSchema>;

export async function aiServiceAdvisor(
  input: ServiceAdvisorInput
): Promise<ServiceAdvisorOutput> {
  return aiServiceAdvisorFlow(input);
}

const serviceAdvisorPrompt = ai.definePrompt({
  name: 'serviceAdvisorPrompt',
  input: {schema: ServiceAdvisorInputSchema},
  output: {schema: ServiceAdvisorOutputSchema},
  prompt: `You are an expert service advisor for EcoHelio, a company specializing in Solar Energy and Water Fountain solutions for over 15 years.

Based on the client's project description, identify which of the following services are most relevant:
- Solar Panel Installation (Residential & Commercial)
- Water Fountain Design (Custom + Commercial)
- Turnkey Projects (Government + Large scale)

Then, provide detailed, tailored information explaining how EcoHelio can specifically assist the client with their project, highlighting our expertise and the benefits of our solutions.

Client's Project Description: {{{projectDescription}}}

Consider the services mentioned and how they directly apply to the client's needs. Be professional, trustworthy, and focus on eco-friendly, cost-saving, and innovative aspects.
`,
});

const aiServiceAdvisorFlow = ai.defineFlow(
  {
    name: 'aiServiceAdvisorFlow',
    inputSchema: ServiceAdvisorInputSchema,
    outputSchema: ServiceAdvisorOutputSchema,
  },
  async input => {
    const {output} = await serviceAdvisorPrompt(input);
    return output!;
  }
);
