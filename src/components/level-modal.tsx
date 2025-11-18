'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from './ui/button';
import { Quiz } from './quiz';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import type { Level } from '@/lib/data';
import { Clock, BrainCircuit, BookOpen } from 'lucide-react';
import { SummaryGenerator } from './summary-generator';

type LevelModalProps = {
  level: Level;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function LevelModal({ level, isOpen, onOpenChange }: LevelModalProps) {
  const [view, setView] = useState<'content' | 'quiz'>('content');

  const levelImages: ImagePlaceholder[] = level.images
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter((img): img is ImagePlaceholder => !!img);
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setView('content'); // Reset view when closing
    }
    onOpenChange(open);
  };

  const handleQuizComplete = () => {
    setView('content');
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-3xl font-headline text-primary">{level.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-4 text-base">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {level.estimated_time}</span>
            <span>|</span>
            <span>{level.short_description}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 min-h-0">
        {view === 'content' ? (
          <ScrollArea className="h-full px-6 pb-6">
            <div className="space-y-4">
              {levelImages.length > 0 && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden my-4">
                  <Image
                    src={levelImages[0].imageUrl}
                    alt={levelImages[0].description}
                    data-ai-hint={levelImages[0].imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-lg whitespace-pre-wrap leading-relaxed">{level.full_content}</p>
              
              <SummaryGenerator levelContent={level.full_content} levelTitle={level.title} />

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" onClick={() => onOpenChange(false)}><BookOpen className="mr-2"/> Back to Map</Button>
                <Button onClick={() => setView('quiz')}><BrainCircuit className="mr-2"/> Start Quiz</Button>
              </div>
            </div>
          </ScrollArea>
        ) : (
          <Quiz level={level} onQuizComplete={handleQuizComplete} />
        )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
