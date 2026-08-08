import React, { useState } from 'react';
import { Sparkles, MoveHorizontal, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BeforeAfterCase } from '../types';

interface BeforeAfterSectionProps {
  cases: BeforeAfterCase[];
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ cases }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const activeCase = cases[activeTab] || cases[0];

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden border-b border-[#DBD0BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#533A1C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Transformações Reais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#533A1C]">
            Resultados que valorizam o <span className="font-serif italic text-[#533A1C] underline decoration-[#D2B785] underline-offset-4">seu sorriso</span>.
          </h2>

          <p className="text-[#533A1C]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Arraste o divisor para comparar o estado inicial e o resultado final obtido com planejamento estético personalizado.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {cases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === idx
                  ? 'bg-[#533A1C] text-[#FAF7F2] shadow-md border border-[#D2B785]/40'
                  : 'bg-[#FAF7F2] text-[#533A1C] hover:bg-[#DBD0BF]/30 border border-[#DBD0BF]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-3xl p-4 sm:p-6 shadow-xl border border-[#DBD0BF]">
          
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#DBD0BF] pb-3">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#D2B785] tracking-wider font-bold">
                {activeCase.category}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#533A1C]">
                {activeCase.title}
              </h3>
            </div>
            <p className="text-xs text-[#533A1C] font-mono bg-[#DBD0BF]/30 px-3 py-1.5 rounded-md border border-[#DBD0BF] font-semibold">
              {activeCase.details}
            </p>
          </div>

          {/* Slider Canvas Frame */}
          <div
            className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-inner border border-[#DBD0BF]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Image (Full background) */}
            <img
              src={activeCase.afterImg}
              alt="Depois do tratamento"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-[#533A1C]/90 backdrop-blur-md text-[#FAF7F2] text-xs font-bold px-3 py-1.5 rounded-full border border-[#D2B785]/40 shadow-md">
              DEPOIS (Resultado)
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeCase.beforeImg}
                alt="Antes do tratamento"
                className="absolute top-0 bottom-0 left-0 h-full max-w-none object-cover object-center"
                style={{ width: '100%', height: '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                ANTES (Inicial)
              </div>
            </div>

            {/* Divider Line & Scrub Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#533A1C] border-2 border-[#FAF7F2] text-[#D2B785] shadow-xl flex items-center justify-center transform -translate-x-1/2">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Description & Instruction */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#533A1C]/80">
            <p className="text-[#533A1C]/80 italic">
              "{activeCase.description}"
            </p>

            <div className="flex items-center gap-1.5 text-[#533A1C] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#D2B785]" />
              <span>Arraste para os lados para visualizar</span>
            </div>
          </div>

        </div>

        {/* Medical Notice / Disclaimer */}
        <div className="mt-8 text-center">
          <p className="inline-flex items-center justify-center gap-1.5 text-xs text-[#533A1C]/70 font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Resultados podem variar de acordo com as características biológicas e anatômicas de cada caso.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
