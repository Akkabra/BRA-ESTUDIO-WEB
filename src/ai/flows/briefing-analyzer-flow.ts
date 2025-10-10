'use server';

/**
 * @fileOverview A Genkit flow for analyzing a user's project idea and providing a structured summary.
 *
 * @function analyzeProjectBriefing - The main function to trigger the project analysis.
 * @typedef {BriefingInput} BriefingInput - Input type for the analyzeProjectBriefing function.
 * @typedef {BriefingOutput} BriefingOutput - Output type for the analyzeProjectBriefing function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const BriefingInputSchema = z.object({
  projectDescription: z.string().describe("The user's free-form description of their project idea."),
});

export type BriefingInput = z.infer<typeof BriefingInputSchema>;

const BriefingOutputSchema = z.object({
  projectMatrix: z.string().describe('A one-sentence summary of the project idea.'),
  functionalityCores: z.array(z.string()).describe('A list of 3-4 key functionalities or modules the project requires.'),
  nextStep: z.string().describe('A direct question to the user to prompt the next action, focused on priority or goals.'),
});

export type BriefingOutput = z.infer<typeof BriefingOutputSchema>;

export async function analyzeProjectBriefing(input: BriefingInput): Promise<BriefingOutput> {
  return briefingAnalyzerFlow(input);
}

const briefingAnalyzerPrompt = ai.definePrompt({
  name: 'briefingAnalyzerPrompt',
  input: {
    schema: BriefingInputSchema,
  },
  output: {
    schema: BriefingOutputSchema,
  },
  prompt: `You are the 'Analizador de Briefing Neón' (Neon Briefing Analyzer) for BRA ESTUDIO WEB, a web design agency with a strong cyberpunk neon aesthetic. Your purpose is to process user project ideas and convert them into an initial strategic summary.

Your persona is professional, but with a futuristic, digital-design-focused tone. Use terms like 'Matriz del Proyecto', 'Núcleos de Funcionalidad', 'Ecosistema Digital', 'Despliegue en la Red' where appropriate.

If the user asks a general question (e.g., "How much does a website cost?"), you MUST refuse to answer directly and instead reply with a message guiding them to the correct channel. For example: "Mi protocolo de análisis está activo. Para consultas de precios, por favor utiliza la sección de Preguntas Frecuentes." In this case, you must set the 'projectMatrix' field to that response and leave the other fields empty.

For a valid project description, you MUST structure your response into the following three parts:
1.  **projectMatrix**: A one-sentence summary that encapsulates the main project idea.
2.  **functionalityCores**: A list of 3-4 key functionalities or modules the project seems to require (e.g., "E-commerce", "Galería 3D", "Sistema de Reserva").
3.  **nextStep**: A direct question to the user to prompt the next step, focusing on action or goals (e.g., "¿Cuál de estos Núcleos tiene la máxima prioridad para el Despliegue en la Red?").

Analyze the following project description:
{{{projectDescription}}}
`,
});

const briefingAnalyzerFlow = ai.defineFlow(
  {
    name: 'briefingAnalyzerFlow',
    inputSchema: BriefingInputSchema,
    outputSchema: BriefingOutputSchema,
  },
  async input => {
    const { output } = await briefingAnalyzerPrompt(input);
    return output!;
  }
);
