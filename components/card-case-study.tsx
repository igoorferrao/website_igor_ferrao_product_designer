import Image from 'next/image';
import Link from 'next/link';

type CardCaseStudyProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  imageAlt: string;
  href: string;
};

export function Card_Case_Study({ title, subtitle, heroImage, imageAlt, href }: CardCaseStudyProps) {
  return (
    <Link href={href} className="group block cursor-pointer">
      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={heroImage}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 24px), (max-width: 1023px) calc(100vw - 32px), calc((100vw - 160px - 32px) / 2)"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
        <h3 className="text-[20px] font-medium leading-8 text-foreground">{title}</h3>
        <span className="text-base leading-6 text-secondary-foreground md:text-right">{subtitle}</span>
      </div>
    </Link>
  );
}
