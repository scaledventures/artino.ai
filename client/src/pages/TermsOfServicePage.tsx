import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              By accessing or using the Vision AI platform and its accompanying services, including
              the Automatic License Plate Recognition (ALPR) technology, provided by IOLAIRE.AI
              (the &quot;Company&quot;), you agree to the following Terms and Conditions.
            </p>
          </header>

          <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Vision AI platform and its accompanying services,
                including the Automatic License Plate Recognition (ALPR) technology, provided by
                the Company, you agree to be bound by these Terms and Conditions. If you do not
                agree to these Terms, you must not access or use the services.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                2. Scope of Services
              </h2>
              <p>
                The Company provides an AI-powered platform that analyzes visual data, including
                vehicle images and license plate information, to support public safety, law
                enforcement operational intelligence, and enhanced retail experiences. Services
                may include detection, tracking, alerting, analytics, and reporting, subject to
                the agreed service scope.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                3. Permitted Use
              </h2>
              <p>
                You may use the platform solely for lawful purposes, including public safety,
                traffic enforcement, operational monitoring, and related authorized activities.
                The platform must not be used for unlawful surveillance, unauthorized data
                extraction, discrimination, profiling beyond permitted use, any activity that
                violates the Driver&apos;s Privacy Protection Act (DPPA), or applicable state,
                local, and federal laws or civil liberties.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                4. Customer Responsibilities
              </h2>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ensuring all data inputs are lawfully obtained.</li>
                <li>Obtaining required approvals, warrants, or authorizations where applicable.</li>
                <li>Complying with federal, state, and local regulations.</li>
                <li>Ensuring access to the platform is restricted to authorized personnel.</li>
                <li>
                  Using the platform in accordance with published documentation, local ordinances,
                  and departmental policies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                5. Data Privacy and Protection
              </h2>
              <p>
                The Company is committed to protecting privacy and handling data responsibly.
                Personal data is processed only as required to deliver the services. Data
                anonymization or masking may be applied where appropriate. You retain ownership of
                your data. The Company does not sell or misuse customer data, and data handling
                complies with applicable privacy laws, including DPPA regulations.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                6. ALPR Specific Use Requirements
              </h2>
              <p>For Automatic License Plate Recognition (ALPR) functionality:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ALPR data must be used only for authorized and documented purposes.</li>
                <li>Retention periods must comply with applicable laws and your internal policies.</li>
                <li>Access to ALPR data must be logged and auditable.</li>
                <li>You must ensure appropriate safeguards against misuse or unauthorized access.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                7. Accuracy and Limitations
              </h2>
              <p>
                The platform uses AI and machine learning models to identify and analyze visual
                data. While designed for high accuracy, the Company does not guarantee error-free
                results. The platform is intended to support human decision-making and must not be
                relied upon as the sole basis for enforcement or legal action.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                8. System Availability
              </h2>
              <p>
                The Company will make reasonable efforts to ensure platform availability and
                performance. Temporary interruptions may occur due to maintenance, upgrades,
                severe weather, acts of God, or circumstances beyond the Company&apos;s reasonable
                control.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                9. Security
              </h2>
              <p>
                The Company implements industry-standard technical and organizational safeguards to
                protect data and system integrity. You agree to promptly report any suspected
                security incidents or unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                10. Intellectual Property
              </h2>
              <p>
                All software, models, algorithms, documentation, and related materials remain the
                intellectual property of the Company. You are granted a limited, non-exclusive,
                non-transferable right to use the platform during the term of the agreement.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                11. Confidentiality
              </h2>
              <p>
                Both parties agree to maintain the confidentiality of non-public, proprietary, or
                sensitive information disclosed during the course of the engagement.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                12. Compliance and Audits
              </h2>
              <p>
                The Company may conduct audits or require attestations to ensure platform use
                aligns with these Terms and applicable regulations. Non-compliance may result in
                suspension or termination of services.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                13. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, the Company shall not be liable for
                indirect, incidental, or consequential damages arising from use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                14. Termination
              </h2>
              <p>
                The Company may suspend or terminate access if you breach these Terms, misuse the
                platform, or violate applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                15. Modifications
              </h2>
              <p>
                The Company may update these Terms from time to time. Continued use of the
                platform constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                16. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of Delaware, without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                17. Contact Information
              </h2>
              <p>
                For questions regarding these Terms or platform usage, please contact the Company
                through official support channels.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

