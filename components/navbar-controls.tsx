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
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';

export function NavbarControls({
  content,
  currentLocale,
}: {
  content: SiteContent['navbar'];
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const formRef = React.useRef<HTMLFormElement>(null);
  const localeInputRef = React.useRef<HTMLInputElement>(null);

  const currentLabel = content.languages.find((lang) => lang.value === currentLocale)?.label ?? currentLocale;

  function handleLocaleChange(value: string) {
    if (!isLocale(value)) return;
    if (localeInputRef.current) localeInputRef.current.value = value;
    formRef.current?.requestSubmit();
  }

  return (
    <div className="flex items-center gap-3">
      <form ref={formRef} action={setLocale} className="hidden sm:block">
        <input type="hidden" name="redirectTo" value={pathname} />
        <input ref={localeInputRef} type="hidden" name="locale" defaultValue={currentLocale} />

        <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
          <SelectTrigger
            aria-label={content.languageSelectAriaLabel}
            size="sm"
            className="h-9 gap-2 rounded-xl border-transparent px-3 text-sm text-muted-foreground hover:bg-muted"
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

      <Separator orientation="vertical" className="hidden h-6 sm:block" />

      <ButtonGroup className="hidden sm:flex">
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="rounded-xl"
          aria-label={content.paletteAriaLabel}
        >
          <PaletteIcon className="size-5 text-primary" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="rounded-xl"
          aria-label={content.paletteMenuAriaLabel}
        >
          <ChevronDownIcon className="size-5 text-muted-foreground" />
        </Button>
      </ButtonGroup>

      <ThemeToggle ariaLabel={content.themeToggleAriaLabel} />
    </div>
  );
}
