import React from 'react';
import { Award, GraduationCap, Heart, Sparkles, Check } from 'lucide-react';
import { ClinicConfig } from '../types';

interface AboutSectionProps {
  config: ClinicConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden border-b border-[#DBD0BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Photo & Decorative Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background accent block */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#533A1C]/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D2B785]/20 rounded-full blur-2xl -z-10" />

              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#DBD0BF] bg-white p-2">
                <img
                  src={config.heroImage}
                  alt={config.dentistName}
                  className="w-full h-[450px] lg:h-[520px] object-cover object-center rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Small Floating Seal */}
              <div className="absolute -bottom-6 left-6 right-6 bg-[#533A1C] text-[#FAF7F2] p-4 rounded-xl shadow-lg border border-[#D2B785]/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {config.logoImage && (
                    <img
                      src={config.logoImage}
                      alt="Logo Clínica"
                      className="w-10 h-10 rounded-full object-cover border border-[#D2B785] shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <p className="font-serif text-base font-semibold text-[#D2B785] leading-snug">{config.dentistName}</p>
                    <p className="text-[11px] text-[#DBD0BF]">{config.cro} • Responsável Técnica</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#D2B785]/20 flex items-center justify-center text-[#D2B785] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#533A1C] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#D2B785]" />
              <span>Conheça a Profissional</span>
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#533A1C] leading-tight">
              Odontologia que une <span className="font-serif italic text-[#533A1C] underline decoration-[#D2B785] underline-offset-4">precisão</span>, cuidado e propósito.
            </h2>

            {/* Description Text */}
            <p className="text-[#533A1C]/80 text-base leading-relaxed">
              Com dedicação constante à atualização científica e paixão pela estética natural, a Dra. Najla Machado Meira constrói cada plano de tratamento focando na simetria, funcionalidade e no respeito à anatomia única de cada paciente.
            </p>

            <p className="text-[#533A1C]/80 text-base leading-relaxed">
              Através de um ambiente acolhedor e tecnologia odontológica de ponta, o objetivo é transformar a visita ao dentista em um momento de cuidado pessoal, segurança e resultados perfeitamente harmoniosos.
            </p>

            {/* Quote Block Highlight */}
            <div className="p-6 rounded-2xl bg-[#533A1C] text-[#FAF7F2] border-l-4 border-[#D2B785] shadow-md relative overflow-hidden">
              <p className="font-serif italic text-base sm:text-lg text-[#FAF7F2] leading-relaxed">
                “Cada sorriso possui uma história. Nosso trabalho é cuidar dela com precisão, naturalidade e atenção aos detalhes.”
              </p>
              <p className="mt-3 text-xs font-mono text-[#D2B785] tracking-wider uppercase">— {config.dentistName}</p>
            </div>

            {/* Specialties & Credentials Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DBD0BF] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#533A1C] font-semibold text-sm">
                  <GraduationCap className="w-4 h-4 text-[#D2B785]" />
                  <span>Especialidades & Foco</span>
                </div>
                <ul className="text-xs text-[#533A1C]/80 space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#D2B785]" /> Implante & Prótese Dentária</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#D2B785]" /> Estética Dental, Ortodontia & Periodontia</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#D2B785]" /> DTM, Endodontia & Odontopediatria</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DBD0BF] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#533A1C] font-semibold text-sm">
                  <Award className="w-4 h-4 text-[#D2B785]" />
                  <span>Diferenciais Técnicos</span>
                </div>
                <ul className="text-xs text-[#533A1C]/80 space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#D2B785]" /> Planejamento Digital do Sorriso (DSD)</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#D2B785]" /> Scanner Intraoral Tridimensional</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#D2B785]" /> Protocolo com Mínimo Desgaste</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
