import { Instrument_Sans } from 'next/font/google';
import { Card_Case_Study } from '@/components/card-case-study';
import { caseStudyCards } from '@/lib/case-studies';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export function CaseStudy() {
  return (
    <section className="px-4 py-8 lg:px-16 lg:py-16">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-[1440px] space-y-16 font-[var(--font-instrument-sans)] text-[#262626]`}
      >
        <div className="max-w-[500px] space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#525252]" />
            <p className="text-base font-medium leading-6">CASE STUDY</p>
          </div>
          <h2 className="text-[40px] font-medium leading-[1.2] tracking-[-0.05em]">Real Results Showcase</h2>
          <p className="text-base leading-6 text-[#525252]">
            Delivering standout experiences that are both visually striking and user-focused.
          </p>
        </div>

        <div className="space-y-[60px]">
          {caseStudyCards.map((card) => (
            <Card_Case_Study
              key={card.slug}
              title={card.title}
              description={card.description}
              challenge={card.challenge}
              solution={card.solution}
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
