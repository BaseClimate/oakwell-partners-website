"use client";

import { useState, useRef, useEffect } from "react";

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
        <AccordionPanel
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function AccordionPanel({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 min-h-[44px] hover:bg-gray-50 transition-colors duration-300"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
      >
        <span className="font-heading font-semibold text-dark-teal text-lg pr-4">
          {item.question}
        </span>
        <svg
          className={`w-5 h-5 text-deep-teal flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: height, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-6 pb-5 text-charcoal leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
