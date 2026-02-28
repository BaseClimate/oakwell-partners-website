import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Common Questions",
  description:
    "Answers to frequently asked questions about Oakwell Partners, Ontario HVAC contract resolution, the 2018 Consumer Protection Act amendments, and our process.",
};

const faqItems = [
  {
    question: "What are the 2018 amendments you keep referring to?",
    answer:
      "In 2018, Ontario amended its Consumer Protection Act to include stronger protections for homeowners who enter into agreements for items deemed essential to the home, such as furnaces, water heaters, and air systems. These amendments specifically address the high-pressure door-to-door sales tactics that had been used for years to lock homeowners into unfair long-term contracts. They provide grounds for having these agreements declared invalid.",
  },
  {
    question: "What does Oakwell Partners actually do?",
    answer:
      "We are a homeowner advocacy and case management service. We review your HVAC agreement against the five key breaches under the 2018 amendments, gather your evidence, prepare all documentation, and act as your authorised agent in negotiations with the finance company and the HVAC contractor. When legal action is required, we assign a licensed legal representative to your case. We manage the entire process from start to resolution.",
  },
  {
    question: "How are you able to offer this at a lower cost than a law firm?",
    answer:
      "We built a digitised platform that handles the most time-consuming parts of contract resolution — evidence gathering, document preparation, and case organisation. This technology allows us to do in hours what traditionally takes weeks of billable lawyer time. When a licensed legal representative is needed, they receive a case that is already fully prepared, so their involvement is efficient and focused.",
  },
  {
    question: "Is the initial consultation really free?",
    answer:
      "Yes. Your first conversation with us is completely free and confidential. We review your situation, explain whether any of the five breaches apply, and give you an honest assessment of your options. There is absolutely no obligation to proceed.",
  },
  {
    question: "Do I really get to keep my equipment?",
    answer:
      "Yes. Under Ontario law, when an agreement is resolved due to breaches of the Consumer Protection Act, you keep the equipment that was installed in your home. This applies to furnaces, water heaters, air systems, and other home equipment. This is one of the clearest provisions in the law and it applies in every case we handle.",
  },
  {
    question: "Can I also get damages and court costs back?",
    answer:
      "In many cases, yes. When breaches of the Act are established, the law allows for the recovery of damages and, where court proceedings are involved, court costs. We will give you an honest assessment of what is likely in your specific situation during your free consultation.",
  },
  {
    question: "Is my contract with the HVAC company or a finance company?",
    answer:
      "In most cases, your agreement is actually held by a finance company, not the HVAC contractor that installed the equipment. The contractor typically installs the system and then assigns the agreement to a finance company that collects your payments and holds the registration against your property. This is why calling the installer often leads nowhere. Oakwell addresses both the finance company and the HVAC contractor as part of your resolution, because dealing with both is necessary for a complete outcome.",
  },
  {
    question: "What if the company contacts me during the process?",
    answer:
      "Once you are working with us, we handle all communication with the other parties as your authorised agent. You do not need to speak with them directly. If they contact you, simply let us know and we will take it from there.",
  },
  {
    question: "I feel embarrassed that I signed. Is that normal?",
    answer:
      "Completely. And we want you to know that there is absolutely nothing to be embarrassed about. These agreements are specifically designed to be confusing, and the sales tactics used are deliberately high-pressure. Thousands of Ontario homeowners are in the same position. Reaching out is a sign of strength, not weakness.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Every situation is different. Many cases are resolved within a few weeks through negotiation. Others, particularly those that require legal proceedings, may take several months. Our digitised process is designed to move things as quickly as possible. We will give you a realistic estimate based on your situation and keep you updated at every stage.",
  },
  {
    question: "Are you a law firm?",
    answer:
      "No. We are a homeowner advocacy and case management service. We are not a law firm and we do not provide legal advice. We act as your agent, prepare your case, manage negotiations, and coordinate with fully licensed, independent legal professionals when legal action is required. This model is what allows us to make the process affordable for Ontario families.",
  },
];

export default function CommonQuestionsPage() {
  return (
    <>
      <Hero
        title="Answers to the Questions We Hear Most Often"
        subtitle="We understand you may have questions before reaching out. Here are honest answers to the ones we hear most frequently. If your question is not here, please call us. We are always happy to talk."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Call us. We are happy to chat. There is no obligation and no silly questions."
        ctaText="Get in Touch"
      />
    </>
  );
}
