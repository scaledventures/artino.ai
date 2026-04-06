import { FormEvent, useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import clientLoginBg from "@assets/Client-Login-bg.jpeg";
import logoNew from "@assets/iolaire-logo.png";

export default function ClientLoginPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [bgLeftOffset, setBgLeftOffset] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder submit handler – integrate with real auth later.
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let img = new Image();
    img.src = clientLoginBg;

    const recalc = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      const rect = sectionEl.getBoundingClientRect();

      const scale = Math.min(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
      const displayedWidth = img.naturalWidth * scale;

      // For bg-center, the left offset is half of the remaining space.
      const offset = (rect.width - displayedWidth) / 2;
      setBgLeftOffset(offset);
    };

    const onLoad = () => {
      recalc();
    };

    img.addEventListener("load", onLoad);
    recalc();

    const onResize = () => recalc();
    window.addEventListener("resize", onResize);

    return () => {
      img.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-20 md:pt-24 pb-16">
        <section
          ref={(el) => {
            sectionRef.current = el;
          }}
          className="relative min-h-[calc(100vh-80px-80px)] flex items-center justify-end px-4 md:px-8 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${clientLoginBg})` }}
        >
          {/* Soft white overlay so image is visible but subtle */}
          <div className="absolute inset-0 bg-white/20 pointer-events-none" />

          {/* Login card: align card right edge with background image right edge (bg-contain + bg-center). */}
          <div
            className="absolute z-10 w-full max-w-md"
            style={{
              // Move card slightly inside the background image's right edge.
              right: bgLeftOffset + 16,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <div className="rounded-3xl bg-card/95 shadow-2xl border border-border/70 px-6 py-8 md:px-8 md:py-9">
              <div className="flex justify-center mb-4">
                <img src={logoNew} alt="Iolaire" className="h-10 w-auto" />
              </div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6">
                Login
              </h1>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="userId"
                    className="block text-sm font-medium text-foreground"
                  >
                    User ID
                  </label>
                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm md:text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-shadow"
                    placeholder="iolaire.ai"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm md:text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-shadow"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-11 text-sm md:text-base shadow-lg shadow-primary/25"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

