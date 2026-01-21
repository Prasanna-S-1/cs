import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SectionTitle = ({ 
  badge = "Explore", 
  title, 
  subtitle, 
  align = "center", // 'center' | 'left'
  theme = "light"   // 'light' | 'dark'
}) => {
  
  const textColor = theme === 'dark' ? 'text-white' : 'text-brand-dark';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const badgeStyle = theme === 'dark' 
    ? 'bg-white/10 border-white/10 text-brand-neon' 
    : 'bg-brand-light border-brand-primary/10 text-brand-primary';

  return (
    <div className={`mb-16 relative z-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      
      {/* 1. Animated Badge Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-md uppercase shadow-sm ${badgeStyle}`}
      >
        <Sparkles size={14} className={theme === 'dark' ? 'text-brand-neon' : 'text-brand-primary'} />
        {badge}
      </motion.div>

      {/* 2. Main Title with Gradient Option */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight ${textColor}`}
      >
        {/* If title has '||' we can split it for color effects, otherwise just render */}
        {title}
      </motion.h2>

      {/* 3. Subtitle Description */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`text-lg md:text-xl max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${subTextColor}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* 4. Decorative Underline (Optional visual flair) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`h-1 w-24 bg-brand-primary rounded-full mt-8 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;