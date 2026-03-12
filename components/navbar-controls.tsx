'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PaletteIcon } from 'lucide-react';

import { isLocale, type Locale } from '@/lib/i18n/locales';
import { getLocalizedPath } from '@/lib/i18n/routing';
import type { SiteContent } from '@/content/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeToggle } from '@/components/theme-toggle';
import { runRadialRootTransition } from '@/lib/radial-root-transition';

type ColorTheme = 'default' | 'nature' | 'modern' | 'claude';

function isColorTheme(value: string): value is ColorTheme {
  return value === 'default' || value === 'nature' || value === 'modern' || value === 'claude';
}

function getStoredColorTheme(): ColorTheme {
  const value = window.localStorage.getItem('site_color_theme');
  return value === 'nature' || value === 'modern' || value === 'claude' ? value : 'default';
}

function applyColorTheme(theme: ColorTheme) {
  const root = document.documentElement;
  if (theme === 'default') {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = theme;
  }
  window.localStorage.setItem('site_color_theme', theme === 'default' ? '' : theme);
  if (theme === 'default') window.localStorage.removeItem('site_color_theme');
}

export function NavbarControls({ content, currentLocale }: { content: SiteContent['navbar']; currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('default');
  const themePointerOriginRef = React.useRef<{ x: number; y: number } | undefined>(undefined);

  const currentLabel = content.languages.find((lang) => lang.value === currentLocale)?.label ?? currentLocale;
  const themeOptions = content.themeOptions as ReadonlyArray<{ value: ColorTheme; label: string }>;
  const currentThemeLabel =
    themeOptions.find((option) => option.value === colorTheme)?.label ?? themeOptions[0]?.label ?? '';

  React.useEffect(() => {
    const stored = getStoredColorTheme();
    setColorTheme(stored);
    applyColorTheme(stored);
  }, []);

  function handleLocaleChange(value: string) {
    if (!isLocale(value)) return;
    router.push(getLocalizedPath(pathname, value));
  }

  function handleThemeChange(value: string) {
    if (!isColorTheme(value)) return;
    setColorTheme(value);

    const run = () => applyColorTheme(value);
    runRadialRootTransition(run, themePointerOriginRef.current);
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div>
        <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
          <SelectTrigger
            aria-label={content.languageSelectAriaLabel}
            size="sm"
            className="h-9 gap-2 rounded-xl border-transparent px-2 text-sm text-foreground hover:bg-muted [&_svg:not([class*='size-'])]:size-5 sm:px-3"
          >
            <SelectValue placeholder={currentLabel} />
          </SelectTrigger>
          <SelectContent>
            {content.languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Select value={colorTheme} onValueChange={handleThemeChange}>
        <SelectTrigger
          aria-label={content.paletteAriaLabel}
          size="sm"
          className="h-9 gap-2 rounded-xl border-transparent px-2 text-sm text-foreground hover:bg-muted [&_svg:not([class*='size-'])]:size-5 sm:px-3"
          onPointerDown={(event) => {
            themePointerOriginRef.current = { x: event.clientX, y: event.clientY };
          }}
        >
          <PaletteIcon className="text-primary" />
          <span className="hidden md:inline-flex">
            <SelectValue placeholder={currentThemeLabel} />
          </span>
        </SelectTrigger>
        <SelectContent>
          {themeOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <ThemeToggle ariaLabel={content.themeToggleAriaLabel} />
    </div>
  );
}
