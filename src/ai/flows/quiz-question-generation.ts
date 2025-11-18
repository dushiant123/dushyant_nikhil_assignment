'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating quiz questions based on level content.
 *
 * - generateQuizQuestions - A function that generates quiz questions for a given level.
 * - GenerateQuizQuestionsInput - The input type for the generateQuizQuestions function.
 * - GenerateQuizQuestionsOutput - The return type for the generateQuizQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuizQuestionsInputSchema = z.object({
  levelContent: z.string().describe('The content of the level to generate questions for.'),
  levelTitle: z.string().describe('The title of the level.'),
});
export type GenerateQuizQuestionsInput = z.infer<typeof GenerateQuizQuestionsInputSchema>;

const GenerateQuizQuestionsOutputSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().describe('The quiz question.'),
      options: z.array(z.string()).describe('Array of possible answer options.'),
      correctOptionIndex: z.number().describe('The index of the correct answer in the options array.'),
      explanation: z.string().describe('A short explanation of why the answer is correct.'),
      difficulty: z.string().describe('The difficulty level of the question.'),
    })
  ).describe('Array of generated quiz questions.'),
});
export type GenerateQuizQuestionsOutput = z.infer<typeof GenerateQuizQuestionsOutputSchema>;

export async function generateQuizQuestions(input: GenerateQuizQuestionsInput): Promise<GenerateQuizQuestionsOutput> {
  return generateQuizQuestionsFlow(input);
}

const generateQuizQuestionsPrompt = ai.definePrompt({
  name: 'generateQuizQuestionsPrompt',
  input: {schema: GenerateQuizQuestionsInputSchema},
  output: {schema: GenerateQuizQuestionsOutputSchema},
  prompt: `You are an expert quiz question generator for an interactive learning website. Given the content of a level, generate 10 multiple choice quiz questions.

Ensure each question has 4 options, a correct answer index, an explanation, and a difficulty level.

Level Title: {{{levelTitle}}}
Level Content: {{{levelContent}}}

Output the questions in a JSON format.
`,
});

const generateQuizQuestionsFlow = ai.defineFlow(
  {
    name: 'generateQuizQuestionsFlow',
    inputSchema: GenerateQuizQuestionsInputSchema,
    outputSchema: GenerateQuizQuestionsOutputSchema,
  },
  async input => {
    const {output} = await generateQuizQuestionsPrompt(input);
    return output!;
  }
);
