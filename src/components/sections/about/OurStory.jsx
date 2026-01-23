import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

/* ===== CONTENT FROM PDF (UNCHANGED) ===== */
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

      {/* ===== BACKGROUND DEPTH ===== */}
      <div className="absolute top-[-140px] right-[-140px] w-[420px] h-[420px] bg-purple-100/60 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-160px] left-[-160px] w-[520px] h-[520px] bg-brand-primary/10 rounded-full blur-[160px]" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">

        {/* ===== HEADER ===== */}
        <div className="max-w-5xl mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-5 rounded-full bg-purple-50 text-purple-700 text-xs font-black tracking-widest uppercase">
            <Sparkles size={14} /> Our Story
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.15] text-[#0f0518]">
            From an idea to an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">
              innovation ecosystem
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
            Our journey is built on practical learning, industry alignment,
            and a commitment to preparing students and organizations for the future.
          </p>
        </div>

        {/* ===== MAIN LAYOUT (CRITICAL FIX HERE) ===== */}
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* ===== TIMELINE (MINI DESKTOP EVEN ON MOBILE) ===== */}
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">

              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="
                    relative
                    bg-white
                    rounded-2xl
                    sm:rounded-3xl
                    p-4 sm:p-6
                    border border-gray-200
                    shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_20px_55px_rgba(0,0,0,0.14)]
                    transition-all
                  "
                >
                  {/* top accent */}
                  <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-purple-500 rounded-t-2xl sm:rounded-t-3xl" />

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs sm:text-sm font-black text-brand-primary">
                      {item.year}
                    </p>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                  </div>

                  <h4 className="text-sm sm:text-lg font-black text-[#0f0518] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>

          {/* ===== VISUAL STORY CARD (FIXED FOR MOBILE) ===== */}
          <div className="col-span-12 md:col-span-5 flex md:block justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="
                relative
                w-full
                max-w-[420px]
                md:max-w-none
                rounded-[2.4rem]
                overflow-hidden
                border border-gray-200
                shadow-[0_40px_100px_rgba(0,0,0,0.15)]
                bg-white
              "
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400"
                alt="Combo Square Team"
                className="w-full h-[220px] sm:h-[260px] lg:h-[340px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                    Since 2021
                  </p>
                  <p className="text-sm sm:text-base font-black text-[#0f0518]">
                    Building future-ready talent
                  </p>
                </div>
                <ArrowUpRight className="text-brand-primary" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
