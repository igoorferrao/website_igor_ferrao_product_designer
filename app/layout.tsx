import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeInitScript } from '@/components/theme-init-script';
import { getContent } from '@/content/get-content';
import { defaultLocale } from '@/lib/i18n/locales';

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-family-inter',
  display: 'swap',
});

const roboto = localFont({
  src: './fonts/Roboto-VariableFont_wdth,wght.ttf',
  variable: '--font-family-roboto',
  display: 'swap',
});

const prata = localFont({
  src: [
    {
      path: './fonts/Prata-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-family-prata',
  display: 'swap',
});

const ebGaramond = localFont({
  src: './fonts/EBGaramond-VariableFont_wght.ttf',
  variable: '--font-family-eb-garamond',
  display: 'swap',
});

const ppMondwest = localFont({
  src: [
    {
      path: './fonts/ppmondwest-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-family-pp-mondwest',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const DEFAULT_OG_IMAGE = '/IgorFerrao_Website_Thumb.png';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent(defaultLocale);

  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      type: 'website',
      locale: defaultLocale.replace('-', '_'),
      url: '/',
      siteName: content.meta.title,
      title: content.meta.title,
      description: content.meta.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1204,
          height: 733,
          alt: content.meta.title,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      suppressHydrationWarning
      className={[inter.variable, roboto.variable, prata.variable, ebGaramond.variable, ppMondwest.variable].join(' ')}
    >
      <head>
        <ThemeInitScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
