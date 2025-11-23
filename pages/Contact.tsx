import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header with connecting gradient */}
      <div className="relative pt-24 pb-32 overflow-hidden">
        {/* Large bottom glow linking header to form */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-t from-brand-accent/10 via-transparent to-transparent pointer-events-none" />
        
        <Section className="relative z-10 text-center !bg-transparent !py-0">
          <h1 className="text-6xl md:text-8xl text-white mb-8 tracking-tight font-display font-medium">
            KONTAKT
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Jesteśmy tu dla Ciebie. Napisz, zadzwoń lub przyjdź.
            Rozpocznijmy tę rozmowę.
          </p>
        </Section>
      </div>

      <Section className="!pt-0 relative z-10 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info - Futuristic/Glass Style */}
          <div className="space-y-12">
            <div>
               <h3 className="text-3xl font-display text-white mb-8 relative inline-block">
                 Dane Kontaktowe
                 <div className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-accent"></div>
               </h3>
               
               <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-2xl mr-6 group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-all duration-300 border border-white/5 group-hover:border-brand-accent/30">
                    <Phone className="w-6 h-6 text-gray-300 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Telefon</h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors">+48 123 456 789</p>
                    <p className="text-gray-500 text-xs mt-1">Pn-Pt: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-2xl mr-6 group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-all duration-300 border border-white/5 group-hover:border-brand-accent/30">
                    <Mail className="w-6 h-6 text-gray-300 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors">kontakt@strengthflow.pl</p>
                    <p className="text-gray-500 text-xs mt-1">Odpisuję do 24h</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-2xl mr-6 group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-all duration-300 border border-white/5 group-hover:border-brand-accent/30">
                    <MapPin className="w-6 h-6 text-gray-300 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Studio</h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors">Centrum Ruchu Świadomego</p>
                    <p className="text-gray-400">ul. Spokojna 12, Warszawa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder - Tech Style */}
            <div className="h-64 bg-brand-dark rounded-3xl w-full border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              <div className="w-3 h-3 bg-brand-accent rounded-full animate-ping absolute"></div>
              <div className="w-3 h-3 bg-brand-accent rounded-full absolute"></div>
              <span className="text-brand-accent text-sm tracking-widest uppercase mt-8 font-bold z-10">Lokalizacja</span>
            </div>
          </div>

          {/* Form - Enhanced with glass effect */}
          <div className="bg-brand-gray/30 backdrop-blur-xl p-10 rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[50px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl font-display text-white mb-8 relative z-10">Wyślij Wiadomość</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Imię</label>
                  <input type="text" id="name" className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all placeholder-gray-700" placeholder="Twoje imię" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" id="email" className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all placeholder-gray-700" placeholder="adres@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="goal" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">W czym mogę pomóc?</label>
                <select id="goal" className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all">
                  <option>Chcę zadbać o zdrowie</option>
                  <option>Chcę poprawić sprawność</option>
                  <option>Czuję ból i szukam pomocy</option>
                  <option>Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Wiadomość</label>
                <textarea id="message" rows={4} className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all placeholder-gray-700" placeholder="Napisz, co Cię do mnie sprowadza..."></textarea>
              </div>

              <Button fullWidth onClick={() => alert('Wiadomość wysłana (demo)')} className="rounded-xl shadow-lg shadow-brand-accent/10">
                Wyślij Zgłoszenie
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;