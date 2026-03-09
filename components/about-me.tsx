import { Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';
import type { SiteContent } from '@/content/types';

export function AboutMe({ content }: { content: SiteContent['about'] }) {
  const [title, ...descriptionLines] = content.headlineLines;
  const description = descriptionLines.join(' ');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div className="flex flex-col items-start">
            {/* Badge & Headline */}
            <header className="mb-16 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-muted-foreground" />
                <p className="text-base font-medium leading-6">{content.label}</p>
              </div>
              <h2 className="text-[40px] font-medium leading-[48px] tracking-[-0.05em]">{title}</h2>
              <p className="max-w-[500px] text-base leading-6 text-muted-foreground">{description}</p>
            </header>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <Dribbble size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-xl">
              A multidisciplinary designer with 6+ years of experience crafting brand identities and digital products
              for startups and established companies across Europe and the US
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl font-semibold text-gray-900 mb-1">6+ years</div>
                <div className="text-sm text-gray-500">Design experience</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl font-semibold text-gray-900 mb-1">40+</div>
                <div className="text-sm text-gray-500">Project delivered</div>
              </div>
            </div>
          </div>

          {/* Content Right (Image) */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-4/5 w-full max-w-md mx-auto lg:ml-auto">
              <img
                src="/d64a1b54febb0531bbb407786294d0ffac43e298.png"
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
