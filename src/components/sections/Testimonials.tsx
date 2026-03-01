const testimonials = [
  {
    quote:
      "I was embarrassed that I had signed without reading everything carefully. Oakwell never made me feel that way. They were kind, patient, and took care of everything. I kept my furnace and the lien was removed.",
    name: "Margaret R.",
    location: "Barrie, ON",
  },
  {
    quote:
      "My mother was so stressed about the registration on her house. Oakwell handled it all — the evidence gathering, the letters, the negotiations — and kept us updated every step of the way. She kept her equipment and is finally free of those payments.",
    name: "James K.",
    location: "Whitby, ON",
  },
  {
    quote:
      "What surprised me was how affordable it was. I had called two lawyers before Oakwell and both quoted me fees I simply could not pay. Oakwell's process brought the cost down to something I could manage. And I kept my water heater.",
    name: "Patricia D.",
    location: "Kingston, ON",
  },
  {
    quote:
      "They treated my situation with real care. I felt like I was talking to family, not a company. They explained the 2018 amendments to me in a way I could actually understand.",
    name: "George M.",
    location: "Kitchener, ON",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-light-teal py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-teal text-center mb-10">
          From People Who Have Been Where You Are
        </h2>

        <div className="max-w-5xl mx-auto mb-10 overflow-hidden rounded-lg">
          <img
            src="/images/couple-home.jpg"
            alt="Illustration of a senior couple relaxing at home after resolving their HVAC contract"
            className="w-full max-h-72 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-sm border-l-4 border-warm-gold"
            >
              <svg
                className="w-8 h-8 text-warm-gold/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-charcoal leading-relaxed mb-4 text-[17px]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="text-deep-teal font-semibold">
                — {testimonial.name},{" "}
                <span className="text-medium-grey font-normal">
                  {testimonial.location}
                </span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
