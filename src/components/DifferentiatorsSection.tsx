import React from 'react';
import { Sparkles, ShieldCheck, Heart, Cpu, Smile } from 'lucide-react';
import { Differentiator } from '../types';

interface DifferentiatorsProps {
  differentiators: Differentiator[];
}

export const DifferentiatorsSection: React.FC<DifferentiatorsProps> = ({ differentiators }) => {
  const icons = [Heart, Cpu, Smile, ShieldCheck];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden border-b border-[#DBD0BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#533A1C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Nossos Pilares de Atendimento</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#533A1C]">
            Mais do que tratar. <span className="font-serif italic text-[#533A1C] underline decoration-[#D2B785] underline-offset-4">Cuidar de você.</span>
          </h2>

          <p className="text-[#533A1C]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Desenvolvemos um ecossistema de atendimento focado em tranquilidade, acolhimento e precisão técnica do inicio ao fim.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.number}
                className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#DBD0BF] shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between hover:border-[#D2B785]"
              >
                <div>
                  {/* Large Stylized Number Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#D2B785] group-hover:scale-110 transition-transform">
                      {item.number}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-[#533A1C] text-[#D2B785] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#533A1C] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#533A1C]/80 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom line */}
                <div className="mt-6 pt-4 border-t border-[#DBD0BF] flex items-center gap-1.5 text-[11px] font-semibold text-[#533A1C]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D2B785]" />
                  <span>Padrão High-End</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
