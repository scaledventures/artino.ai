import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AdtechUnifiedDashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 pt-12 pb-8 md:px-12 md:py-10 shadow-sm">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <span className="absolute top-4 left-6 md:left-8 text-primary font-bold tracking-widest uppercase text-[0.9rem]">
                AdTech Platform
              </span>
              <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-center">
                Unified Dashboard
              </h1>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
              One unified command center for real-time retail media performance.
            </p>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              A single pane of glass dashboard gives teams one trusted view of campaign delivery,
              audience trends, engagement signals, and operational health. Marketing, operations,
              and media teams can monitor performance continuously and act without waiting on
              disconnected reports.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Common Challenges Without a Unified View
            </h2>
            <p>
              When campaign data is split across multiple systems, optimization slows down and
              teams lose context. That fragmentation creates delays in decisions, inconsistent
              targeting, and reduced confidence in real-time performance.
            </p>
            <p>
              In high-traffic retail environments, even small delays can impact reach, conversion,
              and campaign outcomes. Unified visibility helps teams stay coordinated and responsive.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              How the Unified Dashboard Drives AdTech Outcomes
            </h2>
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              <li className="flex gap-3 items-start">
                <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                <span>Combines campaign, audience, and operational data in one interface.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                <span>Speeds optimization with real-time pacing, spend, and performance insights.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                <span>Improves campaign relevance through contextual audience intelligence at the edge.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                <span>Supports cross-team collaboration with a shared source of truth.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                <span>Scales across locations while maintaining consistent reporting and controls.</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
