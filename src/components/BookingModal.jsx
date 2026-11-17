import React, { useState, useEffect } from 'react';
import { studioConfig } from '../data/studioData';
import { 
  X, Check, ChevronRight, ChevronLeft, Calendar as CalendarIcon, 
  Clock, ShieldAlert, Sparkles, MessageCircle, AlertCircle 
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialProcedure }) {
  const [step, setStep] = useState(1);
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientNotes, setClientNotes] = useState("");

  // Sincroniza se o modal foi aberto a partir de um card específico
  useEffect(() => {
    if (initialProcedure) {
      setSelectedProcedure(initialProcedure);
      setStep(2); // Pula direto para adicionais se já escolheu o procedimento
    } else {
      setSelectedProcedure(studioConfig.procedures[0]);
      setStep(1);
    }
    setSelectedAddons([]);
    setAcceptedPolicies(false);
  }, [initialProcedure, isOpen]);

  if (!isOpen) return null;

  // Toggle addons
  const handleToggleAddon = (addon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Cálculo total
  const basePrice = selectedProcedure ? selectedProcedure.price : 0;
  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
  const totalPrice = basePrice + addonsTotal;

  // Montar mensagem para o WhatsApp com todos os detalhes
  const generateWhatsAppMessage = () => {
    const addonsText = selectedAddons.length > 0 
      ? selectedAddons.map(a => `• ${a.name} (+R$ ${a.price})`).join('%0A')
      : 'Nenhum adicional';

    const msg = `✨ *NOVO AGENDAMENTO PELO SITE* ✨%0A%0A` +
      `👤 *Cliente:* ${clientName || 'Não informado'}%0A` +
      `📱 *WhatsApp:* ${clientPhone || 'Não informado'}%0A%0A` +
      `💅 *Procedimento:* ${selectedProcedure?.title} (R$ ${basePrice})%0A` +
      `⏱️ *Duração média:* ${selectedProcedure?.duration}%0A%0A` +
      `🎨 *Adicionais Selecionados:*%0A${addonsText}%0A%0A` +
      `💰 *Total Estimado:* R$ ${totalPrice.toFixed(2).replace('.', ',')}%0A` +
      `${clientNotes ? `📝 *Observações:* ${clientNotes}%0A%0A` : '%0A'}` +
      `Gostaria de confirmar a disponibilidade para o horário selecionado na agenda!`;

    return `https://wa.me/${studioConfig.whatsappNumber}?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FDF8F6] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-200 flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-brand-200 flex items-center justify-between sticky top-0 bg-[#FDF8F6]/95 backdrop-blur z-10">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-700">
              Sistema de Agendamento Online
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-brand-900 font-medium">
              Reserve seu Horário Exclusivo
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-brand-700 hover:text-brand-900 hover:bg-brand-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Progress Indicator */}
        <div className="px-6 py-3 bg-brand-100/60 border-b border-brand-200/50 flex items-center justify-between text-xs font-semibold text-brand-800">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-brand-900 font-bold' : 'text-brand-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-brand-800 text-white' : 'bg-brand-200'}`}>1</span>
            <span>Serviço</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-brand-300" />

          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-brand-900 font-bold' : 'text-brand-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-brand-800 text-white' : 'bg-brand-200'}`}>2</span>
            <span>Personalização</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-brand-300" />

          <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-brand-900 font-bold' : 'text-brand-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-brand-800 text-white' : 'bg-brand-200'}`}>3</span>
            <span>Horário & Calendly</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-brand-300" />

          <div className={`flex items-center gap-1.5 ${step >= 4 ? 'text-brand-900 font-bold' : 'text-brand-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 4 ? 'bg-brand-800 text-white' : 'bg-brand-200'}`}>4</span>
            <span>Finalização</span>
          </div>
        </div>

        {/* Modal Body / Steps Content */}
        <div className="p-6 flex-1">
          
          {/* ================= STEP 1: Escolha do Procedimento ================= */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-brand-800">
                Selecione o procedimento principal que você deseja realizar:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {studioConfig.procedures.map((proc) => {
                  const isSelected = selectedProcedure?.id === proc.id;
                  return (
                    <div
                      key={proc.id}
                      onClick={() => setSelectedProcedure(proc)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-brand-700 bg-brand-100 shadow-sm ring-2 ring-brand-700/20' 
                          : 'border-brand-200 bg-white hover:border-brand-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-serif font-medium text-brand-900 text-base">
                          {proc.title}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 bg-brand-800 text-white rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-brand-700 mt-1 line-clamp-2">
                        {proc.description}
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs font-semibold text-brand-900">
                        <span className="flex items-center gap-1 text-brand-600">
                          <Clock className="w-3.5 h-3.5" /> {proc.duration}
                        </span>
                        <span className="text-sm">R$ {proc.price.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 2: Adicionais de Nail Art ================= */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-brand-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-brand-600 uppercase font-bold tracking-wider">Procedimento Escolhido:</span>
                  <p className="font-serif text-lg font-medium text-brand-900">{selectedProcedure?.title}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-brand-600 font-medium">Tempo: {selectedProcedure?.duration}</span>
                  <p className="font-serif font-bold text-brand-900 text-lg">R$ {selectedProcedure?.price.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-serif text-base font-medium text-brand-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-champagne" />
                  Deseja incluir Nail Art ou Decoração Especial?
                </h4>
                <p className="text-xs text-brand-700 mt-1">
                  Selecione os adicionais que deseja realizar no mesmo dia:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {studioConfig.addons.map((addon) => {
                    const isChecked = selectedAddons.some((a) => a.id === addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => handleToggleAddon(addon)}
                        className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                          isChecked 
                            ? 'bg-brand-100 border-brand-700 text-brand-900 font-semibold' 
                            : 'bg-white border-brand-200 text-brand-800 hover:bg-brand-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-brand-800 border-brand-800 text-white' : 'border-brand-400'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-xs">{addon.name}</span>
                        </div>
                        <span className="text-xs font-serif font-bold text-brand-900">+ R$ {addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Box de Políticas */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>Regras Importantes de Atendimento:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-amber-800 text-[11px]">
                  <li>Tolerância máxima de 15 minutos de atraso.</li>
                  <li>Comparecer com as unhas limpas e sem sinais de lesões ou micoses.</li>
                  <li>Avisar cancelamentos com no mínimo 24h de antecedência.</li>
                </ul>

                <label className="flex items-center gap-2 pt-2 border-t border-amber-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedPolicies}
                    onChange={(e) => setAcceptedPolicies(e.target.checked)}
                    className="rounded text-brand-800 focus:ring-brand-700"
                  />
                  <span className="font-semibold text-amber-950">
                    Estou ciente e concordo com as regras do estúdio.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* ================= STEP 3: Calendly Embed / Seleção de Data ================= */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-brand-100/60 p-3.5 rounded-2xl border border-brand-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-brand-600 uppercase font-semibold">Resumo:</span>
                  <p className="font-serif font-bold text-brand-900 text-sm">{selectedProcedure?.title}</p>
                </div>
                <div className="text-right">
                  <span className="text-brand-600">Total a pagar no dia:</span>
                  <p className="font-serif font-bold text-brand-900 text-sm">R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-base font-medium text-brand-900 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-brand-700" />
                  Selecione o Dia e Horário no Calendário Oficial:
                </h4>
                <p className="text-xs text-brand-700 mt-1">
                  Os horários abaixo são atualizados em tempo real com o Google Agenda da nossa profissional.
                </p>

                {/* Calendly iFrame Container */}
                <div className="mt-4 rounded-2xl overflow-hidden border border-brand-200 bg-white h-[420px] shadow-inner relative">
                  <iframe
                    src={`${studioConfig.calendlyUrl}?embed_domain=${window.location.hostname}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&background_color=fdf8f6&text_color=2d2a2a&primary_color=994e3a`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Booking"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 4: Confirmação e Redirecionamento WhatsApp ================= */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="text-center py-2">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl text-brand-900 font-medium">
                  Quase pronto!
                </h4>
                <p className="text-xs text-brand-700 max-w-sm mx-auto mt-1">
                  Insira seus dados para gerarmos seu comprovante e garantir seu atendimento com prioridade.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-brand-200 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-900 mb-1">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Ana Carolina Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-700 bg-brand-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-900 mb-1">
                    Seu WhatsApp (com DDD):
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 98765-4321"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-700 bg-brand-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-900 mb-1">
                    Alguma observação ou referência que gostaria de mandar?
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Ex: Quero formato amendoado, unha curta..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-700 bg-brand-50/50"
                  />
                </div>
              </div>

              {/* Botão de Finalização no WhatsApp */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-emerald-700/20 text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirmar Agendamento no WhatsApp Oficial</span>
              </a>

              <p className="text-[11px] text-center text-brand-600">
                🔒 Seus dados estão protegidos e não enviamos spam.
              </p>
            </div>
          )}

        </div>

        {/* Modal Bottom Navigation */}
        <div className="p-5 border-t border-brand-200 flex items-center justify-between bg-white rounded-b-3xl">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-xs font-semibold text-brand-800 hover:text-brand-950 px-4 py-2 rounded-xl hover:bg-brand-50"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <div className="text-right mr-2">
              <span className="text-[10px] text-brand-600 block">Total Estimado</span>
              <span className="font-serif font-bold text-brand-900 text-base">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>

            {step < 4 ? (
              <button
                disabled={step === 2 && !acceptedPolicies}
                onClick={() => setStep(step + 1)}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  step === 2 && !acceptedPolicies
                    ? 'bg-brand-200 text-brand-400 cursor-not-allowed'
                    : 'bg-brand-800 hover:bg-brand-900 text-white shadow-md'
                }`}
              >
                <span>Avançar</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
}
