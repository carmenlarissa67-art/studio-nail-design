import React from 'react';
import { studioConfig } from '../data/studioData';
import { Instagram, Sparkles } from 'lucide-react';

export default function GallerySection({ onOpenBooking }) {
  return (
    <section id="galeria" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              Galeria de Resultados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 mt-2">
              Unhas Feitas com Precisão & Arte
            </h2>
            <p className="mt-2 text-sm text-brand-800/80 max-w-xl">
              Cada aplicação é planejada para valorizar o formato das suas mãos com simetria e acabamento impecável.
            </p>
          </div>

          <a
            href={studioConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold text-brand-800 hover:text-brand-950 border border-brand-300 rounded-full px-5 py-2.5 bg-white/60 hover:bg-white transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Ver mais no Instagram</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {studioConfig.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenBooking(null)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square cursor-pointer shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={item.url}
                alt={item.tag}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
