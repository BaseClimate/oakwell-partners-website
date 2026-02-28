import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "gold" | "primary" | "white";
  trustIndicators?: string[];
  variant?: "home" | "page";
  altText?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = "/get-started",
  ctaVariant = "gold",
  trustIndicators,
  variant = "page",
  altText,
}: HeroProps) {
  if (variant === "home") {
    return (
      <section className="relative bg-gradient-to-br from-dark-teal via-deep-teal to-dark-teal overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(199, 148, 74, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(232, 244, 244, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {subtitle}
              </p>
            )}
            {altText && (
              <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {altText}
              </p>
            )}
            {ctaText && (
              <div className="mb-8">
                <Button href={ctaHref} variant={ctaVariant} size="large">
                  {ctaText}
                </Button>
              </div>
            )}
            {trustIndicators && (
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-cream/80 text-sm">
                {trustIndicators.map((indicator, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-warm-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {indicator}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-dark-teal to-deep-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-cream/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {ctaText && (
            <div className="mt-8">
              <Button href={ctaHref} variant={ctaVariant} size="large">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
