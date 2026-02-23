import { Instrument_Sans } from 'next/font/google';
import type { SiteContent } from '@/content/types';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

export function Footer({ content }: { content: SiteContent['footer'] }) {
  return (
    <footer id="contact" className="overflow-hidden bg-background py-8 px-4 lg:py-16 lg:px-16">
      <div className={`${instrumentSans.variable} mx-auto w-full max-w-360 font-(--font-instrument-sans)`}>
        <div className="mx-auto w-full rounded-[32px] border border-border bg-card p-8 shadow-[0_8px_16px_rgba(0,0,0,0.05)] md:p-14">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="max-w-73 space-y-6">
                <h3 className="text-[28px] font-medium leading-8 text-foreground md:text-[32px]">{content.brandName}</h3>
                <p className="text-base leading-6 text-muted-foreground">
                  {content.tagline}
                </p>
              </div>

              <div className="grid gap-8 text-base leading-6 md:grid-cols-3 md:gap-20">
                {content.columns.map((column) => (
                  <div key={column.title} className="space-y-4">
                    <p className="font-medium text-foreground">{column.title}</p>
                    <div className="space-y-2 text-muted-foreground">
                      {column.links.map((link) => (
                        <a key={link} href="#" className="block">
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-border" />

            <p className="text-sm leading-5 text-muted-foreground">{content.rights}</p>
          </div>
        </div>

        <p className="mt-8 bg-linear-to-b from-muted-foreground to-background bg-clip-text text-center text-[clamp(64px,23vw,64px)] md:text-[clamp(160px,23vw,160px)] lg:text-[clamp(200px,23vw,200px)] xl:text-[clamp(320px,23vw,320px)] leading-[0.95] font-bold text-transparent opacity-20">
          {content.verse}
        </p>
      </div>
    </footer>
  );
}
