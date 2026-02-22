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
    <div className="flex justify-center bg-[radial-gradient(at_-50%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_160%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_180%_120%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-dark)_50%)] p-4 selection:bg-primary/40 selection:text-primary-foreground md:p-16">
      <main
        className={`${instrumentSans.variable} w-full max-w-360 bg-background shadow-2xl rounded-4xl overflow-hidden font-(--font-instrument-sans)`}
      >
        <section className="py-8 px-4 md:py-16 md:px-16 text-foreground">
          <div className="mx-auto w-full max-w-295 space-y-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_389px] lg:gap-8">
              <div className="space-y-4">
                <h1 className="max-w-155 text-[32px] font-medium leading-[1.15] tracking-[-0.04em] lg:text-[44px]">
                  {detail.title}
                </h1>
                <p className="max-w-165 text-base leading-6 text-muted-foreground">{detail.subtitle}</p>
              </div>

              <div className="group relative mx-auto h-[264px] w-full max-w-[389px] overflow-hidden rounded-2xl bg-case-study-hero-bg">
                <Image
                  src={detail.heroImageSrc}
                  alt={detail.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
                  sizes="(max-width: 1024px) 100vw, 389px"
                  priority
                />
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_389px] lg:gap-10">
              <div className="space-y-10 text-sm leading-6 text-muted-foreground">
                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Introduction</h2>
                  <p>{detail.introduction}</p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">The Core Problem</h2>
                  <ul className="space-y-2">
                    {detail.coreProblems.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Discovery &amp; Research</h2>
                  <ul className="space-y-2">
                    {detail.discoveryResearch.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.gallery.slice(0, 2).map((image) => (
                    <div key={image.src} className="group relative h-55 overflow-hidden rounded-xl bg-secondary">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                  ))}
                </div>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Redesign Strategy</h2>
                  <ul className="space-y-2">
                    {detail.redesignStrategy.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">What We Crafted</h2>
                  <ul className="space-y-2">
                    {detail.whatWeCrafted.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Business Results</h2>
                  <ul className="space-y-2">
                    {detail.businessResults.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.gallery
                    .slice()
                    .reverse()
                    .map((image) => (
                      <div
                        key={`${image.src}-repeat`}
                        className="group relative h-55 overflow-hidden rounded-xl bg-secondary"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
                          sizes="(max-width: 640px) 100vw, 320px"
                        />
                      </div>
                    ))}
                </div>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Key Takeaways</h2>
                  <ul className="space-y-2">
                    {detail.keyTakeaways.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Outcomes &amp; Impact</h2>
                  <p>{detail.outcomesImpactSummary}</p>
                </section>

                <div className="grid gap-3 sm:grid-cols-2">
                  {detail.impactMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-metric-card-border bg-metric-card-bg px-4 py-3 text-foreground"
                    >
                      <p className="text-[26px] font-medium leading-8">{metric.value}</p>
                      <p className="text-sm leading-5 text-metric-card-label">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <section className="space-y-3">
                  <h2 className="text-[22px] font-medium leading-8 text-foreground">Closing Thoughts</h2>
                  <p>{detail.closingThoughts}</p>
                </section>
              </div>

              <aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <dl className="space-y-4">
                  {detail.overview.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[88px_1fr] gap-3 border-b border-border/60 pb-3 text-sm leading-5 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-muted-foreground">{item.label}</dt>
                      <dd className="font-medium text-foreground">
                        {typeof item.value === 'string' ? (
                          item.value
                        ) : (
                          <ul className="flex flex-wrap gap-2">
                            {item.value.map((service) => (
                              <li
                                key={service}
                                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-normal leading-4 text-secondary-foreground"
                              >
                                {service}
                              </li>
                            ))}
                          </ul>
                        )}
                      </dd>
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
