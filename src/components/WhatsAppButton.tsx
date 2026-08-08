import React, { useState } from 'react';
import { MessageCircle, Instagram, Phone, X, Sparkles } from 'lucide-react';
import { ClinicConfig } from '../types';

interface WhatsAppButtonProps {
  config: ClinicConfig;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ config }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${config.whatsappClean}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.`;
  const instagramUrl = `https://instagram.com/${config.instagram.replace('@', '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Floating Popover Greeting */}
      {popoverOpen && (
        <div className="bg-[#533A1C] text-[#FAF7F2] p-4 rounded-2xl shadow-2xl border border-[#D2B785]/40 max-w-xs animate-scaleUp text-xs relative">
          <button
            onClick={() => setPopoverOpen(false)}
            className="absolute top-2 right-2 text-[#DBD0BF] hover:text-[#FAF7F2]"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-[#D2B785]">{config.dentistName}</span>
          </div>

          <p className="text-[#DBD0BF] text-[11px] leading-relaxed mb-3">
            Atendimento presencial em Livramento - BA! Clique abaixo para falar conosco via WhatsApp ou acompanhar nossos casos no Instagram:
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center rounded-lg flex items-center justify-center gap-2 text-xs shadow transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp (77) 98111-5285</span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-center rounded-lg flex items-center justify-center gap-2 text-xs shadow transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Ver Instagram {config.instagram}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2.5">
        {/* Instagram Floating Trigger */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-[#FAF7F2] relative group"
          title="Siga no Instagram"
          aria-label="Acessar o perfil do Instagram"
        >
          <Instagram className="w-6 h-6" />
          <span className="absolute right-14 bg-[#533A1C] text-[#FAF7F2] text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity border border-[#D2B785]/30 pointer-events-none">
            Instagram {config.instagram}
          </span>
        </a>

        {/* WhatsApp Floating Trigger */}
        <div className="relative group">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setPopoverOpen(true)}
            className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-[#FAF7F2] relative"
            aria-label="Abrir conversa no WhatsApp"
            title="Agendar via WhatsApp (77) 98111-5285"
          >
            <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
            
            {/* Active online notification badge */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#533A1C] rounded-full animate-ping" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#533A1C] rounded-full" />
          </a>
        </div>
      </div>

    </div>
  );
};

