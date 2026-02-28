import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Oakwell Partners privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-teal to-deep-teal py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-cream/80 mt-2">Effective Date: March 2026</p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <p className="text-charcoal text-lg leading-relaxed mb-8">
              Oakwell Partners is committed to protecting your personal information. This policy explains what we collect, how we use it, and how we keep it safe.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              We collect the information you provide when you contact us, including your name, phone number, email address, and details about your HVAC agreement. If you proceed with our services, we may also collect copies of your contract, correspondence, and related documentation needed to prepare your case.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              We use your information to evaluate your situation, prepare your case, act as your agent in negotiations, coordinate with licensed legal professionals, and communicate with you about your case status. We do not use your information for marketing purposes without your consent.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Who We Share Your Information With
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              We share your information only with the licensed legal professionals who are directly involved in your case and, as your agent, with the finance companies and HVAC contractors involved in your agreement. We never sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              How We Protect Your Information
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              We implement appropriate administrative and technical measures to protect your personal information from unauthorised access, use, or disclosure.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Your Rights
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us directly.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Contact Us
            </h2>
            <p className="text-charcoal text-lg leading-relaxed">
              If you have questions about this privacy policy, please contact us at{" "}
              <a href={CONTACT.emailHref} className="text-deep-teal hover:underline">
                {CONTACT.email}
              </a>{" "}
              or{" "}
              <a href={CONTACT.phoneHref} className="text-deep-teal hover:underline">
                {CONTACT.phone}
              </a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
