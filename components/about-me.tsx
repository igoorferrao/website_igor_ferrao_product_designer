import { Play } from 'lucide-react';
import { Instrument_Sans } from 'next/font/google';
import type { SiteContent } from '@/content/types';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export function AboutMe({ content }: { content: SiteContent['about'] }) {
  return (
    <section id="about" className="py-8 px-4 lg:py-16 lg:px-16">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-360 rounded-4xl bg-surface-inverse p-6 font-(--font-instrument-sans) text-surface-inverse-foreground md:p-10`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-surface-inverse-foreground" />
            <p className="text-base font-medium leading-6">{content.label}</p>
          </div>

          <div className="grid items-end gap-6 lg:grid-cols-[1fr_215px] lg:pr-20">
            <h2 className="max-w-172.5 text-[28px] font-medium leading-9 tracking-[-0.02em]">
              <span className="box-decoration-clone bg-surface-inverse-foreground/12 px-1">
                {content.headlineLines[0]}
              </span>
              <br />
              <span className="box-decoration-clone bg-surface-inverse-foreground/12 px-1">
                {content.headlineLines[1]}
              </span>
              <br />
              <span>{content.headlineLines[2]}</span>
            </h2>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-29 w-full items-center justify-center overflow-hidden rounded-2xl border border-surface-inverse-foreground/10 bg-surface-inverse-card md:w-53.75"
              aria-label={content.videoAriaLabel}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-surface-inverse-foreground/90 text-surface-inverse transition-transform group-hover:scale-105">
                <Play className="h-5 w-5 fill-current" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {content.stats.map((item) => (
            <article key={item.label} className="space-y-4">
              <p className="inline-flex rounded-lg bg-surface-inverse-pill px-3 py-2 text-base leading-6 text-surface-inverse-foreground">
                {item.label}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-[52px] font-medium leading-16">{item.value}</p>
                <p className="max-w-46 text-base leading-6 text-surface-inverse-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
