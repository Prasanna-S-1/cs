import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe, ArrowRight, Plus } from 'lucide-react';

const team = [
  {
    name: "Ahamad Thowfeek B",
    role: "Founder & CEO",
    desc: "Visionary leader in branding & education.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Nazneen A",
    role: "Co-Founder & Creative Dir.",
    desc: "Driving force behind design & creativity.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Core Team",
    role: "Specialists & Mentors",
    desc: "Experts in AI, UI/UX, and Innovation.",
    socials: { linkedin: "#", website: "#" }
  }
];

const Team = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              Meet The Visionaries
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f0518]">
            The Minds Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
              Combo Square.
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
                group relative h-[380px] sm:h-[420px]
                rounded-2xl sm:rounded-[2rem]
                overflow-hidden bg-white
                border border-gray-100
                shadow-lg hover:shadow-xl
                transition-all duration-500
              "
            >
              {/* IMAGE / INITIALS */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-gray-100 to-white border border-gray-200 flex items-center justify-center shadow-inner mb-20">
                  <span className="text-3xl sm:text-4xl font-black text-gray-300 group-hover:text-brand-primary transition-colors">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/60 to-transparent opacity-95"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                  {member.name}
                </h3>

                <p className="text-[10px] font-bold text-brand-neon uppercase tracking-widest mb-3">
                  {member.role}
                </p>

                {/* DESCRIPTION: always visible on mobile */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {member.desc}
                </p>

                {/* SOCIALS */}
                <div className="flex items-center gap-3">
                  {member.socials.linkedin && (
                    <button className="p-2 rounded-full bg-white/10 hover:bg-brand-primary text-white transition-colors">
                      <Linkedin size={16} />
                    </button>
                  )}
                  {member.socials.twitter && (
                    <button className="p-2 rounded-full bg-white/10 hover:bg-black text-white transition-colors">
                      <Twitter size={16} />
                    </button>
                  )}
                  {member.socials.website && (
                    <button className="p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white transition-colors">
                      <Globe size={16} />
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

          {/* JOIN US */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="
              group relative h-[380px] sm:h-[420px]
              rounded-2xl sm:rounded-[2rem]
              bg-[#0f0518] border border-gray-800
              flex flex-col items-center justify-center
              text-center p-6
              hover:border-brand-primary/50
              transition-colors
            "
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-brand-primary group-hover:text-white transition-all mb-5">
              <Plus size={32} />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">You?</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
              We are Hiring
            </p>

            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Join the Team <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Team;
