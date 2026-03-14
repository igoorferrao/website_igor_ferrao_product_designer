import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCaseStudyBySlug, getCaseStudyCards, getCaseStudySlugs } from '@/lib/case-studies';
import { CaseStudy } from '@/components/case-study';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { LightboxImage } from '@/components/lightbox-image';
import { getContent } from '@/content/get-content';
import { isLocale, locales, type Locale } from '@/lib/i18n/locales';

type LocalizedCaseStudyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== 'pt-BR')
    .flatMap((locale) => getCaseStudySlugs().map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: LocalizedCaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = await getContent(locale);
  const caseStudy = getCaseStudyBySlug(slug, locale);

  if (!caseStudy) {
    return {
      title: content.meta.title,
      description: content.meta.description,
    };
  }

  return {
    title: `${caseStudy.detail.title} | ${content.meta.title}`,
    description: caseStudy.detail.subtitle,
  };
}

export default async function LocalizedCaseStudyPage({
  params,
}: LocalizedCaseStudyPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = await getContent(locale);
  const caseStudy = getCaseStudyBySlug(slug, locale);

  if (!caseStudy) {
    notFound();
  }

  const { detail } = caseStudy;
  const sectionTitles = content.caseStudyDetail.sectionTitles;
  const overviewLabels = content.caseStudyDetail.overviewLabels;
  const lightboxLabels = content.caseStudyDetail.lightbox;
  const caseStudyCards = getCaseStudyCards(locale as Locale);

  function getOverviewLabel(label: string) {
    switch (label) {
      case 'Client':
        return overviewLabels.client;
      case 'Category':
        return overviewLabels.category;
      case 'Role':
        return overviewLabels.role;
      case 'My role':
        return overviewLabels.myRole;
      case 'Timeline':
        return overviewLabels.timeline;
      case 'Timelines':
        return overviewLabels.timeline;
      case 'Services':
        return overviewLabels.services;
      case 'Deliverables':
        return overviewLabels.deliverables;
      case 'Tools':
        return overviewLabels.tools;
      default:
        return label;
    }
  }

  return (
    <div className="flex justify-center bg-[radial-gradient(at_-50%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_160%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_180%_120%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-dark)_50%)] p-4 selection:bg-primary/40 selection:text-primary-foreground md:p-16">
      <main className="w-full max-w-360 rounded-4xl bg-background shadow-2xl">
        <Navbar content={content.navbar} currentLocale={locale} />
        <section className="px-4 py-8 text-foreground md:px-16 md:py-16">
          <div className="mx-auto w-full space-y-16">
            <header className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
              <div className="flex flex-1 flex-col gap-4">
                <h1 className="max-w-[604px] text-[36px] font-medium leading-[44px] tracking-[-0.04em] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
                  {detail.title}
                </h1>
                <p className="max-w-[604px] text-base leading-[25.6px] text-muted-foreground">
                  {detail.subtitle}
                </p>
              </div>

              <LightboxImage
                src={detail.heroImageSrc}
                alt={detail.heroImageAlt}
                sizes="(max-width: 1024px) 100vw, 389px"
                priority
                className="case-study-image-surface aspect-[389/264] rounded-2xl lg:max-w-[389px]"
                ariaLabels={{
                  openImage: lightboxLabels.openImageAriaLabel,
                  closeImage: lightboxLabels.closeImageAriaLabel,
                  dialog: lightboxLabels.dialogAriaLabel,
                }}
              />
            </header>

            <div className="grid gap-12 lg:grid-cols-[1fr_389px] lg:gap-10">
              <div className="divide-y divide-border">
                <section className="space-y-6 py-10 first:pt-0">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.introduction}
                  </h2>
                  <p className="text-base leading-6 text-muted-foreground">{detail.introduction}</p>
                </section>

                <section className="space-y-6 py-10">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.coreProblem}
                  </h2>
                  <ul className="list-disc space-y-2 pl-6 text-base leading-6 text-muted-foreground">
                    {detail.coreProblems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-6 py-10">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.discoveryResearch}
                  </h2>
                  <ul className="list-disc space-y-2 pl-6 text-base leading-6 text-muted-foreground">
                    {detail.discoveryResearch.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-6 py-10">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.redesignStrategy}
                  </h2>
                  <ul className="list-disc space-y-2 pl-6 text-base leading-6 text-muted-foreground">
                    {detail.redesignStrategy.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {detail.gallery[0] ? (
                    <div className="overflow-hidden rounded-2xl border border-border">
                      <LightboxImage
                        src={detail.gallery[0].src}
                        alt={detail.gallery[0].alt}
                        sizes="(max-width: 1024px) 100vw, 819px"
                        className="case-study-image-surface aspect-[819/420] rounded-2xl"
                        imageClassName="object-cover"
                        ariaLabels={{
                          openImage: lightboxLabels.openImageAriaLabel,
                          closeImage: lightboxLabels.closeImageAriaLabel,
                          dialog: lightboxLabels.dialogAriaLabel,
                        }}
                      />
                    </div>
                  ) : null}
                </section>

                <section className="space-y-6 py-10">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.whatWeCrafted}
                  </h2>
                  <ul className="list-disc space-y-2 pl-6 text-base leading-6 text-muted-foreground">
                    {detail.whatWeCrafted.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                {detail.businessResults.length ? (
                  <section className="space-y-6 py-10">
                    <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                      {sectionTitles.businessResults}
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-base leading-6 text-muted-foreground">
                      {detail.businessResults.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {detail.gallery[1] ? (
                      <div className="overflow-hidden rounded-2xl border border-border">
                        <LightboxImage
                          src={detail.gallery[1].src}
                          alt={detail.gallery[1].alt}
                          sizes="(max-width: 1024px) 100vw, 819px"
                          className="case-study-image-surface aspect-[819/420] rounded-2xl"
                          imageClassName="object-cover"
                          ariaLabels={{
                            openImage: lightboxLabels.openImageAriaLabel,
                            closeImage: lightboxLabels.closeImageAriaLabel,
                            dialog: lightboxLabels.dialogAriaLabel,
                          }}
                        />
                      </div>
                    ) : null}
                  </section>
                ) : null}

                <section className="space-y-6 py-10">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.keyTakeaways}
                  </h2>
                  <ul className="list-disc space-y-2 pl-6 text-base leading-6 text-muted-foreground">
                    {detail.keyTakeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-6 py-10">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.outcomesImpact}
                  </h2>

                  {detail.outcomesImpactSummary ? (
                    <p className="text-base leading-6 text-muted-foreground">{detail.outcomesImpactSummary}</p>
                  ) : null}

                  <div className="rounded-2xl border border-border p-[21px]">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {detail.impactMetrics.map((metric, index) => {
                        const isTopRow = index < 2;
                        const cellHeight = isTopRow ? 'min-h-[88px]' : 'min-h-[96px]';
                        const dividerHeight = isTopRow ? 'h-12' : 'h-14';

                        return (
                          <div
                            key={metric.label}
                            className={[
                              'flex items-center gap-6 rounded-lg bg-accent p-5 text-accent-foreground',
                              cellHeight,
                            ].join(' ')}
                          >
                            <p className="text-[40px] font-medium leading-[48px] tracking-[-0.04em]">
                              {metric.value}
                            </p>
                            <div className={`w-px ${dividerHeight} bg-accent-foreground/50`} />
                            <p className="flex-1 text-[18px] font-medium leading-7">{metric.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {detail.gallery[2] && detail.gallery[3] ? (
                    <div className="grid gap-5 pt-6 md:grid-cols-2">
                      {[detail.gallery[2], detail.gallery[3]].map((image) => (
                        <div key={`impact-${image.src}`} className="overflow-hidden rounded-2xl border border-border">
                          <LightboxImage
                            src={image.src}
                            alt={image.alt}
                            sizes="(max-width: 1024px) 100vw, 389px"
                            className="case-study-image-surface h-[320px] rounded-2xl"
                            imageClassName="object-cover"
                            ariaLabels={{
                              openImage: lightboxLabels.openImageAriaLabel,
                              closeImage: lightboxLabels.closeImageAriaLabel,
                              dialog: lightboxLabels.dialogAriaLabel,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>

                <section className="space-y-6 py-10 last:pb-0">
                  <h2 className="text-[32px] font-medium leading-[40px] tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                    {sectionTitles.closingThoughts}
                  </h2>
                  <p className="text-base leading-6 text-muted-foreground">{detail.closingThoughts}</p>
                </section>
              </div>

              <aside className="h-fit rounded-2xl border border-border bg-background p-6 lg:sticky lg:top-32 lg:self-start">
                <dl className="divide-y divide-border">
                  {detail.overview.map((item) => (
                    <div key={item.label} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                      <dt className="w-[104px] shrink-0 text-base leading-6 text-muted-foreground">
                        {getOverviewLabel(item.label)}
                      </dt>
                      <div className="w-[5px] shrink-0 text-base leading-6 text-muted-foreground">:</div>
                      <dd className="min-w-0 flex-1 text-base leading-6 text-foreground">
                        {typeof item.value === 'string' ? (
                          <span>{item.value}</span>
                        ) : (
                          <ul className="flex flex-wrap gap-3">
                            {item.value.map((service) => (
                              <li
                                key={service}
                                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-base leading-6 text-foreground"
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

        <CaseStudy content={content.caseStudy} cards={caseStudyCards} />
        <Footer content={content.footer} />
      </main>
    </div>
  );
}

