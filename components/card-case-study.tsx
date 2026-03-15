import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { CaseStudyHeroThumb } from '@/components/case-study-hero-thumb';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type CardCaseStudyProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  imageAlt: string;
  href: string;
  heroTitle?: ReactNode;
  heroTitleClassName?: string;
  isComingSoon?: boolean;
  comingSoonLabel?: string;
};

export function Card_Case_Study({
  title,
  subtitle,
  heroImage,
  imageAlt,
  href,
  heroTitle,
  heroTitleClassName,
  isComingSoon = false,
  comingSoonLabel = 'Em breve',
}: CardCaseStudyProps) {
  const resolvedHeroTitle = heroTitle === undefined ? title : heroTitle;

  const content = (
    <>
      <CaseStudyHeroThumb
        heroTitle={resolvedHeroTitle}
        heroTitleClassName={heroTitleClassName}
        className={cn(
          'mb-6',
          isComingSoon &&
            "after:pointer-events-none after:absolute after:inset-0 after:z-20 grayscale after:content-['']",
        )}
      >
        <Image
          src={heroImage}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 24px), (max-width: 1023px) calc(100vw - 32px), calc((100vw - 160px - 32px) / 2)"
          className={cn(
            'h-full w-full object-cover transition-transform duration-500',
            isComingSoon ? 'scale-100 grayscale opacity-50 saturate-0' : 'group-hover:scale-105',
          )}
          referrerPolicy="no-referrer"
        />

        {isComingSoon ? (
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <Badge variant="muted" className="min-w-27.5">
              {comingSoonLabel}
            </Badge>
          </div>
        ) : null}
      </CaseStudyHeroThumb>
      <div className="flex flex-col items-start gap-2 md:items-start">
        <h3 className={cn('text-[20px] font-medium leading-8 text-foreground', isComingSoon && 'text-foreground/60')}>
          {title}
        </h3>
        <span className={cn('text-base leading-6 text-foreground', isComingSoon && 'text-foreground/60')}>
          {subtitle}
        </span>
      </div>
    </>
  );

  if (isComingSoon) {
    return (
      <div aria-disabled="true" className="group block cursor-not-allowed">
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className="group block cursor-pointer">
      {content}
    </Link>
  );
}
