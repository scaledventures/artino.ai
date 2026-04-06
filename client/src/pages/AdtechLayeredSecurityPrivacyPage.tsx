import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AdtechLayeredSecurityPrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 pt-12 pb-8 md:px-12 md:py-10 shadow-sm">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <span className="absolute top-4 left-6 md:left-8 text-primary font-bold tracking-widest uppercase text-[0.9rem]">
                AdTech Platform
              </span>
              <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-center">
                Layered Security &amp; Privacy
              </h1>
            </div>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Privacy by Design for Retail Media
            </h2>
            <p>
              Privacy and trust are built into every layer of our AdTech platform. From ingestion
              to activation, controls are designed to protect consumer data while enabling
              high-quality, real-time campaign outcomes.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Security Controls Across the Data Lifecycle
            </h2>
            <p>
              Audience and campaign signals are validated, encrypted, and governed at each stage of
              processing. Policy-led access control ensures only authorized users and systems can
              interact with sensitive data.
            </p>
            <p>
              Tokenization and minimization strategies reduce exposure of personally identifiable
              information while preserving the intelligence needed for optimization and measurement.
            </p>
            <p>
              This layered model helps retailers and brands operate confidently across changing
              privacy requirements, internal governance standards, and enterprise security
              expectations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
