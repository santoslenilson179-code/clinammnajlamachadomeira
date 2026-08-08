import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Mail, Clock, ShieldCheck, X, Navigation } from 'lucide-react';
import { ClinicConfig } from '../types';

interface FooterProps {
  config: ClinicConfig;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenBooking }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-[#533A1C] text-[#FAF7F2] pt-16 pb-8 border-t border-[#D2B785]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D2B785]/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              {config.logoImage && (
                <img
                  src={config.logoImage}
                  alt="Logo Clínica"
                  className="w-12 h-12 rounded-full object-cover border border-[#D2B785] shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
              )}
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2] tracking-tight leading-tight block">
                  {config.dentistName}
                </span>
                <p className="text-[10px] text-[#D2B785] font-bold tracking-[0.2em] uppercase mt-0.5">
                  {config.cro} • Odontologia de Alta Performance
                </p>
              </div>
            </a>

            <p className="text-xs text-[#DBD0BF] font-light leading-relaxed max-w-sm">
              Odontologia estética e reabilitadora de alto padrão. Tratamentos personalizados com planejamento digital, tecnologia avançada e acolhimento humanizado.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`https://instagram.com/${config.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D2B785] text-[#D2B785] hover:text-[#533A1C] flex items-center justify-center transition-colors border border-[#D2B785]/30"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${config.whatsappClean}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D2B785] text-[#D2B785] hover:text-[#533A1C] flex items-center justify-center transition-colors border border-[#D2B785]/30"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif text-sm text-[#FAF7F2] font-semibold uppercase tracking-wider mb-3">Atendimento & Contato</h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D2B785] shrink-0 mt-0.5" />
              <span className="text-[#DBD0BF]">{config.address}</span>
            </div>

            {config.plusCode && (
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#D2B785] shrink-0" />
                <span className="text-[#DBD0BF]">Plus Code: <strong className="text-[#FAF7F2]">{config.plusCode}</strong></span>
              </div>
            )}

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D2B785] shrink-0" />
              <span className="text-[#DBD0BF]">{config.phone} • WhatsApp: {config.whatsappNumber}</span>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#D2B785] shrink-0 mt-0.5" />
              <span className="text-[#DBD0BF]">{config.workingHours}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <h4 className="font-serif text-sm text-[#FAF7F2] font-semibold uppercase tracking-wider mb-3">Navegação</h4>
            <ul className="space-y-2 text-[#D2B785]">
              <li><a href="#sobre" className="hover:text-[#FAF7F2] transition-colors">Sobre a Dentista</a></li>
              <li><a href="#diferenciais" className="hover:text-[#FAF7F2] transition-colors">Diferenciais</a></li>
              <li><a href="#clinica" className="hover:text-[#FAF7F2] transition-colors">Estrutura da Clínica</a></li>
              <li><a href="#reels" className="hover:text-[#FAF7F2] transition-colors">Vídeos & Reels</a></li>
            </ul>
          </div>

          {/* Quick Booking */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm text-[#FAF7F2] font-semibold uppercase tracking-wider mb-2">Agendamentos</h4>
            <p className="text-[11px] text-[#DBD0BF]">
              Solicite seu horário de avaliação diretamente online.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 bg-[#D2B785] hover:bg-[#c2a674] text-[#533A1C] font-bold text-xs uppercase tracking-widest transition-colors text-center rounded-lg shadow-md"
            >
              Agendar Avaliação
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#DBD0BF] gap-4">
          <p>© 2026 — Todos os direitos reservados. {config.dentistName} • {config.cro}</p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#FAF7F2] transition-colors underline"
            >
              Política de Privacidade & Termos
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#D2B785]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Conforme normas do CFO / CRO
            </span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#533A1C] text-[#FAF7F2] rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#D2B785]/40 relative max-h-[80vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 text-[#DBD0BF] hover:text-[#FAF7F2]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-medium text-[#D2B785] mb-4">
              Política de Privacidade & Segurança de Dados
            </h3>

            <div className="text-xs text-[#DBD0BF] space-y-3 leading-relaxed">
              <p>
                A privacidade e o sigilo das informações dos nossos pacientes são prioridade absoluta. Todos os dados coletados neste site através dos formulários de agendamento são utilizados exclusivamente para contato direto e organização de consultas da clínica.
              </p>
              <p>
                <strong className="text-[#FAF7F2]">Tratamento de Dados:</strong> Nenhuma informação pessoal ou registro de saúde é compartilhado com terceiros. Em conformidade com a LGPD (Lei Geral de Proteção de Dados) e o Código de Ética Odontológica.
              </p>
              <p>
                <strong className="text-[#FAF7F2]">Divulgação de Imagens:</strong> As imagens de resultados clínicos exibidas neste site possuem autorização dos respectivos pacientes ou possuem caráter estritamente ilustrativo/educativo.
              </p>
            </div>

            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="mt-6 w-full py-2.5 bg-[#D2B785] text-[#533A1C] font-bold text-xs rounded-lg shadow-md"
            >
              Compreendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
