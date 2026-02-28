'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { PaletteIcon, ChevronDownIcon } from 'lucide-react';

import { setLocale } from '@/app/actions/set-locale';
import { isLocale, type Locale } from '@/lib/i18n/locales';
import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeToggle } from '@/components/theme-toggle';
import { runRadialRootTransition } from '@/lib/radial-root-transition';

type ColorTheme = 'default' | 'nature' | 'modern' | 'claude';

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
  const pathname = usePathname();
  const formRef = React.useRef<HTMLFormElement>(null);
  const localeInputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = React.useState(false);
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('default');

  const currentLabel = content.languages.find((lang) => lang.value === currentLocale)?.label ?? currentLocale;

  React.useEffect(() => {
    const stored = getStoredColorTheme();
    setColorTheme(stored);
    applyColorTheme(stored);
  }, []);

  React.useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!isThemeMenuOpen) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (menuRef.current?.contains(target)) return;
      setIsThemeMenuOpen(false);
    }

    document.addEventListener('pointerdown', onPointerDown, { capture: true });
    return () => document.removeEventListener('pointerdown', onPointerDown, { capture: true });
  }, [isThemeMenuOpen]);

  function handleLocaleChange(value: string) {
    if (!isLocale(value)) return;
    if (localeInputRef.current) localeInputRef.current.value = value;
    formRef.current?.requestSubmit();
  }

  function handleThemeSelect(theme: ColorTheme, event: React.MouseEvent<HTMLButtonElement>) {
    setIsThemeMenuOpen(false);
    setColorTheme(theme);

    const run = () => applyColorTheme(theme);
    runRadialRootTransition(run, { x: event.clientX, y: event.clientY });
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 ">
      <form ref={formRef} action={setLocale}>
        <input type="hidden" name="redirectTo" value={pathname} />
        <input ref={localeInputRef} type="hidden" name="locale" defaultValue={currentLocale} />

        <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
          <SelectTrigger
            aria-label={content.languageSelectAriaLabel}
            size="sm"
            className="h-9 gap-1.5 rounded-xl border-border/60 px-2.5 text-sm text-muted-foreground hover:bg-muted sm:gap-2 sm:px-3"
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
      </form>

      <Separator orientation="vertical" className="h-9" />

      <div ref={menuRef} className="relative">
        <ButtonGroup>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-xl"
            aria-label={content.paletteAriaLabel}
            aria-haspopup="menu"
            aria-expanded={isThemeMenuOpen}
            onClick={() => setIsThemeMenuOpen((open) => !open)}
          >
            <PaletteIcon className="size-5 text-primary" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-xl"
            aria-label={content.paletteMenuAriaLabel}
            aria-haspopup="menu"
            aria-expanded={isThemeMenuOpen}
            onClick={() => setIsThemeMenuOpen((open) => !open)}
          >
            <ChevronDownIcon className="size-5 text-muted-foreground" />
          </Button>
        </ButtonGroup>

        {isThemeMenuOpen ? (
          <div
            role="menu"
            aria-label={content.paletteMenuAriaLabel}
            className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-border bg-popover p-1 shadow-md"
          >
            {(
              [
                { value: 'default', label: 'Ferrão Design' },
                { value: 'nature', label: 'Nature' },
                { value: 'modern', label: 'Modern' },
                { value: 'claude', label: 'Claude' },
              ] as const
            ).map((item) => (
              <Button
                key={item.value}
                type="button"
                variant={colorTheme === item.value ? 'secondary' : 'ghost'}
                size="sm"
                className="w-full justify-start rounded-lg"
                onClick={(event) => handleThemeSelect(item.value, event)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <ThemeToggle ariaLabel={content.themeToggleAriaLabel} />
    </div>
  );
}
