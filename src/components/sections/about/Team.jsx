import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Plus } from "lucide-react";
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
    <section className="relative bg-white py-20 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-purple-200/40 blur-[130px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-sm mb-5">
            OUR TEAM
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            The People Behind{" "}
            <span className="text-purple-600">Combo Square.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Leaders, creators, and mentors shaping future-ready talent.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-10
          "
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`
                relative rounded-[2rem] overflow-hidden
                shadow-[0_20px_45px_rgba(0,0,0,0.12)]
                ${m.variant === "dark"
                  ? "bg-gradient-to-br from-[#12061d] to-[#2b0f3f]"
                  : "bg-gradient-to-b from-gray-100 to-gray-300"}
              `}
            >

              {/* soft overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* CONTENT */}
              <div
                className="
                  relative z-10
                  p-5 sm:p-6
                  flex flex-col
                  h-[280px] sm:h-[300px] lg:h-[340px]
                "
              >

                {/* INITIAL / ICON */}
                {!m.cta && (
                  <div className="mb-4">
                    <div className="
                      w-16 h-16 rounded-full
                      bg-white/20 backdrop-blur-md
                      flex items-center justify-center
                      text-2xl font-black text-white
                    ">
                      {m.initials}
                    </div>
                  </div>
                )}

                {m.cta && (
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                      <Plus size={28} className="text-white" />
                    </div>
                  </div>
                )}

                {/* TEXT */}
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {m.name}
                </h3>

                <p className="text-xs font-bold tracking-widest text-purple-300 mt-1 mb-2">
                  {m.role}
                </p>

                <p className="text-sm text-gray-200 leading-relaxed flex-grow">
                  {m.desc}
                </p>

                {/* FOOTER */}
                {m.socials && (
                  <div className="flex gap-3 mt-4">
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition">
                      <Linkedin size={16} className="text-white" />
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition">
                      <Twitter size={16} className="text-white" />
                    </span>
                  </div>
                )}

                {m.cta && (
                  <Link to="/careers" className="mt-4">
                    <button
                      className="
                        w-full py-3 rounded-xl
                        bg-white text-[#12061d]
                        font-black
                        hover:bg-purple-600 hover:text-white
                        transition-all
                      "
                    >
                      Join the Team →
                    </button>
                  </Link>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
