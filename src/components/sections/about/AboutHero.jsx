import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Trophy, Users, Building2 } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-32">
      
      {/* ================= BACKGROUND MAGIC ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Animated Meshes */}
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-pulse" />
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* GRID LAYOUT */}
        {/* CHANGED: Increased gap to 'lg:gap-20' to push image away from text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT COLUMN: TEXT CONTENT ================= */}
          <div className="order-1 text-center lg:text-left">
            
            

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0f0518] leading-[1.1] mb-6 tracking-tight"
            >
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-gradient bg-[length:200%_auto]">
                Industry-Ready
              </span> <br />
              Innovators.
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium mb-10"
            >
              Combo Square is a premium EdTech and innovation ecosystem bridging
              the gap between academic learning and real-world industry demands
              through hands-on training, internships, and creative services.
            </motion.p>

            {/* BENTO STATS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { label: "Students", val: "5K+", icon: Users, color: "bg-blue-50 text-blue-600" },
                { label: "Colleges", val: "120+", icon: Building2, color: "bg-purple-50 text-purple-600" },
                { label: "Projects", val: "300+", icon: Trophy, color: "bg-pink-50 text-pink-600" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="
                    group relative flex flex-col items-center lg:items-start p-4 
                    bg-white rounded-2xl border border-gray-100/60
                    shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                    hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] 
                    hover:-translate-y-1 transition-all duration-300 overflow-hidden
                  "
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3 shadow-sm`}>
                    <stat.icon size={18} />
                  </div>
                  <p className="text-xl sm:text-3xl font-black text-gray-900 group-hover:scale-105 transition-transform origin-left">{stat.val}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: VISUAL ================= */}
          {/* CHANGED: Using 'justify-center' to balance spacing (not too close, not too far) */}
          <div className="order-2 flex justify-center lg:justify-center perspective-[1000px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }} 
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px]"
            >
              
              {/* Main Image Container */}
              <div className="
                relative z-10 
                rounded-[2rem] 
                overflow-hidden 
                shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] 
                bg-white border-[6px] border-white
                aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5]
              ">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600" 
                  alt="Combo Square Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating "Impact" Card (Left Side) */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-gray-400 leading-none mb-0.5">Impact</p>
                    <p className="text-xs sm:text-sm font-black text-gray-900 leading-tight">Career Ready</p>
                  </div>
                </motion.div>

                {/* Floating "Since" Badge (Right Side) */}
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-lg border border-white/50 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-purple-900">Since 2021</span>
                </motion.div>
              </div>

              {/* Decorative Circle Behind */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse -z-10" />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;