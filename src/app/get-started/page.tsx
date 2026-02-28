import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/ui/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Contact Oakwell Partners for a free, confidential consultation about your HVAC contract. Tell us about your situation and we will be in touch within one business day.",
};

export default function GetStartedPage() {
  return (
    <>
      <Hero
        title="Let's Start With a Conversation"
        subtitle="Getting in touch is simple and there is no obligation. Tell us a little about your situation and we will be in touch within one business day. Or, if you prefer, call us directly."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-6 md:p-10 shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-6">
                <h3 className="font-heading font-bold text-dark-teal text-xl mb-4">
                  Prefer to Talk?
                </h3>
                <div className="space-y-4">
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center gap-3 text-deep-teal font-semibold text-lg hover:text-warm-gold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {CONTACT.phone}
                  </a>
                  <a
                    href={CONTACT.emailHref}
                    className="flex items-center gap-3 text-deep-teal hover:text-warm-gold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {CONTACT.email}
                  </a>
                  <p className="flex items-start gap-3 text-medium-grey text-sm">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Available {CONTACT.hours}
                  </p>
                </div>
              </div>

              <div className="bg-light-teal rounded-lg p-6 md:p-8">
                <h3 className="font-heading font-bold text-dark-teal text-xl mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-deep-teal text-white text-sm flex items-center justify-center font-semibold">
                      1
                    </span>
                    <p className="text-charcoal text-[15px] leading-relaxed">
                      We review your information and get back to you within one business day.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-deep-teal text-white text-sm flex items-center justify-center font-semibold">
                      2
                    </span>
                    <p className="text-charcoal text-[15px] leading-relaxed">
                      We have a confidential conversation about your situation and assess which breaches may apply.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-deep-teal text-white text-sm flex items-center justify-center font-semibold">
                      3
                    </span>
                    <p className="text-charcoal text-[15px] leading-relaxed">
                      We give you an honest assessment of your options. No pressure, no obligation.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
