import React from 'react';
import { Check } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header Section with Futuristic Ambient Glow */}
      <div className="relative pt-20 pb-20 overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
           <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full mix-blend-screen" />
        </div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <Section className="relative z-10 text-center !bg-transparent !py-0">
          <h1 className="text-6xl md:text-8xl text-white mb-8 tracking-tight font-display font-medium relative inline-block">
            WSPÓŁPRACA
            {/* Decorative underline/accent */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Inwestycja w siebie to jedyna inwestycja, która zawsze się zwraca.
            Wybierz ścieżkę dopasowaną do Twojego stylu życia.
          </p>
        </Section>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`flex flex-col p-10 rounded-3xl border transition-all duration-300 backdrop-blur-sm ${
                service.recommended 
                  ? 'bg-brand-gray/80 border-brand-accent/30 shadow-2xl shadow-brand-accent/5' 
                  : 'bg-brand-dark/50 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-3xl font-display font-bold text-white tracking-wide">{service.title}</h3>
                 {service.recommended && (
                  <span className="bg-brand-accent/20 text-brand-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.3)]">
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
      
      <Section darker className="text-center relative overflow-hidden">
        {/* Subtle glow for CTA section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl mx-auto py-12 px-8 rounded-3xl border border-white/5 bg-gradient-to-b from-brand-gray/50 to-brand-dark/50 backdrop-blur-md relative z-10">
          <h3 className="text-3xl font-display text-white mb-4">Masz wątpliwości?</h3>
          <p className="text-gray-400 mb-8 font-light leading-relaxed">
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