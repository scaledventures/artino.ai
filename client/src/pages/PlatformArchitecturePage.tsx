import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, ShoppingCart, Radio, Network, Cpu } from "lucide-react";

export default function PlatformArchitecturePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-24 md:pt-28 pb-20 md:pb-24">
        {/* Hero / Intro */}
        <section className="section-soft border-b border-border/60 pb-14 md:pb-20">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-primary font-bold tracking-[0.24em] uppercase text-base md:text-lg mb-4">
                Platform Architecture
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight mb-5">
                Engineered for Real-Time AdTech Intelligence,
                <span className="block text-primary">At the Edge.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Our next-generation AdTech platform is built on a modern, scalable architecture
                that combines computer vision, audience analytics, real-time video processing,
                encryption, tokenization, edge computing, micro data centers, virtualized
                environments, and open APIs.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                It is designed to perform in high-footfall retail environments while maintaining
                strict privacy standards, campaign agility, and operational reliability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/calendar">
                  <Button size="lg" className="rounded-full">
                    Talk to our AdTech team
                  </Button>
                </Link>
                <Link href="/adtech">
                  <Button variant="outline" className="rounded-full">
                    View AdTech in action
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="lg:mt-12"
            >
              <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-7 space-y-4 shadow-lg shadow-primary/5">
                <h2 className="text-lg md:text-xl font-heading font-semibold mb-1">
                  Edge-Optimized Ad Delivery
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                  Edge processing ensures audience intelligence is generated at or near the source,
                  reducing latency, limiting unnecessary data transmission, and sustaining campaign
                  responsiveness even in constrained connectivity environments.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Cpu className="h-4 w-4 text-primary mt-0.5" />
                    <span>On-device and near-edge compute orchestration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Radio className="h-4 w-4 text-primary mt-0.5" />
                    <span>Real-time video analysis for audience context</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Network className="h-4 w-4 text-primary mt-0.5" />
                    <span>Integration with private 5G and store connectivity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary mt-0.5" />
                    <span>Encryption, tokenization, and policy-led access control</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Edge + Connectivity Architecture */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                Built for Complex, High-Traffic Environments
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The platform is designed for environments where real-time insight, shopper context,
                and operational awareness directly influence outcomes. From large-format retail
                media networks to dense in-store corridors, the architecture sustains performance
                and reliability under constant load.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The platform integrates seamlessly with private 5G and enterprise networks,
                enabling campaign segmentation and analytics flows directly to brand- or
                retailer-managed data centers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="lg:mt-1"
            >
              <div className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 md:p-7 space-y-5">
                <h3 className="text-lg md:text-xl font-heading font-semibold">
                  Edge to Core Design
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Edge Processing:</span>{" "}
                    Intelligence generated at or near the source reduces dependency on
                    backhaul connectivity and accelerates decision-making.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Micro Data Centers:</span>{" "}
                    Localized micro data centers and virtualized environments provide elastic
                    capacity for analytics, storage, and orchestration.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Open APIs:</span> Standards-based
                    APIs allow interoperability with ad servers, CRM platforms, loyalty systems,
                    retail media networks, and marketing analytics tools.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Security by Design:</span>{" "}
                    Encryption and tokenization protect sensitive data in motion and at rest,
                    aligned with privacy, transparency, and policy requirements.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dual Impact Overview */}
        <section className="py-14 md:py-20 section-soft border-y border-border/60">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                One Platform. Measurable AdTech Impact.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A robust architecture purpose-built for commercial retail media, where consumer
                privacy is anchored by a strong, secure policy-driven foundation.
              </p>
            </motion.div>
            {/* Retail Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold">Retail Industry</h3>
                  <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-primary font-semibold">
                    Real-Time, Intent-Driven Engagement
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                For retail media operators and brands, the platform enables real-time,
                intent-driven engagement. By understanding contextual movement patterns and
                on-site behavior, teams can deliver timely messaging, loyalty incentives, and
                relevant promotions that improve shopper experience and drive measurable lift.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Intelligence is processed efficiently at the edge, ensuring campaigns remain
                responsive, targeted, and aligned with strict privacy standards.
              </p>
              <Link href="/adtech">
                <Button variant="outline" size="sm" className="self-start rounded-full">
                  Explore AdTech solutions
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to scale your AdTech architecture?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Schedule time with our team to walk through deployment models, audience activation
                workflows, and integrations tailored to your retail media environment.
              </p>
              <div className="flex justify-center">
                <Link href="/calendar">
                  <Button size="lg" className="rounded-full">
                    Book a discovery session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

