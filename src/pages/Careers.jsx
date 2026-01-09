import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Brain, Coffee, ArrowRight, Upload, CheckCircle2, Search, Briefcase, GraduationCap, Code2, Palette, Cpu } from 'lucide-react';

// --- DATA: Job Openings ---
const jobs = [
  {
    id: 1,
    role: "Full Stack Intern",
    type: "Internship",
    duration: "3 - 6 Months",
    domain: "IT Services",
    icon: <Code2 />,
    color: "bg-purple-500",
    desc: "Work on real-world MERN stack projects and build enterprise-grade applications."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    type: "Internship",
    duration: "3 Months",
    domain: "Creative",
    icon: <Palette />,
    color: "bg-pink-500",
    desc: "Design user-centric interfaces for mobile apps and websites using Figma."
  },
  {
    id: 3,
    role: "IoT Engineer",
    type: "Full Time",
    duration: "Permanent",
    domain: "Core",
    icon: <Cpu />,
    color: "bg-cyan-500",
    desc: "Develop firmware for smart home automation and industrial robotics."
  },
  {
    id: 4,
    role: "Digital Marketing Executive",
    type: "Internship",
    duration: "3 Months",
    domain: "Creative",
    icon: <Users />,
    color: "bg-orange-500",
    desc: "Manage social media campaigns and SEO strategies for client brands."
  }
];

// --- COMPONENT: PROCESS STEP ---
const ProcessStep = ({ number, title, desc, isLast }) => (
  <div className="flex gap-6 relative">
    {/* Line Connector */}
    {!isLast && <div className="absolute left-[28px] top-16 bottom-0 w-1 bg-gray-100"></div>}
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-primary/30 ring-4 ring-white">
        {number}
      </div>
    </div>
    <div className="pb-16 pt-2">
      <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-md">{desc}</p>
    </div>
  </div>
);

const Careers = () => {
  return (
    <div className="pt-20 bg-white min-h-screen font-sans selection:bg-brand-primary selection:text-white">

      {/* 1. HERO SECTION (Dark Premium Theme) */}
      <section className="relative py-28 bg-[#0f0518] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-neon text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-md">
              <Rocket size={14} /> WE ARE HIRING
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Ignite Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-300 to-white">
                Career Journey
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Join the <strong>Combo Square</strong> family. Whether you are looking for an internship or a full-time role, build your future with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. LIFE AT COMBO SQUARE (Gallery) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Life at Combo Square</h2>
            <p className="text-gray-600">Workshops, Hackathons, and a culture of innovation.</p>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px] overflow-hidden rounded-3xl relative">
            {/* Column 1 - Fast Scroll Animation Simulation */}
            <motion.div 
               className="space-y-4"
               animate={{ y: [-20, -100, -20] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </motion.div>

             {/* Column 2 - Static for contrast */}
             <div className="space-y-4 pt-10">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-72 object-cover" />
            </div>

             {/* Column 3 */}
             <motion.div 
               className="space-y-4"
               animate={{ y: [-50, 0, -50] }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-56 object-cover" />
              <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </motion.div>

            {/* Column 4 */}
            <div className="space-y-4 pt-20">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION PROCESS & FORM */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left: Interactive Timeline (PDF Page 8) */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-dark mb-12">How to Apply</h2>
              <div className="pl-4">
                <ProcessStep 
                  number="1" 
                  title="Apply Online" 
                  desc="Browse our open positions below and submit your application with an updated CV." 
                />
                <ProcessStep 
                  number="2" 
                  title="Screening & Test" 
                  desc="Shortlisted candidates will face a technical assessment to test core skills." 
                />
                <ProcessStep 
                  number="3" 
                  title="Interview" 
                  desc="A 1-on-1 session with our technical leads to understand your passion and potential." 
                />
                <ProcessStep 
                  number="4" 
                  title="Onboarding" 
                  isLast={true}
                  desc="Welcome to the team! Get your welcome kit and start your journey." 
                />
              </div>
            </div>

            {/* Right: Apply Now Form (Glassmorphic) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none"></div>
               
               <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                 <Upload className="text-brand-primary" /> Apply Now
               </h3>
               
               <form className="space-y-4 relative z-10">
                 <div className="grid md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Full Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-0 outline-none transition-all" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Phone</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-0 outline-none transition-all" placeholder="+91 98765 43210" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">Email Address</label>
                   <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-0 outline-none transition-all" placeholder="john@example.com" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">Position Applying For</label>
                   <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-0 outline-none transition-all">
                     <option>Select a role...</option>
                     <option>Full Stack Intern</option>
                     <option>UI/UX Designer</option>
                     <option>IoT Engineer</option>
                   </select>
                 </div>

                 <div className="pt-4">
                   <button type="button" className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-primary transition-colors shadow-lg flex items-center justify-center gap-2">
                     Submit Application <ArrowRight size={18} />
                   </button>
                 </div>
                 <p className="text-xs text-gray-400 text-center mt-4">By clicking submit, you agree to our privacy policy.</p>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS (Holographic Job Board) */}
      <section className="py-24 bg-brand-dark relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">Open Positions</h2>
            <p className="text-white/60">Find the role that fits your skills and passion.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <motion.div 
                key={job.id}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl ${job.color} flex items-center justify-center text-white shadow-lg`}>
                    {job.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/5">
                    {job.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-neon transition-colors">{job.role}</h3>
                <div className="flex gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Briefcase size={14}/> {job.domain}</span>
                  <span className="flex items-center gap-1"><GraduationCap size={14}/> {job.duration}</span>
                </div>
                
                <p className="text-white/60 text-sm mb-6 line-clamp-2">
                  {job.desc}
                </p>

                <div className="flex items-center text-brand-neon text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Details <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Careers;