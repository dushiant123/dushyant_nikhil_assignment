'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function WelcomePage() {
  const bgImage = PlaceHolderImages.find((img) => img.id === 'welcomeBackground');

  return (
    <div className="relative flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center p-8 text-center">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          data-ai-hint={bgImage.imageHint}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="relative z-20 flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold drop-shadow-lg md:text-6xl font-headline mb-4 animate-fade-in-down">
          Welcome to the Journey into the world of Kalbeliya
        </h1>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="mt-8">
            <Link href="/explore">
                Click on this to start the journey
                <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
