import Image from 'next/image';
import Link from 'next/link';
import { Instrument_Sans } from 'next/font/google';
import type { SiteContent } from '@/content/types';
import type { Locale } from '@/lib/i18n/locales';
import { NavbarControls } from '@/components/navbar-controls';
import { NavbarMenu } from '@/components/navbar-menu';

const navbarAvatarImage = '/d64a1b54febb0531bbb407786294d0ffac43e298.png';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export function Navbar({ content, currentLocale }: { content: SiteContent['navbar']; currentLocale: Locale }) {
  return (
    <header className={`${instrumentSans.variable} sticky top-0 z-40 font-(--font-instrument-sans)`}>
      <div className="relative flex items-center justify-between bg-background/95 px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:px-4 md:py-8 lg:px-16 lg:py-8">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
          <NavbarMenu content={content} />
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image
              src={navbarAvatarImage}
              alt={content.logo.avatarAlt}
              width={40}
              height={40}
              className="size-8 rounded-full object-cover sm:size-10"
              priority
            />
            <span className="hidden sm:block">
              <span className="block text-base font-medium leading-6 text-foreground">{content.logo.fullName}</span>
              <span className="-mt-1 block text-sm leading-6 text-muted-foreground">{content.logo.location}</span>
            </span>
          </Link>
        </div>

        <NavbarControls content={content} currentLocale={currentLocale} />
      </div>
    </header>
  );
}
