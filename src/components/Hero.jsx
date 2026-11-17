import React from 'react';
import { studioConfig } from '../data/studioData';
import { Calendar, ShieldCheck, Clock, Sparkles, Star } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background soft glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-brand-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200/80 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>Agenda Aberta • Vagas Limitadas</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-900 tracking-tight">
              A elegância de unhas <span className="italic font-serif text-brand-700">naturais, resistentes</span> e impecáveis.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-brand-800/80 max-w-xl leading-relaxed">
              Procedimentos com técnicas modernas de acabamento ultrafino, cuticulagem combinada e produtos que preservam a saúde da sua unha natural.
            </p>

            {/* Quick value badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-brand-800">
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-lg border border-brand-200">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Produtos Hipoalergênicos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-lg border border-brand-200">
                <Clock className="w-4 h-4 text-brand-600" />
                <span>Durabilidade de até 30 dias</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur px-3 py-1.5 rounded-lg border border-brand-200">
                <Star className="w-4 h-4 text-champagne fill-champagne" />
                <span>+500 clientes atendidas</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking(null)}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-black text-white px-8 py-4 rounded-full text-base font-medium shadow-xl shadow-brand-900/15 hover:shadow-2xl transition-all group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Escolher Procedimento e Horário</span>
              </button>

              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full text-brand-900 text-sm font-semibold hover:bg-brand-100 transition-colors border border-brand-300"
              >
                Ver Tabela de Serviços
              </a>
            </div>

            <p className="mt-3 text-xs text-brand-700/70">
              ⚡ Confirmação imediata no WhatsApp sem burocracia.
            </p>
          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
                alt="Alongamento Fibra de Vidro em Nail Design"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-champagne-light font-semibold">
                  Técnica Exclusiva
                </span>
                <h3 className="font-serif text-xl font-medium mt-1">
                  Fibra de Vidro Slim Natural
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  Curvatura anatômica sem aspecto grosseiro.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-brand-200 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                5★
              </div>
              <div>
                <p className="text-xs font-bold text-brand-900">Nota Máxima no Google</p>
                <p className="text-[11px] text-brand-700">Avaliações 100% verificadas</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
