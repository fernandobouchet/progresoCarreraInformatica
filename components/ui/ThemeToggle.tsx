'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover text-material-light-on-surface dark:text-material-dark-on-surface hover:text-muted group"
    >
      {theme === 'dark' ? (
        <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:fill-material-dark-on-surface" />
      ) : (
        <Icons.moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:fill-material-light-on-surface" />
      )}
    </Button>
  );
}

export default ThemeToggle;
