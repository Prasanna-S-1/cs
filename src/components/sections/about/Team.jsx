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
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-purple-200/40 blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/40 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* ===== HEADER (MATCHES OUR STORY) ===== */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">

          {/* BIG OUR TEAM BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex px-6 py-2.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm sm:text-base font-extrabold tracking-wider uppercase mb-6"
          >
            Our Team
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f0518] leading-tight mb-4"
          >
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Combo Square.
            </span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Leaders, creators, and mentors shaping future-ready talent.
          </motion.p>
        </div>

        {/* ===== TEAM GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl lg:rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all ${
                m.variant === "dark"
                  ? "bg-[#0f0518] text-white"
                  : "bg-white text-[#0f0518]"
              }`}
            >
              <div className="p-4 sm:p-5 lg:p-6 flex flex-row lg:flex-col items-center lg:items-start gap-4 h-auto lg:h-[320px]">

                {/* Avatar */}
                <div className="shrink-0 lg:mb-6">
                  {!m.cta ? (
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-xl font-black ${
                      m.variant === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-purple-50 text-purple-600"
                    }`}>
                      {m.initials}
                    </div>
                  ) : (
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/10 flex items-center justify-center animate-pulse">
                      <Plus size={24} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-base lg:text-xl font-extrabold truncate">
                    {m.name}
                  </h3>

                  <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-2 text-purple-600">
                    {m.role}
                  </p>

                  <p className="text-xs lg:text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {m.desc}
                  </p>

                  <div className="hidden lg:flex-grow" />

                  {/* Footer */}
                  <div className="mt-3">
                    {m.socials && (
                      <div className="flex gap-2">
                        <Linkedin size={14} />
                        <Twitter size={14} />
                      </div>
                    )}

                    {m.cta && (
                      <Link to="/careers">
                        <button className="hidden lg:flex w-full py-3 rounded-xl bg-white text-[#0f0518] font-bold text-sm items-center justify-center gap-2 hover:bg-purple-500 hover:text-white transition-all">
                          Join Us <ArrowRight size={16} />
                        </button>
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
