import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';

const AboutHero = () => {
  const ref = useRef(null);

  // Spotlight logic (desktop only feel, harmless on mobile)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-[100svh]
        flex items-center justify-center
        bg-[#050505]
        overflow-hidden
        group
        pt-24 sm:pt-28
      "
    >

      {/* NOISE */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* SPOTLIGHT (desktop hover luxury) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 hidden lg:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 backdrop-blur-md"
        >
          <Zap size={14} className="text-yellow-400 fill-yellow-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">
            The Innovation Hub
          </span>
        </motion.div>

        {/* HEADLINE */}
        <h1 className="font-black text-white tracking-tighter leading-[0.95] mb-6
                       text-4xl sm:text-6xl lg:text-9xl">

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block"
          >
            WE DON'T
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500"
          >
            JUST DESIGN.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="block text-brand-primary"
          >
            WE EVOLVE.
          </motion.span>
        </h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-sm sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Combo Square is bridging the gap between academic theory and industry reality.
          We are the playground for the next generation of creators.
        </motion.p>
      </div>

      {/* SCROLL INDICATOR (hidden on small phones) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
        <ArrowDown size={18} />
      </motion.div>

    </section>
  );
};

export default AboutHero;
