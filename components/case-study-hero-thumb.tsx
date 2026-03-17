import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CaseStudyHeroThumbProps = {
  heroTitle?: ReactNode;
  heroTitleClassName?: string;
  className?: string;
  size?: 'default' | 'detail';
  children: ReactNode;
};

export function CaseStudyHeroThumb({
  heroTitle,
  heroTitleClassName,
  className,
  size = 'default',
  children,
}: CaseStudyHeroThumbProps) {
  const isDetail = size === 'detail';

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-2xl bg-primary/90',
        isDetail ? 'px-6 py-7' : 'px-4 py-4 xl:px-8 xl:py-10',
        className,
      )}
    >
      <div className="absolute inset-0 z-10">{children}</div>

      {heroTitle != null ? (
        <h4
          className={cn(
            'pointer-events-none relative z-30 block max-w-[70%] font-medium tracking-[-0.05em] text-primary-foreground drop-shadow-sm',
            isDetail
              ? 'text-[24px] leading-8 md:text-[28px] md:leading-9'
              : 'text-[24px] leading-8 sm:text-[32px] sm:leading-10',
            heroTitleClassName,
          )}
        >
          {heroTitle}
        </h4>
      ) : null}

      <div
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[url('/patterns/square.svg')]
          bg-repeat
          bg-[length:32px_32px]
          opacity-20
          [mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_100%)]
        "
      />
    </div>
  );
}
