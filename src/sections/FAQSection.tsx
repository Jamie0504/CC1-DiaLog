import { useState } from 'react';
import { faqItems } from '../data/faqData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-stone-50">
      <div className="section-container">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center mx-auto">
          Quick answers to common questions about SteadyPlate.
        </p>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, i) => (
            <div key={i} className="card p-0 overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-sm text-slate-900 pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-brand-500 text-lg shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
