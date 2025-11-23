import { NavItem, Service, Testimonial, BlogPost } from './types';
import { Activity, Heart, ShieldCheck, Sun } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'START', path: '/' },
  { label: 'O MNIE', path: '/o-mnie' },
  { label: 'WSPÓŁPRACA', path: '/oferta' },
  { label: 'HISTORIE', path: '/metamorfozy' },
  { label: 'KONTAKT', path: '/kontakt' },
];

export const SERVICES: Service[] = [
  {
    id: 'personal',
    title: 'TRENING INDYWIDUALNY 1:1',
    description: 'Pełna uwaga skupiona na Tobie. Budujemy relację z ciałem, pracujemy nad techniką i komfortem ruchu we własnym tempie.',
    features: [
      '60 minut pracy 1 na 1',
      'Diagnostyka i poprawa mobilności',
      'Spokojna atmosfera bez pośpiechu',
      'Plan dopasowany do samopoczucia'
    ],
    cta: 'UMÓW PIERWSZY TRENING',
    recommended: true
  },
  {
    id: 'duo',
    title: 'TRENING W DUECIE 2:1',
    description: 'Zabierz bliską osobę. Wspólny ruch to podwójna dawka endorfin, motywacji i radości ze spędzonego czasu.',
    features: [
      'Trening dla par lub przyjaciół',
      'Wzajemna motywacja i zabawa',
      'Ekonomiczna opcja współpracy',
      'Wspólne budowanie zdrowych nawyków'
    ],
    cta: 'TRENUJCIE RAZEM',
    recommended: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Julia",
    quote: "Kiedyś trening był dla mnie karą za zjedzone ciastko. Tutaj nauczyłam się, że ruch to celebracja tego, co potrafi moje ciało.",
    result: "Radość z ruchu",
    image: "https://picsum.photos/100/100?random=4"
  },
  {
    id: 2,
    name: "Piotr",
    quote: "Szukałem wycisku, a znalazłem spokój i siłę. Ból pleców minął, a ja mam więcej energii dla rodziny.",
    result: "Energia i Zdrowie",
    image: "https://picsum.photos/100/100?random=5"
  },
  {
    id: 3,
    name: "Marta",
    quote: "Profesjonalizm w każdym calu. Cuję się zaopiekowana, bezpieczna i silniejsza każdego dnia.",
    result: "Pewność Siebie",
    image: "https://picsum.photos/100/100?random=6"
  }
];

export const BLOG_POSTS: BlogPost[] = []; // Removed blog posts content as section is removed

export const FEATURES_HOME = [
  {
    icon: <Heart className="w-8 h-8 text-brand-accent" />,
    title: "Ruch to Radość",
    desc: "Zmieniamy 'muszę' na 'chcę'. Odkryj satysfakcję płynącą z każdej aktywności."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
    title: "Stabilność i Bezpieczeństwo",
    desc: "Budujemy fundamenty. Twoje ciało ma Ci służyć przez lata, bez bólu i ograniczeń."
  },
  {
    icon: <Sun className="w-8 h-8 text-brand-accent" />,
    title: "Holistyczne Podejście",
    desc: "Trening to tylko część układanki. Dbamy o Twój sen, stres i ogólny dobrostan."
  }
];