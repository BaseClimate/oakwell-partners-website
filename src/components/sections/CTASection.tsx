import Button from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "teal" | "cream" | "white";
}

export default function CTASection({
  title = "Ready to Find Out Where You Stand?",
  subtitle = "A free, confidential conversation is all it takes. We will review your situation, explain whether any of the five key breaches apply, and tell you honestly what your options are. No pressure, no obligation.",
  ctaText = "Get My Free Review",
  ctaHref = "/get-started",
  variant = "teal",
}: CTASectionProps) {
  const variants = {
    teal: "bg-gradient-to-br from-dark-teal to-deep-teal text-white",
    cream: "bg-cream text-charcoal",
    white: "bg-white text-charcoal",
  };

  return (
    <section className={`py-16 md:py-24 ${variants[variant]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:gap-12 max-w-6xl mx-auto">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <img
              src="/images/woman-phone.jpg"
              alt="Illustration of a woman calling Oakwell Partners and feeling relieved"
              className={`w-full rounded-lg ${
                variant === "teal" ? "ring-2 ring-white/20" : ""
              }`}
              loading="lazy"
            />
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <h2
              className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${
                variant === "teal" ? "text-white" : "text-dark-teal"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-lg leading-relaxed mb-8 ${
                variant === "teal" ? "text-white" : "text-charcoal"
              }`}
            >
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Button
                href={ctaHref}
                variant={variant === "teal" ? "gold" : "gold"}
                size="large"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
