import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const serviceImages = [
  {
    title: "IT Services",
    desc: "Full Stack, AI, Data & Cybersecurity",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
  },
  {
    title: "Core Domains",
    desc: "IoT, Robotics & Embedded Systems",
    img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1200",
  },
  {
    title: "Creative Services",
    desc: "UI/UX, Branding & Digital Marketing",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    title: "Training & Hackathons",
    desc: "Internships, Workshops & Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#12051f] via-[#1a0b2e] to-[#0b0216] text-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[140px]" />

      <div className="relative container mx-auto px-6 lg:px-12 pt-28 pb-20">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm font-bold tracking-wide">
            OUR SERVICES
          </span>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              End-to-End{" "}
              <span className="text-purple-400">
                Digital, Technical & Training
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-10"
            >
              Combo Square delivers industry-ready services across technology,
              innovation, creativity, and skill development — empowering
              students, colleges, and businesses with real-world outcomes.
            </motion.p>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="#services"
                className="px-7 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all font-bold flex items-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all font-bold"
              >
                Talk to Experts
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL GRID */}
          <div className="relative">

            {/* DESKTOP + MOBILE MINI GRID */}
            <div className="grid grid-cols-2 gap-5">

              {serviceImages.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 * i }}
                  className="relative group rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-[180px] sm:h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* TEXT */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-black text-white text-lg leading-tight">
                      {s.title}
                    </h4>
                    <p className="text-xs text-gray-300 mt-1">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* FLOATING BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl hidden sm:block"
            >
              <p className="font-black text-lg">360° Solutions</p>
              <p className="text-xs text-gray-500 font-semibold">
                Technology • Creativity • Training
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
