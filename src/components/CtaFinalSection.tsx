import React from 'react';
import { Calendar, Phone, ArrowRight, Sparkles, ShieldCheck, Instagram, MapPin } from 'lucide-react';
import { ClinicConfig } from '../types';

interface CtaFinalProps {
  config: ClinicConfig;
  onOpenBooking: () => void;
}

export const CtaFinalSection: React.FC<CtaFinalProps> = ({ config, onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#533A1C] text-[#FAF7F2] relative overflow-hidden border-b border-[#D2B785]/30">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D2B785]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#D2B785]" />
          <span className="text-xs font-bold tracking-widest text-[#FAF7F2] uppercase">
            ENTRE EM CONTATO • LIVRAMENTO - BA
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#FAF7F2] max-w-4xl mx-auto">
          Seu próximo sorriso começa com <span className="font-serif italic text-[#D2B785]">uma decisão</span>.
        </h2>

        {/* Subtitle */}
        <p className="text-[#DBD0BF] text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Para agendar sua consulta entre em contato diretamente pelo WhatsApp ou acompanhe nossos casos clínicos no Instagram.
        </p>

        {/* Address Card */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-[#352310]/80 border border-[#D2B785]/30 text-xs text-[#DBD0BF] space-y-2 text-center">
          <div className="flex items-center justify-center gap-1.5 font-bold text-[#FAF7F2]">
            <MapPin className="w-4 h-4 text-[#D2B785] shrink-0" />
            <span>{config.address}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-[#DBD0BF] pt-1 border-t border-[#D2B785]/20">
            <span className="text-emerald-400 font-semibold">{config.workingHours}</span>
            {config.plusCode && <span>Plus Code: <strong className="text-[#FAF7F2]">{config.plusCode}</strong></span>}
          </div>
        </div>

        {/* Tri-CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#D2B785] hover:bg-[#c2a674] text-[#533A1C] font-bold text-xs uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${config.whatsappClean}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp (77) 98111-5285</span>
          </a>

          <a
            href={`https://instagram.com/${config.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all text-center flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram {config.instagram}</span>
          </a>
        </div>

        {/* Additional trust note */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-[#DBD0BF]">
          <ShieldCheck className="w-4 h-4 text-[#D2B785]" />
          <span>Atendimento humanizado e rigorosamente pontual • {config.city}</span>
        </div>

      </div>
    </section>
  );
};

