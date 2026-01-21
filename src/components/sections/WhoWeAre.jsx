import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white overflow-hidden relative">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-[1000px] hidden sm:block"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white z-10 rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                alt="Combo Square Innovation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518]/80 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-brand-neon fill-brand-neon" size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Since 2024</span>
                </div>
                <p className="text-xl font-black">Shaping the Future</p>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-12, 0, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-6 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/40 z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-purple-600 rounded-full flex items-center justify-center text-white">
                <Users size={18} />
              </div>
              <div>
                <p className="text-xl font-black text-[#0f0518]">4,500+</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Followers</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-6 bg-[#0f0518] p-4 rounded-2xl shadow-xl border border-gray-800 z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10">
                <Trophy size={18} />
              </div>
              <div>
                <p className="text-xl font-black text-white">100+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Projects</p>
              </div>
            </motion.div>

            <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] -z-10 rounded-full"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-0 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light border border-brand-primary/10 rounded-full mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
              </span>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                Who We Are
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#0f0518] mb-5 leading-[1.15]">
              More than a Design Agency. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
                We Are an Innovation Hub.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mb-7 leading-relaxed font-medium">
              Combo Square is a next-gen digital agency. We don't just provide services; we empower students, colleges, and startups with technology-driven solutions and creative branding.
              <br /><br />
              With <span className="text-[#0f0518] font-bold">25+ Clients</span> and a growing community, we bridge the gap between education and industry demands.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Technology-Driven Solutions for Startups",
                "Creative Branding & High-End Design",
                "Student Empowerment & Internships"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-700 font-bold text-base sm:text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <button className="group relative px-7 py-3.5 bg-[#0f0518] text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Read Our Story</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
