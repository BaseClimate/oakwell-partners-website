const testimonials = [
  {
    quote:
      "I was embarrassed that I had signed without reading everything carefully. Oakwell never made me feel that way. They were kind, patient, and took care of everything. I kept my furnace and the lien was removed.",
    name: "Margaret R.",
    location: "Barrie, ON",
    image: "/images/portrait-margaret.jpg",
    imageAlt: "Portrait of Margaret R.",
  },
  {
    quote:
      "My mother was so stressed about the registration on her house. Oakwell handled it all — the evidence gathering, the letters, the negotiations — and kept us updated every step of the way. She kept her equipment and is finally free of those payments.",
    name: "James K.",
    location: "Whitby, ON",
    image: "/images/portrait-james-mother.jpg",
    imageAlt: "Portrait of James K. with his mother",
  },
  {
    quote:
      "What surprised me was how affordable it was. I had called two lawyers before Oakwell and both quoted me fees I simply could not pay. Oakwell's process brought the cost down to something I could manage. And I kept my water heater.",
    name: "Patricia D.",
    location: "Kingston, ON",
    image: "/images/portrait-patricia.jpg",
    imageAlt: "Portrait of Patricia D.",
  },
  {
    quote:
      "We were panicking about losing our buyer. Oakwell moved quickly and kept us calm throughout. We closed on time and even recovered some of our costs.",
    name: "Robert & Susan T.",
    location: "Peterborough, ON",
    image: "/images/portrait-robert-susan.jpg",
    imageAlt: "Portrait of Robert and Susan T.",
  },
  {
    quote:
      "I had been paying for six years and thought there was nothing I could do. Oakwell showed me that the law was on my side all along. Even when it went to court, they made it manageable.",
    name: "Dorothy W.",
    location: "Oshawa, ON",
    image: "/images/portrait-dorothy.jpg",
    imageAlt: "Portrait of Dorothy W.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-light-teal py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-teal text-center mb-10">
          From People Who Have Been Where You Are
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 md:p-8 shadow-sm border-l-4 border-warm-gold${
                index === testimonials.length - 1 && testimonials.length % 2 !== 0
                  ? " md:col-span-2 md:max-w-lg md:mx-auto"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <span className="text-deep-teal font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="text-medium-grey text-sm block">
                    {testimonial.location}
                  </span>
                </div>
              </div>
              <blockquote className="text-charcoal leading-relaxed text-[17px]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
