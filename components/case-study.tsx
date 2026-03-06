import { Instrument_Sans } from 'next/font/google';
import { Card_Case_Study } from '@/components/card-case-study';
import type { SiteContent } from '@/content/types';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

type CaseStudyCard = {
  slug: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  leftStat: { value: string; label: string };
  rightStat: { value: string; label: string };
  imageSrc: string;
  imageAlt: string;
  href: string;
  variant?: 'light' | 'dark';
  imagePosition?: 'left' | 'right';
};

export function CaseStudy({ content, cards }: { content: SiteContent['caseStudy']; cards: CaseStudyCard[] }) {
  return (
    <section id="cases" className="px-3 py-8 md:px-4 md:py-16 lg:px-16 lg:py-16">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-[1440px] space-y-16 font-[var(--font-instrument-sans)] text-foreground`}
      >
        <div className="max-w-[500px] space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-muted-foreground" />
            <p className="text-base font-medium leading-6">{content.label}</p>
          </div>
          <h2 className="text-[40px] font-medium leading-[1.2] tracking-[-0.05em]">{content.title}</h2>
          <p className="text-base leading-6 text-muted-foreground">{content.description}</p>
        </div>

        <div className="space-y-[60px]">
          {cards.map((card) => (
            <Card_Case_Study
              key={card.slug}
              title={card.title}
              description={card.description}
              challenge={card.challenge}
              solution={card.solution}
              labels={content.cardLabels}
              leftStat={card.leftStat}
              rightStat={card.rightStat}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              href={card.href}
              variant={card.variant}
              imagePosition={card.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
