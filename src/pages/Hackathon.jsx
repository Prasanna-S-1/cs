import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy, Calendar, Users, IndianRupee, Clock, Mail,
  Phone, CheckCircle, Star, Zap, Target, ArrowRight
} from "lucide-react";

const eventDetails = [
  { icon: Calendar, label: "Dates", value: "May 2 & May 3, 2026" },
  { icon: Zap, label: "Mode", value: "Online" },
  { icon: Users, label: "Team Size", value: "2 – 6 Members" },
  { icon: IndianRupee, label: "Registration Fee", value: "₹99 per participant" },
  { icon: Clock, label: "Presentation", value: "10 – 15 minutes per team" },
];

const categories = [
  { emoji: "🌾", name: "Agriculture" },
  { emoji: "🏥", name: "Healthcare" },
  { emoji: "📚", name: "EdTech" },
  { emoji: "💰", name: "FinTech" },
  { emoji: "🔒", name: "Cybersecurity" },
];

const evaluationCriteria = [
  { label: "Innovation & Creativity", percent: 25, color: "bg-purple-500" },
  { label: "Technical Implementation", percent: 25, color: "bg-violet-500" },
  { label: "Problem Understanding", percent: 20, color: "bg-pink-500" },
  { label: "Presentation Skills", percent: 15, color: "bg-indigo-500" },
  { label: "Real-world Impact", percent: 15, color: "bg-blue-500" },
];

const rules = [
  "Each team can submit only one project",
  "Plagiarism is strictly prohibited",
  "Teams must submit within the deadline",
  "Video submission is mandatory for evaluation",
  "Participants must attend presentation slots on time",
  "Judges' decisions will be final",
];

const prizes = [
  { place: "1st", medal: "🥇", amount: "₹3,000", color: "from-yellow-400 to-yellow-600" },
  { place: "2nd", medal: "🥈", amount: "₹2,000", color: "from-gray-300 to-gray-500" },
];

const Hackathon = () => {
  return (
    <div className="bg-[#0f0518] text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold mb-6">
               Combo Square Hackathon 2026
            </span>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Build. Innovate. <br />
              <span className="text-purple-400">Win Big.</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Organized by Combo Square Tech Powered Career Hub. An online innovation challenge
              designed to bring together creative minds to solve real-world problems.
            </p>

            <a
              href="https://wa.me/918072877622"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-black shadow-2xl transition-all active:scale-95"
            >
              Register Now <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Event <span className="text-purple-400">Details</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {eventDetails.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-purple-400/50 hover:bg-purple-500/10 transition-all"
              >
                <Icon className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                <p className="text-xs text-gray-400 mb-1 font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="text-sm font-black text-white">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PROBLEM STATEMENT CATEGORIES */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Priority Track */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 border border-purple-500/30 rounded-3xl p-8">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-4">⭐ Priority Track</span>
            <h3 className="text-2xl font-black mb-3">Combo Square Problem Statements</h3>
            <p className="text-gray-400 text-sm mb-6">Teams selecting these statements get <span className="text-purple-400 font-bold">first priority</span> during evaluation.</p>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3">
                  <span className="text-xl">{cat.emoji}</span>
                  <span className="text-sm font-bold">{cat.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Open Innovation */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-bold mb-4">💡 Open Innovation Track</span>
            <h3 className="text-2xl font-black mb-3">Student Idea Track</h3>
            <p className="text-gray-400 text-sm mb-6">Propose your own problem statement from any domain focusing on innovation.</p>
            <h4 className="font-bold mb-3 text-purple-300">Each team must submit:</h4>
            <ul className="space-y-2">
              {["Project presentation (PPT / Demo)", "Working prototype or concept", "Problem explanation & solution", "Recorded presentation video (mandatory)", "GitHub repository link (optional)"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* EVALUATION CRITERIA */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Evaluation <span className="text-purple-400">Criteria</span></h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          {evaluationCriteria.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold">{item.label}</span>
                <span className="text-sm font-black text-purple-400">{item.percent}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div className={`${item.color} h-3 rounded-full`} style={{ width: `${item.percent * 4}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRIZES */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Prizes & <span className="text-purple-400">Benefits</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {prizes.map((prize, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-br ${prize.color} p-1 rounded-3xl`}
            >
              <div className="bg-[#0f0518] rounded-[22px] p-8 text-center h-full">
                <div className="text-5xl mb-3">{prize.medal}</div>
                <h3 className="text-xl font-black mb-2">{prize.place} Prize</h3>
                <p className="text-3xl font-black text-purple-400">{prize.amount}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="font-black text-lg mb-4 text-center">Additional Benefits for All Participants</h3>
          <div className="grid grid-cols-2 gap-3">
            {["Certificates for all participants", "Winner certificates for top teams", "Internship opportunities", "Portfolio showcase opportunities"].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center">Rules & <span className="text-purple-400">Guidelines</span></h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-gray-300 text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">Got <span className="text-purple-400">Questions?</span></h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href="mailto:combosquareofficials@gmail.com" className="hover:text-white transition">combosquareofficials@gmail.com</a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-green-400" />
              <a href="tel:+918072877622" className="hover:text-white transition">+91 80728 77622</a>
            </div>
          </div>
          <p className="mt-8 text-gray-400 text-sm leading-relaxed">
            Combo Square Hackathon 2026 is not just a competition, but a platform to innovate,
            collaborate, and showcase your talent. Join us and turn your ideas into reality! 
          </p>
          <a
            href="https://wa.me/918072877622"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-black font-black shadow-2xl transition-all"
          >
            Register via WhatsApp <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default Hackathon;