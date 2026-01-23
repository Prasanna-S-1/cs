import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Code2,
  Rocket,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* -----------------------------------
   DATA
----------------------------------- */

const roles = [
  {
    title: "Full Stack Intern",
    desc: "Build industry-grade MERN applications with real clients, clean architecture, and mentor guidance.",
    location: "Remote / Chennai",
    duration: "3–6 Months",
    stack: ["React", "Node", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1400",
  },
  {
    title: "Developer Intern",
    desc: "Work across frontend, backend, APIs, and deployment while shipping scalable real-world products.",
    location: "Hybrid",
    duration: "6 Months",
    stack: ["MERN", "APIs", "Cloud"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400",
  },
];

const perks = [
  {
    icon: Code2,
    title: "Industry Training",
    text: "Structured training aligned with real company workflows.",
  },
  {
    icon: Rocket,
    title: "Live Projects",
    text: "Hands-on delivery with startups and real clients.",
  },
  {
    icon: Users,
    title: "Mentorship",
    text: "1-on-1 guidance from experienced professionals.",
  },
  {
    icon: Sparkles,
    title: "Placement Support",
    text: "Resume, interviews, and hiring network access.",
  },
];

/* -----------------------------------
   COMPONENT
----------------------------------- */

const Careers = () => {
  const rolesRef = useRef(null);

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white overflow-hidden">

      {/* =====================================================
          HERO SECTION (FIXED BUTTONS)
      ===================================================== */}
      <section className="relative bg-gradient-to-br from-[#2a0f4c] via-[#4b1c7a] to-[#12001f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative container mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6">
              <Briefcase size={16} /> Careers at Combo Square
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-6">
              Build Your <span className="text-purple-300">Career</span> With
              Real-World Impact
            </h1>

            <p className="text-white/80 max-w-xl text-lg mb-10">
              Learn by doing. Work on live projects, gain industry exposure,
              and grow with mentors who care about outcomes.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={scrollToRoles}
                className="px-7 py-4 rounded-2xl bg-white text-black font-bold hover:bg-purple-200 active:scale-95 transition"
              >
                View Open Roles
              </button>

              <a
                href="/contact"
                className="px-7 py-4 rounded-2xl border border-white/30 font-bold hover:bg-white/10 active:scale-95 transition"
              >
                Talk to Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600"
              alt="Careers"
              className="rounded-[2.5rem] shadow-2xl w-full max-h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ROLES (FIXED SQUEEZE)
      ===================================================== */}
      <section
        ref={rolesRef}
        className="container mx-auto px-6 lg:px-12 py-20"
      >
        <h2 className="text-3xl lg:text-4xl font-black mb-14">
          Open <span className="text-purple-600">Opportunities</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-32 sm:h-40 overflow-hidden">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-black text-lg sm:text-xl mb-2">
                  {role.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {role.desc}
                </p>

                <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {role.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {role.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {role.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 active:scale-95 transition">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PERKS (ICON COLOR CHANGE ON TOUCH)
      ===================================================== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-14">
            Why <span className="text-purple-600">Join Us</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4
                    group-hover:bg-purple-600 group-hover:text-white
                    active:bg-purple-700 active:text-white transition">
                    <Icon />
                  </div>

                  <h4 className="font-black mb-2">{p.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {p.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
