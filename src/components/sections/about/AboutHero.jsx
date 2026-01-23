import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, GraduationCap } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0f0518] overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-2 lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Sparkles size={14} className="text-brand-neon" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                About Combo Square
              </span>
            </span>

            <h1 className="text-[36px] sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6">
              Building Industry-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">
                Innovators.
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Combo Square is a premium EdTech and innovation ecosystem bridging
              the gap between academic learning and real-world industry demands
              through hands-on training, internships, and creative services.
            </p>

            {/* STATS ROW */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-xl sm:text-2xl font-black text-white">5K+</p>
                <p className="text-[11px] text-gray-400 font-bold uppercase">
                  Students
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-xl sm:text-2xl font-black text-white">120+</p>
                <p className="text-[11px] text-gray-400 font-bold uppercase">
                  Colleges
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-xl sm:text-2xl font-black text-white">300+</p>
                <p className="text-[11px] text-gray-400 font-bold uppercase">
                  Projects
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT VISUAL (FIXED MOBILE) ================= */}
          <div className="col-span-2 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  sm:aspect-[16/10]
                  lg:aspect-[4/3]
                  rounded-[2.4rem]
                  overflow-hidden
                  border border-white/10
                  shadow-[0_50px_120px_rgba(0,0,0,0.45)]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                  alt="Combo Square Team"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0518]/70 via-[#0f0518]/30 to-transparent" />
              </motion.div>

              {/* FLOATING INFO CARD */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-6
                  sm:left-6
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/15
                  rounded-2xl
                  px-4
                  py-3
                  shadow-xl
                "
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-neon">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">
                      Since 2021
                    </p>
                    <p className="text-sm font-black text-white">
                      Real-World Learning
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
