import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, Shield, HeartHandshake, Sparkles, Phone, Instagram, MapPin, Clock, Navigation } from 'lucide-react';
import { ClinicConfig } from '../types';

interface HeroProps {
  config: ClinicConfig;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenBooking }) => {
  return (
    <section className="relative bg-[#FAF7F2] text-[#533A1C] pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#DBD0BF]">
      {/* Decorative vertical CRO label */}
      <div className="hidden xl:block absolute bottom-24 left-8 transform -rotate-90 origin-left pointer-events-none z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#533A1C]/60 font-bold">
          {config.cro} • EXCELÊNCIA ODONTOLÓGICA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Bold Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Champagne Gold Badge */}
            <div className="inline-block px-3.5 py-1.5 border border-[#D2B785] bg-[#D2B785]/15 text-[#533A1C] text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase rounded-full">
              {config.titleBadge}
            </div>

            {/* Dramatic Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[0.95] text-[#533A1C] tracking-tight">
              Seu sorriso merece um <br />
              <span className="italic text-[#533A1C] underline decoration-[#D2B785] underline-offset-8">cuidado à altura.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-[#533A1C]/80 max-w-xl leading-relaxed font-light">
              Tratamentos odontológicos personalizados, tecnologia avançada e um atendimento que coloca você e sua autoestima em primeiro lugar.
            </p>

            {/* Address, Hours & Location Code card */}
            <div className="space-y-2 text-xs text-[#533A1C]/90 font-medium bg-[#DBD0BF]/25 p-3.5 rounded-xl border border-[#DBD0BF] shadow-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D2B785] shrink-0 mt-0.5" />
                <span>{config.address}</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-[#533A1C]/80 pt-1 border-t border-[#DBD0BF]/50">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{config.workingHours}</span>
                </div>

                {config.plusCode && (
                  <div className="flex items-center gap-1.5 text-[#533A1C]/80">
                    <Navigation className="w-3.5 h-3.5 text-[#D2B785] shrink-0" />
                    <span>Plus Code: <strong className="font-semibold">{config.plusCode}</strong></span>
                  </div>
                )}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 sm:px-8 py-4 bg-[#533A1C] text-[#FAF7F2] text-xs sm:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 group transition-all hover:bg-[#352310] shadow-xl rounded-xl border border-[#D2B785]/40"
              >
                <Calendar className="w-4 h-4 text-[#D2B785]" />
                <span>Agendar Consulta</span>
                <span className="transform transition-transform group-hover:translate-x-1 text-[#D2B785]">→</span>
              </button>

              <a
                href={`https://wa.me/${config.whatsappClean}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp (77) 98111-5285</span>
              </a>

              <a
                href={`https://instagram.com/${config.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram {config.instagram}</span>
              </a>
            </div>

            {/* Trust Bullets below buttons */}
            <div className="pt-6 border-t border-[#DBD0BF] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#533A1C]/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D2B785] shrink-0" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D2B785] shrink-0" />
                <span>Tecnologia de Ponta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D2B785] shrink-0" />
                <span>Conforto Absoluto</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Arched Visual Frame & Dentist Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Arched Frame with Champagne Gold Accent Rim */}
              <div className="p-1.5 sm:p-2 bg-gradient-to-b from-[#D2B785] via-[#DBD0BF] to-[#FAF7F2] rounded-t-full shadow-2xl">
                <div className="aspect-[4/5] bg-[#DBD0BF] rounded-t-full border-[8px] sm:border-[12px] border-[#FAF7F2] shadow-inner overflow-hidden relative group isolate">
                  <img
                    src={config.heroImage}
                    alt={config.dentistName}
                    className="w-full h-full object-cover object-center rounded-t-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient overlay in Marrom Profundo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#533A1C]/90 via-[#533A1C]/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] space-y-1">
                    <p className="font-serif text-xl sm:text-2xl italic text-[#FAF7F2]">{config.dentistName}</p>
                    <p className="text-xs uppercase tracking-widest text-[#D2B785] font-bold">{config.cro} • {config.city}</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge with Logo */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FAF7F2] p-4 sm:p-5 shadow-xl border border-[#DBD0BF] max-w-[240px] z-10 flex items-center gap-3 rounded-2xl">
                {config.logoImage && (
                  <img
                    src={config.logoImage}
                    alt="Logo Dra. Najla Machado Meira"
                    className="w-12 h-12 rounded-full object-cover border border-[#D2B785] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D2B785] font-bold mb-0.5">Clínica Odontológica</p>
                  <p className="text-xs sm:text-sm font-serif font-bold leading-snug text-[#533A1C]">
                    {config.dentistName}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

