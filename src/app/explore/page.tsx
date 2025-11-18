'use client';

import { useState } from 'react';
import { VillageMap } from '@/components/village-map';
import { LevelModal } from '@/components/level-modal';
import { allLevels, type Level } from '@/lib/data';

export default function ExplorePage() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  const handleSelectLevel = (levelId: string) => {
    const level = allLevels.find(l => l.id === levelId);
    if (level) {
      setSelectedLevel(level);
    }
  };

  const handleCloseModal = () => {
    setSelectedLevel(null);
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      <VillageMap onSelectLevel={handleSelectLevel} />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 text-center text-white p-8 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-headline mb-4 font-bold drop-shadow-lg animate-fade-in-down">Welcome to Rajasthan Roots</h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md animate-fade-in-up">An interactive journey into the world of the Kalbeliya. Click on a landmark to begin your exploration.</p>
      </div>

      {selectedLevel && (
        <LevelModal
          level={selectedLevel}
          isOpen={!!selectedLevel}
          onOpenChange={(open) => {
            if (!open) {
              handleCloseModal();
            }
          }}
        />
      )}
    </div>
  );
}
