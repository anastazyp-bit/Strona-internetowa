import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-6 group">
                <Activity className="h-6 w-6 text-brand-accent" />
                <span className="text-lg font-bold tracking-tight text-white">
                  STRENGTH <span className="font-light text-gray-400">&</span> FLOW
                </span>
             </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Holistyczne podejście do ruchu. 
              Budujemy sprawność, która daje wolność i radość każdego dnia.
              Twoje ciało zasługuje na najlepszą opiekę.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Mapa Strony</h4>
            <ul className="space-y-3">
              <li><Link to="/o-mnie" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">O mnie</Link></li>
              <li><Link to="/oferta" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">Współpraca</Link></li>
              <li><Link to="/metamorfozy" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">Historie</Link></li>
              <li><Link to="/kontakt" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-brand-accent" />
                Warszawa, Śródmieście
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-3 text-brand-accent" />
                +48 123 456 789
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-3 text-brand-accent" />
                kontakt@strengthflow.pl
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Społeczność</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Strength & Flow. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
             <a href="#" className="text-gray-600 hover:text-gray-400 text-xs">Polityka Prywatności</a>
             <a href="#" className="text-gray-600 hover:text-gray-400 text-xs">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;