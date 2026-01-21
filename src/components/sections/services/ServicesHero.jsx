import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Palette, Zap } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        flex items-center justify-center
        bg-[#050505]
        overflow-hidden
        pt-24 sm:pt-28
      "
    >
      
      {/* 1. CYBER GRID (DESKTOP-FIRST LUXURY) */}
      <div className="absolute inset-0 perspective-[1000px] hidden sm:block">
        <div className="
          absolute inset-0
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:40px_40px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
          transform rotate-x-[60deg] translate-y-[-20%] scale-150
          animate-grid-flow
        "></div>
      </div>

      {/* 2. FLOATING ICONS (DESKTOP ONLY) */}
      {[Code2, Cpu, Palette, Zap].map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 0.2, y: -80 }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 2,
            ease: "easeInOut"
          }}
          className="absolute text-brand-primary hidden lg:block"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`
          }}
        >
          <Icon size={60 + i * 10} />
        </motion.div>
      ))}

      {/* 3. HERO CONTENT */}
      <div className="container mx-auto px-4 relative z-10 text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            inline-flex items-center gap-2
            px-4 py-2
            bg-white/5 border border-white/10
            rounded-full mb-6 sm:mb-8
            backdrop-blur-md
          "
        >
          <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">
            Our Expertise
          </span>
        </motion.div>

        {/* HEADLINE */}
        <h1
          className="
            font-black text-white tracking-tighter leading-[1.05]
            mb-6 sm:mb-8
            text-4xl sm:text-6xl lg:text-8xl
          "
        >
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-400 to-pink-500">
            Digital Empires.
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            text-sm sm:text-lg
            text-gray-400
            max-w-xl sm:max-w-2xl
            mx-auto mb-8 sm:mb-10
            font-medium leading-relaxed
          "
        >
          From full-stack applications to IoT robotics and creative branding.
          We provide the complete ecosystem for your growth.
        </p>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>

    </section>
  );
};

export default ServicesHero;
