'use server';

import { summarizeContent } from '@/ai/flows/content-summarization';
import { generateQuizQuestions } from '@/ai/flows/quiz-question-generation';
import { z } from 'zod';

const summarySchema = z.object({
  content: z.string().min(50, { message: 'Content must be at least 50 characters long.' }),
});

export async function generateSummaryAction(prevState: any, formData: FormData) {
  const validatedFields = summarySchema.safeParse({
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid content provided.',
    };
  }
  
  try {
    const result = await summarizeContent({ content: validatedFields.data.content });
    if (result.success) {
      return { summary: result.summary };
    } else {
      return { message: 'Failed to generate summary.' };
    }
  } catch (error) {
    return { message: 'An error occurred while generating the summary.' };
  }
}

const questionsSchema = z.object({
  levelContent: z.string().min(50, { message: 'Content must be at least 50 characters long.' }),
  levelTitle: z.string().min(3, { message: 'Title must be at least 3 characters long.' }),
});

export async function generateQuestionsAction(prevState: any, formData: FormData) {
    const validatedFields = questionsSchema.safeParse({
        levelContent: formData.get('levelContent'),
        levelTitle: formData.get('levelTitle'),
    });

    if (!validatedFields.success) {
        return {
            questions: null,
            message: 'Invalid content or title provided.',
        };
    }

    try {
        const result = await generateQuizQuestions(validatedFields.data);
        return { questions: result.questions, message: null };
    } catch (error) {
        console.error('Error generating questions:', error);
        return { questions: null, message: 'An error occurred while generating questions.' };
    }
}
