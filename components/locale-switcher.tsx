'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/locales';
import { getLocalizedPath } from '@/lib/i18n/routing';
import { Button } from '@/components/ui/button';

const labels: Record<Locale, string> = {
  'pt-BR': 'PT',
  'en-US': 'EN',
  'es-ES': 'ES',
};

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card p-1">
      {locales.map((locale) => (
        <Button
          key={locale}
          type="button"
          variant={locale === currentLocale ? 'default' : 'ghost'}
          size="sm"
          className="h-auto rounded-full px-3 py-1 text-xs"
          onClick={() => router.push(getLocalizedPath(pathname, locale))}
        >
          {labels[locale]}
        </Button>
      ))}
    </div>
  );
}
