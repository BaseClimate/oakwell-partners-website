import Hero from "@/components/sections/Hero";
import FiveBreaches from "@/components/sections/FiveBreaches";
import HowWeHelp from "@/components/sections/HowWeHelp";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="home"
        title="Your HVAC Contract May Have Never Been Valid"
        subtitle="If you were pressured into signing a furnace, water heater, or air system agreement at your front door, the 2018 amendments to Ontario's Consumer Protection Act may mean that contract was never enforceable in the first place. You are not asking for a favour. You are asserting a right."
        altText="Oakwell Partners helps Ontario homeowners resolve these agreements quickly, affordably, and with your dignity intact. And no matter the outcome, you keep your equipment."
        ctaText="Find Out Where You Stand — It's Free"
        ctaHref="/get-started"
        ctaVariant="gold"
        trustIndicators={[
          "No obligation",
          "Completely confidential",
          "You keep your equipment",
        ]}
      />

      {/* The Problem Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start md:gap-12 max-w-6xl mx-auto">
            <div className="md:w-3/5">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-teal mb-6">
                Why So Many Homeowners Feel Stuck
              </h2>
              <div className="space-y-4 text-charcoal text-lg leading-relaxed">
                <p>
                  Thousands of Ontario homeowners have signed HVAC rental or financing agreements without realising what they were truly agreeing to. The monthly payments stretch over 10, 15, even 20 years and add up to many times the actual value of the equipment. In many cases, a registration has been placed against the homeowner&apos;s property title.
                </p>
                <p>
                  The reason these companies continue to operate this way is simple: they count on you not knowing your rights, and they count on the cost of hiring a lawyer being too high for most families. Pursuing a resolution through the traditional legal process can cost thousands of dollars in legal fees alone — more than most people can justify, even when the law is clearly on their side.
                </p>
                <p className="text-deep-teal font-semibold text-xl">
                  That imbalance is exactly what Oakwell Partners was built to solve.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-2/5">
              <img
                src="/images/salesman-door.jpg"
                alt="Illustration of an HVAC salesman at a homeowner's front door"
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Five Breaches Section */}
      <FiveBreaches />

      {/* Ontario Street Divider */}
      <div className="relative w-full max-h-48 md:max-h-64 overflow-hidden">
        <img
          src="/images/ontario-street.jpg"
          alt="Tree-lined residential street in an Ontario neighbourhood"
          className="w-full h-48 md:h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-teal/20" />
      </div>

      {/* Who You Are Actually Dealing With Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-teal mb-6">
            Your Contract May Not Be With Who You Think
          </h2>
          <div className="space-y-4 text-charcoal text-lg leading-relaxed">
            <p>
              Many homeowners assume their agreement is with the company that installed the equipment. In most cases, it is not. Your contract is typically held by a separate finance company. The HVAC contractor installs the equipment and moves on. The finance company collects your monthly payments and holds the registration against your property.
            </p>
            <p>
              If you have already tried calling the installer and been told they cannot help, this is why. And if you have called the finance company and been told there is nothing they can do, that is not the full picture.
            </p>
            <p>
              Oakwell Partners understands how these arrangements work because we have handled hundreds of them. We address both the finance company and the HVAC contractor as part of your resolution, because a complete outcome requires dealing with both parties. You do not need to navigate this on your own.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <HowWeHelp />

      {/* Testimonials */}
      <Testimonials />

      {/* Keep Your Equipment Callout */}
      <section className="bg-deep-teal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12 max-w-6xl mx-auto">
            <div className="md:w-3/5">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                You Keep Your Equipment. Always.
              </h2>
              <p className="text-white text-lg leading-relaxed">
                This is one of the most common concerns we hear, so let us be clear: under Ontario law, when an agreement is resolved due to breaches of the Consumer Protection Act, you keep the equipment that was installed in your home. Your furnace, your water heater, your air system — it stays. This is not a grey area. The law supports this outcome, and it applies in every case we handle.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-2/5">
              <img
                src="/images/utility-room.jpg"
                alt="Illustration of a home utility room with tankless water heater, furnace, and water softener"
                className="w-full rounded-lg ring-2 ring-white/20"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
