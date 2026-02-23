import Link from 'next/link';
import { Instrument_Sans } from 'next/font/google';
import type { SiteContent } from '@/content/types';
import type { Locale } from '@/lib/i18n/locales';
import { NavbarControls } from '@/components/navbar-controls';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export function Navbar({
  content,
  currentLocale,
}: {
  content: SiteContent['navbar'];
  currentLocale: Locale;
}) {
  return (
    <header className={`${instrumentSans.variable} font-(--font-instrument-sans)`}>
      <div className="relative flex items-center justify-between px-4 py-6 md:px-16 md:py-8">
        <Link href="/" className="flex items-center gap-2 text-[32px] leading-10">
          <span className="font-normal text-muted-foreground">{content.logo.firstName}</span>
          <span className="font-medium text-foreground">{content.logo.lastName}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
        >
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
            href="/#cases"
            className="px-8 py-2 text-base leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            {content.links.cases}
          </Link>
        </nav>

        <NavbarControls content={content} currentLocale={currentLocale} />
      </div>
    </header>
  );
}
