import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Ahamad Thowfeek B",
    role: "FOUNDER & CEO",
    desc: "Visionary leader in branding & education.",
    initials: "AT",
    socials: true,
    variant: "light",
  },
  {
    name: "Nazneen A",
    role: "CO-FOUNDER & CREATIVE DIR.",
    desc: "Driving force behind design & creativity.",
    initials: "NA",
    socials: true,
    variant: "light",
  },
  {
    name: "Core Team",
    role: "SPECIALISTS & MENTORS",
    desc: "Experts in AI, UI/UX, and Innovation.",
    initials: "CT",
    socials: true,
    variant: "light",
  },
  {
    name: "You?",
    role: "WE ARE HIRING",
    desc: "Join our growing innovation-driven team.",
    cta: true,
    variant: "dark",
  },
];

const Team = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-purple-200/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/40 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-5"
          >
            OUR TEAM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-[#0f0518]"
          >
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Combo Square.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-lg font-medium"
          >
            Leaders, creators, and mentors shaping future-ready talent.
          </motion.p>
        </div>

        {/* GRID (Mobile: 1 col, Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`
                relative rounded-2xl lg:rounded-[2rem] overflow-hidden
                border border-gray-100/50
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                transition-all duration-300
                group
                ${m.variant === "dark"
                  ? "bg-[#0f0518] text-white" // Dark Card
                  : "bg-white text-[#0f0518]" // Light Card
                }
              `}
            >
              {/* CARD LAYOUT: Horizontal on Mobile (Compact), Vertical on Desktop */}
              <div className="
                p-4 sm:p-5 lg:p-6
                flex flex-row lg:flex-col
                items-center lg:items-start
                gap-4 lg:gap-0
                h-auto lg:h-[320px]
              ">

                {/* --- 1. AVATAR / ICON --- */}
                <div className="shrink-0 lg:mb-6 lg:w-full lg:flex lg:justify-start">
                  {!m.cta ? (
                    <div className={`
                      w-14 h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl
                      flex items-center justify-center
                      text-xl lg:text-2xl font-black
                      shadow-inner
                      ${m.variant === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-purple-50 text-purple-600"
                      }
                    `}>
                      {m.initials}
                    </div>
                  ) : (
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl bg-white/10 flex items-center justify-center animate-pulse">
                      <Plus size={24} className="text-white" />
                    </div>
                  )}
                </div>

                {/* --- 2. TEXT CONTENT --- */}
                <div className="flex flex-col flex-grow min-w-0">
                  <h3 className={`text-base lg:text-xl font-black truncate ${m.variant === "dark" ? "text-white" : "text-[#0f0518]"}`}>
                    {m.name}
                  </h3>

                  <p className={`text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-1 lg:mb-2 truncate ${m.variant === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                    {m.role}
                  </p>

                  <p className={`text-xs lg:text-sm leading-relaxed line-clamp-2 ${m.variant === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    {m.desc}
                  </p>

                  {/* DESKTOP ONLY: Spacer to push footer down */}
                  <div className="hidden lg:block lg:flex-grow" />

                  {/* --- 3. FOOTER (Socials / Button) --- */}
                  <div className="mt-2 lg:mt-4">
                    {m.socials && (
                      <div className="flex gap-2">
                        <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${m.variant === "dark" ? "bg-white/10 hover:bg-purple-600 text-white" : "bg-gray-100 hover:bg-purple-600 text-gray-600 hover:text-white"}`}>
                          <Linkedin size={14} />
                        </a>
                        <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${m.variant === "dark" ? "bg-white/10 hover:bg-purple-600 text-white" : "bg-gray-100 hover:bg-purple-600 text-gray-600 hover:text-white"}`}>
                          <Twitter size={14} />
                        </a>
                      </div>
                    )}

                    {m.cta && (
                      <Link to="/careers" className="block lg:w-full">
                        <button className="
                          hidden lg:flex w-full py-3 rounded-xl
                          bg-white text-[#0f0518]
                          font-bold text-sm
                          items-center justify-center gap-2
                          hover:bg-purple-500 hover:text-white
                          transition-all
                        ">
                          Join Us <ArrowRight size={16} />
                        </button>
                        {/* Mobile Button (Small) */}
                        <div className="lg:hidden flex items-center gap-1 text-xs font-bold text-white mt-1">
                          Apply Now <ArrowRight size={12} />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;