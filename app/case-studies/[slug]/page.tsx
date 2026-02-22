import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Instrument_Sans } from 'next/font/google';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/case-studies';
import { CaseStudy } from '@/components/case-study';
import { Footer } from '@/components/footer';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs();
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { detail } = caseStudy;

  return (
    <div className="flex justify-center bg-[radial-gradient(at_-50%_0%,oklch(76.9%_0.188_70.08)_0%,rgba(255,255,255,0)_50%),radial-gradient(at_160%_0%,oklch(76.9%_0.188_70.08)_0%,rgba(255,255,255,0)_50%),radial-gradient(at_180%_120%,oklch(76.9%_0.188_70.08)_0%,rgba(0,0,0,0)_50%)] p-4 selection:bg-primary/40 selection:text-primary-foreground md:p-16">
      <main className={`${instrumentSans.variable} w-full max-w-[1440px] overflow-hidden rounded-4xl bg-white font-[var(--font-instrument-sans)]`}>
        <section className="px-4 py-8 text-[#262626] md:px-10 lg:px-16 lg:py-16">
          <div className="mx-auto w-full max-w-[1180px] space-y-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-8">
              <div className="space-y-4">
                <h1 className="max-w-[620px] text-[32px] font-medium leading-[1.15] tracking-[-0.04em] lg:text-[44px]">
                  {detail.title}
                </h1>
                <p className="max-w-[660px] text-base leading-6 text-[#525252]">{detail.subtitle}</p>
              </div>

              <div className="relative mx-auto h-[180px] w-full max-w-[360px] overflow-hidden rounded-2xl bg-[#d7ebe7]">
                <Image
                  src={detail.heroImageSrc}
                  alt={detail.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  priority
                />
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-10">
              <div className="space-y-10 text-sm leading-6 text-[#525252]">
                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Introduction</h2>
                  <p>{detail.introduction}</p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">The Core Problem</h2>
                  <ul className="space-y-2">
                    {detail.coreProblems.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#525252]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Discovery &amp; Research</h2>
                  <ul className="space-y-2">
                    {detail.discoveryResearch.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#525252]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.gallery.slice(0, 2).map((image) => (
                    <div key={image.src} className="relative h-[220px] overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 320px" />
                    </div>
                  ))}
                </div>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Redesign Strategy</h2>
                  <ul className="space-y-2">
                    {detail.redesignStrategy.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#525252]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">What We Crafted</h2>
                  <ul className="space-y-2">
                    {detail.whatWeCrafted.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#525252]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Business Results</h2>
                  <ul className="space-y-2">
                    {detail.businessResults.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#525252]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.gallery.slice().reverse().map((image) => (
                    <div key={`${image.src}-repeat`} className="relative h-[220px] overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 320px" />
                    </div>
                  ))}
                </div>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Key Takeaways</h2>
                  <ul className="space-y-2">
                    {detail.keyTakeaways.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#525252]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Outcomes &amp; Impact</h2>
                  <p>{detail.outcomesImpactSummary}</p>
                </section>

                <div className="grid gap-3 sm:grid-cols-2">
                  {detail.impactMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-[#e8c999] bg-[#fff4e3] px-4 py-3 text-[#262626]">
                      <p className="text-[26px] font-medium leading-8">{metric.value}</p>
                      <p className="text-sm leading-5 text-[#6a5637]">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-[#262626]">Closing Thoughts</h2>
                  <p>{detail.closingThoughts}</p>
                </section>
              </div>

              <aside className="h-fit rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <dl className="space-y-4">
                  {detail.overview.map((item) => (
                    <div key={item.label} className="grid grid-cols-[88px_1fr] gap-3 border-b border-[#f0f0f0] pb-3 text-sm leading-5 last:border-b-0 last:pb-0">
                      <dt className="text-[#737373]">{item.label}</dt>
                      <dd className="font-medium text-[#262626]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <CaseStudy />
        <Footer />
      </main>
    </div>
  );
}
