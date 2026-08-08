import React from 'react';
import { CalendarCheck, Search, FileText, Sparkles } from 'lucide-react';
import { processSteps } from '../data/clinicData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [CalendarCheck, Search, FileText, Sparkles];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden border-b border-[#DBD0BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#533A1C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Jornada do Paciente</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#533A1C]">
            Sua jornada em <span className="font-serif italic text-[#533A1C] underline decoration-[#D2B785] underline-offset-4">4 etapas simples</span>.
          </h2>

          <p className="text-[#533A1C]/80 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Desde o primeiro agendamento até a conclusão do seu tratamento, conduzimos cada fase com absoluta clareza.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          
          {/* Connecting Line behind steps on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D2B785]/20 via-[#D2B785] to-[#D2B785]/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((item, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];

              return (
                <div
                  key={item.step}
                  className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#DBD0BF] shadow-sm hover:shadow-xl hover:border-[#D2B785] transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon + Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#533A1C] text-[#D2B785] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="font-serif text-3xl font-bold text-[#D2B785]">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-lg font-medium text-[#533A1C] mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#533A1C]/80 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#DBD0BF] text-[10px] font-mono text-[#533A1C]/70 uppercase tracking-widest font-semibold">
                    Etapa {item.step} de 04
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
