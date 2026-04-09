import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// SEO UPDATE: Keyword-rich comparison points
const comparison = [
  { 
    before: "Theoretical & Outdated Learning", 
    after: "Practical, Industry-Updated Modules" 
  },
  { 
    before: "No Real-World Project Experience", 
    after: "Live Projects & Guaranteed Internships" 
  },
  { 
    before: "Generic Tutors & Limited Guidance", 
    after: "Dedicated Mentorship from Tech Experts" 
  },
  { 
    before: "Struggling for Job Placements", 
    after: "Strong Placement Support & Career Growth" 
  },
];

// Animation Variants for staggered loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhyChooseUs = () => {
  return (
    <section aria-label="Why Choose Combo Square Training" className="relative py-20 sm:py-28 lg:py-32 bg-[#0f0518] overflow-hidden">

      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/15 rounded-full blur-[150px]" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 lg:mb-24 text-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs mb-6 shadow-xl backdrop-blur-md">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Before vs After <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Combo Square</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            See the exact difference our industry-aligned EdTech ecosystem makes for your tech career and business growth.
          </p>
        </motion.div>

        {/* ================= MAIN COMPARISON UI ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative"
        >
          {/* Decorative VS Badge (Visible only on Desktop) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0f0518] border-2 border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <span className="text-white font-black italic text-xl">VS</span>
          </div>

          {/* ----- COLUMN 1: BEFORE ----- */}
          <div className="flex flex-col gap-4">
            {/* Column Header */}
            <motion.div variants={itemVariants} className="text-center lg:text-left mb-4 pl-2">
              <p className="text-2xl sm:text-3xl font-black text-gray-400">Before</p>
            </motion.div>

            {comparison.map((row, i) => (
              <motion.div
                key={`before-${i}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: -5 }}
                className="group relative bg-white/5 border border-white/5 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-red-500/5 hover:border-red-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-500/20 group-hover:scale-110 transition-all">
                    <XCircle size={18} className="text-red-400" />
                  </div>
                  <p className="text-gray-400 font-medium text-base sm:text-lg leading-relaxed group-hover:text-red-200 transition-colors">
                    {row.before}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ----- COLUMN 2: AFTER ----- */}
          <div className="flex flex-col gap-4 relative">
            {/* Glow Behind the After Column for emphasis */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl -z-10" />

            {/* Column Header */}
            <motion.div variants={itemVariants} className="text-center lg:text-left mb-4 pl-2">
              <p className="text-2xl sm:text-3xl font-black text-white">After</p>
            </motion.div>

            {comparison.map((row, i) => (
              <motion.div
                key={`after-${i}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-green-400/50 hover:shadow-[0_15px_40px_rgba(52,211,153,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-green-500/30 group-hover:bg-green-400/30 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                    <CheckCircle size={18} className="text-green-400" />
                  </div>
                  <p className="text-white font-bold text-base sm:text-lg leading-relaxed group-hover:text-green-300 transition-colors">
                    {row.after}
                  </p>
                </div>

                {/* Subtle highlight line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-green-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* CTA BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link to="/services" aria-label="Explore Our Services">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f0518] font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              Explore Our Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;