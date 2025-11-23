import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Section darker>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-4 block">Moja Misja</span>
            <h1 className="text-5xl md:text-6xl text-white mb-8 tracking-tight font-medium leading-tight">
              WIĘCEJ NIŻ <br />
              <span className="font-display text-brand-accent font-bold text-6xl md:text-8xl block mt-2">TRENING.</span>
            </h1>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Cześć. Wierzę, że ruch to najpiękniejszy prezent, jaki możemy sobie dać. Przez lata obserwowałem, jak branża fitness promuje kult "katowania się" i walki z własnym ciałem.
              </p>
              <p>
                Moja filozofia jest inna. <strong className="text-brand-accent font-medium">Ruch to okazja i radość.</strong> To moment, w którym odzyskujesz sprawczość. Nie musisz być idealny. Wystarczy, że będziesz konsekwentny i dobry dla siebie.
              </p>
              <p>
                Jako mentor ruchowy pomagam ludziom budować stabilność – nie tylko tę w mięśniach głębokich, ale też tę życiową. Zdrowe ciało to spokojna głowa.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl text-white font-bold mb-1">500+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Odmienionych żyć</p>
                  </div>
                  <div>
                    <h4 className="text-2xl text-white font-bold mb-1">10 lat</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Doświadczenia</p>
                  </div>
               </div>
            </div>

            <div className="mt-10">
              <Button to="/kontakt" className="rounded-full">Rozpocznij współpracę</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Trener Personalny" 
                className="w-full h-auto grayscale contrast-100 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;