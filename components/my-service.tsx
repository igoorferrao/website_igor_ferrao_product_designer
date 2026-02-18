'use client';

import Image from 'next/image';
import { Instrument_Sans } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
import { useState } from 'react';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const serviceTabs = [
  {
    id: 'branding',
    label: 'Branding',
    imageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
    imageAlt: 'Branding service preview',
  },
  {
    id: 'web-development',
    label: 'Web Development',
    imageSrc: '/figma-assets/webdevelopment_exemple.jpg',
    imageAlt: 'Web development service preview',
  },
  {
    id: 'web-design',
    label: 'Web Design',
    imageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
    imageAlt: 'Web design service preview',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    imageSrc: '/figma-assets/6212514260f27e0b62ccc7b0d6f5537f64fa68f5.png',
    imageAlt: 'Marketing service preview',
  },
] as const;

const primaryButtonClasses =
  'inline-flex items-center gap-2 rounded-lg bg-[#ff9d00] px-4 py-3 text-base font-medium leading-6 text-[#fafafa]';
const secondaryButtonClasses =
  'inline-flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-4 py-3 text-base font-medium leading-6 text-[#525252]';

export function MyService() {
  const [activeTabId, setActiveTabId] = useState<(typeof serviceTabs)[number]['id']>(serviceTabs[0].id);
  const activeTab = serviceTabs.find((tab) => tab.id === activeTabId) ?? serviceTabs[0];

  return (
    <section className="px-3 py-16 md:px-8">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-360 font-(--font-instrument-sans) text-[#262626]`}
      >
        <div className="space-y-16">
          <div className="max-w-211.5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#525252]" />
                <p className="text-base font-medium leading-6">MY SERVICE</p>
              </div>
              <h2 className="text-[40px] font-medium leading-[1.3] tracking-[-0.05em]">
                Professional Service Solutions
              </h2>
              <p className="max-w-140 text-base leading-[1.6] text-[#525252]">
                Tailored digital solutions designed to elevate your business performance, growth, and long-term success.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a href="#" className={primaryButtonClasses}>
                Hire Me
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" className={secondaryButtonClasses}>
                Watch Video
                <CirclePlay className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid items-start gap-10 lg:min-h-131.75 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4" role="tablist" aria-label="Service categories">
              {serviceTabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="service-tabpanel"
                    id={`${tab.id}-tab`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition-colors ${
                      isActive ? 'bg-white' : 'bg-[#f5f5f5]'
                    }`}
                  >
                    <span className="text-[24px] font-medium leading-[1.35] tracking-[-0.02em] text-[#262626]">
                      {tab.label}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e5e5]">
                      <ArrowRight
                        className={`h-5.5 w-5.5 transition-transform ${isActive ? '-rotate-45' : ''}`}
                        strokeWidth={1.6}
                      />
                    </span>
                  </button>
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
                alt={activeTab.imageAlt}
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
