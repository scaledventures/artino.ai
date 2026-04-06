import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function GetInTouchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-4xl mx-auto space-y-10">
          {/* Heading card */}
          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 py-8 md:px-12 md:py-10 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center tracking-tight">
              Contact Us
            </h1>
            <p className="relative mt-3 text-base md:text-lg text-muted-foreground text-center leading-relaxed">
              Get in touch with us.
            </p>
          </div>

          {/* US Offices */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Offices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card/70 px-5 py-5 space-y-2">
                {/* <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] flex items-center gap-2">
                  <span role="img" aria-label="United States">
                    🇺🇸
                  </span>
                  <span>United States</span>
                </p> */}
                <p className="text-base md:text-lg font-heading font-semibold text-foreground">
                  San Jose, CA (HQ)
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  <a
                    href="mailto:info@iolaire.ai"
                    className="text-primary hover:underline break-all"
                  >
                    info@iolaire.ai
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/70 px-5 py-5 space-y-2">
                {/* <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] flex items-center gap-2">
                  <span role="img" aria-label="United States">
                    🇺🇸
                  </span>
                  <span>United States</span>
                </p> */}
                <p className="text-base md:text-lg font-heading font-semibold text-foreground">
                  Dallas, TX
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  <a
                    href="mailto:info@iolaire.ai"
                    className="text-primary hover:underline break-all"
                  >
                    info@iolaire.ai
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Press contact */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
              Press contact
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Press contact is for media enquiries only.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              <a
                href="mailto:info@iolaire.ai"
                className="text-primary hover:underline break-all"
              >
                info@iolaire.ai
              </a>
            </p>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
