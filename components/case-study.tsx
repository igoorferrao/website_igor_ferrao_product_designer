import { Card_Case_Study } from '@/components/card-case-study';
import type { SiteContent } from '@/content/types';

type CaseStudyCard = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  isComingSoon?: boolean;
  comingSoonLabel?: string;
};

export function CaseStudy({ content, cards }: { content: SiteContent['caseStudy']; cards: CaseStudyCard[] }) {
  return (
    <section id="cases" className="bg-background px-3 py-8 md:px-4 md:py-16 lg:px-16 lg:py-16">
      <div className="mx-auto w-full">
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-muted-foreground" />
            <p className="text-base font-medium leading-6">{content.label}</p>
          </div>
          <h2 className="text-[40px] font-medium leading-12 tracking-[-0.05em]">{content.title}</h2>
          <p className="max-w-125 text-base leading-6 text-muted-foreground">{content.description}</p>
        </header>

        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
          {cards.map((card) => (
            <Card_Case_Study
              key={card.slug}
              title={card.title}
              subtitle={card.description}
              heroImage={card.imageSrc}
              imageAlt={card.imageAlt}
              href={card.href}
              isComingSoon={card.isComingSoon}
              comingSoonLabel={card.comingSoonLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
