import { notFound } from 'next/navigation';
import { Hero } from '@/components/hero';
import Partners from '@/components/partners';
import { CaseStudy } from '@/components/case-study';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getContent } from '@/content/get-content';
import { getCaseStudyCards } from '@/lib/case-studies';
import { AboutMe } from '@/components/about-me';
import { isLocale, locales, type Locale } from '@/lib/i18n/locales';

type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.filter((locale) => locale !== 'pt-BR').map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = await getContent(locale);
  const caseStudyCards = getCaseStudyCards(locale as Locale);

  return (
    <div className="flex justify-center bg-[radial-gradient(at_-50%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_160%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_180%_120%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-dark)_50%)] p-4 selection:bg-primary/40 selection:text-primary-foreground md:p-16">
      <main className="w-full max-w-360 bg-background shadow-2xl rounded-4xl">
        <Navbar content={content.navbar} currentLocale={locale} />
        <Hero content={content.hero} locale={locale} />
        <Partners />
        <CaseStudy content={content.caseStudy} cards={caseStudyCards} />
        <AboutMe content={content.about} />
        <Footer content={content.footer} />
      </main>
    </div>
  );
}
