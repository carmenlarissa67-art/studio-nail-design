import React from 'react';
import { studioConfig } from '../data/studioData';
import { MapPin, Clock, MessageCircle, Instagram, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-brand-900 text-brand-100 pt-16 pb-12 border-t border-brand-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-semibold tracking-wide text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-champagne" />
              {studioConfig.name}
            </span>
            <p className="text-xs text-brand-200 leading-relaxed max-w-sm">
              {studioConfig.subtitle}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={studioConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-800 hover:bg-brand-700 flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${studioConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-800 hover:bg-brand-700 flex items-center justify-center text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3 text-xs text-brand-200">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Localização & Horários
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
              <span>{studioConfig.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-champagne flex-shrink-0" />
              <span>{studioConfig.workingHours}</span>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Agendamento Rápido
            </h4>
            <p className="text-xs text-brand-200">
              Garanta seu horário na agenda oficial com antecedência.
            </p>
            <button
              onClick={() => onOpenBooking(null)}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors shadow-md"
            >
              Agendar Agora
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-400 gap-4">
          <p>© {new Date().getFullYear()} {studioConfig.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Sistema desenvolvido para Nail Designers de Alto Padrão
          </p>
        </div>
      </div>
    </footer>
  );
}
