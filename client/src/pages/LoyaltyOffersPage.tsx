import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import loyaltyOffersHeroImg from "../../../attached_assets/LoyaltyAndOffers.jpg";

export default function LoyaltyOffersPage() {
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
                Loyalty and Offers
              </h1>
            </div>
          </header>

          <section className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              <div className="flex items-center">
                <p>
                  Long lasting customer loyalty is built in the moment, not on retrospective or
                  historical assumptions. Our AdTech Platform empowers retailers to deliver timely,
                  relevant, and precision driven offers aligned with live consumer behavior, creating
                  a compelling opportunity to reinforce loyalty.
                </p>
              </div>
              <div className="w-full flex justify-center md:justify-end h-full">
                <div className="relative w-full max-w-[380px] h-full rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={loyaltyOffersHeroImg}
                    alt="Loyalty and Offers"
                    className="absolute inset-0 w-full h-full object-cover object-left"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Turning Real Time Intent into Action
            </h2>
            <p>
              Our AdTech Platform observes arrival patterns, movement, dwell time, and engagement
              to understand shopper intent as it forms. Retailers can use aggregated and
              anonymized shopper data sets to deliver real time offers based on live behavioral,
              demographic, and analytical signals.
            </p>
            <p>
              These insights, combined with real time offers, enable highly targeted advertising
              and promotions that feel relevant, timely, and earned rather than generic or
              transactional. The real impact comes from activating offers when shoppers are most
              receptive, improving conversion while avoiding unnecessary discounting.
            </p>
            <p>
              The alignment of intent, timing, and relevance enhances the customer experience,
              protects margins, and ensures loyalty and offers operate as a unified strategy
              rather than disconnected efforts.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

