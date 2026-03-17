import { Mail } from 'lucide-react';
import { FileDown } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n/locales';
import { withBasePath } from '@/lib/i18n/routing';

const cvDownloads: Record<Locale, { href: string; filename: string }> = {
  'pt-BR': {
    href: '/cv/pt-BR/Igor-Ferrao-CV-pt-BR.pdf',
    filename: 'Igor-Ferrao-CV-pt-BR.pdf',
  },
  'en-US': {
    href: '/cv/en-US/Igor-Ferrao-CV-en-US.pdf',
    filename: 'Igor-Ferrao-CV-en-US.pdf',
  },
  'es-ES': {
    href: '/cv/es-ES/Igor-Ferrao-CV-es-ES.pdf',
    filename: 'Igor-Ferrao-CV-es-ES.pdf',
  },
};

export function Hero({ content, locale }: { content: SiteContent['hero']; locale: Locale }) {
  const eyebrow = content.eyebrow ?? content.title?.line1 ?? '';
  const headline = content.headline ?? [content.title?.line1, content.title?.line2].filter(Boolean).join(' ') ?? '';
  const cvDownload = cvDownloads[locale];

  return (
    <section className="px-3 py-10 md:px-4 md:py-16 lg:px-16">
      <div className="mx-auto flex w-full flex-col gap-5 text-foreground md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="w-full md:max-w-200">
          <div className="flex flex-col gap-8">
            <div className="space-y-5">
              <p className="text-[18px] leading-7">{eyebrow}</p>
              <h1 className="text-[40px] font-medium leading-12 tracking-[-2px] lg:text-[48px] lg:leading-14">
                {headline}
              </h1>
              <p className="text-base leading-6 text-muted-foreground">{content.subtitle}</p>
            </div>

            <div className="flex w-full items-center gap-4 md:gap-10">
              <Button asChild size="xl" className="flex-1 md:w-43.75 md:flex-none">
                <a href="#mailto:igoorferrao+website@gmail.com" className="flex items-center justify-center gap-2">
                  {content.ctas.primary}
                  <Mail className="h-5 w-5" strokeWidth={2.5} />
                </a>
              </Button>
              <Button asChild variant="secondary" size="xl" className="flex-1 md:w-43.75 md:flex-none">
                <a
                  href={withBasePath(cvDownload.href)}
                  download={cvDownload.filename}
                  className="flex items-center justify-center gap-2"
                >
                  {content.ctas.secondary}
                  <FileDown className="h-5 w-5" strokeWidth={2} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
