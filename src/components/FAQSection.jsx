import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BHAVNAGRI_PRODUCT } from '../data/bhavnagriProduct';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-16 bg-white border-b border-[#E8DCC8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Bhavnagri Gathiya FAQs
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Everything you need to know about our authentic recipe, Sing Tel purity, shelf life, and online delivery across India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {BHAVNAGRI_PRODUCT.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#E5A323] cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#3B2418]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#3B2418] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E5A323]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-[#3B2418]/80 leading-relaxed border-t border-[#E8DCC8]/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}

