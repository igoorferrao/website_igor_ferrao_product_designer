import Image from 'next/image';
import { CardOverlay } from './ui/card-overlay';
import { Instrument_Sans } from 'next/font/google';
import { FileDown } from 'lucide-react';
import { MoveRight } from 'lucide-react';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const avatars = [
  '/cff39ec81b8a1702e402b41f10141f572da014c4.png',
  '/77db192d800061495856e96ac0b646003f04c608.png',
  '/df44e1b9d7695860942db40238141b5fd2df46dd.png',
  '/c38e479d74e602ba43fa0b0d95cd4db2017eb762.png',
];

export function Hero() {
  return (
    <section className={`${instrumentSans.variable} py-8 px-4 md:py-16 md:px-16`}>
      <div className="mx-auto grid w-full max-w-360 items-start gap-10 font-(--font-instrument-sans) text-foreground lg:grid-cols-[1fr_minmax(360px,512px)]">
        <div className="flex flex-col gap-16 md:gap-28 lg:pt-6">
          <div className="max-w-140 space-y-8">
            <div className="flex items-center gap-2 text-base leading-6">
              <Image src="/f243317de99897beefb6ff9f79d4e6be02ea48c0.svg" alt="" width={20} height={20} aria-hidden />
              <span>Hello Folk</span>
            </div>

            <div className="w-full md:min-w-100 space-y-5">
              <h1 className="text-[40px] leading-[1.16] font-medium tracking-[-0.04em] md:text-[48px] md:leading-14">
                Freelance Web Designer
                <br />
                from Brazil
              </h1>
              <p className="max-w-117.5 text-base leading-6 text-muted-foreground">
                I specialize in delivering designs that are not only visually striking but also impactful.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-medium leading-6 text-primary-foreground"
              >
                Let&apos;s Talk
                <MoveRight className="h-5 w-5" strokeWidth={2} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-base font-medium leading-6 text-secondary-foreground"
              >
                Download CV
                <FileDown className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center">
              {avatars.map((avatar, index) => (
                <div
                  key={avatar}
                  className={`relative h-12 w-12 overflow-hidden rounded-full border border-border ${index > 0 ? '-ml-4' : ''}`}
                >
                  <Image src={avatar} alt="" fill sizes="48px" className="object-cover" />
                </div>
              ))}
              <div className="-ml-4 grid h-12 w-12 place-items-center rounded-full border border-border bg-primary text-base leading-6 text-primary-foreground">
                98%
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[18px] font-medium leading-7">Loved by founders globally</p>
              <p className="text-base leading-6 text-muted-foreground">5K Clients Word-Wide</p>
            </div>
          </div>
        </div>
        <CardOverlay />
      </div>
    </section>
  );
}
