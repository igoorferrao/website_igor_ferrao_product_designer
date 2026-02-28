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

export function Navbar({
  content,
  currentLocale,
}: {
  content: SiteContent['navbar'];
  currentLocale: Locale;
}) {
  return (
    <header className={`${instrumentSans.variable} font-(--font-instrument-sans)`}>
      <div className="relative flex items-center justify-between p-3 md:px-4 md:py-8 lg:px-16">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
          <NavbarMenu links={content.links} />
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
