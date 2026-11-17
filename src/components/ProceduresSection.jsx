import React, { useState } from 'react';
import { studioConfig } from '../data/studioData';
import { Clock, Check, Sparkles, ChevronRight } from 'lucide-react';

export default function ProceduresSection({ onSelectProcedure }) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Alongamento", "Manutenção", "Naturais"];

  const filtered = activeCategory === "Todos" 
    ? studioConfig.procedures 
    : studioConfig.procedures.filter(p => p.category === activeCategory);

  return (
    <section id="procedimentos" className="py-20 bg-white/70 border-y border-brand-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">
            Cardápio de Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 mt-2">
            Escolha o Procedimento Ideal
          </h2>
          <p className="mt-3 text-sm text-brand-800/80">
            Trabalhamos com materiais de alta resistência, acabamento natural e foco total na biossegurança.
          </p>

          {/* Categories Pill Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-brand-800 text-white shadow-md shadow-brand-900/15"
                    : "bg-brand-50 text-brand-800 hover:bg-brand-100 border border-brand-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proc) => (
            <div
              key={proc.id}
              className="bg-brand-50/60 rounded-3xl overflow-hidden border border-brand-200/80 shadow-sm hover:shadow-xl hover:border-brand-400 transition-all flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full">
                  {proc.category}
                </div>
                {proc.popular && (
                  <div className="absolute top-3 right-3 bg-champagne text-brand-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Mais Pedido</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl font-medium text-brand-900">
                      {proc.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-brand-800/80 leading-relaxed line-clamp-2">
                    {proc.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-4 space-y-2 text-xs text-brand-900">
                    {proc.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Price and Action */}
                <div className="mt-6 pt-4 border-t border-brand-200/60 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-brand-700">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{proc.duration}</span>
                    </div>
                    <div className="text-xl font-semibold text-brand-900 font-serif">
                      R$ {proc.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProcedure(proc)}
                    className="flex items-center gap-1.5 bg-brand-800 hover:bg-brand-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all group-hover:bg-brand-700"
                  >
                    <span>Agendar</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
