import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Oakwell Partners — Helping Ontario Homeowners Resolve Unfair HVAC Contracts",
    template: "%s | Oakwell Partners — Ontario HVAC Contract Resolution",
  },
  description:
    "Your HVAC contract may have never been valid. Oakwell Partners helps Ontario homeowners resolve unfair furnace, water heater, and air system contracts affordably. Free consultation.",
  metadataBase: new URL("https://oakwellpartners.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://oakwellpartners.ca",
    siteName: "Oakwell Partners",
    title: "Oakwell Partners — Helping Ontario Homeowners Resolve Unfair HVAC Contracts",
    description:
      "If you were pressured into an HVAC agreement at your front door, Ontario law may be on your side. Free consultation, no obligation.",
    images: [
      {
        url: "https://oakwellpartners.ca/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Oakwell Partners — A fair resolution. A fresh start.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakwell Partners",
    description: "Helping Ontario homeowners resolve unfair HVAC contracts",
    images: ["https://oakwellpartners.ca/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Oakwell Partners",
              description:
                "Helping Ontario homeowners resolve unfair HVAC contracts",
              url: "https://oakwellpartners.ca",
              email: "hello@oakwellpartners.ca",
              areaServed: {
                "@type": "Province",
                name: "Ontario",
                containedInPlace: {
                  "@type": "Country",
                  name: "Canada",
                },
              },
              serviceType: "Homeowner Advocacy",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
