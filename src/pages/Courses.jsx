import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, CheckCircle, Star, Briefcase } from "lucide-react";

const internships = [
  {
    title: "Full Stack Intern",
    domain: "IT Development",
    emoji: "💻",
    desc: "Build industry-grade MERN applications with real clients, clean architecture, and mentor guidance.",
    location: "Remote / Chennai",
    duration: "3 – 6 Months",
    stack: ["React", "Node", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1400",
    color: "from-purple-500/20 to-violet-500/10",
    border: "hover:border-purple-400",
  },
  {
    title: "Developer Intern",
    domain: "Web & App",
    emoji: "🚀",
    desc: "Work across frontend, backend, APIs, and deployment while shipping scalable real-world products.",
    location: "Hybrid",
    duration: "6 Months",
    stack: ["MERN", "APIs", "Cloud"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400",
    color: "from-violet-500/20 to-indigo-500/10",
    border: "hover:border-violet-400",
  },
  {
    title: "Digital Marketing Intern",
    domain: "Marketing",
    emoji: "📢",
    desc: "Learn SEO, paid ads, social media growth and analytics-driven performance marketing.",
    location: "Remote",
    duration: "3 Months",
    stack: ["SEO", "Google Ads", "Analytics", "Canva"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1400",
    color: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-400",
  },
  {
    title: "UI/UX Design Intern",
    domain: "Design",
    emoji: "🎨",
    desc: "Design modern interfaces, conduct user research and build design systems using industry tools.",
    location: "Remote",
    duration: "2 – 3 Months",
    stack: ["Figma", "Adobe XD", "Prototyping"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400",
    color: "from-amber-500/20 to-orange-500/10",
    border: "hover:border-amber-400",
  },
  {
    title: "IoT & Robotics Intern",
    domain: "Hardware",
    emoji: "🤖",
    desc: "Work on embedded systems, sensors, automation and real-world hardware applications.",
    location: "Chennai",
    duration: "3 Months",
    stack: ["Arduino", "Sensors", "Python", "Cloud"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    color: "from-green-500/20 to-emerald-500/10",
    border: "hover:border-green-400",
  },
  {
    title: "Content Creation Intern",
    domain: "Media",
    emoji: "🎬",
    desc: "Create engaging videos, social media content and manage brand storytelling.",
    location: "Remote / Hybrid",
    duration: "2 Months",
    stack: ["Premiere Pro", "Canva", "Instagram", "LinkedIn"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-400",
  },
];

const benefits = [
  "Internship completion certificate",
  "Real-world project experience",
  "Mentor-guided learning",
  "Portfolio building support",
  "LinkedIn recommendation",
  "Full-time job opportunities",
  "Hackathon participation access",
  "Combo Square alumni network",
];

const Internships = () => {
  return (
    <div className="bg-[#0f0518] text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold mb-6">
                <Briefcase size={14} /> Internship Programs
              </span>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
                Launch Your <br />
                <span className="text-purple-400">Career Journey</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mb-10">
                Get certified internships with real mentorship, live projects, portfolio building,
                and placement guidance with Combo Square.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918072877622"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-black transition-all"
                >
                  Apply Now <ArrowRight size={18} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-white/20 text-white font-black hover:bg-white/10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {[
                { number: "100+", label: "Interns Placed", emoji: "🎓" },
                { number: "6+", label: "Domains Available", emoji: "💼" },
                { number: "95%", label: "Satisfaction Rate", emoji: "⭐" },
                { number: "Free", label: "Career Guidance", emoji: "🚀" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-400/50 transition-all">
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="text-2xl font-black text-purple-400">{stat.number}</div>
                  <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP CARDS */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Open <span className="text-purple-400">Internships</span>
          </h2>
          <p className="text-gray-400">Apply now and start your real-world experience.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((intern, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${intern.color} border border-white/10 ${intern.border} rounded-3xl overflow-hidden transition-all hover:-translate-y-1 group`}
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img src={intern.image} alt={intern.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{intern.emoji}</span>
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wide">{intern.domain}</span>
                </div>

                <h3 className="text-lg font-black mb-2">{intern.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{intern.desc}</p>

                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {intern.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {intern.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {intern.stack.map((s, j) => (
                    <span key={j} className="px-2 py-1 rounded-full bg-white/10 text-xs font-bold">{s}</span>
                  ))}
                </div>

                <a
                  href="https://wa.me/918072877622"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-black text-sm transition-all"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-black mb-8 text-center">What You <span className="text-purple-400">Get</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                {b}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-black mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join hundreds of students who launched their careers with Combo Square internships.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918072877622"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-black font-black transition-all"
            >
              Apply via WhatsApp <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-black transition-all"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Internships;