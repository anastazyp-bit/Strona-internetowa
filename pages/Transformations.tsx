import React from 'react';
import { Quote } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

// Data for customer reviews (text only)
const REVIEWS = [
  {
    id: 1,
    name: "Tomek",
    role: "Programista",
    content: "Przez lata ignorowałem sygnały, które wysyłało mi moje ciało. Dopiero tutaj zrozumiałem, że trening nie musi boleć, żeby był skuteczny. Odzyskałem mobilność, o której myślałem, że straciłem ją bezpowrotnie. Profesjonalizm i spokój - to definiuje tę współpracę."
  },
  {
    id: 2,
    name: "Kasia",
    role: "Mama dwójki dzieci",
    content: "Szukałam miejsca, gdzie nie będę oceniana przez pryzmat wyglądu. Znalazłam przestrzeń, w której liczy się to, jak się czuję. Treningi dały mi siłę nie tylko fizyczną, ale i psychiczną do radzenia sobie z codziennością."
  },
  {
    id: 3,
    name: "Marek",
    role: "Przedsiębiorca",
    content: "Stres w firmie przenosił się na napięcia w ciele. Sesje treningowe stały się dla mnie formą medytacji w ruchu. Wychodzę z nich zresetowany i gotowy do działania. To najlepsza inwestycja w moją efektywność."
  },
  {
    id: 4,
    name: "Anna",
    role: "Grafik",
    content: "Bałam się siłowni i ciężarów. Tutaj zostałam wprowadzona w świat ruchu powoli i z szacunkiem do moich granic. Dziś czuję się silna jak nigdy wcześniej i w końcu lubię swoje ciało."
  },
  {
    id: 5,
    name: "Piotr",
    role: "Architekt",
    content: "Moja praca wymaga skupienia i często spędzam godziny w jednej pozycji. Treningi przywróciły mi równowagę. Bóle karku ustąpiły, a ja czuję się o 10 lat młodszy. Podejście trenera jest niesamowicie merytoryczne."
  },
  {
    id: 6,
    name: "Magda",
    role: "Studentka",
    content: "Inne podejście niż wszędzie. Żadnego krzyku, żadnego 'no pain no gain'. Czysta praca nad świadomością i techniką. Efekty przyszły szybciej niż się spodziewałam, bo w końcu trenuję z przyjemnością."
  }
];

const Transformations: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header with Moody/Emotional Background */}
      <div className="relative pt-24 pb-20 overflow-hidden">
         {/* Asymmetrical Glows */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />
         
         <Section className="relative z-10 text-center !bg-transparent !py-0">
          <h1 className="text-6xl md:text-8xl text-white mb-8 tracking-tight font-display font-medium">
            HISTORIE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Prawdziwe opinie osób, które zaufały procesowi i zmieniły swoje życie na lepsze.
          </p>
        </Section>
      </div>

      <Section>
        {/* Vertical list layout with elegant typography */}
        <div className="max-w-4xl mx-auto flex flex-col gap-24 relative">
          {/* Decorative vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          {REVIEWS.map((review, index) => (
            <div 
              key={review.id} 
              className={`relative group px-6 md:px-10 py-12 transition-all duration-700 rounded-3xl border border-white/5 bg-brand-dark/50 hover:bg-brand-gray/50 hover:border-brand-accent/20 backdrop-blur-sm ${index % 2 === 0 ? 'md:translate-x-4' : 'md:-translate-x-4'}`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 bg-brand-dark px-2 z-20">
                <Quote className="w-10 h-10 text-brand-accent fill-brand-accent/10 transform rotate-180" />
              </div>
              
              <div className="relative z-10 text-center pt-4">
                <p className="text-gray-200 text-2xl md:text-3xl leading-relaxed mb-10 font-display italic">
                  "{review.content}"
                </p>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-1 bg-brand-accent/30 rounded-full mb-2"></div>
                  <h4 className="text-white font-bold tracking-wide text-lg font-sans">{review.name}</h4>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section darker className="text-center py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-8">Dołącz do zadowolonych podopiecznych</h2>
          <Button to="/oferta" className="rounded-full px-12 py-4 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
            Zacznij Współpracę
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Transformations;