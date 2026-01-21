import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Palette, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'it', label: 'IT Services', icon: Code2, color: 'text-blue-600' },
  { id: 'core', label: 'Core Domains', icon: Cpu, color: 'text-purple-600' },
  { id: 'creative', label: 'Creative', icon: Palette, color: 'text-pink-600' },
  { id: 'training', label: 'Training', icon: GraduationCap, color: 'text-orange-600' },
];

const content = {
  it: {
    title: "Software & AI Solutions",
    desc: "We engineer scalable web applications and intelligent AI systems tailored for modern businesses.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    points: ["Full Stack Development (MERN)", "Artificial Intelligence & ML", "Data Analytics & Dashboards", "Cloud Deployment (AWS/Azure)"]
  },
  core: {
    title: "Hardware & IoT Innovation",
    desc: "Bridging the physical and digital worlds with cutting-edge embedded systems and robotics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    points: ["IoT Architecture & Sensors", "Robotics & Automation", "Embedded Systems Design", "PCB Design & Prototyping"]
  },
  creative: {
    title: "Brand Identity & Design",
    desc: "We craft visual stories that resonate. From logos to full-scale marketing campaigns.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    points: ["Logo & Brand Strategy", "UI/UX Design", "Video Editing & Motion Graphics", "Digital Marketing Campaigns"]
  },
  training: {
    title: "Industrial Training",
    desc: "Empowering the next generation with practical, hands-on experience in real-world projects.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    points: ["Student Internship Programs", "Faculty Development (FDP)", "Hackathons & Workshops", "Placement Support"]
  }
};

const ServiceShowcase = () => {
  const [activeTab, setActiveTab] = useState('it');

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">

      {/* Background decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TABS */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 mb-12 sm:mb-16 sm:justify-center no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 sm:gap-3
                px-4 sm:px-6 py-3 sm:py-4
                rounded-xl sm:rounded-2xl
                border transition-all duration-300
                min-w-max text-sm
                ${activeTab === tab.id
                  ? 'bg-white border-brand-primary text-brand-primary shadow-md'
                  : 'bg-gray-50 border-gray-100 text-gray-500'}
              `}
            >
              <tab.icon size={18} className={activeTab === tab.id ? tab.color : 'text-gray-400'} />
              <span className="font-bold uppercase tracking-wider">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT CARD */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="
                grid lg:grid-cols-2 gap-10 lg:gap-12
                items-center
                bg-white rounded-[2rem] lg:rounded-[3rem]
                p-6 sm:p-8 lg:p-12
                border border-gray-100
                shadow-xl shadow-gray-200/50
              "
            >

              {/* IMAGE */}
              <div className="relative h-[220px] sm:h-[300px] lg:h-[500px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-lg order-1 lg:order-2">
                <img
                  src={content[activeTab].image}
                  alt={content[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>

                <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/50 shadow-md">
                  {(() => {
                    const Icon = tabs.find(t => t.id === activeTab).icon;
                    return <Icon size={24} className={tabs.find(t => t.id === activeTab).color} />;
                  })()}
                </div>
              </div>

              {/* CONTENT */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0f0518] mb-4 sm:mb-6 leading-tight">
                  {content[activeTab].title}
                </h2>

                <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed font-medium">
                  {content[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {content[activeTab].points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <CheckCircle2 size={18} className="text-brand-primary" />
                      <span className="text-gray-700 font-bold text-sm sm:text-base">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full sm:w-auto px-8 py-4 bg-[#0f0518] text-white font-bold rounded-xl hover:bg-brand-primary transition-all flex items-center justify-center gap-2">
                  Get Started <ArrowRight size={20} />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ServiceShowcase;
