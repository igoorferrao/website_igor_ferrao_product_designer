import type { SiteContent } from '@/content/types';
import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { FooterVerseMark } from '@/components/footer-verse-mark';

export function Footer({ content }: { content: SiteContent['footer'] }) {
  return (
    <footer id="contact" className="overflow-hidden bg-background px-3 py-8 md:px-4 md:py-16 lg:px-16 lg:py-16">
      <div className="mx-auto w-full max-w-360">
        <div className="mx-auto w-full rounded-[32px] border border-border bg-card p-8 shadow-[0_8px_16px_rgba(0,0,0,0.05)] md:p-14">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="max-w-73 space-y-6">
                <h3 className="text-[28px] font-medium leading-8 text-foreground md:text-[32px]">
                  {content.brandName}
                </h3>
                <p className="text-base leading-6 text-muted-foreground">{content.tagline}</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href="https://instagram.com/igoorferrao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://x.com/igoorferrao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@FerraoDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/igor-ferrao-de-souza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin size={24} />
                </a>
              </div>
              {/* <div className="grid gap-8 text-base leading-6 md:grid-cols-3 md:gap-20">
                {content.columns.map((column) => (
                  <div key={column.title} className="space-y-4">
                    <p className="font-medium text-foreground">{column.title}</p>
                    <div className="space-y-2 text-muted-foreground">
                      {column.links.map((link) => (
                        <a key={link} href="#" className="block">
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="h-px w-full bg-border" />

            <p className="text-sm leading-5 text-muted-foreground">{content.rights}</p>
          </div>
        </div>

        <div className="mt-8 w-full">
          <FooterVerseMark />
        </div>
      </div>
    </footer>
  );
}
