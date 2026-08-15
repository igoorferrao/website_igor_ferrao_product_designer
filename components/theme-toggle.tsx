'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { runRadialRootTransition } from '@/lib/radial-root-transition';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

function getStoredTheme(): Theme | null {
  const value = window.localStorage.getItem('site_theme');
  return value === 'dark' || value === 'light' ? value : null;
}

export function ThemeToggle({ ariaLabel }: { ariaLabel: string }) {
  const [theme, setTheme] = React.useState<Theme>('light');

  React.useEffect(() => {
    const stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    const initial: Theme = prefersDark ? 'dark' : 'light';
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const triggerRect = event.currentTarget.getBoundingClientRect();
    const origin = {
      x: triggerRect.left + triggerRect.width / 2,
      y: triggerRect.top + triggerRect.height / 2,
    };

    const runToggle = () => {
      setTheme(next);
      window.localStorage.setItem('site_theme', next);
      applyTheme(next);
    };

    runRadialRootTransition(runToggle, origin);
  }

  const Icon = theme === 'dark' ? MoonIcon : SunIcon;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className="rounded-xl"
      aria-label={ariaLabel}
      onClick={toggleTheme}
    >
      <Icon className="size-5 text-muted-foreground" />
    </Button>
  );
}
