import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-[#0f0518]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[420px] h-[420px] sm:w-[600px] sm:h-[600px]
                     bg-brand-primary rounded-full blur-[140px] opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-6 sm:mb-8 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Join the Revolution
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-3xl sm:text-4xl lg:text-7xl
              font-black text-white
              mb-6 sm:mb-8
              leading-tight tracking-tight
            "
          >
            Ready to Grow with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-300 to-brand-primary">
              Combo Square?
            </span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto font-medium"
          >
            Join <span className="text-white font-bold">4,500+ students</span> and{' '}
            <span className="text-white font-bold">25+ brands</span> who are already shaping the future with us.
          </motion.p>

          {/* ACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6 sm:gap-8"
          >

            {/* PRIMARY CTA */}
            <Link to="/contact" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition"></div>
              <button className="
                relative w-full sm:w-auto
                px-8 py-4 sm:px-10 sm:py-5
                bg-white text-[#0f0518]
                text-base sm:text-xl
                font-black rounded-xl
                flex items-center justify-center gap-3
                active:scale-95 transition-all shadow-xl
              ">
                <Calendar size={20} />
                Book a Free Consultation
              </button>
            </Link>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 opacity-30 w-full max-w-xs">
              <div className="h-px bg-white flex-1"></div>
              <span className="text-white text-xs font-bold uppercase">OR</span>
              <div className="h-px bg-white flex-1"></div>
            </div>

            {/* NEWSLETTER */}
            <div className="relative w-full max-w-md">
              <form className="
                flex p-2
                bg-white/5 border border-white/10
                rounded-2xl backdrop-blur-xl
                focus-within:border-brand-primary/50
                transition-all
              ">
                <div className="pl-4 flex items-center text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email for updates..."
                  className="w-full bg-transparent text-white placeholder-gray-500 px-4 py-2.5 outline-none"
                />
                <button className="
                  px-5 py-2
                  bg-brand-primary text-white
                  font-bold rounded-xl
                  hover:bg-brand-neon hover:text-black
                  transition-all flex items-center gap-2
                ">
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
