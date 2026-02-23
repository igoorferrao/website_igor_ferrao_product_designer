'use client';

import Image from 'next/image';
import { Instrument_Sans } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
import { useState } from 'react';
import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/button';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const serviceTabs = [
  {
    id: 'branding',
    imageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
  },
  {
    id: 'web-development',
    imageSrc: '/figma-assets/webdevelopment_exemple.jpg',
  },
  {
    id: 'web-design',
    imageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
  },
  {
    id: 'marketing',
    imageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
  },
] as const;

export function MyService({ content }: { content: SiteContent['myService'] }) {
  const [activeTabId, setActiveTabId] = useState<(typeof serviceTabs)[number]['id']>(serviceTabs[0].id);
  const activeTab = serviceTabs.find((tab) => tab.id === activeTabId) ?? serviceTabs[0];
  const tabsById = new Map(content.tabs.map((tab) => [tab.id, tab] as const));
  const activeTabCopy = tabsById.get(activeTab.id);

  return (
    <section id="services" className="py-8 px-4 lg:py-16 lg:px-16">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-360 font-(--font-instrument-sans) text-foreground`}
      >
        <div className="space-y-16">
          <div className="max-w-211.5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-muted-foreground" />
                <p className="text-base font-medium leading-6">{content.label}</p>
              </div>
              <h2 className="text-[40px] font-medium leading-[1.3] tracking-[-0.05em]">
                {content.title}
              </h2>
              <p className="max-w-140 text-base leading-[1.6] text-muted-foreground">
                {content.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button asChild size="xl">
                <a href="#">
                  {content.ctas.primary}
                  <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <a href="#">
                  {content.ctas.secondary}
                  <CirclePlay className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid items-start gap-10 lg:min-h-131.75 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4" role="tablist" aria-label={content.tabsAriaLabel}>
              {serviceTabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                const tabCopy = tabsById.get(tab.id);
                return (
                  <Button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="service-tabpanel"
                    id={`${tab.id}-tab`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(tab.id)}
                    variant="ghost"
                    className={`h-auto w-full justify-between rounded-xl px-5 py-4 text-left transition-colors ${
                      isActive ? 'bg-background hover:bg-background' : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <span className="text-[24px] font-medium leading-[1.35] tracking-[-0.02em]">
                      {tabCopy?.label ?? tab.id}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
                      <ArrowRight
                        className={`h-5.5 w-5.5 transition-transform ${isActive ? '-rotate-45' : ''}`}
                        strokeWidth={1.6}
                      />
                    </span>
                  </Button>
                );
              })}
            </div>

            <div
              id="service-tabpanel"
              role="tabpanel"
              aria-labelledby={`${activeTab.id}-tab`}
              className="relative min-h-90 overflow-hidden rounded-2xl md:min-h-110 lg:min-h-131.75"
            >
              <Image
                src={activeTab.imageSrc}
                alt={activeTabCopy?.imageAlt ?? ''}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
