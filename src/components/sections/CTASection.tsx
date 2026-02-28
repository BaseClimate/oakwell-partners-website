import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showPhone?: boolean;
  variant?: "teal" | "cream" | "white";
}

export default function CTASection({
  title = "Ready to Find Out Where You Stand?",
  subtitle = "A free, confidential conversation is all it takes. We will review your situation, explain whether any of the five key breaches apply, and tell you honestly what your options are. No pressure, no obligation.",
  ctaText = "Get My Free Review",
  ctaHref = "/get-started",
  showPhone = true,
  variant = "teal",
}: CTASectionProps) {
  const variants = {
    teal: "bg-gradient-to-br from-dark-teal to-deep-teal text-white",
    cream: "bg-cream text-charcoal",
    white: "bg-white text-charcoal",
  };

  return (
    <section className={`py-16 md:py-24 ${variants[variant]}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${
            variant === "teal" ? "text-white" : "text-dark-teal"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg leading-relaxed mb-8 ${
            variant === "teal" ? "text-cream/90" : "text-charcoal"
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={ctaHref}
            variant={variant === "teal" ? "gold" : "gold"}
            size="large"
          >
            {ctaText}
          </Button>
        </div>
        {showPhone && (
          <p
            className={`mt-6 text-base ${
              variant === "teal" ? "text-cream/80" : "text-medium-grey"
            }`}
          >
            Or call us directly at{" "}
            <a
              href={CONTACT.phoneHref}
              className={`font-semibold hover:underline ${
                variant === "teal" ? "text-warm-gold" : "text-deep-teal"
              }`}
            >
              {CONTACT.phone}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
