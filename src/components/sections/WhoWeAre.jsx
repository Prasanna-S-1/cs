import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowUpRight,
  Users,
  Sparkles,
  Fingerprint
} from "lucide-react";

// SEO UPDATE: Keyword-rich titles and descriptions
const pillars = [
  {
    icon: GraduationCap,
    title: "Industry-Oriented Tech Training",
    desc: "React.js, UI/UX, and Marketing programs crafted around real workflows and top-tier mentorship.",
  },
  {
    icon: Briefcase,
    title: "Real-World Internships",
    desc: "Students build production-level projects with measurable outcomes to guarantee placement readiness.",
  },
  {
    icon: Globe,
    title: "Business & Startup Growth",
    desc: "We empower brands and startups with scalable digital marketing and web development services.",
  },
  {
    icon: Users,
    title: "Expert Career Mentorship",
    desc: "Learn directly from industry leaders through structured hackathons, code reviews, and career guidance.",
  },
];

const WhoWeAre = () => {
  return (
    <section aria-label="Who is Combo Square EdTech" className="relative bg-[#F8FAFC] py-16 sm:py-24 lg:py-32 overflow-hidden">

      {/* PREMIUM BACKGROUND MAGIC */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          {/* Restored to "Who We Are" but kept the premium badge look */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[11px] font-bold uppercase tracking-widest text-slate-800 mb-6">
             <Fingerprint size={14} className="text-purple-600" /> Who We Are
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
            Bridging the Gap Between
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"> Academic Learning </span>
            & Tech Industry Demands.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Combo Square is India's leading EdTech and Innovation Hub. We empower 
            students, colleges, and businesses through real-world exposure, guaranteed 
            internships, and premium web development programs.
          </p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:col-span-6 relative perspective-[1000px]"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-[8px] border-white aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Combo Square students collaborating on a web development project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Floating Glass Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-tight">Career Ready</p>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                    Verified Program
                  </p>
                </div>
              </motion.div>
              
              {/* Spinta Decorative Sparkle */}
              <motion.div 
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 text-white drop-shadow-md"
              >
                <Sparkles size={28} />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: SUPER PREMIUM INTERACTIVE CARDS */}
          <div className="w-full lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { delay: i * 0.1 } },
                    hover: { y: -8, scale: 1.02 },
                    tap: { scale: 0.98 }
                  }}
                  className="
                    group relative bg-white rounded-[2rem] p-6 sm:p-8
                    border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)]
                    overflow-hidden cursor-pointer
                    transition-shadow duration-500
                    hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
                  "
                >
                  {/* INNER HOVER GLOW (Spinta Style) */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, scale: 0.5 },
                      hover: { opacity: 1, scale: 1.5 }
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl pointer-events-none"
                  />

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Animated Icon Box */}
                    <motion.div 
                      variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: 5, scale: 1.1 }
                      }}
                      className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg transition-all duration-300"
                    >
                      <item.icon size={24} />
                    </motion.div>

                    <h3 className="font-black text-lg text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-600 transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-medium group-hover:text-slate-800 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle bottom border highlight on hover */}
                  <motion.div 
                    variants={{
                      initial: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 }
                    }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;