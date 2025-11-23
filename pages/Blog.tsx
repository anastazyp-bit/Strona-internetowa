import React from 'react';
import Section from '../components/Section';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <Section darker className="text-center">
        <h1 className="heading-italic text-5xl md:text-7xl text-white mb-6">BAZA WIEDZY</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Artykuły, porady i merytoryczna wiedza bez mitów.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-brand-dark border border-white/10 hover:border-brand-accent transition-colors group h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4 text-xs font-bold uppercase tracking-wider">
                  <span className="text-brand-accent">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-white text-sm font-bold hover:underline cursor-pointer">
                    Czytaj dalej &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;