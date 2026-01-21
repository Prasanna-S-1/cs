import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, Briefcase, Award, MonitorPlay, Zap } from 'lucide-react';

// --- Animated Counter ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

const Stats = () => {
  const statsData = [
    {
      id: 1,
      label: "Learners Upskilled",
      value: 48000,
      suffix: "+",
      icon: Users,
      desc: "Across India & Abroad"
    },
    {
      id: 2,
      label: "Placement Rate",
      value: 100,
      suffix: "%",
      icon: Briefcase,
      desc: "Job Support Included"
    },
    {
      id: 3,
      label: "Live Projects",
      value: 120,
      suffix: "+",
      icon: MonitorPlay,
      desc: "Built by Students"
    },
    {
      id: 4,
      label: "Average Rating",
      value: 4.9,
      suffix: "/5",
      icon: Award,
      desc: "Rated by Learners"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0f0518] overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-brand-primary rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-purple-600 rounded-full blur-[140px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5"
          >
            <Zap size={12} className="text-brand-neon fill-brand-neon" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Our Impact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4"
          >
            Measured by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-purple-400">
              Learner Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-gray-400"
          >
            Simple numbers that reflect real learning outcomes and trust built over time.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="
                relative group
                p-5 sm:p-6 lg:p-8
                rounded-2xl lg:rounded-[2rem]
                bg-white/5 border border-white/10
                hover:bg-white/10 hover:border-brand-primary/50
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-primary/20 flex items-center justify-center mb-4 text-brand-neon">
                <stat.icon size={20} />
              </div>

              {/* NUMBER */}
              <div className="text-2xl sm:text-3xl lg:text-5xl font-black mb-1 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* LABEL */}
              <h3 className="text-[11px] sm:text-sm font-bold text-gray-300 uppercase tracking-wide mb-1">
                {stat.label}
              </h3>

              {/* DESC */}
              <p className="text-[10px] sm:text-xs text-gray-500">
                {stat.desc}
              </p>

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Trusted by learners across India and growing every day.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
