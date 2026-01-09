import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Play, Zap, Globe, Cpu, Palette, Code2, Rocket, Star, MousePointer2 } from 'lucide-react';

// --- HELPER: FLOATING PARTICLE ---
const FloatingParticle = ({ delay, duration, x, y, scale }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.5, 0], 
      scale: [0, scale, 0],
      y: [y, y - 100],
      x: [x, x + (Math.random() * 50 - 25)]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay, 
      ease: "linear" 
    }}
    className="absolute w-1 h-1 bg-white rounded-full blur-[1px] pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  />
);

const Hero = () => {
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // range -10 to 10
    const y = (clientY / innerHeight - 0.5) * 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f0518] text-white selection:bg-brand-neon selection:text-black"
      onMouseMove={handleMouseMove}
    >
      
      {/* 1. DYNAMIC BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px]" />
        
        {/* Cyber Grid Floor (Perspective) */}
        <div className="absolute bottom-0 w-full h-[50%] bg-[linear-gradient(to_bottom,transparent_0%,#482485_100%)] opacity-20 mask-image-gradient"></div>
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"
          style={{ transform: 'perspective(1000px) rotateX(20deg)' }}
        ></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <FloatingParticle 
            key={i}
            delay={Math.random() * 5} 
            duration={Math.random() * 5 + 5} 
            x={Math.random() * 100} 
            y={Math.random() * 100}
            scale={Math.random() * 2 + 1}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT (ULTRA TYPOGRAPHY) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-neon text-xs font-bold tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(168,127,251,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
              </span>
              NO.1 INNOVATION HUB IN CHENNAI
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tight">
              We Elevate <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/50">
                Your Brand
                {/* Underline Decoration */}
                <motion.svg 
                  viewBox="0 0 200 9" 
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M2.00025 6.99997C2.00025 6.99997 64.9142 -1.54226 111.458 4.6729C158.003 10.8881 198 2 198 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </motion.svg>
              </span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-neon animate-gradient-x">
                by Creativity
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed border-l-2 border-brand-primary/30 pl-6">
              Combo Square is a next-gen digital agency bridging the gap between academic learning and industry demands with high-impact training and creative services.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-brand-primary rounded-xl overflow-hidden font-bold text-lg shadow-xl shadow-brand-primary/25"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="flex items-center gap-2">Get Started <ArrowRight size={20} /></span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2"
              >
                <Play size={20} className="fill-white" /> Explore Services
              </motion.button>
            </div>

            {/* Bottom Stats Row */}
            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-white/5">
              {[
                { label: "Trusted Brands", val: "25+" },
                { label: "Students Trained", val: "4.5k+" },
                { label: "Projects Done", val: "100+" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-white">{stat.val}</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>


          {/* RIGHT: THE 3D REACTOR CORE (Interactive) */}
          <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
            
            {/* Parallax Container */}
            <motion.div 
              style={{ x: springX, y: springY }}
              className="relative w-[500px] h-[500px]"
            >
              {/* 1. Orbit Ring Large */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full border-dashed"
              />
              {/* Floating Planet (IT) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border border-white/10 rounded-full"
              >
                 <div className="absolute top-0 left-1/2 w-16 h-16 bg-[#1e1e1e] border border-white/20 rounded-2xl flex items-center justify-center text-brand-neon shadow-[0_0_30px_rgba(139,92,246,0.3)] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
                    <Globe size={30} />
                 </div>
              </motion.div>

              {/* 2. Orbit Ring Medium */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-24 border border-white/10 rounded-full"
              >
                 <div className="absolute bottom-0 right-1/2 w-14 h-14 bg-[#1e1e1e] border border-white/20 rounded-2xl flex items-center justify-center text-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.3)] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
                    <Palette size={26} />
                 </div>
              </motion.div>

              {/* 3. The Central Reactor Core (Glowing) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Glowing Pulse Behind */}
                  <div className="absolute inset-0 bg-brand-primary rounded-full blur-[80px] animate-pulse opacity-50"></div>
                  
                  {/* Glassmorphic Core */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-full border border-white/20 flex flex-col items-center justify-center shadow-2xl z-20">
                     <Zap size={48} className="text-white fill-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                     <span className="text-sm font-black tracking-widest text-white">HUB</span>
                  </div>

                  {/* Spinning Rings around Core */}
                  <motion.div 
                    animate={{ rotateX: 360, rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] border-2 border-brand-neon/30 rounded-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  <motion.div 
                    animate={{ rotateX: -360, rotateY: 180 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] border border-brand-primary/30 rounded-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                </div>
              </div>

              {/* 4. Floating Glass Cards (Perspective Parallax) */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3 z-30"
              >
                <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><Rocket size={20}/></div>
                <div>
                  <p className="font-bold text-sm">100% Placement</p>
                  <p className="text-[10px] text-gray-400">Track Record</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3 z-30"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Cpu size={20}/></div>
                <div>
                  <p className="font-bold text-sm">AI & Robotics</p>
                  <p className="text-[10px] text-gray-400">Future Ready</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;