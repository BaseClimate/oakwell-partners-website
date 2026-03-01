const breaches = [
  {
    number: 1,
    title: "They charged you far more than the equipment is worth",
    description:
      "Under the amended Act, it is unlawful to charge a homeowner a total cost that is grossly disproportionate to the actual value of the equipment. A furnace worth $4,000 should not cost you $25,000 over the life of a contract. If yours does, this is a breach.",
  },
  {
    number: 2,
    title: "They contacted you first",
    description:
      "If a salesperson knocked on your door or called you by phone to initiate the sale, the agreement may be unenforceable. The 2018 amendments place strict restrictions on unsolicited sales of essential home equipment. If they came to you, you did not come to them — that matters.",
  },
  {
    number: 3,
    title: "They promised energy savings that never appeared",
    description:
      "Many homeowners were told their new equipment would dramatically reduce their energy bills. If those savings never materialised, the representations made during the sale may constitute a breach of the Act.",
  },
  {
    number: 4,
    title: "They promised maintenance but did not deliver",
    description:
      "If your agreement included regular maintenance and servicing, and that service has not been provided as promised, this failure to perform is another ground for resolution under the Act.",
  },
  {
    number: 5,
    title: "The equipment was installed incorrectly",
    description:
      "If the equipment was improperly installed — leading to performance issues, safety concerns, or additional costs — this may also constitute a breach of the agreement and the Act.",
  },
  {
    number: 6,
    title: "They promised rebates you never received",
    description:
      "If the salesperson promised government rebates, manufacturer rebates, or other financial incentives that never materialised, these unfulfilled promises may constitute a misrepresentation under the Act. Many homeowners agreed to their contracts partly based on rebate promises that were never honoured.",
  },
];

export default function SixBreaches() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-teal mb-6">
            Six Reasons Your Agreement May Not Be Enforceable
          </h2>
          <p className="text-charcoal text-lg leading-relaxed">
            The 2018 amendments to Ontario&apos;s Consumer Protection Act created specific protections for homeowners who enter into agreements for items deemed essential to the home, including furnaces, water heaters, and air systems. If any of the following apply to your situation, your agreement may have been invalid from the moment it was signed:
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <img
            src="/images/infographic-six-grounds.jpg"
            alt="Infographic showing six grounds for having your HVAC agreement set aside — only one is enough"
            className="w-full rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
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
                <h3 className="font-heading font-bold text-dark-teal text-xl mb-2">
                  {breach.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {breach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-light-teal rounded-lg p-6 md:p-8">
          <p className="text-charcoal leading-relaxed text-lg">
            <strong className="text-dark-teal">The important thing to understand:</strong> if any of these six breaches apply, you may be in a position to argue that the agreement was never valid in the first place. You may be entitled to have the contract set aside, the property registration removed, and in some cases, you may be able to request damages and court costs. And regardless of the outcome, you keep your equipment. The law is clear on this.
          </p>
        </div>
      </div>
    </section>
  );
}
