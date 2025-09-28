'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating initial content for the homepage sections (Hero, Services, Portfolio, Contact) with a consistent Cyberpunk theme and tone.
 *
 * @function generateHomepageContent - The main function to trigger the homepage content generation flow.
 * @typedef {HomepageContentInput} HomepageContentInput - Input type for the generateHomepageContent function.
 * @typedef {HomepageContentOutput} HomepageContentOutput - Output type for the generateHomepageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HomepageContentInputSchema = z.object({
  theme: z.string().describe('The overall theme for the content, e.g., Cyberpunk.'),
  tone: z.string().describe('The desired tone for the content, e.g., futuristic, edgy.'),
});

export type HomepageContentInput = z.infer<typeof HomepageContentInputSchema>;

const HomepageContentOutputSchema = z.object({
  heroSection: z.string().describe('Content for the Hero section.'),
  servicesSection: z.string().describe('Content for the Services section.'),
  portfolioSection: z.string().describe('Content for the Portfolio section.'),
  contactSection: z.string().describe('Content for the Contact section.'),
});

export type HomepageContentOutput = z.infer<typeof HomepageContentOutputSchema>;

export async function generateHomepageContent(input: HomepageContentInput): Promise<HomepageContentOutput> {
  return homepageContentFlow(input);
}

const homepageContentPrompt = ai.definePrompt({
  name: 'homepageContentPrompt',
  input: {
    schema: HomepageContentInputSchema,
  },
  output: {
    schema: HomepageContentOutputSchema,
  },
  prompt: `You are a creative content generator for a website. Generate content for the following sections of the homepage, ensuring a consistent theme and tone:

Theme: {{{theme}}}
Tone: {{{tone}}}

Sections:

Hero Section: A captivating introduction to the website.
Services Section: A description of the services offered.
Portfolio Section: A showcase of past projects.
Contact Section: Information on how to get in touch.

Ensure the generated content is engaging, concise, and aligned with the specified theme and tone.`,
});

const homepageContentFlow = ai.defineFlow(
  {
    name: 'homepageContentFlow',
    inputSchema: HomepageContentInputSchema,
    outputSchema: HomepageContentOutputSchema,
  },
  async input => {
    const {output} = await homepageContentPrompt(input);
    return output!;
  }
);
