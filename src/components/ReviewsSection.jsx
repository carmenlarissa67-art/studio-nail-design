import React from 'react';
import { studioConfig } from '../data/studioData';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-brand-100/50 border-t border-brand-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">
            Prova Social
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 mt-2">
            O Que Nossas Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
            ))}
            <span className="ml-2 text-xs font-bold text-brand-900">5.0 de avaliação</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studioConfig.testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-brand-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-300 mb-4" />
                <p className="text-xs sm:text-sm text-brand-800 leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-900">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-brand-600 font-medium">
                    Procedimento: {test.service}
                  </span>
                </div>
                <div className="flex text-champagne">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-champagne" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
