import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import kennedyImg from "@assets/kennedy.png";
import patrickImg from "@assets/patrick.png";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          {/* About Us intro */}
          <section className="space-y-8">
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 py-8 md:px-12 md:py-10 shadow-sm">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center tracking-tight">
                Company
              </h1>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our leadership team brings 70+ years of combined experience in scaling
              emerging technologies and businesses. iolaire.ai was founded to solve
              a vexing problem in traffic safety enforcement – timely detection of
              critical alerts so law enforcement can act and ensure safer communities.
              We aim to leverage the power of Vision AI to become a leader in
              intelligent advancement of public safety.
            </p>
          </section>

          {/* Vision */}
          <section className="grid grid-cols-1 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                Our Vision
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              To become a global leader in Vision AI by transforming government,
              securing critical infrastructure, improving operational efficiency, and
              enabling intelligent decision making. We’re delivering an integrated
              ecosystem of advanced AI, biometric services, and an ecosystem of edge
              applications to unlock collaborative innovation.
              <br />
              <br />
              We aim to achieve this vision by combining our AI expertise, go to
              market rollout, strategic acquisitions, and a track record of growth
              acceleration, all while consolidating the entire AI technology and
              services stack at the edge into a Vision AI decisioning and engagement
              platform.
            </p>
          </section>

          {/* Mission */}
          <section className="grid grid-cols-1 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                Our Mission
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              To secure and protect every neighborhood, transit, public area, and
              critical infrastructure facilities, while improving law enforcement
              officers&apos; safety and operational efficiency.
              <br />
              <br />
              We aim to unlock powerful data driven insights to create an environment
              where every resident feels safe where they live, work, and play. We
              seek to deliver personalized retail journeys that are welcoming and
              tailored to customer needs.
            </p>
          </section>

          {/* Leadership */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                Meet Our Team
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {/* Kennedy */}
              <article className="rounded-3xl border border-primary/20 bg-[hsl(262,88%,92%)] shadow-sm p-6 md:p-8 flex flex-col gap-5 h-full">
                <div className="flex items-center gap-4 md:gap-5">
                  <img
                    src={kennedyImg}
                    alt="Kennedy Pereira"
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border border-border/60 bg-background"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                      Kennedy Pereira
                    </h3>
                    <p className="text-sm md:text-base font-medium text-primary mt-1">
                      CEO &amp; Co-Founder
                    </p>
                  </div>
                </div>
                <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Kennedy Pereira is the Founder and Chief Executive Officer of iolaire.ai.
                    Kennedy brings 25+ years of leadership experience across Silicon Valley,
                    Dallas and global technology markets. Over the course of his career, he
                    has launched and scaled startups from $0 to $10M, guided companies
                    through $10M to $30M growth stage, and helped scale a Fortune 10
                    business unit to $1B+ in revenue.
                  </p>
                  <p>
                    As Founder and CEO of iolaire.ai, Kennedy&apos;s experience, insight, and
                    network have led to rapidly operationalizing innovative Vision AI
                    platforms, building strong operating foundations, and successfully
                    scaling iolaire.ai into a market defining disruptor.
                  </p>
                  <p>
                    Kennedy has held senior leadership roles across high growth and global
                    organizations, recently serving as Chief Revenue Officer at Morse, a
                    $50M venture foundry focused on contact center and fintech solutions.
                    As Global Vice President at Uniphore, he drove global partnerships and
                    alliances at scale with AWS, Genesys, Five9, and Cisco. Previously at
                    AT&amp;T, he built a $1B voice and collaboration practice, launched
                    AT&amp;T&apos;s Flagship Cloud Contact Center, and scaled contact center
                    and collaboration revenues from $0 to $50M through a marquee private
                    label partnership.
                  </p>
                </div>
              </article>

              {/* Patrick */}
              <article className="rounded-3xl border border-primary/20 bg-[hsl(262,88%,92%)] shadow-sm p-6 md:p-8 flex flex-col gap-5 h-full">
                <div className="flex items-center gap-4 md:gap-5">
                  <img
                    src={patrickImg}
                    alt="Patrick Perry"
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border border-border/60 bg-background"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                      Patrick Perry
                    </h3>
                    <p className="text-sm md:text-base font-medium text-primary mt-1">
                      President &amp; Co-Founder
                    </p>
                  </div>
                </div>
                <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Patrick Perry is our President and Co-Founder with 20+ years of
                    experience as a multiple venture backed go to market leader in Silicon
                    Valley and Dallas. His career spans from early stage startups to high
                    growth scaleups. He has held senior leadership roles including VP of
                    Business Development at Dronebase and VP of Sales at Virbela, and has
                    served as a board member and advisor to multiple global emerging
                    technology companies.
                  </p>
                  <p>
                    Patrick has a proven track record of taking companies from ideation to
                    execution, growing annual recurring revenue from US$0 to US$100M,
                    raising US$100M from leading investors, and driving global market
                    expansion through complex system integrator and government channels.
                  </p>
                  <p>
                    He brings deep expertise in AI, Vision AI, cloud, infrastructure, and
                    security serving enterprise and government use cases across multiple
                    industries. Patrick applies his strategic insight, global network, and
                    execution discipline to build, scale, and ensure the long term success
                    of iolaire.ai.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
