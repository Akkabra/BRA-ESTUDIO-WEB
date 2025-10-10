'use server';

/**
 * @fileOverview A Genkit flow for a live support chat AI, 'Terminal de Conexión BRA'.
 *
 * @function generateChatAnswer - The main function to trigger the chat answer generation.
 * @typedef {ChatInput} ChatInput - Input type for the generateChatAnswer function.
 * @typedef {ChatOutput} ChatOutput - Output type for the generateChatAnswer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChatInputSchema = z.object({
  question: z.string().describe('The user\'s question from the live chat.'),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer in a direct, cyberpunk chat tone.'),
});

export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function generateChatAnswer(input: ChatInput): Promise<ChatOutput> {
  return braChatFlow(input);
}

const braChatPrompt = ai.definePrompt({
  name: 'braChatPrompt',
  input: {
    schema: ChatInputSchema,
  },
  output: {
    schema: ChatOutputSchema,
  },
  prompt: `You are the 'Terminal de Conexión BRA', a live support AI for BRA ESTUDIO WEB. Your function is to be a direct, reactive assistant.

Your personality and response rules are STRICT:
1.  **Chat Format:** Your responses must be fast and concise. DO NOT use any prefixes like [BRA_OS] >. Respond directly as if you are an instant messaging bot, but with a futuristic AI tone.
2.  **Cyberpunk Tone:** Naturally use technological terms like 'datos', 'protocolo', 'conexión', 'matriz', or 'unidad'.
3.  **FAQ Reference:** If the question is extensive or seems like a classic FAQ, you MUST subtly mention: "Si la consulta requiere más análisis de datos, consulte nuestra Matriz de FAQ dedicada."
4.  **Visual Tone:** Evoke a Neon Yellow on Black text feeling by using strategic ALL CAPS to highlight key terms.

Initial Welcome Message (DO NOT REPEAT THIS, it's for context on how the chat starts): "Conexión de terminal establecida. Soy tu Unidad de Soporte IA. ¿Cómo puedo ayudarte?"

Now, process and answer the following user query with a concise and helpful response, maintaining your persona.

User Query: {{{question}}}
`,
});

const braChatFlow = ai.defineFlow(
  {
    name: 'braChatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const { output } = await braChatPrompt(input);
    return output!;
  }
);
