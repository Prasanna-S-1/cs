import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Industry-Oriented Training",
    desc: "Programs designed with real industry tools, workflows, and expectations.",
  },
  {
    title: "Hands-On Live Projects",
    desc: "Students and clients work on practical, real-world problem statements.",
  },
  {
    title: "Expert Mentorship",
    desc: "Guidance from experienced professionals and domain specialists.",
  },
  {
    title: "Proven Career Outcomes",
    desc: "Strong placement support, internships, and business growth results.",
  },
];

const comparison = [
  { before: "Theoretical Learning", after: "Practical Industry Exposure" },
  { before: "Outdated Curriculum", after: "Industry-Updated Modules" },
  { before: "No Real Projects", after: "Live Projects & Internships" },
  { before: "Limited Guidance", after: "Dedicated Expert Mentorship" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-14 sm:py-18 lg:py-24 bg-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-purple-50 pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <span className="inline-flex px-6 py-2.5 rounded-full bg-purple-100 text-purple-700 font-extrabold mb-6">
            WHY COMBO SQUARE
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            What Makes Us <span className="text-purple-600">Different</span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            We don’t just teach or deliver services — we create measurable impact
            through structured training, innovation, and execution.
          </p>
        </motion.div>

        {/* ✅ FIXED CARDS GRID (ONE BY ONE IN MOBILE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <CheckCircle size={22} />
              </div>

              <h3 className="text-base sm:text-lg font-black mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ❌ NOT TOUCHED – BEFORE / AFTER BLOCK */}
        <div className="relative bg-[#0f0518] rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                Before vs After <span className="text-purple-400">Combo Square</span>
              </h3>

              <p className="text-gray-400 text-lg mb-8 max-w-md">
                See the transformation our approach brings to students, colleges,
                and businesses.
              </p>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f0518] font-bold rounded-xl">
                Explore Our Approach <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {comparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="grid grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <div className="text-red-400 font-semibold text-sm">
                    {row.before}
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    {row.after}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
