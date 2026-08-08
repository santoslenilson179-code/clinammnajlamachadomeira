import React from 'react';
import { X, Settings2, RotateCcw, Save, Sparkles } from 'lucide-react';
import { ClinicConfig } from '../types';
import { defaultConfig } from '../data/clinicData';

interface ClinicConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  onChangeConfig: (newConfig: ClinicConfig) => void;
}

export const ClinicConfigDrawer: React.FC<ClinicConfigDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
}) => {
  if (!isOpen) return null;

  const handleChange = (field: keyof ClinicConfig, value: string) => {
    const updated = { ...config, [field]: value };
    if (field === 'whatsappNumber') {
      updated.whatsappClean = value.replace(/\D/g, '');
    }
    onChangeConfig(updated);
  };

  const handleReset = () => {
    onChangeConfig(defaultConfig);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#533A1C] text-[#FAF7F2] w-full max-w-md h-full shadow-2xl border-l border-[#D2B785]/30 p-6 flex flex-col justify-between overflow-y-auto animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2 text-[#D2B785]">
              <Settings2 className="w-5 h-5" />
              <h3 className="font-serif text-lg font-medium text-[#FAF7F2]">
                Personalizar Clínica
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#DBD0BF] hover:text-[#FAF7F2] rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-[#DBD0BF] font-light mb-6">
            Altere os dados da profissional e da clínica em tempo real para visualizar a landing page adaptada.
          </p>

          {/* Form Fields */}
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Nome da Dentista / Clínica
              </label>
              <input
                type="text"
                value={config.dentistName}
                onChange={(e) => handleChange('dentistName', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Registro Profissional (CRO)
              </label>
              <input
                type="text"
                value={config.cro}
                onChange={(e) => handleChange('cro', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Cidade & Estado
              </label>
              <input
                type="text"
                value={config.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Endereço Completo
              </label>
              <input
                type="text"
                value={config.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Número do WhatsApp (com DDD)
              </label>
              <input
                type="text"
                value={config.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Telefone Fixo
              </label>
              <input
                type="text"
                value={config.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Instagram (@usuario)
              </label>
              <input
                type="text"
                value={config.instagram}
                onChange={(e) => handleChange('instagram', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>

            <div>
              <label className="block text-[#DBD0BF] font-semibold mb-1">
                Slogan / Headline Principal
              </label>
              <textarea
                rows={2}
                value={config.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#352310] border border-[#D2B785]/30 text-[#FAF7F2] focus:outline-none focus:border-[#D2B785]"
              />
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2.5 border border-[#D2B785]/40 text-[#DBD0BF] hover:text-[#FAF7F2] rounded-lg text-xs flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#D2B785] text-[#533A1C] font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-md"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Aplicar Mudanças</span>
          </button>
        </div>
      </div>
    </div>
  );
};
