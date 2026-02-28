import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HowWeHelp from "@/components/sections/HowWeHelp";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How We Help",
  description:
    "Learn how Oakwell Partners makes HVAC contract resolution affordable for Ontario homeowners through our digitised process, evidence gathering, and expert negotiation.",
};

export default function HowWeHelpPage() {
  return (
    <>
      <Hero
        title="How Oakwell Makes Resolution Affordable"
        subtitle="We developed a digitised process that handles the most time-consuming and costly parts of contract resolution — at a fraction of what it would cost to do it the traditional way."
      />

      <HowWeHelp />

      <CTASection
        title="Ready to Take the First Step?"
        subtitle="A free, confidential conversation is all it takes. We will review your situation and tell you honestly what your options are."
        ctaText="Get My Free Review"
      />
    </>
  );
}
