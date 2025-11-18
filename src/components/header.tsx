'use client';

import Link from 'next/link';
import { Feather, User } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { useProgress } from '@/context/progress-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Header() {
  const { progressPercentage } = useProgress();
  const isLoggedIn = false; // Mock authentication state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl inline-block">Rajasthan Roots</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="w-full max-w-xs flex items-center gap-2">
                <Progress value={progressPercentage} className="h-3" />
                <span className="text-sm font-semibold text-muted-foreground">{Math.round(progressPercentage)}%</span>
            </div>
            <nav>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">User</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        user@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
                <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild size="sm">
                        <Link href="/register">Register</Link>
                    </Button>
                </div>

            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
