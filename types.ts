export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  result: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  price?: string;
  recommended?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}