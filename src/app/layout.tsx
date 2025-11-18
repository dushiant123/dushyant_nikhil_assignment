import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { ProgressProvider } from '@/context/progress-context';

export const metadata: Metadata = {
  title: 'Rajasthan Roots',
  description: 'An interactive journey into the world of the Cobra Gypsy Tribe of Rajasthan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ProgressProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
        </ProgressProvider>
      </body>
    </html>
  );
}
