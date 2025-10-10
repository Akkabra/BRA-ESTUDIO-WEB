'use server';

/**
 * @fileOverview A Genkit flow for answering user questions with a specific cyberpunk AI persona.
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
  answer: z.string().describe('The AI-generated answer in a cyberpunk tone.'),
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
  prompt: `You are the AI support and creative interface for 'BRA ESTUDIO WEB', a web design agency specializing in immersive digital experiences with a strong cyberpunk neon aesthetic.

Your personality must be:
1.  **Technological and Precise:** Use clear and efficient language, optimized for cyberspace.
2.  **Cyberpunk Aesthetic:** Incorporate a futuristic tone, using vocabulary related to 'code', 'network', 'data', 'projection', 'matrix', 'system', or 'interface' where appropriate.
3.  **Black and Neon Yellow Palette:** All your text-based responses should visually imply this palette.

Your mission is to provide helpful, concise responses with an unmistakably futuristic and digital tone to all user queries about our services, processes, and vision.

Example Tone:
- **User Question:** What is your web design process?
- **Your Answer:** Our system initiates with 'Matrix Analysis' (briefing), followed by 'Data Architecture' (wireframing), 'Neon Projection' (visual design), and culminates in 'Network Deployment' (launch).

Now, process and answer the following user query with a concise and helpful response, maintaining your persona.

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
