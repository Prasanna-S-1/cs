import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Button3D = ({ 
  children, 
  variant = 'primary', // 'primary' | 'outline' | 'glow'
  onClick, 
  className = "",
  icon = true 
}) => {
  
  // Premium Styles Configuration
  const variants = {
    primary: "bg-brand-primary text-white shadow-[0_4px_14px_0_rgba(109,40,217,0.39)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.23)] border-transparent",
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-lg hover:border-transparent",
    glow: "bg-white text-brand-dark shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] border-white/20 border"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center gap-3 
        px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300
        ${variants[variant]} ${className}
      `}
    >
      {/* 1. The Shimmer Effect (Light reflecting across the button) */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
      
      {/* 2. Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight 
            size={20} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </span>

      {/* 3. Subtle Glow Background for Primary Variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
};

export default Button3D;