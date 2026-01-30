import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, ArrowUpRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0f0518] overflow-hidden min-h-[90vh] flex items-center">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* 1. Noise Texture (Adds Premium Film Grain) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* 2. Animated Ambient Glows */}
      <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />

      {/* 3. Subtle Moving Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />


      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.15)]"
            >
              <Sparkles size={14} className="text-purple-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200">
                About Combo Square
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              Building Industry-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                Innovators.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0 font-medium"
            >
              Combo Square is a premium EdTech and innovation ecosystem bridging
              the gap between academic learning and real-world industry demands
              through hands-on training, internships, and creative services.
            </motion.p>

            {/* PREMIUM STATS ROW */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { label: "Students", val: "5K+" },
                { label: "Colleges", val: "120+" },
                { label: "Projects", val: "300+" }
              ].map((stat, i) => (
                <div key={i} className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 hover:border-white/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1">
                  {/* Top shine effect */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                  
                  <p className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {stat.val}
                  </p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT VISUAL (PREMIUM 3D CARD) ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end perspective-[1000px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[500px]"
            >
              {/* Back Glow */}
              <div className="absolute inset-0 bg-purple-500/30 blur-[60px] transform scale-90 translate-y-4 rounded-[3rem]" />

              {/* Main Image Container */}
              <div className="
                relative z-10 
                aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]
                rounded-[2.5rem] 
                overflow-hidden 
                border border-white/10 
                shadow-2xl 
                bg-[#1a0b2e]
              ">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                  alt="Combo Square Team"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Cinema Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-transparent opacity-80" />

                {/* Glass Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* FLOATING GLASS CARD */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="
                    absolute bottom-6 left-6 right-6 
                    bg-white/10 backdrop-blur-xl 
                    border border-white/20 border-t-white/40
                    rounded-2xl p-4 sm:p-5 
                    shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                    flex items-center gap-4
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 text-white">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-0.5">
                      Since 2021
                    </p>
                    <p className="text-base sm:text-lg font-black text-white">
                      Real-World Learning
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                     <ArrowUpRight size={16} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;