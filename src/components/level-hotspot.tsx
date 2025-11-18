'use client';

import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { CheckCircle2, Lock, Circle } from 'lucide-react';
import type { Level } from '@/lib/data';

type LevelHotspotProps = {
  level: Level;
  position: { top: string; left: string };
  isCompleted: boolean;
  isUnlocked: boolean;
  onSelect: (levelId: string) => void;
};

export function LevelHotspot({ level, position, isCompleted, isUnlocked, onSelect }: LevelHotspotProps) {
  const getIcon = () => {
    if (isCompleted) {
      return <CheckCircle2 className="h-full w-full text-green-400" />;
    }
    if (isUnlocked) {
      return <Circle className="h-3/4 w-3/4 text-white" />;
    }
    return <Lock className="h-3/4 w-3/4 text-white/50" />;
  };
  
  const buttonContent = (
    <div
      style={position}
      className={cn(
        'absolute z-20 flex h-8 w-8 transform items-center justify-center rounded-full border-2 transition-all duration-300',
        isCompleted
          ? 'border-green-400 bg-green-900/50 hover:bg-green-700/80 hover:scale-125'
          : isUnlocked
          ? 'border-primary bg-primary/50 hover:bg-primary/80 hover:scale-125 animate-pulse'
          : 'border-muted-foreground/50 bg-black/50 cursor-not-allowed',
        'backdrop-blur-sm'
      )}
    >
      {getIcon()}
      <span className="absolute text-xs font-bold text-white">{level.id}</span>
    </div>
  );

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger
          asChild
          onClick={() => isUnlocked && onSelect(level.id)}
          aria-label={`Open level ${level.id}: ${level.title}`}
          disabled={!isUnlocked}
        >
          {buttonContent}
        </TooltipTrigger>
        <TooltipContent side="top" align="center" className="max-w-xs text-center">
          <p className="font-bold font-headline">{level.title}</p>
          <p className="text-sm text-muted-foreground">{level.short_description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
