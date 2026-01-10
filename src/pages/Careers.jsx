import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Users,
  Upload,
  Briefcase,
  GraduationCap,
  Code2,
  Palette,
  Cpu
} from "lucide-react";

/* ---------------- JOB DATA ---------------- */
const jobs = [
  {
    id: 1,
    role: "Full Stack Intern",
    duration: "3 - 6 Months",
    domain: "IT Services",
    icon: <Code2 />,
    color: "bg-purple-500",
    desc: "Work on real-world MERN stack projects and build enterprise-grade applications."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    duration: "3 Months",
    domain: "Creative",
    icon: <Palette />,
    color: "bg-pink-500",
    desc: "Design user-centric interfaces for mobile apps and websites using Figma."
  },
  {
    id: 3,
    role: "IoT Engineer",
    duration: "Permanent",
    domain: "Core",
    icon: <Cpu />,
    color: "bg-cyan-500",
    desc: "Develop firmware for smart home automation and industrial robotics."
  },
  {
    id: 4,
    role: "Digital Marketing Executive",
    duration: "3 Months",
    domain: "Creative",
    icon: <Users />,
    color: "bg-orange-500",
    desc: "Manage social media campaigns and SEO strategies for client brands."
  }
];

/* ---------------- PROCESS STEP ---------------- */
const ProcessStep = ({ number, title, desc, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative flex gap-4 sm:gap-6"
  >
    {!isLast && (
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute left-[22px] sm:left-[28px] top-12 sm:top-16 w-1 h-full bg-gradient-to-b from-brand-primary/50 to-transparent origin-top"
      />
    )}

    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg sm:text-xl ring-4 ring-white shadow-lg"
    >
      {number}
    </motion.div>

    <div className="pb-12 sm:pb-16 pt-1">
      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-gray-600 max-w-md text-sm sm:text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

/* ================= MAIN COMPONENT ================= */
const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newErrors = {
      name: !form.name.value,
      phone: !form.phone.value,
      email: !form.email.value
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="pt-16 sm:pt-20 bg-white min-h-screen">

      {/* HERO */}
      <section className="py-20 sm:py-28 bg-[#0f0518] text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6 text-xs">
            <Rocket size={14} /> WE ARE HIRING
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6">
            Ignite Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
              Career
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Build your future with Combo Square.
          </p>
        </motion.div>
      </section>

      {/* HOW TO APPLY + APPLY NOW */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* APPLY NOW — FIRST ON MOBILE */}
            <motion.div
              className="order-1 lg:order-2 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 w-full max-w-xl mx-auto relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
                <Upload className="text-brand-primary" />
                Apply Now
              </h3>

              <motion.form
                className="space-y-5 sm:space-y-6"
                onSubmit={handleSubmit}
                animate={
                  Object.values(errors).includes(true)
                    ? { x: [-6, 6, -4, 4, 0] }
                    : {}
                }
                transition={{ duration: 0.4 }}
              >
                <div className="relative">
                  <input
                    name="name"
                    placeholder=" "
                    className={`floating-input ${errors.name && "error-input"}`}
                  />
                  <label className="floating-label">Full Name</label>
                </div>

                <div className="relative">
                  <input
                    name="phone"
                    placeholder=" "
                    className={`floating-input ${errors.phone && "error-input"}`}
                  />
                  <label className="floating-label">Phone</label>
                </div>

                <div className="relative">
                  <input
                    name="email"
                    placeholder=" "
                    className={`floating-input ${errors.email && "error-input"}`}
                  />
                  <label className="floating-label">Email Address</label>
                </div>

                <div className="relative">
                  <select className="floating-input">
                    <option value="">Select role</option>
                    <option>Full Stack Intern</option>
                    <option>UI/UX Designer</option>
                    <option>IoT Engineer</option>
                  </select>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="w-full min-h-[52px] bg-[#1b1b4b] text-white rounded-xl font-bold shadow-lg"
                >
                  Submit Application →
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  By clicking submit, you agree to our privacy policy.
                </p>
              </motion.form>

              {/* SUCCESS MODAL */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl px-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500 text-white text-3xl flex items-center justify-center">
                      ✓
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mt-6">
                      Application Submitted
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Our team will contact you shortly 🚀
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 rounded-full bg-brand-primary text-white text-sm"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* HOW TO APPLY — SECOND ON MOBILE */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 sm:mb-12">
                How to Apply
              </h2>
              <div className="pl-2 sm:pl-4">
                <ProcessStep number="1" title="Apply Online" desc="Submit your updated CV." />
                <ProcessStep number="2" title="Screening & Test" desc="Technical assessment." />
                <ProcessStep number="3" title="Interview" desc="One-on-one discussion." />
                <ProcessStep number="4" title="Onboarding" desc="Welcome aboard!" isLast />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20 sm:py-24 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12 sm:mb-16">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${job.color} text-white flex items-center justify-center mb-4`}>
                  {job.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {job.role}
                </h3>

                <div className="flex gap-4 text-sm text-gray-300 mb-4">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} /> {job.domain}
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap size={14} /> {job.duration}
                  </span>
                </div>

                <p className="text-gray-400 text-sm">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
