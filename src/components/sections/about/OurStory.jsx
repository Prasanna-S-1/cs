import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    desc: "Expanded into branding, digital marketing, and creative services.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    desc: "Evolved into a full-scale EdTech and Innovation Hub.",
  },
];

const OurStory = () => {
  const ref = useRef(null);

  // 🔥 SCROLL LINE ANIMATION
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black mb-4">
          Our Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From idea to innovation ecosystem 🚀
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* 🔥 ANIMATED GRADIENT LINE */}
        <div className="absolute left-1/2 top-0 w-[4px] h-full -translate-x-1/2 bg-gray-200 rounded-full" />

        <motion.div
          style={{ height }}
          className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full"
        />

        {journey.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-between mb-20"
            >

              {/* LEFT */}
              <div className={`w-full md:w-5/12 ${isLeft ? "block" : "md:invisible"}`}>
                <motion.div
                  initial={{ opacity: 0, x: -80, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all"
                >
                  <h3 className="text-purple-600 font-bold mb-1">
                    {item.year}
                  </h3>
                  <h4 className="font-black text-xl mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              </div>

              {/* 💥 ULTRA DOT */}
              <div className="relative z-10 flex items-center justify-center my-6 md:my-0">

                {/* ripple */}
                <span className="absolute w-10 h-10 bg-purple-400/30 rounded-full animate-ping" />

                {/* glow */}
                <span className="absolute w-6 h-6 bg-purple-400 rounded-full blur-md opacity-80" />

                {/* core dot */}
                <span className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-xl" />
              </div>

              {/* RIGHT */}
              <div className={`w-full md:w-5/12 ${!isLeft ? "block" : "md:invisible"}`}>
                <motion.div
                  initial={{ opacity: 0, x: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all"
                >
                  <h3 className="text-purple-600 font-bold mb-1">
                    {item.year}
                  </h3>
                  <h4 className="font-black text-xl mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurStory;