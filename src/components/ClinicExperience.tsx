import React from 'react';
import { Sparkles, MapPin, Coffee, Shield, Wifi } from 'lucide-react';
import { ClinicConfig } from '../types';

interface ClinicExperienceProps {
  config: ClinicConfig;
}

export const ClinicExperience: React.FC<ClinicExperienceProps> = ({ config }) => {
  return (
    <section id="clinica" className="py-20 lg:py-28 bg-[#533A1C] text-[#FAF7F2] relative overflow-hidden border-b border-[#D2B785]/30">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D2B785]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Infraestrutura & Conforto</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2]">
            Um ambiente pensado para <span className="font-serif italic text-[#D2B785]">você</span>.
          </h2>

          <p className="text-[#DBD0BF] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Cada detalhe foi pensado para proporcionar uma experiência mais confortável, segura e acolhedora desde o primeiro contato.
          </p>
        </div>

        {/* Gallery Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Image: Reception */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-[#D2B785]/30 bg-[#352310] min-h-[300px] sm:min-h-[400px]">
            <img
              src={config.receptionImage}
              alt="Recepção da Clínica"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#352310] via-transparent to-transparent opacity-85" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#533A1C]/90 backdrop-blur-md border border-[#D2B785]/30">
              <h3 className="font-serif text-xl font-medium text-[#FAF7F2] mb-1">
                Lounge & Recepção Acolhedora
              </h3>
              <p className="text-[#DBD0BF] text-xs font-light">
                Ambiente silencioso, aromatizado e com atendimento personalizado para você se sentir em casa.
              </p>
            </div>
          </div>

          {/* Secondary Stacked Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Dentistry Brand Card - Doctor's Name & Logo Only */}
            <div className="relative group rounded-2xl overflow-hidden border border-[#D2B785]/40 bg-[#352310] min-h-[220px] sm:min-h-[250px] flex flex-col justify-center items-center p-6 text-center">
              <img
                src={config.treatmentRoomImage}
                alt={config.dentistName}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352310]/85 via-[#352310]/50 to-[#352310]/65" />

              {/* Logo & Doctor Name ONLY */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-5 sm:p-6 rounded-2xl bg-[#533A1C]/85 backdrop-blur-md border border-[#D2B785]/40 shadow-2xl max-w-xs sm:max-w-sm w-full">
                {config.logoImage && (
                  <img
                    src={config.logoImage}
                    alt={`Logo ${config.dentistName}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#D2B785] shadow-lg mb-3"
                    referrerPolicy="no-referrer"
                  />
                )}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF7F2] leading-tight">
                  {config.dentistName}
                </h3>
                <p className="text-xs text-[#D2B785] font-semibold uppercase tracking-widest mt-1">
                  {config.cro}
                </p>
              </div>
            </div>

            {/* Amenities & Location Bar */}
            <div className="p-6 rounded-2xl bg-[#352310]/90 border border-[#D2B785]/30 flex flex-col justify-between space-y-4">
              <h4 className="text-xs font-mono font-bold text-[#D2B785] uppercase tracking-wider">
                Mimos & Comodidades da Clínica
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#FAF7F2]">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#D2B785]" />
                  <span>Cafés Nespresso & Chás</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-[#D2B785]" />
                  <span>Wi-Fi de Alta Velocidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D2B785]" />
                  <span>Estacionamento Privativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D2B785]" />
                  <span>Localização Central Nobre</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D2B785]/20 text-xs text-[#DBD0BF]">
                <p>{config.address}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
