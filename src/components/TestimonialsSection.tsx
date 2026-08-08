import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#533A1C] text-[#FAF7F2] relative border-b border-[#D2B785]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Depoimentos Reais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2]">
            Experiências de quem confiou em <span className="font-serif italic text-[#D2B785]">nosso trabalho</span>.
          </h2>

          <p className="text-[#DBD0BF] text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            A satisfação e o bem-estar dos nossos pacientes são o nosso maior indicador de excelência.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#352310] border border-[#D2B785]/30 hover:border-[#D2B785] rounded-2xl p-8 relative flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-[#D2B785]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D2B785] text-[#D2B785]" />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-[#D2B785]/40" />
                </div>

                {/* Text */}
                <p className="text-[#FAF7F2] text-sm font-light leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-4 border-t border-[#D2B785]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-medium text-[#FAF7F2] flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D2B785]" />
                  </h4>
                  <p className="text-xs text-[#D2B785] font-mono mt-0.5 font-semibold">{item.procedure}</p>
                </div>
                <span className="text-[10px] text-[#DBD0BF] font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
