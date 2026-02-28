import Link from 'next/link';
import { Instrument_Sans } from 'next/font/google';
import type { SiteContent } from '@/content/types';
import type { Locale } from '@/lib/i18n/locales';
import { NavbarControls } from '@/components/navbar-controls';
import { NavbarMenu } from '@/components/navbar-menu';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export function Navbar({ content, currentLocale }: { content: SiteContent['navbar']; currentLocale: Locale }) {
  return (
    <header className={`${instrumentSans.variable} sticky top-0 z-40 font-(--font-instrument-sans)`}>
      <div className="relative flex items-center justify-between bg-background/95 px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:px-6 lg:px-16 lg:py-8 rounded-4xl">
        <Link href="/" className="flex items-center gap-1 text-base leading-6 sm:gap-2 lg:text-[32px] lg:leading-10">
          <span className="font-normal text-muted-foreground">{content.logo.firstName}</span>
          <span className="font-medium text-foreground">{content.logo.lastName}</span>
        </Link>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          <Link
            href="/#about"
            className="px-8 py-2 text-base leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            {content.links.about}
          </Link>
          <Link
            href="/#services"
            className="px-8 py-2 text-base leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            {content.links.services}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 text-base leading-6 md:text-xl md:leading-8 lg:gap-2 lg:text-[32px] lg:leading-10"
          >
            <span className="hidden font-normal text-muted-foreground min-[360px]:inline">
              {content.logo.firstName}
            </span>
            <span className="font-medium text-foreground">{content.logo.lastName}</span>
          </Link>
        </div>

        <NavbarControls content={content} currentLocale={currentLocale} />
      </div>
    </header>
  );
}
