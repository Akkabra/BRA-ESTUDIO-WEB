'use server';

/**
 * @fileOverview A Genkit flow for a live support chat AI for BRA ESTUDIO WEB.
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
  answer: z.string().describe('The AI-generated answer in a friendly, helpful, and conversational tone.'),
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
  prompt: `You are the friendly and helpful virtual assistant for 'BRA ESTUDIO WEB', a modern web design agency.

Your main goal is to answer user questions about the agency, its services, projects, or any other related topic in a clear, concise, and friendly manner. Be conversational and approachable.

- If you don't know the answer, say so politely.
- Keep the tone professional yet friendly.
- You can answer a wide range of questions, just like a normal AI assistant, but always remember you represent BRA ESTUDIO WEB.

Initial Welcome Message (DO NOT REPEAT THIS, it's for context on how the chat starts): "Hola, soy el asistente virtual de BRA ESTUDIO WEB. ¿En qué puedo ayudarte hoy?"

Now, process and answer the following user query with a helpful and friendly response.

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
