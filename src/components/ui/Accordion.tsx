"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 min-h-[44px] hover:bg-gray-50 transition-colors duration-300"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <span className="font-heading font-semibold text-dark-teal text-lg pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-deep-teal flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            id={`accordion-panel-${index}`}
            role="region"
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-5 text-charcoal leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
