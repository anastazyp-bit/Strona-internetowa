import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  // Apple style: Rounded full, tracking slightly wider, subtler shadows
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-brand-accentHover text-white shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-0.5",
    outline: "border border-white/30 text-white hover:bg-white hover:text-black hover:border-white",
    ghost: "text-gray-400 hover:text-white bg-transparent hover:bg-white/5"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;