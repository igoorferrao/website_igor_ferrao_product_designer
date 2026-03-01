import type { Metadata } from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import './globals.css';
import { getLocale } from '@/lib/i18n/get-locale';
import { ThemeInitScript } from '@/components/theme-init-script';
import { getContent } from '@/content/get-content';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = await getContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${inter.variable} ${notoSerif.variable}`} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
