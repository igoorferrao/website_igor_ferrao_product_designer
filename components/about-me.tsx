import { Play } from 'lucide-react';
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const stats = [
  {
    label: 'Client satisfaction rate',
    value: '98%',
    description: 'Delivering measurable financial impact.',
  },
  {
    label: 'Business transformed',
    value: '99+',
    description: 'Helping companies grow, perform better.',
  },
  {
    label: 'Experience and Expertise',
    value: '14+',
    description: 'Trusted and recommended by clients.',
  },
];

export function AboutMe() {
  return (
    <section className="py-8 px-4 lg:py-16 lg:px-16">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-360 rounded-4xl bg-[#262626] p-6 font-(--font-instrument-sans) text-white md:p-10`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-white" />
            <p className="text-base font-medium leading-6">ABOUT ME</p>
          </div>

          <div className="grid items-end gap-6 lg:grid-cols-[1fr_215px] lg:pr-20">
            <h2 className="max-w-172.5 text-[28px] font-medium leading-9 tracking-[-0.02em]">
              <span className="box-decoration-clone bg-white/12 px-1">
                I&apos;m Ethan Riley, your creative partner in design.
              </span>
              <br />
              <span className="box-decoration-clone bg-white/12 px-1">
                For me, design is all about creating experiences that
              </span>
              <br />
              <span>really connect with people. It&apos;s not just looking good</span>
            </h2>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-29 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f] md:w-53.75"
              aria-label="Open video placeholder"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#262626] transition-transform group-hover:scale-105">
                <Play className="h-5 w-5 fill-current" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="space-y-4">
              <p className="inline-flex rounded-lg bg-[#525252] px-3 py-2 text-base leading-6 text-[#fafafa]">
                {item.label}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-[52px] font-medium leading-16">{item.value}</p>
                <p className="max-w-46 text-base leading-6 text-[#fafafa]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
