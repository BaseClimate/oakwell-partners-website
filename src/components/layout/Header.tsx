"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CONTACT } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      {/* Top bar with email */}
      <div className="bg-dark-teal text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <a
            href={CONTACT.emailHref}
            className="flex items-center gap-1.5 hover:text-warm-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{CONTACT.email}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Oakwell Partners Home">
            <Image
              src="/images/logo.svg"
              alt="Oakwell Partners"
              width={200}
              height={36}
              className="h-8 md:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-[15px] transition-colors ${
                    isActive
                      ? "text-deep-teal border-b-2 border-warm-gold pb-1"
                      : "text-charcoal hover:text-deep-teal"
                  }`}
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-deep-teal text-white font-semibold rounded-lg hover:bg-dark-teal transition-colors min-h-[44px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-deep-teal min-w-[44px] min-h-[44px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.16)+2.25rem)] bg-white z-40">
          <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-lg py-3 border-b border-gray-100 transition-colors ${
                    isActive
                      ? "text-deep-teal border-l-3 border-l-warm-gold pl-3"
                      : "text-charcoal hover:text-deep-teal"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/get-started"
              className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-deep-teal text-white font-semibold rounded-lg hover:bg-dark-teal transition-colors text-center min-h-[44px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2 text-deep-teal font-semibold text-lg py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
