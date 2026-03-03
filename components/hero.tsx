import Image from 'next/image';
import { Instrument_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { MoveRight } from 'lucide-react';
import { FileDown } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n/locales';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
});

const portraitImage = '/d64a1b54febb0531bbb407786294d0ffac43e298.png';

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
    <section className={`${instrumentSans.variable} ${poppins.variable} px-3 py-10 sm:px-4 sm:py-16 lg:p-16`}>
      <div className="mx-auto flex w-full max-w-360 flex-col items-start justify-center gap-5 font-(--font-instrument-sans) text-foreground md:flex-row md:justify-between md:gap-10">
        <div className="w-full md:flex-1 lg:flex-none lg:max-w-[640px] lg:min-h-[640px] lg:justify-center">
          <div className="flex flex-col gap-8 md:gap-8 lg:justify-center lg:min-h-[640px]">
            <div className="md:hidden">
              <div className="relative size-20 overflow-hidden rounded-lg">
                <Image
                  src={portraitImage}
                  alt={content.portraitCard.imageAlt}
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-5">
              <p className="font-(--font-poppins) text-[18px] leading-7 text-foreground">{eyebrow}</p>
              <h1 className="max-w-[640px] text-[40px] font-medium leading-12 tracking-[-2px] lg:text-[48px] lg:leading-14">
                {headline}
              </h1>
              <p className="text-base leading-6 text-secondary-foreground">{content.subtitle}</p>
            </div>

            <div className="flex w-full items-center gap-4 sm:gap-10">
              <Button asChild size="xl" className="flex-1 sm:flex-none sm:w-[175px]">
                <a href="#" className="flex items-center justify-center gap-2">
                  {content.ctas.primary}
                  <MoveRight className="h-5 w-5" strokeWidth={2} />
                </a>
              </Button>
              <Button asChild variant="secondary" size="xl" className="flex-1 sm:flex-none sm:w-[175px]">
                <a
                  href={cvDownload.href}
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

        {/* Tablet card (221x276) */}
        <div className="hidden md:block lg:hidden">
          <div className="relative h-[276px] w-[221px] overflow-hidden rounded-[20px]">
            <Image
              src={portraitImage}
              alt={content.portraitCard.imageAlt}
              fill
              sizes="221px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-overlay-scrim to-transparent px-3 pb-3 pt-5 backdrop-blur-[10px]">
              <div className="space-y-2 text-surface-inverse-foreground">
                <p className="text-[20px] font-medium leading-8">{content.portraitCard.name}</p>
                <p className="text-base leading-6">
                  {content.portraitCard.descriptionLine1}
                  <br />
                  {content.portraitCard.descriptionLine2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop card (512x640) */}
        <div className="hidden lg:block">
          <div className="relative h-[640px] w-[512px] overflow-hidden rounded-[20px]">
            <Image
              src={portraitImage}
              alt={content.portraitCard.imageAlt}
              fill
              sizes="512px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-overlay-scrim to-transparent px-5 pb-5 pt-10 backdrop-blur-[10px]">
              <div className="space-y-2 text-surface-inverse-foreground">
                <p className="text-[28px] font-medium leading-9">{content.portraitCard.name}</p>
                <p className="text-[18px] leading-7">
                  {content.portraitCard.descriptionLine1}
                  <br />
                  {content.portraitCard.descriptionLine2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
