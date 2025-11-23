import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <Section darker className="text-center">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">KONTAKT</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Jesteśmy tu dla Ciebie. Napisz, zadzwoń lub przyjdź.
          Rozpocznijmy tę rozmowę.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
               <h3 className="text-2xl font-medium text-white mb-8">Dane Kontaktowe</h3>
               <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-2xl mr-6 group-hover:bg-brand-accent/10 transition-colors">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Telefon</h4>
                    <p className="text-gray-400">+48 123 456 789</p>
                    <p className="text-gray-500 text-xs mt-1">Pn-Pt: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-2xl mr-6 group-hover:bg-brand-accent/10 transition-colors">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-400">kontakt@strengthflow.pl</p>
                    <p className="text-gray-500 text-xs mt-1">Odpisuję do 24h</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white/5 p-4 rounded-2xl mr-6 group-hover:bg-brand-accent/10 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Studio</h4>
                    <p className="text-gray-400">Centrum Ruchu Świadomego</p>
                    <p className="text-gray-400">ul. Spokojna 12, Warszawa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-white/5 rounded-3xl w-full border border-white/5 flex items-center justify-center grayscale opacity-50 hover:opacity-80 transition-opacity">
              <span className="text-gray-500 text-sm tracking-widest uppercase">Mapa Google</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-gray p-10 rounded-3xl border border-white/5 shadow-2xl shadow-black/50">
            <h3 className="text-2xl font-medium text-white mb-8">Wyślij Wiadomość</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Imię</label>
                  <input type="text" id="name" className="w-full bg-brand-dark border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all placeholder-gray-700" placeholder="Twoje imię" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" id="email" className="w-full bg-brand-dark border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all placeholder-gray-700" placeholder="adres@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="goal" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">W czym mogę pomóc?</label>
                <select id="goal" className="w-full bg-brand-dark border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all">
                  <option>Chcę zadbać o zdrowie</option>
                  <option>Chcę poprawić sprawność</option>
                  <option>Czuję ból i szukam pomocy</option>
                  <option>Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Wiadomość</label>
                <textarea id="message" rows={4} className="w-full bg-brand-dark border border-white/10 text-white px-4 py-3 rounded-xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all placeholder-gray-700" placeholder="Napisz, co Cię do mnie sprowadza..."></textarea>
              </div>

              <Button fullWidth onClick={() => alert('Wiadomość wysłana (demo)')} className="rounded-xl">
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