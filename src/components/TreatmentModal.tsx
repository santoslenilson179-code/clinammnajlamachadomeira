import React from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onOpenBookingForTreatment: (treatmentId: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onOpenBookingForTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DBD0BF] relative animate-scaleUp text-[#533A1C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-[#533A1C] text-[#FAF7F2] p-6 sm:p-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D2B785]/20 rounded-full blur-2xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 text-[#D2B785] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span>Tratamento {treatment.number}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {treatment.duration}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF7F2]">
            {treatment.title}
          </h3>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2B785] mb-2">
              Visão Geral
            </h4>
            <p className="text-[#533A1C] text-sm sm:text-base leading-relaxed">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Ideal For */}
          <div className="p-4 rounded-xl bg-[#DBD0BF]/20 border border-[#DBD0BF]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#533A1C] flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
              Indicação Principal
            </h4>
            <p className="text-xs sm:text-sm text-[#533A1C]/80 font-medium">
              {treatment.idealFor}
            </p>
          </div>

          {/* Benefits List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2B785] mb-3">
              Diferenciais & Benefícios deste Tratamento
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatment.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#DBD0BF]/15 border border-[#DBD0BF]/40"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D2B785] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#533A1C] leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer / Action */}
          <div className="pt-4 border-t border-[#DBD0BF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#533A1C]/70 text-center sm:text-left">
              Avaliação prévia individual recomendada para diagnóstico.
            </p>

            <button
              onClick={() => {
                onClose();
                onOpenBookingForTreatment(treatment.id);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#D2B785] hover:bg-[#c2a674] text-[#533A1C] font-bold text-xs rounded-full shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#533A1C]" />
              <span>Agendar Avaliação Para Este Tratamento</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
