import React from 'react';
import { studioConfig } from '../data/studioData';
import { ShieldCheck, Info } from 'lucide-react';

export default function PoliciesSection() {
  return (
    <section id="regras" className="py-16 bg-white/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-2">
            <Info className="w-3.5 h-3.5 text-brand-700" />
            <span>Transparência e Respeito</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-900">
            Políticas de Atendimento do Estúdio
          </h2>
          <p className="text-xs text-brand-700 mt-2">
            Para garantir um atendimento pontual e de altíssimo padrão a todas:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {studioConfig.policies.map((policy, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-start gap-3.5"
            >
              <div className="p-2 bg-brand-200/60 rounded-xl text-brand-800 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-brand-900">
                  {policy.title}
                </h4>
                <p className="text-xs text-brand-800/80 mt-1 leading-relaxed">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
