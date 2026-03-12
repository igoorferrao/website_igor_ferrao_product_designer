import type { Metadata } from 'next';
import './globals.css';
import { ThemeInitScript } from '@/components/theme-init-script';
import { getContent } from '@/content/get-content';
import { defaultLocale } from '@/lib/i18n/locales';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent(defaultLocale);

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
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
