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
          <p className="text-cream/80 mt-2">Effective Date: March 2026</p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <p className="text-charcoal text-lg leading-relaxed mb-8">
              By using our services, you agree to the following terms. Please read them carefully.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              About Our Services
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              Oakwell Partners provides advocacy, case management, and agent representation services related to HVAC rental and financing agreements in Ontario. We are not a law firm and do not provide legal advice. We act as your authorised agent, prepare your case, manage negotiations, and coordinate with fully licensed, independent legal professionals when legal representation is required.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Agency Relationship
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              When you engage Oakwell Partners, you authorise us to act as your agent in communications and negotiations with finance companies, HVAC contractors, and related parties regarding your HVAC agreement. This agency relationship is established through a separate written agreement.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              No Guaranteed Outcomes
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              While we have a strong track record, every situation is unique. We cannot guarantee specific legal or financial outcomes. We will always be honest with you about the strength of your case and what you can reasonably expect.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Your Responsibilities
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              You agree to provide accurate and complete information about your situation and your HVAC agreement. You agree to respond to reasonable requests for information and documentation in a timely manner.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Fees
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              Our fee structure is explained clearly before you agree to proceed. There are no hidden fees. Your initial consultation is always free.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Governing Law
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              These terms are governed by the laws of the Province of Ontario, Canada.
            </p>

            <h2 className="font-heading text-2xl font-bold text-dark-teal mt-10 mb-4">
              Contact
            </h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Questions about these terms can be directed to{" "}
              <a href={CONTACT.emailHref} className="text-deep-teal hover:underline">
                {CONTACT.email}
              </a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
