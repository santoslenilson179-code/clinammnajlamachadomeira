import React, { useState, useEffect, useRef } from 'react';
import { Play, Instagram, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Pause } from 'lucide-react';

interface ReelItem {
  id: string;
  code: string;
  url: string;
  embedUrl: string;
  title: string;
  description: string;
}

const reelsData: ReelItem[] = [
  {
    id: 'reel-1',
    code: 'DW-FEdUgLJH',
    url: 'https://www.instagram.com/clinammdranajla/reel/DW-FEdUgLJH/',
    embedUrl: 'https://www.instagram.com/reel/DW-FEdUgLJH/embed',
    title: 'Transformação & Resultados',
    description: 'Acompanhe os bastidores e os detalhes dos nossos procedimentos estéticos.',
  },
  {
    id: 'reel-2',
    code: 'DZH6Vr3RB3k',
    url: 'https://www.instagram.com/clinammdranajla/reel/DZH6Vr3RB3k/',
    embedUrl: 'https://www.instagram.com/reel/DZH6Vr3RB3k/embed',
    title: 'Atendimento Humanizado',
    description: 'Conforto e acolhimento do momento em que você chega até o fim do tratamento.',
  },
  {
    id: 'reel-3',
    code: 'DYQdqqkATMw',
    url: 'https://www.instagram.com/clinammdranajla/reel/DYQdqqkATMw/',
    embedUrl: 'https://www.instagram.com/reel/DYQdqqkATMw/embed',
    title: 'Dicas de Saúde Bucal',
    description: 'Orientações exclusivas da Dra. Najla para manter um sorriso impecável.',
  },
];

export const ReelsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Repeat items for continuous infinite scroll effect
  const displayReels = [...reelsData, ...reelsData];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reelsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section id="reels" className="py-20 sm:py-28 bg-[#533A1C] text-[#FAF7F2] relative overflow-hidden border-b border-[#D2B785]/30">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D2B785]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#352310]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#D2B785] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vídeos & Bastidores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] tracking-tight leading-tight">
            Acompanhe nossa rotina no <span className="italic text-[#D2B785]">Instagram</span>
          </h2>

          <p className="text-[#DBD0BF] text-sm sm:text-base leading-relaxed">
            Confira nossas transformações, bastidores dos tratamentos e conteúdos exclusivos postados diretamente no Reels.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6 px-2">
            <div className="flex items-center gap-2 text-xs text-[#D2B785] font-bold uppercase tracking-widest">
              <Instagram className="w-4 h-4 text-[#D2B785]" />
              <span>@clinammdranajla</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-white/10 border border-[#D2B785]/30 hover:bg-[#D2B785]/20 text-[#FAF7F2] transition-colors text-xs flex items-center gap-1.5"
                title={isAutoPlaying ? "Pausar carrossel" : "Iniciar carrossel automático"}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#D2B785]" /> : <Play className="w-3.5 h-3.5 text-[#D2B785]" />}
                <span className="hidden sm:inline">{isAutoPlaying ? 'Pausar' : 'Autoplay'}</span>
              </button>

              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#D2B785]/20 hover:bg-[#D2B785] text-[#FAF7F2] hover:text-[#533A1C] transition-all transform active:scale-95 border border-[#D2B785]/40"
                aria-label="Vídeo anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#D2B785]/20 hover:bg-[#D2B785] text-[#FAF7F2] hover:text-[#533A1C] transition-all transform active:scale-95 border border-[#D2B785]/40"
                aria-label="Próximo vídeo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Grid / Carousel View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {reelsData.map((reel, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={reel.id}
                  className={`flex flex-col bg-[#352310] rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl ${
                    isActive
                      ? 'border-[#D2B785] ring-2 ring-[#D2B785]/40 scale-[1.02]'
                      : 'border-[#D2B785]/30 hover:border-[#D2B785]/60'
                  }`}
                >
                  {/* Embedded Instagram Reel */}
                  <div className="relative aspect-[9/16] bg-black/40 overflow-hidden group/reel">
                    <iframe
                      src={reel.embedUrl}
                      className="w-full h-full border-0"
                      allowTransparency={true}
                      allow="encrypted-media"
                      scrolling="no"
                      title={reel.title}
                    />

                    {/* Direct Link Overlay Badge */}
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-[#533A1C]/90 backdrop-blur-md text-[#FAF7F2] text-[11px] font-medium px-3 py-1.5 rounded-full border border-[#D2B785]/40 flex items-center gap-1.5 hover:bg-[#D2B785] hover:text-[#533A1C] hover:border-[#D2B785] transition-all z-20"
                    >
                      <span>Ver no Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex flex-col justify-between flex-grow bg-[#352310] border-t border-[#D2B785]/20">
                    <div>
                      <h3 className="font-serif text-lg text-[#FAF7F2] font-semibold mb-1">
                        {reel.title}
                      </h3>
                      <p className="text-xs text-[#DBD0BF] leading-relaxed">
                        {reel.description}
                      </p>
                    </div>

                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#533A1C] hover:bg-[#D2B785] text-[#FAF7F2] hover:text-[#533A1C] text-xs font-semibold tracking-wide transition-all border border-[#D2B785]/30 hover:border-[#D2B785]"
                    >
                      <Instagram className="w-4 h-4 text-[#D2B785] group-hover:text-[#533A1C]" />
                      <span>Abrir Reel Completo</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {reelsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#D2B785]'
                    : 'w-2 bg-[#DBD0BF]/30 hover:bg-[#DBD0BF]/60'
                }`}
                aria-label={`Ir para o vídeo ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Profile Banner */}
        <div className="mt-14 text-center">
          <a
            href="https://www.instagram.com/clinammdranajla/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-medium text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>Siga @clinammdranajla no Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
