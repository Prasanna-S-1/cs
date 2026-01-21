import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Glasscard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(139,92,246,0.15)", // Default Purple Glow
  hoverEffect = true 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`
        group relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden 
        shadow-xl hover:shadow-2xl transition-all duration-500 
        ${hoverEffect ? 'hover:-translate-y-2' : ''}
        ${className}
      `}
      onMouseMove={handleMouseMove}
    >
      {/* 1. The Spotlight Gradient Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. Background Texture (Subtle Noise for Realism) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-0"></div>

      {/* 3. Content Container */}
      <div className="relative h-full z-10 p-8 md:p-10">
        {children}
      </div>
    </div>
  );
};

export default Glasscard;