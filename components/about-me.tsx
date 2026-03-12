/* eslint-disable @next/next/no-img-element */
import { Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';
import type { SiteContent } from '@/content/types';
import { assetPath } from '@/lib/asset-path';

export function AboutMe({ content }: { content: SiteContent['about'] }) {
  const [title, ...descriptionLines] = content.headlineLines;
  const description = descriptionLines.join(' ');

  return (
    <section id="about" className="bg-background">
      <div className="max-w-full px-4 md:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          {/* Content Left */}
          <div className="flex flex-col items-start">
            {/* Badge & Headline */}
            <header className="mb-16 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-muted-foreground" />
                <p className="text-base font-medium leading-6">{content.label}</p>
              </div>
              <h2 className="text-[40px] font-medium leading-12 tracking-[-0.05em]">{title}</h2>
              <p className="max-w-125 text-base leading-6 text-muted-foreground">{description}</p>
            </header>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Dribbble size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
              A multidisciplinary designer with 6+ years of experience crafting brand identities and digital products
              for startups and established companies across Europe and the US
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
              <div className="bg-secondary/20 rounded-2xl p-6 border border-border">
                <div className="text-3xl font-semibold text-foreground mb-1">6+ years</div>
                <div className="text-sm text-foreground">Design experience</div>
              </div>
              <div className="bg-secondary/20 rounded-2xl p-6 border border-border">
                <div className="text-3xl font-semibold text-foreground mb-1">40+</div>
                <div className="text-sm text-foreground">Project delivered</div>
              </div>
            </div>
          </div>

          {/* Content Right (Image) */}
          <div className="w-fit lg:justify-self-end">
            <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-4/5 w-full max-w-md">
              <img
                src={assetPath('/Avatar_IgorFerraodeSouza.png')}
                alt="Alex Morgan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
