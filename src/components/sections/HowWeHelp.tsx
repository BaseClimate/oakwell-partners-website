import Button from "@/components/ui/Button";

const steps = [
  {
    number: "1",
    title: "A free conversation",
    description:
      "You call us or fill out our form. We listen to your situation, review the basics of your agreement, and give you an honest assessment of where you stand. This is always free and completely confidential. No obligation to proceed.",
  },
  {
    number: "2",
    title: "We build your case",
    description:
      "If you decide to move forward, our team gathers the necessary evidence, reviews your agreement against the five key breaches under the 2018 amendments, and prepares all required documentation using our digitised platform.",
  },
  {
    number: "3",
    title: "We go to work on your behalf",
    description:
      "As your agent, we send formal demand letters, negotiate with the finance company and HVAC contractor, and pursue resolution. Many cases are resolved at this stage without court involvement.",
  },
  {
    number: "4",
    title: "Legal action if needed",
    description:
      "If the other party refuses to resolve, we assign a licensed legal representative to your case. Because your case is already fully prepared, this step is efficient and cost-effective. We pursue contract cancellation, removal of the property registration, and where appropriate, damages and court costs.",
  },
  {
    number: "5",
    title: "Resolution",
    description:
      "Your agreement is set aside. The registration is removed from your property. You keep your equipment. You move on with your life.",
  },
];

const services = [
  {
    title: "Evidence gathering",
    description:
      "We walk you through exactly what documentation is needed and help you collect it. Our system organises everything so nothing is missed.",
  },
  {
    title: "Document preparation",
    description:
      "Our platform generates the formal correspondence, demand letters, and case documentation that would otherwise require hours of a lawyer's time.",
  },
  {
    title: "Acting as your agent",
    description:
      "Oakwell Partners acts as your authorised agent throughout the process. We communicate directly with the finance company and the HVAC contractor on your behalf. You do not have to deal with them.",
  },
  {
    title: "Negotiation",
    description:
      "We handle negotiations with the other parties, drawing on our experience with hundreds of similar cases across Ontario to pursue the best possible outcome for you.",
  },
  {
    title: "Legal representation when needed",
    description:
      "When formal legal action is required, we assign a licensed legal representative to your case. Because we have already done the heavy lifting of evidence gathering and case preparation, their involvement is focused and efficient — which keeps your costs down.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How We Make Resolution Affordable */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-teal mb-6">
            How Oakwell Makes Resolution Affordable
          </h2>
          <p className="text-charcoal text-lg leading-relaxed">
            Here is the core problem: even when the law is squarely on your side, pursuing resolution through the traditional legal system is prohibitively expensive for most families. Lawyers charge by the hour, and the process of gathering evidence, preparing documents, and negotiating with finance companies takes time and specialised knowledge.
          </p>
          <p className="text-charcoal text-lg leading-relaxed mt-4">
            Oakwell Partners was built specifically to solve this. We developed a digitised process that handles the most time-consuming and costly parts of contract resolution — at a fraction of what it would cost to do it the traditional way.
          </p>
        </div>

        {/* What Our Process Does */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-heading text-2xl font-bold text-dark-teal mb-8 text-center">
            What Our Process Does For You
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="font-heading font-bold text-deep-teal text-lg mb-2">
                  {service.title}
                </h4>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-charcoal text-lg leading-relaxed mt-8 text-center max-w-3xl mx-auto">
            This is why Oakwell exists. We did not just join an existing system. We built a new one that makes it realistic for every Ontario homeowner to assert their rights, regardless of their budget.
          </p>
        </div>

        {/* Step by Step */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-8 text-center">
            What to Expect, Step by Step
          </h3>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-warm-gold text-white flex items-center justify-center font-heading font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-dark-teal text-lg mb-1">
                    {step.title}
                  </h4>
                  <p className="text-charcoal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/get-started" variant="gold" size="large">
            Find Out Where You Stand — It&apos;s Free
          </Button>
        </div>
      </div>
    </section>
  );
}
