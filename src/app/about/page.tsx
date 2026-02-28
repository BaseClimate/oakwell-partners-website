import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Oakwell Partners is an Ontario homeowner advocacy service helping families resolve unfair HVAC rental and financing agreements with care, expertise, and commitment to fair outcomes.",
};

const values = [
  {
    title: "Warmth",
    description:
      "We treat every client the way we would want our own parents treated. We listen, we explain, and we never rush.",
  },
  {
    title: "Honesty",
    description:
      "We will always be upfront about your situation, your options, and what to expect. No inflated promises.",
  },
  {
    title: "Thoroughness",
    description:
      "Every case receives our full attention. We do not cut corners.",
  },
  {
    title: "Accessibility",
    description:
      "We are always available by phone. We speak in plain language. We make sure you understand every step.",
  },
];

const services = [
  {
    title: "Evidence gathering",
    description:
      "Our platform walks homeowners through collecting the documentation needed, then organises it into a complete case file.",
  },
  {
    title: "Document preparation",
    description:
      "Demand letters, formal correspondence, and legal documentation are generated through our system, reducing the hours of manual work that drive up traditional legal costs.",
  },
  {
    title: "Agent representation",
    description:
      "Oakwell acts as your authorised agent throughout the process. We communicate with finance companies and HVAC contractors directly, so you do not have to.",
  },
  {
    title: "Legal representation when needed",
    description:
      "When formal legal action is required, we assign a licensed legal representative to your case. Because the case is already prepared, their involvement is focused and cost-effective.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Who We Are"
        subtitle="Oakwell Partners is an Ontario homeowner advocacy service. We help families across the province resolve unfair HVAC rental and financing agreements with care, expertise, and a commitment to fair outcomes."
      />

      {/* Why We Exist */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-6">
            Why We Exist
          </h2>
          <div className="space-y-4 text-charcoal text-lg leading-relaxed">
            <p>
              For years, a troubling pattern has affected homeowners across Ontario. Sales representatives have visited homes and, using high-pressure tactics and misleading claims, convinced homeowners to sign long-term agreements for furnaces, water heaters, and air systems. The total costs of these agreements often add up to many times the actual value of the equipment. Registrations are placed against homeowners&apos; properties, often without their full understanding.
            </p>
            <p>
              In 2018, Ontario amended its Consumer Protection Act to address exactly these practices. The law now provides clear protections for homeowners who were pressured into these agreements.
            </p>
            <p>
              But here is the problem the law alone does not solve: even with strong protections on the books, the cost of pursuing resolution through the traditional legal system remains out of reach for most families. Lawyers charge by the hour. Evidence needs to be gathered, documents prepared, negotiations conducted. The expense is prohibitive.
            </p>
            <p className="text-deep-teal font-semibold text-xl">
              That is why Oakwell Partners exists. We looked at this gap between what the law provides and what homeowners can afford, and we built a solution.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-4 text-center">
            What Makes Us Different
          </h2>
          <p className="text-charcoal text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
            We developed a digitised process that handles the most time-consuming and expensive parts of contract resolution:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-cream rounded-lg p-6 md:p-8"
              >
                <h3 className="font-heading font-bold text-deep-teal text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-charcoal text-lg leading-relaxed text-center max-w-3xl mx-auto mt-8">
            This approach makes it realistic for every Ontario homeowner to assert their rights under the 2018 amendments — regardless of their budget.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-10 text-center">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading font-bold text-deep-teal text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Distinctions */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-6">
            Important Distinctions
          </h2>
          <p className="text-charcoal text-lg leading-relaxed">
            Oakwell Partners is not a law firm. We are a homeowner advocacy and case management service. We prepare cases, act as your agent, manage negotiations, and coordinate with licensed legal professionals when legal proceedings are required. This structure is what allows us to deliver results at a cost that makes sense for Ontario families.
          </p>
        </div>
      </section>

      <CTASection
        title="Get in Touch"
        subtitle="Let us walk you through your options. A free, confidential conversation is all it takes."
        ctaText="Get My Free Review"
      />
    </>
  );
}
