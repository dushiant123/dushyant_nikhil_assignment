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
