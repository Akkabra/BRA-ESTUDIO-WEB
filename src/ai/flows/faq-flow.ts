'use server';

/**
 * @fileOverview A Genkit flow for answering user questions as a virtual assistant.
 *
 * @function generateFaqAnswer - The main function to trigger the FAQ answer generation.
 * @typedef {FaqInput} FaqInput - Input type for the generateFaqAnswer function.
 * @typedef {FaqOutput} FaqOutput - Output type for the generateFaqAnswer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const FaqInputSchema = z.object({
  question: z.string().describe('The user\'s question.'),
});

export type FaqInput = z.infer<typeof FaqInputSchema>;

const FaqOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer in a friendly and helpful tone.'),
});

export type FaqOutput = z.infer<typeof FaqOutputSchema>;

export async function generateFaqAnswer(input: FaqInput): Promise<FaqOutput> {
  return faqFlow(input);
}

const faqPrompt = ai.definePrompt({
  name: 'faqPrompt',
  input: {
    schema: FaqInputSchema,
  },
  output: {
    schema: FaqOutputSchema,
  },
  prompt: `You are the virtual assistant for 'BRA ESTUDIO WEB', a modern web design agency.

Your personality is helpful, friendly, and professional. You are capable of answering any kind of question a user might have, from details about the company's services to general knowledge questions.

Your primary mission is to provide clear, useful, and concise answers. Always maintain a positive and approachable tone.

Now, process and answer the following user query.

User Question: {{{question}}}
`,
});

const faqFlow = ai.defineFlow(
  {
    name: 'faqFlow',
    inputSchema: FaqInputSchema,
    outputSchema: FaqOutputSchema,
  },
  async input => {
    const { output } = await faqPrompt(input);
    return output!;
  }
);
