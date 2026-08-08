import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Settings2, Instagram } from 'lucide-react';
import { ClinicConfig } from '../types';

interface NavbarProps {
  config: ClinicConfig;
  onOpenBooking: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenBooking, onOpenConfig }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'A Clínica', href: '#clinica' },
    { name: 'Vídeos', href: '#reels' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-[#DBD0BF] ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-4 shadow-sm text-[#533A1C]'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-6 text-[#533A1C]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {config.logoImage && (
            <img
              src={config.logoImage}
              alt="Logo Clínica"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-[#D2B785] group-hover:border-[#533A1C] transition-all shadow-sm"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-serif tracking-tight font-bold text-[#533A1C] group-hover:text-[#D2B785] transition-colors leading-tight">
              {config.dentistName}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#D2B785] font-bold">
              {config.cro} • Odontologia de Alta Performance
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs tracking-widest uppercase font-semibold text-[#533A1C]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#D2B785] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D2B785] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <button
            onClick={onOpenConfig}
            title="Personalizar dados da clínica"
            className="p-2 text-[#533A1C] hover:bg-[#DBD0BF]/30 transition-colors text-xs flex items-center gap-1.5 rounded-lg"
          >
            <Settings2 className="w-4 h-4 text-[#D2B785]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider hidden xl:inline">Editar</span>
          </button>

          <a
            href={`https://instagram.com/${config.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Acessar Instagram ${config.instagram}`}
            className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-[#533A1C] hover:text-[#FAF7F2] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center gap-1.5 border border-[#DBD0BF] hover:border-transparent transition-all bg-[#FAF7F2] rounded-lg shadow-xs"
          >
            <Instagram className="w-3.5 h-3.5 text-[#D2B785] group-hover:text-white" />
            <span className="hidden md:inline">Instagram</span>
          </a>

          <a
            href={`https://wa.me/${config.whatsappClean}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.`}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir WhatsApp (77) 98111-5285"
            className="px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-[#533A1C] hover:text-[#FAF7F2] hover:bg-emerald-600 flex items-center gap-1.5 border border-[#DBD0BF] hover:border-emerald-600 transition-all bg-[#FAF7F2] rounded-lg shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 hover:text-white" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#533A1C] text-[#FAF7F2] hover:bg-[#352310] text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center gap-2 rounded-lg border border-[#D2B785]/30"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Agendar</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 bg-[#533A1C] text-[#FAF7F2] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 rounded-md"
          >
            <Calendar className="w-3 h-3 text-[#D2B785]" />
            <span>Agendar</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#533A1C] hover:bg-[#DBD0BF]/40 focus:outline-none rounded-md"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#DBD0BF] px-6 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 text-xs tracking-wider uppercase font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#533A1C] hover:text-[#D2B785] py-2 border-b border-[#DBD0BF]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#533A1C] text-[#FAF7F2] font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-lg"
            >
              <Calendar className="w-4 h-4 text-[#D2B785]" />
              <span>Agendar Minha Consulta</span>
            </button>

            <a
              href={`https://wa.me/${config.whatsappClean}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-lg shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Falar no WhatsApp (77) 98111-5285</span>
            </a>

            <a
              href={`https://instagram.com/${config.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-lg shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram {config.instagram}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfig();
              }}
              className="w-full py-2 text-xs text-[#533A1C]/70 hover:text-[#533A1C] flex items-center justify-center gap-1.5"
            >
              <Settings2 className="w-3.5 h-3.5 text-[#D2B785]" />
              <span>Personalizar Informações da Página</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

