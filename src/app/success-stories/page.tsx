import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real outcomes from Ontario families who resolved their unfair HVAC contracts with Oakwell Partners. Read how we helped homeowners across the province.",
};

const stories = [
  {
    title: "Margaret's Story: The Water Heater That Cost Five Times Its Value",
    image: "/images/portrait-margaret.jpg",
    imageAlt: "Portrait of Margaret R.",
    client: "Margaret R., retired teacher, Barrie, ON",
    situation:
      "A salesperson knocked on Margaret's door and replaced her working water heater with a new rental unit, promising lower energy bills and free maintenance. The total obligation over the life of the agreement was over $18,000 for equipment worth a fraction of that amount. A lien was registered against her home. The promised energy savings never appeared, and the annual service visit never happened.",
    breaches:
      "Unsolicited door-to-door contact, unconscionable pricing, misrepresented energy savings, and unfulfilled maintenance.",
    process:
      "Our team gathered Margaret's documentation, prepared her case through our digitised platform, and acted as her agent in negotiations with the finance company. The case was resolved without court.",
    outcome:
      "Agreement declared invalid. Property registration removed. Margaret kept her water heater.",
    quote:
      "I was so relieved when it was over. Oakwell handled everything and it cost me a fraction of what a lawyer had quoted. I wish I had called them sooner.",
  },
  {
    title: "James and His Mother: Protecting a Parent",
    image: "/images/portrait-james-mother.jpg",
    imageAlt: "Portrait of James K. with his mother",
    client: "James K., calling on behalf of his mother, Whitby, ON",
    situation:
      "James's mother, who lives alone, was visited by a salesperson claiming to represent a government energy programme. She signed agreements for a new furnace and air purification system with a combined obligation of over $38,000. When James discovered the registration on her home during a refinancing process, he knew something was wrong. The equipment had been installed the day after signing.",
    breaches:
      "Unsolicited contact, misrepresentation of government affiliation, unconscionable pricing, and improper installation practices.",
    process:
      "We managed the entire process as agent for James's mother. Our platform prepared all documentation, and we negotiated directly with both the HVAC contractor and the finance company. James received updates at every stage.",
    outcome:
      "Both agreements set aside. Registration removed. James's mother kept all equipment and is free of the monthly payments.",
    quote:
      "Mum was so worried. Oakwell made it painless for her. They even called her to explain things in a way she could understand. I cannot say enough good things about them.",
  },
  {
    title: "Patricia's Story: The Air System She Never Needed",
    image: "/images/portrait-patricia.jpg",
    imageAlt: "Portrait of Patricia D.",
    client: "Patricia D., retired nurse, Kingston, ON",
    situation:
      "Patricia was told by a door-to-door salesperson that her home's air quality was dangerously poor and that she needed an air filtration system immediately. She signed an agreement with a total obligation of over $7,500 for a unit worth far less. The salesperson claimed the programme was government-subsidised. It was not. No maintenance was ever provided.",
    breaches:
      "Unsolicited door-to-door contact, misrepresentation, unconscionable pricing, and unfulfilled maintenance.",
    process:
      "Our team prepared Patricia's case and acted as her agent. A demand letter was sent. The matter resolved without court involvement.",
    outcome:
      "Agreement declared invalid. Patricia kept her air filtration unit and is free of the monthly obligation.",
    quote:
      "What surprised me was how affordable it was. I had called two lawyers and both quoted me fees I simply could not pay. Oakwell brought it within reach.",
  },
  {
    title: "Robert and Susan: A Couple's Fresh Start",
    image: "/images/portrait-robert-susan.jpg",
    imageAlt: "Portrait of Robert and Susan T.",
    client: "Robert and Susan T., Peterborough, ON",
    situation:
      "The couple signed a contract for a new furnace after being told their current system was unsafe and inefficient. They were promised annual servicing and substantial energy savings. The total obligation was over $28,000. Neither the servicing nor the savings ever materialised. When they tried to sell their home two years later, the registration on their property nearly derailed the sale.",
    breaches:
      "Unsolicited contact, misrepresented energy savings, unfulfilled maintenance, and unconscionable pricing.",
    process:
      "Given the urgency of the pending home sale, we prioritised their case. Our digitised platform allowed us to prepare their documentation rapidly. We assigned a licensed legal representative and pursued an expedited resolution.",
    outcome:
      "Agreement set aside. Registration removed. The couple kept the furnace and completed the sale of their home on schedule. Damages and court costs were also recovered.",
    quote:
      "We were panicking about losing our buyer. Oakwell moved quickly and kept us calm throughout. We closed on time and even recovered some of our costs.",
  },
  {
    title: "Dorothy's Story: A Court Victory After Years of Payments",
    image: "/images/portrait-dorothy.jpg",
    imageAlt: "Portrait of Dorothy W.",
    client: "Dorothy W., retired, Oshawa, ON",
    situation:
      "Dorothy had been paying monthly for a furnace and water heater for over six years when her grandson told her about the 2018 amendments. The salesperson had come to her door uninvited, promised free maintenance and energy savings, and told her the programme was endorsed by her utility company. None of it was true. The total obligation exceeded $32,000 for equipment worth a small fraction of that amount. A registration had been placed on her home without her fully understanding what it meant.",
    breaches:
      "Unsolicited door-to-door contact, unconscionable pricing, misrepresented energy savings, unfulfilled maintenance commitments, and misrepresentation of utility company endorsement.",
    process:
      "When the finance company refused to negotiate, we assigned a licensed legal representative to Dorothy's case. Because our digitised platform had already prepared all documentation and evidence, the legal process was efficient and focused. The matter was resolved through the courts.",
    outcome:
      "Agreement declared invalid by the court. Property registration removed. Dorothy kept all equipment. Damages and court costs were awarded in her favour.",
    quote:
      "I had been paying for six years and thought there was nothing I could do. Oakwell showed me that the law was on my side all along. Even when it went to court, they made it manageable. I only wish I had known sooner.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <Hero
        title="Every Family Has a Story. Here Are a Few With Happy Endings."
        subtitle="Every homeowner we work with has a unique situation, but the relief when it is resolved is universal. These are real outcomes from families across Ontario."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6 md:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-teal mb-2">
                        {story.title}
                      </h2>
                      <p className="text-deep-teal font-medium">{story.client}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">
                        Situation
                      </h3>
                      <p className="text-charcoal leading-relaxed">
                        {story.situation}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">
                        Breaches identified
                      </h3>
                      <p className="text-charcoal leading-relaxed">
                        {story.breaches}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">
                        What we did
                      </h3>
                      <p className="text-charcoal leading-relaxed">
                        {story.process}
                      </p>
                    </div>

                    <div className="bg-light-teal rounded-lg p-6">
                      <h3 className="font-heading font-bold text-deep-teal text-lg mb-2">
                        Outcome
                      </h3>
                      <p className="text-dark-teal font-semibold">
                        {story.outcome}
                      </p>
                    </div>

                    <blockquote className="border-l-4 border-warm-gold pl-6 py-2">
                      <p className="text-charcoal text-[17px] leading-relaxed italic">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your Story Matters Too"
        subtitle="Let us find out what options are available to you. A free, confidential conversation is all it takes."
        ctaText="Get My Free Review"
      />
    </>
  );
}
