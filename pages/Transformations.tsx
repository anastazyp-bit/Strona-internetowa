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
      <Section darker className="text-center">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">HISTORIE</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Prawdziwe opinie osób, które zaufały procesowi i zmieniły swoje życie na lepsze.
        </p>
      </Section>

      <Section>
        {/* Vertical list layout for single-column scrolling */}
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-brand-gray p-10 md:p-16 rounded-[2rem] border border-white/5 hover:border-brand-accent/20 transition-all duration-500 relative group shadow-2xl shadow-black/20"
            >
              <div className="absolute top-10 left-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-brand-accent" />
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-200 text-xl md:text-3xl leading-relaxed mb-10 font-display font-light">
                  "{review.content}"
                </p>
                
                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-brand-accent font-display text-2xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-wide text-lg">{review.name}</h4>
                    <p className="text-brand-accent text-xs uppercase tracking-widest mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section darker className="text-center py-20">
        <h2 className="text-3xl font-medium text-white mb-8">Dołącz do zadowolonych podopiecznych</h2>
        <Button to="/oferta" className="rounded-full px-12 py-4">Zacznij Współpracę</Button>
      </Section>
    </div>
  );
};

export default Transformations;