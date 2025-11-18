'use client';

import { useFormState } from 'react-dom';
import { generateSummaryAction } from '@/actions/ai';
import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

type SummaryGeneratorProps = {
  levelContent: string;
  levelTitle: string;
};

function SubmitButton() {
    // This is a placeholder for a pending state from useFormStatus, which is experimental in this Next.js version.
    // In a real app, you would use `const { pending } = useFormStatus();` and disable the button.
  return <Button type="submit">Generate Summary</Button>;
}

export function SummaryGenerator({ levelContent, levelTitle }: SummaryGeneratorProps) {
  const [state, formAction] = useFormState(generateSummaryAction, { summary: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormAction = (formData: FormData) => {
    setIsLoading(true);
    formAction(formData);
  };
  
  if (state.summary && isLoading) {
      setIsLoading(false);
  }
   if (state.message && isLoading) {
      setIsLoading(false);
  }


  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2 mt-6">
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between rounded-lg border px-4 py-3">
          <h4 className="text-sm font-semibold">AI-Powered Summary</h4>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Content Summary</AlertTitle>
          <AlertDescription>
            {isLoading ? (
                <div className="space-y-2 mt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            ) : state.summary ? (
              <p className="mt-2">{state.summary}</p>
            ) : state.message ? (
              <p className="mt-2 text-destructive">{state.message}</p>
            ) : (
              <p className="mt-2">Click the button to generate a summary of this level's content using AI.</p>
            )}
          </AlertDescription>
          {!state.summary && !isLoading && (
            <form action={handleFormAction} className="mt-4">
              <input type="hidden" name="content" value={levelContent} />
              <Button type="submit" variant="outline" size="sm">Generate</Button>
            </form>
          )}
        </Alert>
      </CollapsibleContent>
    </Collapsible>
  );
}
