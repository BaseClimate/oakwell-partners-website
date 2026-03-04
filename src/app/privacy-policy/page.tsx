import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Oakwell Partners privacy policy. Learn how we collect, use, and protect your personal information under PIPEDA and Ontario privacy legislation.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-teal to-deep-teal py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/80 mt-2">Effective Date: March 2026</p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-10">
            {/* 1. Introduction */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                1. Introduction
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                Oakwell Partners Inc. (OCN: 1001519186), operating as Oakwell
                Partners (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;), is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use,
                and disclose information when you visit our website
                (oakwellpartners.ca) or use our administrative and advocacy
                services. This policy complies with the Personal Information
                Protection and Electronic Documents Act (PIPEDA) and applicable
                Ontario privacy legislation.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                2. Information We Collect
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-4">
                To evaluate and process your contract resolution, we collect
                personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-charcoal text-lg leading-relaxed">
                <li>
                  Contact information (name, phone number, email address,
                  physical address)
                </li>
                <li>
                  Documents related to your home service or HVAC contracts,
                  including rental agreements and financing contracts
                </li>
                <li>
                  Information regarding your financial obligations under the
                  contested contracts
                </li>
                <li>
                  Correspondence between you and the HVAC contractor or finance
                  company
                </li>
                <li>
                  Property title information where relevant to lien removal
                </li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-4">
                We use your information strictly to provide our administrative
                and advocacy services, which includes:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-charcoal text-lg leading-relaxed">
                <li>
                  Evaluating your contract for violations of Ontario consumer
                  protection legislation
                </li>
                <li>
                  Preparing case files, demand letters, and administrative
                  documentation
                </li>
                <li>
                  Acting as your authorised agent in communications with finance
                  companies and HVAC contractors
                </li>
                <li>
                  Coordinating with independent, licensed legal professionals who
                  may represent you
                </li>
                <li>
                  Communicating with you regarding your case status and
                  resolution progress
                </li>
              </ul>
            </div>

            {/* 4. Information Sharing and Disclosure */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third
                parties. We only share your information in the following
                circumstances:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-3 text-charcoal text-lg leading-relaxed">
                <li>
                  <strong className="text-dark-teal">
                    Licensed Legal Professionals:
                  </strong>{" "}
                  We securely share your case details with independent, licensed
                  legal professionals who partner with us to represent you in
                  legal proceedings.
                </li>
                <li>
                  <strong className="text-dark-teal">
                    With Your Consent:
                  </strong>{" "}
                  We may share information with other parties when you have given
                  us explicit written consent to do so.
                </li>
                <li>
                  <strong className="text-dark-teal">
                    Legal Requirements:
                  </strong>{" "}
                  We may disclose your information if required to do so by law,
                  court order, or government regulation.
                </li>
              </ul>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                5. Data Security
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                We implement reasonable administrative and technical safeguards
                to protect your personal information and sensitive contract
                documents from unauthorised access, disclosure, alteration, or
                destruction. All case files are stored securely and access is
                restricted to authorised team members working on your case.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                6. Data Retention
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                We retain your personal information for as long as necessary to
                provide our services and fulfil the purposes described in this
                policy. After your case is resolved, we retain records for a
                period consistent with applicable legal and regulatory
                requirements, after which they are securely destroyed.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                7. Your Rights
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-4">
                Under PIPEDA, you have the right to:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-charcoal text-lg leading-relaxed">
                <li>
                  Request access to the personal information we hold about you
                </li>
                <li>
                  Request correction of any inaccurate personal information
                </li>
                <li>
                  Withdraw your consent for the collection, use, or disclosure
                  of your personal information (subject to legal or contractual
                  restrictions)
                </li>
              </ul>
            </div>

            {/* 8. Contact Us */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark-teal mb-4">
                8. Contact Us
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, please contact us:
              </p>
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
