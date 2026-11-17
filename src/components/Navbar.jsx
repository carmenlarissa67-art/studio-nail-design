import React, { useState } from 'react';
import { studioConfig } from '../data/studioData';
import { Calendar, Menu, X, Sparkles, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDF8F6]/90 backdrop-blur-md border-b border-brand-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-2xl font-semibold tracking-wide text-brand-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-champagne" />
            {studioConfig.name}
          </span>
          <span className="text-xs uppercase tracking-widest text-brand-700 font-medium">
            {studioConfig.tagline}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-900">
          <a href="#procedimentos" className="hover:text-brand-600 transition-colors">Procedimentos</a>
          <a href="#galeria" className="hover:text-brand-600 transition-colors">Resultados</a>
          <a href="#regras" className="hover:text-brand-600 transition-colors">Regras do Estúdio</a>
          <a href="#depoimentos" className="hover:text-brand-600 transition-colors">Avaliações</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre os procedimentos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-brand-300 text-brand-800 hover:bg-brand-100 transition-all"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </a>
          <button
            onClick={() => onOpenBooking(null)}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md shadow-brand-900/10 hover:shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-900"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-50 border-b border-brand-200 px-6 py-5 flex flex-col gap-4 text-brand-900 font-medium">
          <a
            href="#procedimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-brand-100"
          >
            Procedimentos & Valores
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-brand-100"
          >
            Resultados Reais
          </a>
          <a
            href="#regras"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-brand-100"
          >
            Políticas de Atendimento
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-brand-100"
          >
            Depoimentos
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking(null);
            }}
            className="w-full flex items-center justify-center gap-2 bg-brand-800 text-white py-3 rounded-full font-semibold shadow-md mt-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Horário Agora</span>
          </button>
        </div>
      )}
    </header>
  );
}
