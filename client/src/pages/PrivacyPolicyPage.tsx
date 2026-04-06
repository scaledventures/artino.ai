import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are committed to protecting personal data and handling information responsibly and
              transparently. This Privacy Policy explains how we collect, use, and safeguard
              personal data.
            </p>
          </header>

          <section className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                1. Website Visitors
              </h2>
              <p>
                <span className="font-semibold text-foreground">Types of Personal Data:</span> When
                you visit our website, we may collect limited personal data such as IP address,
                browser type, device information, pages visited, and cookies or similar tracking
                technologies.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Purposes of Processing:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To operate and improve the website.</li>
                <li>To understand usage patterns and performance.</li>
                <li>To ensure security and prevent misuse.</li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Legal Basis:</span> Processing is
                based on legitimate business interests and, where applicable, user consent for
                cookies and analytics.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Disclosure:</span> Website data may
                be shared with trusted service providers that support hosting, analytics, and
                security. Data is not sold.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Retention Period:</span> Data is
                retained only for as long as necessary to fulfill the stated purposes or as
                required by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                2. Contacting Us or Communicating With Our Experts
              </h2>
              <p>
                <span className="font-semibold text-foreground">Types of Personal Data:</span> Name,
                organization, email address, phone number, and any information you voluntarily
                provide in communications.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Purposes of Processing:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to enquiries.</li>
                <li>To provide requested information or demonstrations.</li>
                <li>To manage business communications.</li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Legal Basis:</span> Processing is
                based on consent and legitimate business interests.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Retention Period:</span> Data is
                retained for the duration necessary to manage the communication and any follow up,
                unless longer retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                3. Individuals Employed by Customers
              </h2>
              <p>
                <span className="font-semibold text-foreground">Collection of Personal Data:</span>{" "}
                Personal data may be collected when customer employees use or interact with our
                platforms or services in an authorized capacity.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Types of Personal Data:</span>{" "}
                Professional contact details, user credentials, access logs, and operational usage
                data, as applicable.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Purposes of Processing:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To deliver contracted services.</li>
                <li>To support system access, security, and auditing.</li>
                <li>To comply with legal and contractual obligations.</li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Legal Basis:</span> Processing is
                based on contractual necessity, legitimate interests, and compliance with
                applicable laws.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Retention Period:</span> Data is
                retained in accordance with customer agreements, applicable regulations, and
                operational requirements.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Data Protection and Security:</span>{" "}
                We apply appropriate technical and organizational measures to protect personal
                data, including access controls, encryption, and monitoring.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Your Rights:</span> Individuals may
                have rights under applicable laws to access, correct, or delete personal data.
                Requests can be submitted by email to{" "}
                <a
                  href="mailto:info@iolaire.ai"
                  className="text-primary hover:underline break-all"
                >
                  info@iolaire.ai
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                4. Visiting Our Physical Premises
              </h2>
              <p>
                <span className="font-semibold text-foreground">Collection of Personal Data:</span>{" "}
                Personal data may be collected when you enter our premises through security and
                access control measures.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Types of Personal Data:</span> This
                may include name, company affiliation, visitor logs, access credentials, CCTV
                footage, and entry or exit timestamps.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Purposes of Processing:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To ensure physical security and safety.</li>
                <li>To manage authorized access.</li>
                <li>To protect employees, visitors, and company assets.</li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Legal Basis:</span> Processing is
                based on legitimate business interests and compliance with security and safety
                obligations.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Retention Period:</span> Personal
                data is retained only for the duration necessary to meet security, legal, or
                operational requirements, after which it is securely deleted.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                5. Visiting Our Social Media Profiles
              </h2>
              <p>
                <span className="font-semibold text-foreground">Collection of Personal Data:</span>{" "}
                Personal data may be collected when you interact with our official social media
                profiles, such as liking, commenting, sharing, or messaging.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Types of Personal Data:</span> This
                may include publicly available profile information, usernames, comments, messages,
                and interaction data, as determined by the social media platform.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Purposes of Processing:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To engage with users and respond to enquiries.</li>
                <li>To share company updates and content.</li>
                <li>To understand audience engagement and interests.</li>
              </ul>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Legal Basis:</span> Processing is
                based on legitimate business interests and user consent as governed by the
                respective social media platforms.
              </p>
              <p className="mt-2">
                <span className="font-semibold text-foreground">Retention Period:</span> Data is
                retained in accordance with platform policies and only for as long as necessary to
                manage interactions or comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                6. Disclosure and Outsourcing of Personal Data
              </h2>
              <p>
                In certain circumstances and in accordance with applicable legislation, we may be
                required to disclose personal data to competent authorities, regulatory bodies, or
                law enforcement agencies. Disclosure is limited to what is legally required.
              </p>
              <p className="mt-2">
                We may also share personal data with trusted service providers and vendors who
                support our operations, such as hosting, security, analytics, or IT services.
                These parties process data only on our instructions and are bound by
                confidentiality and data protection obligations. We do not sell personal data.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                7. Your Rights
              </h2>
              <p>
                Subject to applicable laws, individuals may have the right to request access to
                their personal data, request correction or deletion, or object to certain
                processing activities. Requests may be submitted through our official contact
                channels and will be handled in accordance with legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                8. Links to Other Websites
              </h2>
              <p>
                Our website and communications may contain links to third-party websites or
                platforms. We are not responsible for the privacy practices or content of external
                sites. We encourage users to review the privacy policies of any third-party
                websites they visit.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                9. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in legal
                requirements, technology, or business practices. Updated versions will be
                published on our website, and continued use of our services constitutes acceptance
                of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                10. Questions or Complaints
              </h2>
              <p>
                If you have questions, concerns, or complaints regarding this Privacy Policy or
                the handling of personal data, you may contact us through our designated privacy
                or support channels. Complaints will be reviewed and addressed in a timely and
                appropriate manner.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

