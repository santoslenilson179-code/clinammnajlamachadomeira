import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#533A1C] text-[#FAF7F2] relative border-b border-[#D2B785]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2]">
            Perguntas <span className="font-serif italic text-[#D2B785]">Frequentes</span>.
          </h2>

          <p className="text-[#DBD0BF] text-sm sm:text-base font-light leading-relaxed">
            Respostas objetivas para ajudar você a planejar seu tratamento com total tranquilidade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#352310] border border-[#D2B785]/30 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#FAF7F2] hover:text-[#D2B785] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#D2B785] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D2B785] shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-[#DBD0BF] text-xs sm:text-sm font-light leading-relaxed border-t border-[#D2B785]/20 animate-fadeIn">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
