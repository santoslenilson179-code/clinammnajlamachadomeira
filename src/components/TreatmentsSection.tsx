import React, { useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  Sun,
  Wand2,
  Smile,
  ShieldCheck,
  Maximize2,
  Layers,
  Activity,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import { Treatment } from '../types';
import { TreatmentModal } from './TreatmentModal';

interface TreatmentsSectionProps {
  treatments: Treatment[];
  onOpenBookingForTreatment: (treatmentId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Sparkles,
  Sun,
  Wand2,
  Smile,
  ShieldCheck,
  Maximize2,
  Layers,
  Activity,
  Heart,
};

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  treatments,
  onOpenBookingForTreatment,
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  return (
    <section id="tratamentos" className="py-20 lg:py-28 bg-[#533A1C] text-[#FAF7F2] relative border-b border-[#D2B785]/30">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D2B785]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D2B785]/20 border border-[#D2B785]/40 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
            <span>Procedimentos de Alto Padrão</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2]">
            Tratamentos pensados para <span className="font-serif italic text-[#D2B785]">você</span>.
          </h2>

          <p className="text-[#DBD0BF] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Planejamento minucioso, tecnologia tridimensional e materiais nobres para alcançar a perfeita união entre funcionalidade bucal e estética facial.
          </p>
        </div>

        {/* Treatments Grid - 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((item) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedTreatment(item)}
                className="group relative bg-[#352310]/80 hover:bg-[#352310] border border-[#D2B785]/30 hover:border-[#D2B785] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#D2B785] tracking-wider px-2.5 py-1 bg-[#D2B785]/15 rounded-md border border-[#D2B785]/30">
                      {item.number}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-[#533A1C] group-hover:bg-[#D2B785] text-[#D2B785] group-hover:text-[#533A1C] flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-xl font-medium text-[#FAF7F2] group-hover:text-[#D2B785] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#DBD0BF] text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#D2B785]/20 flex items-center justify-between text-xs font-semibold text-[#D2B785] group-hover:text-[#FAF7F2] transition-colors">
                  <span>Saiba mais detalhes</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Detailed View */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onOpenBookingForTreatment={onOpenBookingForTreatment}
      />
    </section>
  );
};
