'use client';

import { usePathname } from 'next/navigation';
import { setLocale } from '@/app/actions/set-locale';
import { locales, type Locale } from '@/lib/i18n/locales';
import { Button } from '@/components/ui/button';

const labels: Record<Locale, string> = {
  'pt-BR': 'PT',
  'en-US': 'EN',
  'es-ES': 'ES',
};

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  return (
    <form action={setLocale} className="inline-flex items-center gap-2 rounded-full border border-border bg-card p-1">
      <input type="hidden" name="redirectTo" value={pathname} />
      {locales.map((locale) => (
        <Button
          key={locale}
          type="submit"
          name="locale"
          value={locale}
          variant={locale === currentLocale ? 'default' : 'ghost'}
          size="sm"
          className="h-auto rounded-full px-3 py-1 text-xs"
        >
          {labels[locale]}
        </Button>
      ))}
    </form>
  );
}
