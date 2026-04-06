import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-5xl mx-auto space-y-12">
          {/* Top header chip with light design */}
          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 py-8 md:px-12 md:py-10 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center tracking-tight">
              Careers
            </h1>
          </div>

          {/* Intro copy */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              A place to grow, learn and connect.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Be part of iolaire.ai and work at the forefront of Vision AI, Edge Applications,
              and other industry-shaping technologies that define the next generation of
              intelligent systems.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a team passionate about keeping communities safer while building meaningful,
              data-driven experiences for residents and retailers alike.
            </p>
          </div>

          {/* Search jobs card */}
          <section className="bg-card/60 border border-border rounded-3xl px-6 py-6 md:px-10 md:py-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,0.7fr)] gap-4 items-stretch">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Keyword
                </p>
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2.5">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Job Title, Category, Skills, etc."
                    className="w-full bg-transparent text-sm md:text-base outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Location
                </p>
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2.5">
                  <span className="text-muted-foreground text-sm md:text-base">🌎</span>
                  <input
                    type="text"
                    placeholder="City, Province, Country, etc."
                    className="w-full bg-transparent text-sm md:text-base outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl h-12 md:h-12 text-sm md:text-base shadow-md shadow-primary/20">
                  Search Jobs
                </Button>
              </div>
            </div>
            <p className="mt-4 text-xs md:text-sm text-muted-foreground text-center md:text-left">
              We&apos;re not actively listing roles yet, but you can explore upcoming opportunities and
              stay connected as we grow.
            </p>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
