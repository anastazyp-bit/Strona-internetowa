import React from 'react';
import { Check } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <Section darker className="text-center pb-10">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">WSPÓŁPRACA</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Inwestycja w siebie to jedyna inwestycja, która zawsze się zwraca.
          Wybierz ścieżkę dopasowaną do Twojego stylu życia.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`flex flex-col p-10 rounded-3xl border transition-all duration-300 ${
                service.recommended 
                  ? 'bg-brand-gray border-brand-accent/30 shadow-2xl shadow-brand-accent/5' 
                  : 'bg-brand-dark border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-2xl font-bold text-white tracking-wide">{service.title}</h3>
                 {service.recommended && (
                  <span className="bg-brand-accent/20 text-brand-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Polecane
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 mb-10 leading-relaxed font-light">{service.description}</p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="mr-4 mt-1 bg-white/5 rounded-full p-1 group-hover:bg-brand-accent/20 transition-colors">
                       <Check className="w-3 h-3 text-brand-accent" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button 
                  to="/kontakt" 
                  variant={service.recommended ? 'primary' : 'outline'}
                  fullWidth
                  className={service.recommended ? 'rounded-full' : 'rounded-full border-white/20 hover:bg-white hover:text-black'}
                >
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section darker className="text-center">
        <div className="max-w-2xl mx-auto py-12 px-8 rounded-3xl border border-white/5 bg-gradient-to-b from-brand-gray to-brand-dark">
          <h3 className="text-2xl font-medium text-white mb-4">Masz wątpliwości?</h3>
          <p className="text-gray-400 mb-8 font-light">
            Każda droga zaczyna się od rozmowy. Napisz do mnie, opowiedz o swoich celach i obawach. Razem znajdziemy najlepsze rozwiązanie.
          </p>
          <Button to="/kontakt" variant="ghost" className="text-brand-accent hover:text-white">
            Napisz wiadomość &rarr;
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Services;