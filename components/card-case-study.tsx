import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type CardCaseStudyProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  imageAlt: string;
  href: string;
  isComingSoon?: boolean;
  comingSoonLabel?: string;
};

export function Card_Case_Study({
  title,
  subtitle,
  heroImage,
  imageAlt,
  href,
  isComingSoon = false,
  comingSoonLabel = 'Em breve',
}: CardCaseStudyProps) {
  const content = (
    <>
      <div
        className={cn(
          'relative mb-6 aspect-video w-full overflow-hidden rounded-2xl bg-gray-100',
          isComingSoon && 'after:absolute after:inset-0 after:bg-background/30',
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
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Badge variant="muted" className="min-w-27.5">
              {comingSoonLabel}
            </Badge>
          </div>
        ) : null}
      </div>
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
