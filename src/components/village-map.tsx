'use client';

import Image from 'next/image';
import { LevelHotspot } from './level-hotspot';
import { allLevels } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useProgress } from '@/context/progress-context';

type VillageMapProps = {
  onSelectLevel: (levelId: string) => void;
};

// Hardcoded positions for 20 levels. These can be adjusted.
const hotspotPositions = [
  { top: '15%', left: '10%' }, { top: '25%', left: '22%' }, { top: '12%', left: '35%' },
  { top: '30%', left: '45%' }, { top: '18%', left: '55%' }, { top: '40%', left: '5%' },
  { top: '50%', left: '18%' }, { top: '45%', left: '33%' }, { top: '58%', left: '48%' },
  { top: '35%', left: '65%' }, { top: '52%', left: '75%' }, { top: '25%', left: '85%' },
  { top: '65%', left: '8%' },  { top: '75%', left: '25%' }, { top: '68%', left: '40%' },
  { top: '80%', left: '55%' }, { top: '72%', left: '70%' }, { top: '88%', left: '85%' },
  { top: '85%', left: '15%' }, { top: '90%', left: '30%' }
];

export function VillageMap({ onSelectLevel }: VillageMapProps) {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'villageMap');
  const { completedLevels } = useProgress();

  return (
    <div className="absolute inset-0">
      {mapImage && (
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          data-ai-hint={mapImage.imageHint}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0">
        {allLevels.map((level, index) => {
          const isCompleted = completedLevels.includes(level.id);
          // A level is unlocked if it's level 1 or the previous level is completed.
          const isUnlocked = level.id === '1' || completedLevels.includes(String(parseInt(level.id) - 1));
          return (
            <LevelHotspot
              key={level.id}
              level={level}
              position={hotspotPositions[index]}
              isCompleted={isCompleted}
              isUnlocked={isUnlocked}
              onSelect={onSelectLevel}
            />
          );
        })}
      </div>
    </div>
  );
}
