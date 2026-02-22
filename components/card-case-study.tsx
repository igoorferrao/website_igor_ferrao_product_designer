import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Stat = {
  value: string;
  label: string;
};

type CardCaseStudyProps = {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  leftStat: Stat;
  rightStat: Stat;
  imageSrc: string;
  imageAlt: string;
  href: string;
  variant?: 'light' | 'dark';
  imagePosition?: 'left' | 'right';
};

export function Card_Case_Study({
  title,
  description,
  challenge,
  solution,
  leftStat,
  rightStat,
  imageSrc,
  imageAlt,
  href,
  variant = 'light',
  imagePosition = 'left',
}: CardCaseStudyProps) {
  const isDark = variant === 'dark';
  const contentFirst = imagePosition === 'right';

  return (
    <article
      className={`rounded-2xl p-6 ${
        isDark ? 'bg-[#262626] text-[#fafafa]' : 'bg-[#f5f5f5] text-[#262626]'
      }`}
    >
      <div className="grid min-h-[354px] gap-8 lg:grid-cols-2">
        {contentFirst ? (
          <>
            <CardContent
              title={title}
              description={description}
              challenge={challenge}
              solution={solution}
              leftStat={leftStat}
              rightStat={rightStat}
              isDark={isDark}
              href={href}
            />
            <CardImage imageSrc={imageSrc} imageAlt={imageAlt} />
          </>
        ) : (
          <>
            <CardImage imageSrc={imageSrc} imageAlt={imageAlt} />
            <CardContent
              title={title}
              description={description}
              challenge={challenge}
              solution={solution}
              leftStat={leftStat}
              rightStat={rightStat}
              isDark={isDark}
              href={href}
            />
          </>
        )}
      </div>
    </article>
  );
}

function CardImage({ imageSrc, imageAlt }: { imageSrc: string; imageAlt: string }) {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-2xl lg:min-h-[354px]">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );
}

function CardContent({
  title,
  description,
  challenge,
  solution,
  leftStat,
  rightStat,
  isDark,
  href,
}: {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  leftStat: Stat;
  rightStat: Stat;
  isDark: boolean;
  href: string;
}) {
  const bodyTone = isDark ? 'text-[#fafafa]' : 'text-[#525252]';
  const borderTone = isDark ? 'border-[#fafafa]' : 'border-[#525252]';

  return (
    <div className="flex h-full flex-col gap-12">
      <div className="space-y-3">
        <h3 className="text-[28px] font-medium leading-9">{title}</h3>
        <p className={`text-sm leading-5 ${bodyTone}`}>{description}</p>
      </div>

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-[20px] font-medium leading-8">Challenge</p>
          <p className={`text-sm leading-5 ${bodyTone}`}>{challenge}</p>
        </div>
        <div className="space-y-2">
          <p className="text-[20px] font-medium leading-8">Solution</p>
          <p className={`text-sm leading-5 ${bodyTone}`}>{solution}</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[28px] font-medium leading-9">{leftStat.value}</p>
          <div className={`border-l pl-5 ${borderTone}`}>
            <p className={`text-sm leading-5 ${bodyTone}`}>{leftStat.label}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[28px] font-medium leading-9">{rightStat.value}</p>
          <div className={`border-l pl-5 ${borderTone}`}>
            <p className={`text-sm leading-5 ${bodyTone}`}>{rightStat.label}</p>
          </div>
        </div>
      </div>

      <div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-lg bg-[#ff9d00] px-4 py-3 text-base font-medium leading-6 text-[#fafafa]"
        >
          View case study
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
