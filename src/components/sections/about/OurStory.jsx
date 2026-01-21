import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flag, Rocket, Users, Globe, Zap } from 'lucide-react';

const milestones = [
  {
    year: "2024",
    title: "The Inception",
    desc: "Combo Square was born from a simple idea: Students need more than textbooks. They need a playground for innovation. We started as a small community of dreamers.",
    icon: Flag
  },
  {
    year: "2024 (Late)",
    title: "First 100 Students",
    desc: "We launched our first Bootcamp. It wasn't just a class; it was a movement. 100+ students built their first live projects, breaking the cycle of rote learning.",
    icon: Users
  },
  {
    year: "2025",
    title: "Agency Expansion",
    desc: "We realized we could do more. We started the Creative Agency wing, helping startups define their brand identity with high-end visuals and tech solutions.",
    icon: Rocket
  },
  {
    year: "2026",
    title: "Global Vision",
    desc: "Now partnering with 30+ colleges and serving clients globally. We are building the ultimate ecosystem for Education + Innovation.",
    icon: Globe
  }
];

const MilestoneCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`relative flex w-full mb-16 sm:mb-20 lg:mb-24 group ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer (desktop alignment) */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Node */}
      <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 z-20">
        <div className="
          w-10 h-10 sm:w-12 sm:h-12
          rounded-full bg-[#0f0518]
          border-4 border-white
          shadow-xl flex items-center justify-center
          transition-all duration-300
          group-hover:border-brand-primary
        ">
          <item.icon size={18} className="text-white group-hover:text-brand-neon transition-colors" />
          <div className="absolute inset-0 rounded-full bg-brand-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full pl-16 sm:pl-20 md:pl-0 md:w-5/12">
        <div className="
          bg-white p-6 sm:p-8
          rounded-2xl sm:rounded-[2rem]
          shadow-lg border border-gray-100
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-1
          active:scale-[0.98]
        ">
          <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
            {item.year}
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-[#0f0518] mb-3">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const OurStory = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 55%"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-32 bg-gray-50 overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-5 shadow-sm"
          >
            <Zap size={14} className="text-brand-primary fill-brand-primary" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              Our Journey
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0f0518] mb-4 tracking-tight">
            Connecting the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
              Dots.
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-500 font-medium">
            From a small dorm-room idea to a full-fledged innovation hub.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-12 w-1 -translate-x-1/2">
            <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
            <motion.div
              style={{ height }}
              className="absolute top-0 left-0 w-full bg-brand-primary rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] origin-top"
            />
          </div>

          {/* Items */}
          <div className="relative z-10 pt-2">
            {milestones.map((item, index) => (
              <MilestoneCard key={index} item={item} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;
