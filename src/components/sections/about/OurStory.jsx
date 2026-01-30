import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Calendar, CheckCircle2 } from "lucide-react";

/* ===== CONTENT ===== */
const journey = [
  {
    year: "2021",
    title: "Foundation",
    desc: "Combo Square was founded with the vision of bridging the gap between academic knowledge and real-world industry expectations.",
  },
  {
    year: "2022",
    title: "Skill Building",
    desc: "Introduced structured internships, workshops, and hands-on technical programs focused on practical exposure.",
  },
  {
    year: "2023",
    title: "Expansion",
    desc: "Expanded into branding, digital marketing, and creative services for startups and educational institutions.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    desc: "Evolved into a full-scale EdTech and Innovation Hub serving students, colleges, and businesses.",
  },
];

const OurStory = () => {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute top-[-100px] right-[-100px] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-purple-100/60 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-purple-500/10 rounded-full blur-[160px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">

        {/* ===== HEADER ===== */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">

          {/* BIG OUR STORY BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm sm:text-base font-extrabold tracking-wider uppercase shadow-sm"
          >
            <Sparkles size={16} />
            Our Story
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#0f0518]"
          >
            From an idea to an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              innovation ecosystem
            </span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Our journey is built on practical learning, industry alignment,
            and a commitment to preparing students and organizations for the future.
          </motion.p>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* TIMELINE */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.1)] transition-all"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                        <Calendar size={16} />
                      </div>
                      <span className="text-sm font-extrabold text-purple-700">
                        {item.year}
                      </span>
                    </div>
                    <CheckCircle2 size={18} className="text-gray-300 group-hover:text-green-500 transition-colors" />
                  </div>

                  <h4 className="text-lg font-extrabold text-[#0f0518] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400"
                alt="Combo Square Team"
                className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">
                    Since 2021
                  </p>
                  <p className="text-sm font-extrabold text-[#0f0518]">
                    Building Future Talent
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
