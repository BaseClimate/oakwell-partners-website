import Link from "next/link";
import Image from "next/image";
import {
  CONTACT,
  FOOTER_NAV,
  LEGAL_LINKS,
  SITE_TAGLINE,
  SITE_DESCRIPTOR,
  LEGAL_DISCLAIMER,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-teal text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-white.svg"
              alt="Oakwell Partners"
              width={180}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-cream/90 text-sm mt-2">{SITE_DESCRIPTOR}</p>
            <p className="text-warm-gold font-heading font-semibold text-lg mt-4 italic">
              {SITE_TAGLINE}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Navigate
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {FOOTER_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-cream/80 hover:text-warm-gold transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-cream/80 hover:text-warm-gold transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2 text-cream/80 hover:text-warm-gold transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT.email}
              </a>
              <p className="flex items-center gap-2 text-cream/80 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {CONTACT.hours}
              </p>
              <p className="flex items-center gap-2 text-cream/80 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {CONTACT.serviceArea}
              </p>
            </div>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 hover:text-warm-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-cream/60 text-xs leading-relaxed max-w-4xl">
            {LEGAL_DISCLAIMER}
          </p>
          <p className="text-cream/60 text-xs mt-4">
            &copy; {new Date().getFullYear()} Oakwell Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
