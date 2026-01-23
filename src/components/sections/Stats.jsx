import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Building2,
} from "lucide-react";

const stats = [
  {
    value: "4500+",
    label: "Students Trained",
    desc: "Industry-ready learners equipped with real-world skills",
    icon: GraduationCap,
  },
  {
    value: "100+",
    label: "Live Projects",
    desc: "Hands-on projects with measurable outcomes",
    icon: Briefcase,
  },
  {
    value: "25+",
    label: "Industry Partners",
    desc: "Collaborations with startups and enterprises",
    icon: Building2,
  },
  {
    value: "100%",
    label: "Practical Exposure",
    desc: "Learning by doing, not just theory",
    icon: Users,
  },
];

const Stats = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
      
      {/* ===== SOFT BACKGROUND DECOR ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-purple-500/10 blur-[180px]" />
        <div className="absolute bottom-[-240px] right-[-160px] w-[520px] h-[520px] bg-pink-500/10 blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-xs sm:text-sm mb-4">
            Our Impact
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
            Numbers That Define{" "}
            <span className="text-purple-600">Combo Square</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
            We measure success through outcomes, impact, and real-world growth
            for students, colleges, and businesses.
          </p>
        </motion.div>

        {/* ===== STATS GRID (ALWAYS 2x2) ===== */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:gap-6
          "
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="
                  relative
                  group
                  rounded-[1.8rem]
                  bg-white
                  border border-gray-100
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  px-4 py-5
                  sm:px-6 sm:py-7
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                  transition-all
                "
              >
                {/* hover glow */}
                <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                <div className="relative flex items-start gap-4">
                  
                  {/* icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Icon size={22} />
                  </div>

                  {/* text */}
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-gray-900 leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                      {stat.label}
                    </p>
                    <p className="text-[11px] sm:text-sm text-gray-500 mt-2 leading-snug max-w-[260px]">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
