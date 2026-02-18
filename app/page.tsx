import { Hero } from '@/components/hero';
import { AboutMe } from '@/components/about-me';
import { PatternsCarousel } from '@/components/patterns-carousel';
import { MyService } from '@/components/my-service';
import { CaseStudy } from '@/components/case-study';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className="bg-[radial-gradient(at_-50%_0%,oklch(76.9%_0.188_70.08)_0%,rgba(255,255,255,0)_50%),radial-gradient(at_160%_0%,oklch(76.9%_0.188_70.08)_0%,rgba(255,255,255,0)_50%),radial-gradient(at_180%_120%,oklch(76.9%_0.188_70.08)_0%,rgba(0,0,0,0)_50%)] [dark:background-image:radial-gradient(at_-45%_0%,oklch(76.9%_0.188_70.08)_0%,rgba(0,0,0,0)_50%),radial-gradient(at_140%_0%,oklch(76.9%_0.188_70.08)_0%,rgba(255,255,255,0)_50%),radial-gradient(at_180%_120%,oklch(76.9%_0.188_70.08)_0%,rgba(0,0,0,0)_50%)] p-3 md:p-5 flex justify-center selection:bg-primary/40 selection:text-primary-foreground">
      {/* selection:bg-amber-300/40 selection:text-zinc-950 */}
      <main className="bg-white shadow-2xl rounded-4xl lg:max-w-1440 overflow-hidden">
        <Hero />
        <PatternsCarousel />
        <AboutMe />
        <MyService />
        <CaseStudy />
        <Footer />
      </main>
    </div>
  );
}
