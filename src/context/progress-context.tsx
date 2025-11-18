'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { allLevels } from '@/lib/data';

type ProgressContextType = {
  completedLevels: string[];
  scores: Record<string, number>;
  progressPercentage: number;
  completeLevel: (levelId: string, score: number) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedLevels, setCompletedLevels] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});

  const completeLevel = (levelId: string, score: number) => {
    setCompletedLevels((prev) => (prev.includes(levelId) ? prev : [...prev, levelId]));
    setScores((prev) => ({ ...prev, [levelId]: score }));
  };

  const progressPercentage = useMemo(() => {
    return (completedLevels.length / allLevels.length) * 100;
  }, [completedLevels.length]);

  const value = {
    completedLevels,
    scores,
    progressPercentage,
    completeLevel,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
