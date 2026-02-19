import Image from 'next/image';
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
    <section className={`${instrumentSans.variable} py-8 px-4 lg:py-16 lg:px-16`}>
      <div className="mx-auto grid w-full max-w-360 items-start gap-10 font-(--font-instrument-sans) text-[#262626] lg:grid-cols-[1fr_minmax(360px,512px)]">
        <div className="flex flex-col gap-28 lg:pt-6">
          <div className="max-w-140 space-y-8">
            <div className="flex items-center gap-2 text-base leading-6">
              <Image src="/f243317de99897beefb6ff9f79d4e6be02ea48c0.svg" alt="" width={20} height={20} aria-hidden />
              <span>Hello Folk</span>
            </div>

            <div className="w-full min-w-100 space-y-5">
              <h1 className="text-[42px] font-medium leading-[1.16] tracking-[-0.04em] md:text-[48px] md:leading-14">
                Freelance Web Designer
                <br />
                from Brazil
              </h1>
              <p className="max-w-117.5 text-base leading-6 text-[#525252]">
                I specialize in delivering designs that are not only visually striking but also impactful.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ff9d00] px-4 py-3 text-base font-medium leading-6 text-[#fafafa]"
              >
                Let&apos;s Talk
                <MoveRight className="h-5 w-5" strokeWidth={2} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-4 py-3 text-base font-medium leading-6 text-[#525252]"
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
                  className={`relative h-12 w-12 overflow-hidden rounded-full border border-[#e5e5e5] ${index > 0 ? '-ml-4' : ''}`}
                >
                  <Image src={avatar} alt="" fill sizes="48px" className="object-cover" />
                </div>
              ))}
              <div className="-ml-4 grid h-12 w-12 place-items-center rounded-full border border-[#e5e5e5] bg-[#ff9d00] text-base leading-6 text-[#fafafa]">
                98%
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[18px] font-medium leading-7">Loved by founders globally</p>
              <p className="text-base leading-6 text-[#525252]">5K Clients Word-Wide</p>
            </div>
          </div>
        </div>

        {/* <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-4xl">
            <div className="relative aspect-512/640 w-full">
              <Image
                src="/d64a1b54febb0531bbb407786294d0ffac43e298.png"
                alt="Igor Ferrão de Souza"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-4xl bg-gradient-to-t from-black/90 to-transparent px-5 pb-5 pt-10 text-[#fafafa] backdrop-blur-[10px]">
              <div className="space-y-2">
                <h2 className="text-[28px] font-medium leading-9">Igor Ferrão de Souza</h2>
                <p className="text-[18px] leading-7">
                  A Product Designer focused on intuitive
                  <br />
                  user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[37%] z-10 flex max-h-11 -translate-x-1/2 items-center justify-center gap-1 rounded-lg bg-white p-4 text-base leading-6 text-[#525252] shadow-[0_20px_34px_rgba(192,192,192,0.25)] lg:left-[calc(50%-264.5px)]">
            <span className="h-2 w-2 rounded-full bg-[#4bdd5c]" />
            Available for new projects
          </div>
        </div> */}
        {/* Abaixo é gpt */}
        <div
          className="relative overflow-hidden rounded-4xl"
          style={{ '--img': "url('/d64a1b54febb0531bbb407786294d0ffac43e298.png')" } as React.CSSProperties}
        >
          <div className="relative aspect-512/640 w-full">
            <Image
              src="/d64a1b54febb0531bbb407786294d0ffac43e298.png"
              alt="Igor Ferrão de Souza"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority
            />

            {/* BLUR LAYER (duplica a imagem e aplica blur + mask só embaixo) */}
            <div
              className="
                pointer-events-none absolute -inset-7.5
                bg-(image:--img) bg-cover bg-center
                filter-[blur(10px)]
                [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_80%)]
                mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_80%)]
              "
            />
          </div>

          {/* Overlay do texto por cima */}
          <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-4xl bg-linear-to-t from-black/90 to-transparent px-5 pb-5 pt-10 text-[#fafafa]">
            <div className="space-y-2">
              <h2 className="text-[28px] font-medium leading-9">Igor Ferrão de Souza</h2>
              <p className="text-[18px] leading-7">
                A Product Designer focused on intuitive
                <br />
                user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
