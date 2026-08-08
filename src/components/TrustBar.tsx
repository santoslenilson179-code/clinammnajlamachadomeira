import React from 'react';
import { ClinicConfig } from '../types';

interface TrustBarProps {
  config?: ClinicConfig;
}

export const TrustBar: React.FC<TrustBarProps> = ({ config }) => {
  const trustItems = [
    {
      number: "01. ESTÉTICA",
      title: "Design do Sorriso",
      desc: "Facetas de porcelana e clareamento a laser."
    },
    {
      number: "02. IMPLANTES",
      title: "Reabilitação Oral",
      desc: "Cirurgia guiada por computador de alta precisão."
    },
    {
      number: "03. ORTODONTIA",
      title: "Alinhadores Invisíveis",
      desc: "Invisalign e soluções modernas de alinhamento."
    },
    {
      number: "04. TECNOLOGIA",
      title: "Escaneamento 3D",
      desc: "Planejamento virtual e conforto absoluto."
    }
  ];

  return (
    <section className="bg-[#533A1C] text-[#FAF7F2] py-10 px-6 sm:px-12 border-t border-[#D2B785]/30 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-center">
          {trustItems.map((item, idx) => (
            <div key={idx} className="space-y-1.5 border-l border-[#D2B785]/40 pl-4 lg:pl-6">
              <p className="text-[10px] text-[#D2B785] uppercase tracking-[0.2em] font-bold">{item.number}</p>
              <h4 className="text-sm font-semibold text-[#FAF7F2] tracking-wide">{item.title}</h4>
              <p className="text-xs font-light text-[#DBD0BF] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

