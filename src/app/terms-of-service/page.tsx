import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Oakwell Partners terms of service. Understand our service terms, agency relationship, and your responsibilities.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-teal to-deep-teal py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="text-white/80 mt-2">Effective Date: March 2026</p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-10">
            {/* 1. Acceptance of Terms */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                By accessing the website of Oakwell Partners, the operating
                brand of Oakwell Partners Inc. (OCN: 1001519186)
                (&ldquo;Oakwell,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;),
                you agree to be bound by these Terms of Service. If you do not
                agree with these terms, please do not use our site or services.
              </p>
            </div>

            {/* 2. Nature of Services */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                2. Nature of Services
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                Oakwell Partners is an administrative and advocacy service. We
                are not a law firm. Our services include case preparation,
                document review, evidence gathering, contract analysis, demand
                letter preparation, negotiation with counterparties, and
                administrative support. When formal legal proceedings are
                required, we coordinate with independent, fully licensed legal
                professionals who may represent you. Your use of our website or
                administrative services does not create an attorney-client
                relationship with Oakwell Partners.
              </p>
            </div>

            {/* 3. Role as Authorised Agent */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                3. Role as Authorised Agent
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                When you engage Oakwell Partners, you authorise us to act as
                your agent in communications with finance companies, HVAC
                contractors, and other relevant parties regarding the resolution
                of your contract dispute. This agency relationship is limited to
                the scope of services described in your engagement agreement
                with us.
              </p>
            </div>

            {/* 4. User Responsibilities */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                4. User Responsibilities
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                To assist you effectively, you agree to provide accurate,
                complete, and current information regarding your home service
                contracts and related circumstances. You understand that our
                ability to prepare your case depends on the accuracy of the
                documents and information you supply.
              </p>
            </div>

            {/* 5. No Guaranteed Outcomes */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                5. No Guaranteed Outcomes
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                Each contract dispute is unique and outcomes depend on the
                specific facts and legal circumstances of each case. While we
                draw on extensive experience with similar cases across Ontario,
                we do not and cannot guarantee specific legal or financial
                results.
              </p>
            </div>

            {/* 6. Fees and Payment */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                6. Fees and Payment
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                Our fees will be clearly outlined in your engagement agreement
                before you commit to proceeding. We do not charge for our
                initial case review. All fees are transparently disclosed and
                there are no hidden charges.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                To the fullest extent permitted by law, Oakwell Partners Inc.
                shall not be liable for any indirect, incidental, special, or
                consequential damages arising out of or related to your use of
                our website or administrative services.
              </p>
            </div>

            {/* 8. Intellectual Property */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                All content on this website, including text, graphics, logos,
                and software, is the property of Oakwell Partners Inc. and is
                protected by Canadian intellectual property laws. You may not
                reproduce, distribute, or create derivative works from this
                content without our express written permission.
              </p>
            </div>

            {/* 9. Governing Law */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                9. Governing Law
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the Province of Ontario and the
                federal laws of Canada applicable therein.
              </p>
            </div>

            {/* 10. Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                10. Contact Information
              </h2>
              <div className="bg-white rounded-xl border border-warm-gold/30 p-6 space-y-3">
                <p className="text-charcoal text-lg">
                  <strong className="text-dark-teal">Email:</strong>{" "}
                  <a
                    href={CONTACT.emailHref}
                    className="text-deep-teal hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </p>
                <p className="text-charcoal text-lg">
                  <strong className="text-dark-teal">Phone:</strong>{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="text-deep-teal hover:underline"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
                <p className="text-charcoal text-lg">
                  <strong className="text-dark-teal">Address:</strong>{" "}
                  {CONTACT.address}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
