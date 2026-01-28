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
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">


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
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <span className="inline-flex px-6 py-2.5 rounded-full bg-purple-100 text-purple-700 font-extrabold mb-6">
            Our Impact
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Numbers That Define{" "}
            <span className="text-purple-600">Combo Square</span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl">
            We measure success through outcomes, impact, and real-world growth
            for students, colleges, and businesses.
          </p>
        </motion.div>

        {/* ✅ FIXED: ONE BY ONE ON MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  relative group
                  rounded-[1.8rem]
                  bg-white
                  border border-gray-100
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  px-6 py-7
                  transition-all
                "
              >
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-3xl font-black text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm font-bold text-gray-800 mt-1">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500 mt-2 max-w-[260px]">
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
