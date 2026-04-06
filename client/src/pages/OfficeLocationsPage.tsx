import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import officeMapImg from "@assets/office-map.png";

function FlagUS({ className }: { className?: string }) {
  return (
    <span className={className} role="img" aria-label="United States">
      <svg viewBox="0 0 60 30" className="h-5 w-5 inline-block align-middle shrink-0" preserveAspectRatio="xMidYMid slice">
        <rect fill="#b22234" width="60" height="30" />
        {[1, 3, 5, 7, 9, 11].map((i) => (
          <rect key={i} fill="#fff" width="60" height="2.3" y={i * 2.5} />
        ))}
        <rect fill="#3c3b6e" width="24" height="13.85" />
        <g fill="#fff">
          {[1, 3, 5, 7, 9].map((row, i) =>
            [2, 5, 8, 11, 14].map((col, j) => (
              <circle key={`${i}-${j}`} r="0.9" cx={col} cy={1.5 + i * 2.2} />
            ))
          )}
        </g>
      </svg>
    </span>
  );
}

const OFFICE_CARDS = [
  { label: "San Jose, CA (HQ)", flag: <FlagUS /> },
  { label: "Dallas, TX", flag: <FlagUS /> },
];

export default function OfficeLocationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-5xl mx-auto space-y-10">
          {/* Title: same style as Resources/Careers */}
          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 py-8 md:px-12 md:py-10 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center tracking-tight">
              Office Locations
            </h1>
          </div>

          {/* Location cards: two cards, white/card bg, purple left accent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {OFFICE_CARDS.map((office) => (
              <div
                key={office.label}
                className="flex items-center gap-4 rounded-2xl bg-card border border-border shadow-sm p-5 md:p-6 pl-5 md:pl-6 border-l-4 border-l-primary"
              >
                <span className="shrink-0 text-muted-foreground">{office.flag}</span>
                <span className="text-base md:text-lg font-heading font-semibold text-foreground">
                  {office.label}
                </span>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            <img
              src={officeMapImg}
              alt="Office locations map"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
