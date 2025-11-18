import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AuthForm } from '@/components/auth-form';

export default function LoginPage() {
    const bgImage = PlaceHolderImages.find((img) => img.id === 'authBackground');
    
    return (
        <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
            {bgImage && (
                <Image
                    src={bgImage.imageUrl}
                    alt={bgImage.description}
                    data-ai-hint={bgImage.imageHint}
                    fill
                    className="object-cover z-0"
                />
            )}
            <div className="absolute inset-0 bg-background/70 z-10" />
            <div className="z-20 w-full">
                <div className="flex justify-center">
                    <AuthForm type="login" />
                </div>
            </div>
        </div>
    );
}
