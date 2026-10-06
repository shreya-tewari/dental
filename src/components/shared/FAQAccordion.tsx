import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i} className="py-6">
          <button
            id={`faq-question-${i}`}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 text-left group"
          >
            <span className="text-base md:text-lg font-semibold text-black group-hover:text-black-soft transition-colors">
              {item.question}
            </span>
            <span className="flex-shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full border border-border group-hover:border-black transition-colors">
              {openIndex === i ? (
                <Minus className="w-3.5 h-3.5 text-black" />
              ) : (
                <Plus className="w-3.5 h-3.5 text-black" />
              )}
            </span>
          </button>

          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            )}
          >
            <p className="text-body text-sm md:text-base leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
