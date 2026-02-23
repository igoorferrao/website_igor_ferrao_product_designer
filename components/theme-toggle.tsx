'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

function getStoredTheme(): Theme | null {
  const value = window.localStorage.getItem('site_theme');
  return value === 'dark' || value === 'light' ? value : null;
}

function shouldReduceMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
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

    const x = event.clientX || window.innerWidth / 2;
    const y = event.clientY || window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const runToggle = () => {
      setTheme(next);
      window.localStorage.setItem('site_theme', next);
      applyTheme(next);
    };

    if (!('startViewTransition' in document) || shouldReduceMotion()) {
      runToggle();
      return;
    }

    const transition = document.startViewTransition(runToggle);

    transition.ready.then(() => {
      const keyframes = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        { clipPath: keyframes },
        {
          duration: 520,
          easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
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
