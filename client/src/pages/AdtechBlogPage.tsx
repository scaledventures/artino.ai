import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AdtechBlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-primary font-bold tracking-widest uppercase text-[0.85rem]">
              AdTech Platform · Blog
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              5 Questions Retail Leaders Should Ask Before Investing in Real Time AI Driven AdTech
              Conversion
            </h1>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Still thinking of retail parking lots as passive infrastructure? Today’s retail
              leaders know that the parking lot presents the first real moment of customer
              engagement and one of the strongest signals of shopping intent. Parking analytics
              transforms this space into a source of behavioral intelligence. Instead of waiting
              for point of sale data to tell you what already happened, parking analytics reveals
              intent earlier in the journey, helping retailers anticipate demand rather than react
              to it.
            </p>
            <p>
              This early visibility empowers retailers to plan staffing, prepare inventory, and
              timely promotions, all while relying on anonymized and aggregated data aligned with
              data protection requirements.
            </p>
            <p>
              Parking analytics has clearly become a strategic retail lever. The real question is
              how to use it effectively. To get the most value and avoid shallow insights, retail
              leaders should start by asking the right questions. Below are 5 questions to ask
              before investing in parking analytics.
            </p>
          </section>

          {/* CTA 1 – before Question 1 */}
          <section className="space-y-4">
            <div className="rounded-2xl bg-primary/5 border border-primary/30 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-1">
                Real-Time Personalized Campaigns that Drive ROI
                </p>
              </div>
              <Link href="/calendar">
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 h-11 text-xs md:text-sm leading-snug text-center">
                Know more
                </Button>
              </Link>
            </div>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              1. What Business Problems Are We Trying to Solve?
            </h2>
            <p>
              What keeps you awake at night? Performance gaps, intent interruptions, low footfall,
              customers leaving without a purchase, why foot traffic does not convert as expected,
              why peak hours feel understaffed despite sufficient labor, or why some locations
              underperform even with similar assortments and promotions? Or all of the above?
            </p>
            <p>
              When leaders find themselves reacting to congestion, missed sales opportunities, or
              uneven customer experiences, it signals a need for earlier insight into intent and
              arrival patterns.
            </p>
            <p>
              Business problems worth solving are those where improved foresight can change
              outcomes, not just explain results. Our AdTech Platform ensures that analytics
              investments focus on decisions that materially impact performance, rather than
              metrics that look impressive but do not influence how the business operates.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              2. Does the Platform Enable Real Time, Intent Driven Actions or Rely on Retrospective
              Assumptions and Delayed Engagement?
            </h2>
            <p>
              Not all parking analytics platforms are designed to operate in real time. Some
              solutions identify patterns and generate offers only after the customer has already
              completed their visit and left the store. While these insights may be accurate, they
              arrive too late to influence behavior, missing the window when intent is highest and
              decisions are still being made.
            </p>
            <p>
              In contrast, real time, intent driven parking analytics enables timely, relevant, and
              precision driven actions that align directly with live consumer behavior. When
              retailers can respond as customers arrive, dwell, or circulate within the retail
              parking environment, they can deliver meaningful offers, targeted promotions during
              peak intent moments, optimize staffing, and reduce intent interruption. This
              immediacy transforms parking analytics from a passive measurement tool into an
              active driver of conversion, experience, and long term loyalty.
            </p>
          </section>

          {/* CTA 2 – before Question 3 */}
          <section className="space-y-4">
            <div className="rounded-2xl bg-primary/5 border border-primary/30 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-1">
                  Retail Advertising Continues to Miss the Point of Purchase Decision.
                </p>
              </div>
              <Link href="/whitepaper/adtech">
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 h-11 text-xs md:text-sm leading-snug text-center">
                Here’s Why
                </Button>
              </Link>
            </div>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              3. What data does the platform actually capture, and what does it not capture?
            </h2>
            <p>
              Many retail advertising systems remain static. They rely on historical data, delayed
              reporting, or pre scheduled campaigns that do not adjust to live conditions in the
              store or parking environment. As a result, offers are frequently delivered at the
              wrong moment or without the situational relevance required to shape customer
              decisions or prompt meaningful action.
            </p>
            <p>
              Our AdTech Platform built for physical retail captures live behavioral and
              contextual signals that indicate shopper intent as it forms. This includes data such
              as arrival volume, dwell duration, repeat visit patterns, movement flow, and
              engagement windows tied to real world presence.
            </p>
            <p>
              The value of this data lies in its immediacy. It reflects what is happening in the
              physical environment at the moment of engagement, enabling advertising and offers to
              align with actual shopper behavior rather than assumptions.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              4. How easily does the solution integrate with existing retail systems?
            </h2>
            <p>
              Standalone tools that operate in isolation limit value, even when their insights are
              strong. Integration with core systems such as Point of Sale (POS), Customer
              Relationship Management (CRM), Order Management System (OMS), Content Delivery
              Network (CDN), and operational dashboards is essential to ensure insights can move
              beyond dashboards and translate into coordinated action across marketing,
              operations, and customer engagement.
            </p>
            <p>
              To support closed loop decision making, our AdTech Platform requires minimum
              operational efforts. The platform integrates through standard APIs, operates largely
              autonomously, and requires limited ongoing involvement from store and technology
              teams. Installation, calibration, and maintenance is centralized, thereby retailers
              can focus on acting on insights rather than managing systems.
            </p>
            <p>
              The low operational overhead enables scalability and consistent execution across
              locations.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              5. Is the platform designed to scale and support future use cases?
            </h2>
            <p>
              Solutions designed only for single site deployments often become costly and
              difficult to manage when expanded. A scalable platform should support consistent
              performance as the number of stores, parking assets, and data volumes increases
              without adding operational complexity.
            </p>
            <p>
              Equally important is the ability to support future use cases beyond initial
              deployment. The platform should be modular, extensible, and capable of enabling new
              applications such as advanced personalization, cross channel attribution, or broader
              customer journey intelligence.
            </p>
            <p>
              Our AdTech Platform is future ready and reduces the risk of repeated technology
              replacements while ensuring long term strategic value.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Conclusion
            </h2>
            <p>
              Parking analytics is increasingly viewed not as a facilities investment, but as a
              strategic capability that influences core retail performance. Most importantly,
              parking analytics bridges the gap between physical retail and data driven decision
              making. It provides measurable, location specific insights that support revenue
              growth, operational efficiency, and customer experience improvements.
            </p>
            <p>
              What are the most urgent business problems you are looking to solve using parking
              analytics? Write to us for industry insights at{" "}
              <a
                href="mailto:info@iolaire.ai"
                className="text-primary hover:underline break-all"
              >
                info@iolaire.ai
              </a>
              .
            </p>
          </section>

          {/* Removed final CTA as requested */}
        </article>
      </main>

      <Footer />
    </div>
  );
}

