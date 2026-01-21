import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Zap, AlertCircle, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#050505] relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gray-800/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5 backdrop-blur-md"
          >
            <Zap size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              The Transformation
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
              Start Evolving.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400">
            See the difference between the traditional path and the Combo Square advantage.
          </p>
        </div>

        {/* COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 relative">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-[#121212] rounded-[2rem]
              p-6 sm:p-8 lg:p-16
              border border-white/5
              lg:rounded-r-none lg:border-r-0
            "
          >
            <div className="flex items-center gap-3 mb-6 opacity-70">
              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center">
                <AlertCircle size={18} className="text-gray-400" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">
                Before Combo Square
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-500 mb-6 line-through decoration-red-500/50 decoration-2">
              The Traditional Struggle
            </h3>

            <ul className="space-y-6">
              {[
                { title: "Limited Exposure", desc: "Stuck with theory, no real-world view." },
                { title: "No Career Direction", desc: "Confused about what to learn next." },
                { title: "Zero Branding", desc: "Invisible to recruiters and clients." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gray-800/60 flex items-center justify-center mt-1">
                    <XCircle size={14} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-bold text-lg sm:text-xl text-gray-300 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS (DESKTOP ONLY) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-[#0f0518] rounded-full border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-purple-600 rounded-full flex items-center justify-center">
                <span className="font-black text-xl text-white italic">VS</span>
              </div>
            </motion.div>
          </div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-[#0f0518] rounded-[2rem]
              p-6 sm:p-8 lg:p-16
              border border-brand-primary/30
              lg:rounded-l-none
              shadow-[0_0_50px_rgba(139,92,246,0.1)]
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
                <TrendingUp size={18} className="text-brand-neon" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-neon uppercase tracking-widest">
                After Combo Square
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Professional Edge
            </h3>

            <ul className="space-y-6">
              {[
                { title: "Industry Internships", desc: "Work on live client projects." },
                { title: "Cutting-Edge Training", desc: "Master AI, IoT, & Full Stack." },
                { title: "Global Exposure", desc: "Connect with 50+ hiring partners." },
                { title: "Creative Growth", desc: "Build a brand that stands out." }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center mt-1 border border-green-500/30">
                    <CheckCircle2 size={14} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg sm:text-xl text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
