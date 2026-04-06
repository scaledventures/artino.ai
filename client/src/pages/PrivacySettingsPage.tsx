import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacySettingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Privacy Settings
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are committed to protecting personal data and respecting privacy. Our platform
              processes information responsibly, in accordance with applicable laws and
              regulations, including strict data security, limited retention, and purpose-based
              use.
            </p>
          </header>

          <section className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Here you can review how data is collected, used, stored, and protected across our
              platform. Where applicable, you may manage privacy-related preferences in line with
              our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="rounded-2xl border border-border bg-card/70 p-5 md:p-6 space-y-3">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                Data Handling Overview
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Data is collected only for specified, explicit, and legitimate purposes.</li>
                <li>Retention periods are limited and aligned with legal, contractual, or
                  operational requirements.</li>
                <li>Technical and organizational safeguards are applied to protect personal data.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-5 md:p-6 space-y-3">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                Managing Your Privacy
              </h2>
              <p>
                To exercise your privacy rights (such as access, correction, or deletion of
                personal data), or to update applicable preferences, please contact our team at{" "}
                <a
                  href="mailto:info@iolaire.ai"
                  className="text-primary hover:underline break-all"
                >
                  info@iolaire.ai
                </a>
                . Requests will be reviewed and handled in accordance with our Privacy Policy and
                applicable law.
              </p>
            </div>

            <p>
              For more details on data handling practices, legal compliance, and your rights,
              please refer to our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

