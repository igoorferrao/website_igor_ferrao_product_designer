'use client';

import Image from 'next/image';
import { Instrument_Sans } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import { useState, type KeyboardEvent } from 'react';
import type { SiteContent } from '@/content/types';
import { cn } from '@/lib/utils';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const fallbackImageSrc = '/Webdevelopment.png';
const imageSrcByTabId: Record<string, string> = {
  branding: '/Webdevelopment.png',
  'web-development': '/Webdevelopment.png',
  'web-design': '/Webdevelopment.png',
  marketing: '/Webdevelopment.png',
};

function getTabImageSrc(id: string) {
  return imageSrcByTabId[id] ?? fallbackImageSrc;
}

export function MyService({ content }: { content: SiteContent['myService'] }) {
  const initialTabId = content.tabs[0]?.id ?? 'branding';
  const [activeTabId, setActiveTabId] = useState(initialTabId);
  const activeTabCopy = content.tabs.find((tab) => tab.id === activeTabId) ?? content.tabs[0];
  const activeImageSrc = getTabImageSrc(activeTabCopy?.id ?? initialTabId);

  function selectTab(nextTabId: string) {
    setActiveTabId(nextTabId);
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    const key = event.key;
    if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 'Home' && key !== 'End') return;

    event.preventDefault();
    const ids = content.tabs.map((tab) => tab.id);
    if (ids.length === 0) return;

    const nextIndex =
      key === 'Home'
        ? 0
        : key === 'End'
          ? ids.length - 1
          : key === 'ArrowDown'
            ? (currentIndex + 1) % ids.length
            : (currentIndex - 1 + ids.length) % ids.length;
    const nextId = ids[nextIndex];
    selectTab(nextId);
    requestAnimationFrame(() => {
      document.getElementById(`${nextId}-tab`)?.focus();
    });
  }

  return (
    <section id="services" className="px-3 py-8 md:px-4 md:py-16 lg:px-16 lg:py-16">
      <div
        className={`${instrumentSans.variable} mx-auto w-full max-w-360 font-(--font-instrument-sans) text-foreground`}
      >
        <div className="flex flex-col gap-12 lg:gap-16">
          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-sm bg-muted-foreground" />
              <p className="text-base font-medium leading-6">{content.label}</p>
            </div>
            <h2 className="text-[40px] font-medium leading-[48px] tracking-[-0.05em]">{content.title}</h2>
            <p className="max-w-[500px] text-base leading-6 text-muted-foreground">{content.description}</p>
          </header>

          <div className="flex flex-col gap-10 lg:h-[527px] lg:flex-row lg:items-stretch">
            <div className="flex flex-col gap-4 lg:w-[434px]" role="tablist" aria-label={content.tabsAriaLabel}>
              {content.tabs.map((tab, index) => {
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
                    onClick={() => selectTab(tab.id)}
                    onKeyDown={(event) => onTabKeyDown(event, index)}
                    className={cn(
                      'w-full text-left outline-none transition-colors',
                      'rounded-[20px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                      isActive
                        ? 'border border-border bg-background'
                        : 'bg-secondary/30 hover:bg-secondary/50 border cursor-pointer',
                    )}
                  >
                    <div className="flex items-center justify-between gap-3 rounded-xl px-5 py-4">
                      <span className="text-[20px] font-medium leading-8 tracking-[-0.02em] text-foreground md:text-[24px]">
                        {tab.label}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground">
                        <ArrowRight
                          className={cn('h-5 w-5 transition-transform', isActive && '-rotate-45')}
                          strokeWidth={1.6}
                        />
                      </span>
                    </div>

                    {isActive && tab.description ? (
                      <div className="px-5 pb-4">
                        <p className="text-base leading-6 text-muted-foreground">{tab.description}</p>
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div
              id="service-tabpanel"
              role="tabpanel"
              aria-labelledby={`${activeTabCopy?.id ?? initialTabId}-tab`}
              className="relative h-[384px] overflow-hidden rounded-2xl bg-secondary lg:h-full lg:flex-1"
            >
              <Image
                src={activeImageSrc}
                alt={activeTabCopy?.imageAlt ?? ''}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
