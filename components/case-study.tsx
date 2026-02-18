import { Instrument_Sans } from 'next/font/google';
import { Card_Case_Study } from '@/components/card-case-study';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const cards = [
  {
    title: 'Smarter Flight Booking UX',
    description: 'Led design for SaaS dashboards, landing pages, and mobile apps',
    imageSrc: '/figma-33-220/45760701929f8dee9336d8d798e21c8be31e46d7.png',
    imageAlt: 'Laptop mockup case study preview',
    variant: 'light' as const,
    imagePosition: 'left' as const,
  },
  {
    title: 'Driving Digital Growth',
    description: 'Driving Digital Growth leverages technology, innovation.',
    imageSrc: '/figma-33-220/902ef81d2ecf99bd662113cf090f39326690b610.png',
    imageAlt: 'Tablet mockup case study preview',
    variant: 'dark' as const,
    imagePosition: 'right' as const,
  },
  {
    title: 'Designing Future Success',
    description: 'Led design for SaaS dashboards, landing pages, and mobile apps',
    imageSrc: '/figma-33-220/e6d534a3f6d9b26f956c874e277db8f92f8c25d0.png',
    imageAlt: 'Tablet product case study preview',
    variant: 'light' as const,
    imagePosition: 'left' as const,
  },
];

export function CaseStudy() {
  return (
    <section className="px-3 py-16 md:px-8">
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
          {cards.map((card) => (
            <Card_Case_Study
              key={card.title}
              title={card.title}
              description={card.description}
              challenge="Led design for SaaS dashboards, landing pages, mobile apps"
              solution="Led design for SaaS dashboards, landing pages, mobile apps"
              leftStat={{ value: '60%', label: 'Increase subscriber' }}
              rightStat={{ value: '40%', label: 'Grow new user to Contest Us' }}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              variant={card.variant}
              imagePosition={card.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
