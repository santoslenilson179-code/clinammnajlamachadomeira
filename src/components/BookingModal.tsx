import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Sparkles, Send } from 'lucide-react';
import { ClinicConfig, Treatment, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  treatments: Treatment[];
  selectedTreatmentId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  config,
  treatments,
  selectedTreatmentId,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    phone: '',
    treatmentId: selectedTreatmentId || 'avaliacao',
    preferredShift: 'manha',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) return;

    // Build structured message for WhatsApp
    const selectedTreatment = treatments.find((t) => t.id === formData.treatmentId);
    const treatmentName = selectedTreatment ? selectedTreatment.title : 'Avaliação Geral';

    const shiftMap = {
      manha: 'Manhã (08h às 12h)',
      tarde: 'Tarde (13h às 18h)',
      noite: 'Noite / Final de Tarde (18h às 20h)',
    };

    const text = `*NOVA SOLICITAÇÃO DE AVALIAÇÃO ODONTOLÓGICA*%0A%0A` +
      `*Nome:* ${formData.patientName}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Tratamento:* ${treatmentName}%0A` +
      `*Turno de Preferência:* ${shiftMap[formData.preferredShift]}%0A` +
      (formData.notes ? `*Observações:* ${formData.notes}%0A` : '') +
      `%0A_Enviado via site oficial ${config.dentistName}_`;

    const whatsappUrl = `https://wa.me/${config.whatsappClean}?text=${text}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full shadow-2xl border border-[#DBD0BF] relative overflow-hidden text-[#533A1C] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#533A1C] text-[#FAF7F2] p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#D2B785] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Direto</span>
          </div>

          <h3 className="font-serif text-2xl font-normal text-[#FAF7F2]">
            Solicitar Avaliação Odontológica
          </h3>
          <p className="text-xs text-[#DBD0BF] font-light mt-1">
            Preencha os dados abaixo e nossa equipe confirmará seu horário.
          </p>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D2B785]/20 text-[#D2B785] mx-auto flex items-center justify-center border border-[#D2B785]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-xl font-medium text-[#533A1C]">
              Solicitação Enviada com Sucesso!
            </h4>

            <p className="text-[#533A1C]/80 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Você está sendo redirecionado para o nosso WhatsApp oficial. Nossa recepção dará prioridade ao seu agendamento.
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#533A1C] text-[#FAF7F2] text-xs font-bold rounded-full"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Patient Name */}
            <div>
              <label className="block text-xs font-bold text-[#533A1C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D2B785]" />
                Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Dra. Mariana Albuquerque"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#DBD0BF]/20 border border-[#DBD0BF] text-xs text-[#533A1C] focus:outline-none focus:ring-2 focus:ring-[#D2B785] transition-all"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-[#533A1C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D2B785]" />
                WhatsApp para Contato *
              </label>
              <input
                type="tel"
                required
                placeholder="Ex: (48) 99999-8888"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#DBD0BF]/20 border border-[#DBD0BF] text-xs text-[#533A1C] focus:outline-none focus:ring-2 focus:ring-[#D2B785] transition-all"
              />
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-bold text-[#533A1C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D2B785]" />
                Tratamento do Seu Interesse
              </label>
              <select
                value={formData.treatmentId}
                onChange={(e) => setFormData({ ...formData, treatmentId: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#DBD0BF]/20 border border-[#DBD0BF] text-xs text-[#533A1C] focus:outline-none focus:ring-2 focus:ring-[#D2B785] transition-all"
              >
                {treatments.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.number} — {t.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Shift Preference */}
            <div>
              <label className="block text-xs font-bold text-[#533A1C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D2B785]" />
                Turno de Preferência
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'manha', label: 'Manhã' },
                  { key: 'tarde', label: 'Tarde' },
                  { key: 'noite', label: 'Final de Tarde' },
                ].map((shift) => (
                  <button
                    type="button"
                    key={shift.key}
                    onClick={() =>
                      setFormData({ ...formData, preferredShift: shift.key as any })
                    }
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      formData.preferredShift === shift.key
                        ? 'bg-[#533A1C] text-[#FAF7F2] border-[#533A1C]'
                        : 'bg-[#DBD0BF]/20 text-[#533A1C] border-[#DBD0BF] hover:bg-[#DBD0BF]/40'
                    }`}
                  >
                    {shift.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-[#533A1C] uppercase tracking-wider mb-1.5">
                Observações Especiais (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Tenho preferência por atendimento às terças-feiras."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#DBD0BF]/20 border border-[#DBD0BF] text-xs text-[#533A1C] focus:outline-none focus:ring-2 focus:ring-[#D2B785] transition-all"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#D2B785] hover:bg-[#c2a674] text-[#533A1C] font-bold text-xs rounded-full shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Confirmar Agendamento via WhatsApp</span>
            </button>

            <p className="text-[10px] text-[#533A1C]/70 text-center font-medium">
              🔒 Seus dados estão seguros e protegidos de acordo com a LGPD.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
