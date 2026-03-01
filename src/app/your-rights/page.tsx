import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Your Rights Under the 2018 Amendments",
  description:
    "Learn about the 2018 amendments to Ontario's Consumer Protection Act and how they protect homeowners from unfair HVAC contracts. Six key breaches that may make your agreement unenforceable.",
};

const breaches = [
  {
    number: 1,
    title: "Unconscionable Pricing",
    description:
      "The Act makes it unlawful to charge a homeowner a total amount that is grossly disproportionate to the value of the equipment provided. If you are paying $20,000 or more over the life of your agreement for a furnace or water heater that retails for a fraction of that amount, this provision is directly relevant to your situation.",
  },
  {
    number: 2,
    title: "Unsolicited Contact",
    description:
      "If the salesperson who sold you the agreement came to your door uninvited, called you by phone, or approached you without your prior request, the manner of sale may violate the restrictions in the amended Act. These amendments specifically targeted door-to-door and cold-call sales of essential home equipment because of how frequently these tactics were used to pressure homeowners.",
  },
  {
    number: 3,
    title: "Misrepresented Energy Savings",
    description:
      "Many homeowners were told that their new equipment would result in significant reductions to their energy bills. If those promised savings have not materialised, the claims made during the sale may constitute a misrepresentation under the Act. Energy savings that were used to justify the agreement but that do not reflect reality are a recognised breach.",
  },
  {
    number: 4,
    title: "Unfulfilled Maintenance Commitments",
    description:
      "A common feature of these agreements is a promise of regular maintenance and servicing. If your agreement included such promises and the company has not delivered on them — missed service calls, unanswered requests, or simply no maintenance at all — this failure to perform is another basis for challenging the agreement under the Act.",
  },
  {
    number: 5,
    title: "Improper Installation",
    description:
      "If the equipment installed in your home was not installed correctly — resulting in performance problems, safety issues, or additional costs to remedy — this may constitute a further breach of both the agreement and the Act. Homeowners are entitled to equipment that functions properly and safely.",
  },
  {
    number: 6,
    title: "Unfulfilled Rebate Promises",
    description:
      "If the salesperson promised government rebates, manufacturer rebates, or other financial incentives that never materialised, these unfulfilled promises may constitute a misrepresentation under the Act. Many homeowners agreed to their contracts partly based on rebate promises that were never honoured.",
  },
];

const entitlements = [
  "Have the agreement declared invalid and unenforceable",
  "Have any property registration (such as a NOSI or similar lien) removed from your home",
  "Keep the equipment that was installed",
  "Request damages for the financial harm caused by the unlawful agreement",
  "Recover court costs if legal proceedings are necessary",
];

export default function YourRightsPage() {
  return (
    <>
      <Hero
        title="The 2018 Amendments Changed Everything for Ontario Homeowners"
        subtitle="In 2018, Ontario's Consumer Protection Act was amended to include specific protections for homeowners who enter into agreements for items deemed essential to the home. These amendments were a direct response to the widespread use of high-pressure sales tactics to lock homeowners into long-term HVAC contracts."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-charcoal text-lg leading-relaxed mb-8">
            If your agreement involved a furnace, water heater, air conditioner, air purifier, or similar home equipment, these protections likely apply to you.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-4">
            What the 2018 Amendments Protect You From
          </h2>
          <p className="text-charcoal text-lg leading-relaxed mb-4">
            The amendments established that certain practices by HVAC companies are unlawful. When these practices are present in the formation or execution of your agreement, the agreement itself may be unenforceable — meaning it may never have been valid at all.
          </p>
          <p className="text-charcoal text-lg leading-relaxed mb-8">
            There are six key areas where these agreements commonly breach the Act:
          </p>
        </div>
      </section>

      {/* Six Breaches Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-10">
            <img
              src="/images/infographic-six-grounds.jpg"
              alt="Infographic showing six grounds for having your HVAC agreement set aside — only one is enough"
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div className="space-y-8">
            {breaches.map((breach) => (
              <div
                key={breach.number}
                className="flex gap-5 md:gap-6 bg-cream rounded-lg p-6 md:p-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-deep-teal text-white flex items-center justify-center font-heading font-bold text-xl">
                    {breach.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark-teal text-xl mb-3">
                    {breach.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed text-[17px]">
                    {breach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means For You */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-6">
            What This Means for You
          </h2>
          <p className="text-charcoal text-lg leading-relaxed mb-6">
            If one or more of these six breaches applies to your agreement, you may be entitled to:
          </p>
          <ul className="space-y-3 mb-8">
            {entitlements.map((item, index) => (
              <li key={index} className="flex gap-3 text-charcoal text-lg">
                <svg className="w-6 h-6 text-deep-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal text-lg leading-relaxed font-medium bg-light-teal rounded-lg p-6">
            The law does not require you to prove all six breaches. A single breach may be sufficient to have the agreement set aside.
          </p>
        </div>
      </section>

      {/* Why Most Homeowners Have Not Acted */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-6">
            Why Most Homeowners Have Not Acted — Until Now
          </h2>
          <div className="space-y-4 text-charcoal text-lg leading-relaxed">
            <p>
              If the law is this clear, why are so many homeowners still paying into these agreements?
            </p>
            <p>
              The answer is cost. Pursuing resolution through the traditional legal system means hiring a lawyer, paying by the hour, and navigating a process that can stretch over months. For most families, the legal fees alone make it financially impractical to challenge the agreement — even when they know the law is on their side.
            </p>
            <p>
              The HVAC companies know this. It is the foundation of their business model. They count on the gap between what the law says and what homeowners can afford to do about it.
            </p>
            <p>
              Oakwell Partners was built to close that gap. Our digitised process handles evidence gathering, document preparation, and negotiations at a fraction of the cost of traditional legal services, making it realistic for every Ontario homeowner to assert their rights.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Find Out If These Breaches Apply to Your Agreement"
        subtitle="It costs nothing to ask. A free, confidential conversation is all it takes."
        ctaText="Get My Free Review"
      />
    </>
  );
}
