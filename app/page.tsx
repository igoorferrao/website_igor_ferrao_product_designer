import { Hero } from '@/components/hero';
import { AboutMe } from '@/components/about-me';
import Partners from '@/components/partners';
import { MyService } from '@/components/my-service';
import { CaseStudy } from '@/components/case-study';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div
      className="bg-[radial-gradient(at_-50%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_160%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_180%_120%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-dark)_50%)] [dark:background-image:radial-gradient(at_-45%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-dark)_50%),radial-gradient(at_140%_0%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-light)_50%),radial-gradient(at_180%_120%,var(--page-gradient-accent)_0%,var(--page-gradient-fade-dark)_50%)]
    p-4 md:p-16 flex justify-center selection:bg-primary/40 selection:text-primary-foreground"
    >
      {/* selection:bg-amber-300/40 selection:text-zinc-950 */}
      <main className="bg-background shadow-2xl rounded-4xl overflow-hidden">
        <Hero />
        <Partners />
        <AboutMe />
        <MyService />
        <CaseStudy />
        <Footer />
      </main>
    </div>
  );
}
