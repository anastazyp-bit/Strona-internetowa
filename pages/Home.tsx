import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import { FEATURES_HOME, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Apple Style: Clean, Emotional, Modern */}
      <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Abstract/Modern Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop")',
            backgroundPosition: '50% 25%',
            filter: 'grayscale(100%) brightness(35%) contrast(110%)'
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark" />
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          
          {/* Main Heading - Updated Font to Cormorant Garamond */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-12 tracking-tight leading-[1.05] font-display font-medium">
            Ruch to <span className="text-brand-accent">przywilej</span><br />
            Trenuj z radością
          </h1>
          
          {/* Buttons area with extra margin top since paragraph was removed */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button to="/oferta" variant="primary" className="rounded-full px-10">
              Rozpocznij Podróż
            </Button>
            <Link to="/o-mnie" className="flex items-center text-white hover:text-brand-accent transition-colors px-6 py-3 font-medium text-sm tracking-wide">
              <Play className="w-4 h-4 mr-2 fill-current" /> Poznaj moją filozofię
            </Link>
          </div>
        </div>
      </div>

      {/* Philosophy Section - "The Why" */}
      <Section darker className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-10 tracking-tight">
            Twoje ciało to <span className="text-brand-accent">niesamowita maszyna</span> stworzona do ruchu
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                W pędzie codzienności zapominamy o tym, jak wiele potrafimy. Zamiast skupiać się na ograniczeniach, zacznijmy odkrywać możliwości.
              </p>
            </div>
            <div>
              <p className="text-xl text-white font-medium leading-relaxed">
                Ruch to nie kara za zjedzone kalorie. To okazja do świętowania tego, co potrafisz. Przywróćmy Twojemu ciału naturalną harmonię.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid - Clean & Minimal */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES_HOME.map((feature, index) => (
            <div key={index} className="glass-panel p-10 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
              <div className="mb-8 bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Preview - Futuristic/Cards */}
      <Section darker className="overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
              Twoja ścieżka do <span className="text-brand-accent font-display">równowagi</span>
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Niezależnie od tego, czy potrzebujesz wsparcia na żywo, czy planu do działania samodzielnego - jestem tu, by Cię prowadzić.
            </p>
            <Button to="/oferta" variant="primary" className="rounded-full">
              Zobacz możliwości współpracy
            </Button>
          </div>
          
          <div className="md:w-1/2 w-full space-y-4">
            {[
              "Mentoring Ruchowy 1:1",
              "Trening w Duecie",
              "Plany Regeneracyjne"
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer">
                <span className="text-lg font-medium text-white">{item}</span>
                <div className="bg-brand-accent/0 group-hover:bg-brand-accent/20 p-2 rounded-full transition-all">
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-brand-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials - Elegant */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white mb-4 tracking-tight">Historie Przemian</h2>
          <p className="text-gray-400 text-sm uppercase tracking-widest">Ludzie, którzy zaufali procesowi</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-brand-gray p-8 rounded-2xl border border-white/5 relative flex flex-col">
              <p className="text-gray-300 mb-8 italic leading-relaxed text-sm">
                "{t.quote}"
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-700 mr-4 overflow-hidden">
                   <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <span className="text-xs text-brand-accent font-medium tracking-wide">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA - Peaceful */}
      <Section darker className="text-center pb-32">
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight font-display">
          Zacznij od pierwszego kroku
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Bez presji. Bez oceniania. Tylko Ty i Twoje możliwości.
          Napisz do mnie, a wspólnie znajdziemy drogę.
        </p>
        <Button to="/kontakt" variant="primary" className="rounded-full px-12 py-4">
          Porozmawiajmy
        </Button>
      </Section>
    </div>
  );
};

export default Home;