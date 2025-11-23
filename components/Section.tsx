import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${darker ? 'bg-brand-dark' : 'bg-brand-gray'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;