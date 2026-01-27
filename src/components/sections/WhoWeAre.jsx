import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowUpRight,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Industry-Oriented Training",
    desc: "Programs crafted around real-world tools, workflows, and mentorship from professionals.",
  },
  {
    icon: Briefcase,
    title: "Live Projects & Internships",
    desc: "Students work on production-level projects with measurable outcomes.",
  },
  {
    icon: Globe,
    title: "Career & Business Growth",
    desc: "We empower students, colleges, and startups with scalable digital skills.",
  },
  {
    icon: Users,
    title: "Mentorship & Expert Guidance",
    desc: "Learn directly from industry experts through structured mentorship, reviews, and career guidance.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER (CENTERED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          {/* BIGGER WHO WE ARE */}
          <span className="
            inline-flex items-center justify-center
            px-6 py-2.5
            rounded-full
            bg-purple-100
            text-purple-700
            text-base sm:text-lg
            font-extrabold
            mb-6
          ">
            Who We Are
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            Bridging the Gap Between
            <span className="text-purple-600"> Learning </span>
            & Industry.
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Combo Square is an outcome-driven EdTech and innovation hub empowering
            students, colleges, and businesses through real-world exposure,
            internships, and industry-aligned programs.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              col-span-2 lg:col-span-6
              relative
              rounded-[2.5rem]
              overflow-hidden
              shadow-2xl
              aspect-[4/3]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Industry Collaboration"
              className="w-full h-full object-cover"
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute bottom-5 left-5
                bg-white/90 backdrop-blur-xl
                px-5 py-4 rounded-2xl
                shadow-xl
                flex items-center gap-3
              "
            >
              <div className="w-10 h-10 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-600">
                <ArrowUpRight size={18} />
              </div>
              <div>
                <p className="text-sm font-black">Trusted by</p>
                <p className="text-xs text-gray-500 font-semibold">
                  Students & Colleges
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* PILLARS */}
          <div className="col-span-2 lg:col-span-6">
            <div className="grid grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="
                    bg-white
                    border border-gray-100
                    rounded-3xl
                    p-6 sm:p-8
                    min-h-[220px]
                    shadow-md hover:shadow-xl
                    transition-all
                    group
                    flex flex-col
                  "
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>

                  <h4 className="font-black text-sm sm:text-base mb-3">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
