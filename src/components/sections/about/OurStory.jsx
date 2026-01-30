import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Calendar, CheckCircle2 } from "lucide-react";

/* ===== CONTENT (UNCHANGED) ===== */
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
      
      {/*  */}

      {/* ===== BACKGROUND DEPTH ===== */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] bg-purple-100/60 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[160px]" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28">

        {/* ===== HEADER ===== */}
        <div className="max-w-4xl mb-10 lg:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[10px] sm:text-xs font-black tracking-widest uppercase"
          >
            <Sparkles size={12} /> Our Story
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.15] text-[#0f0518]"
          >
            From an idea to an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              innovation ecosystem
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-gray-600 text-sm sm:text-lg font-medium leading-relaxed"
          >
            Our journey is built on practical learning, industry alignment,
            and a commitment to preparing students and organizations for the future.
          </motion.p>
        </div>

        {/* ===== MAIN CONTENT GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ===== LEFT: TIMELINE CARDS ===== */}
          <div className="col-span-1 lg:col-span-7 order-1 lg:order-1">
            {/* MOBILE: grid-cols-1 (One by One), DESKTOP: grid-cols-2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="
                    relative overflow-hidden
                    bg-white
                    rounded-2xl
                    p-5 sm:p-6
                    border border-gray-100
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-300
                    group
                  "
                >
                  {/* Decorative Gradient Line on Top */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                        <Calendar size={16} />
                      </div>
                      <span className="text-sm font-black text-purple-700 tracking-wide">
                        {item.year}
                      </span>
                    </div>
                    {/* Checkmark visual */}
                    <CheckCircle2 size={18} className="text-gray-200 group-hover:text-green-500 transition-colors" />
                  </div>

                  <h4 className="text-lg font-black text-[#0f0518] mb-2 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT: IMAGE (STACKS TO BOTTOM ON MOBILE) ===== */}
          <div className="col-span-1 lg:col-span-5 order-2 lg:order-2 flex justify-center">
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
                className="w-full h-[240px] sm:h-[300px] lg:h-[420px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center justify-between border border-white/40">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Since 2021</p>
                  <p className="text-sm font-black text-[#0f0518]">Building Future Talent</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
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