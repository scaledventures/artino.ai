import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AdTechResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-5xl mx-auto space-y-10">
          {/* Top header chip with light design */}
          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 py-8 md:px-12 md:py-10 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center tracking-tight">
              AdTech Resources
            </h1>
          </div>

          {/* Content */}
          <div className="bg-card/40 border border-border rounded-3xl px-6 py-8 md:px-10 md:py-12 shadow-sm space-y-10">
            <div className="space-y-4">
              <h2 className="inline-flex items-center gap-2 text-xl md:text-2xl font-heading font-semibold text-primary">
                <span>Whitepaper</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Where Hyperlocal Advertising Meets Real World Intent
              </p>
              <a href="/whitepaper/adtech" className="inline-flex">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full h-10 px-5 text-sm md:text-base shadow-md shadow-primary/20"
                >
                  <span className="flex items-start gap-1">
                    <span>Read whitepaper</span>
                    <ExternalLink className="h-3.5 w-3.5 mt-[1px]" />
                  </span>
                </Button>
              </a>
            </div>

            <div className="h-px bg-border/70" />

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary">
                Blog
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Questions Retail Leaders Should Ask Before Investing in Parking Analytics
              </p>
              <a href="/blog/adtech" className="inline-flex">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full h-10 px-5 text-sm md:text-base shadow-md shadow-primary/20"
                >
                  <span className="flex items-start gap-1">
                    <span>Read blog</span>
                    <ExternalLink className="h-3.5 w-3.5 mt-[1px]" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
