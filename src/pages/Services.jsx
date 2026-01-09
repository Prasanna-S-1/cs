import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Palette, GraduationCap, ArrowRight, Server, Shield, Brain, Database, Cloud, Wifi, Bot, Layers, PenTool, Video, Megaphone, Smartphone, Users } from 'lucide-react';

// --- DATA ---
const serviceData = {
  it: {
    color: "#8B5CF6", // Purple
    title: "IT & Software Development",
    desc: "Building scalable, high-performance digital solutions with next-gen tech stacks.",
    items: [
      { title: "Full Stack Development", icon: <Layers />, desc: "MERN Stack, Python, & Enterprise Web Apps." },
      { title: "AI & Machine Learning", icon: <Brain />, desc: "Predictive analytics, NLP, and intelligent automation." },
      { title: "Data Analytics", icon: <Database />, desc: "Transforming raw data into actionable business insights." },
      { title: "Cybersecurity", icon: <Shield />, desc: "Protecting digital assets with advanced security protocols." },
      { title: "DevOps & Cloud", icon: <Cloud />, desc: "AWS, Azure, and CI/CD pipelines for seamless deployment." },
    ]
  },
  core: {
    color: "#06b6d4", // Cyan
    title: "Core Engineering Domains",
    desc: "Bridging the physical and digital worlds through hardware innovation.",
    items: [
      { title: "IoT Solutions", icon: <Wifi />, desc: "Smart home automation and industrial IoT networks." },
      { title: "Robotics & Automation", icon: <Bot />, desc: "Autonomous robots and process automation systems." },
      { title: "Embedded Systems", icon: <Cpu />, desc: "Microcontroller programming and firmware development." },
      { title: "AutoCAD Design", icon: <PenTool />, desc: "2D/3D modeling and structural engineering drafts." },
    ]
  },
  creative: {
    color: "#ec4899", // Pink
    title: "Creative Studio & Branding",
    desc: "Crafting visual identities that resonate and convert.",
    items: [
      { title: "Digital Marketing", icon: <Megaphone />, desc: "SEO, SEM, and social media growth strategies." },
      { title: "Branding Identity", icon: <Palette />, desc: "Logo design, brand guidelines, and visual storytelling." },
      { title: "UI/UX Design", icon: <Smartphone />, desc: "User-centric interfaces for web and mobile apps." },
      { title: "Video Editing", icon: <Video />, desc: "Cinematic reels, promos, and corporate montages." },
    ]
  },
  training: {
    color: "#f59e0b", // Amber
    title: "Training & Internships",
    desc: "Empowering the next generation with industry-ready skills.",
    items: [
      { title: "Internship Programs", icon: <GraduationCap />, desc: "1-6 month immersive training with real projects." },
      { title: "Hackathon Training", icon: <Code2 />, desc: "Intensive bootcamps to win national hackathons." },
      { title: "Placement Support", icon: <Server />, desc: "Resume building, mock interviews, and career guidance." },
      { title: "College Workshops", icon: <Users />, desc: "On-campus technical seminars and hands-on sessions." },
    ]
  }
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('it');

  return (
    <div className="pt-20 bg-white min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      
      {/* 1. HERO SECTION (Kept Dark for Impact, consistent with About Hero) */}
      <section className="relative py-24 bg-[#0f0518] text-white overflow-hidden">
        {/* Dynamic Background Glow */}
        <motion.div 
          animate={{ backgroundColor: serviceData[activeTab].color }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 transition-colors duration-700"
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-neon text-xs font-bold tracking-[0.2em] mb-6 inline-block backdrop-blur-md">
              OUR EXPERTISE
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Comprehensive <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              From coding the future to building brands. Explore our specialized domains designed for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE COMMAND CENTER (Light Theme) */}
      <section className="pb-32 relative bg-gray-50/50 pt-20">
        <div className="container mx-auto px-6">
          
          {/* A. 3D NAVIGATION TABS */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {Object.keys(serviceData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-8 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 group overflow-hidden border-2 ${
                  activeTab === key 
                    ? 'text-white border-transparent shadow-xl scale-105' 
                    : 'text-gray-500 border-transparent bg-white hover:border-gray-200 hover:text-brand-primary'
                }`}
              >
                {/* Active Background Slide */}
                {activeTab === key && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0"
                    style={{ backgroundColor: serviceData[key].color }} // Uses the specific tab color
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-3">
                  {key === 'it' && <Code2 size={18} />}
                  {key === 'core' && <Cpu size={18} />}
                  {key === 'creative' && <Palette size={18} />}
                  {key === 'training' && <GraduationCap size={18} />}
                  {key.toUpperCase().replace('_', ' ')}
                </span>
              </button>
            ))}
          </div>

          {/* B. DYNAMIC CONTENT AREA */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-brand-dark">{serviceData[activeTab].title}</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">{serviceData[activeTab].desc}</p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData[activeTab].items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group bg-white border border-gray-100 p-8 rounded-3xl relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Hover Gradient Bloom (Subtle on Light Theme) */}
                    <div 
                      className="absolute -right-20 -top-20 w-40 h-40 opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full" 
                      style={{ backgroundColor: serviceData[activeTab].color }} 
                    />
                    
                    {/* Icon Box */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"
                      style={{ backgroundColor: serviceData[activeTab].color }}
                    >
                      {React.cloneElement(item.icon, { size: 28 })}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" style={{ color: serviceData[activeTab].color }}>
                      Learn More <ArrowRight size={14} />
                    </div>
                  </motion.div>
                ))}

                {/* CTA Card (Always last in grid) */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5 }}
                   className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-gray-200 text-center hover:border-brand-primary/50 hover:bg-brand-light/30 transition-all group cursor-pointer"
                >
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">Need Custom Solutions?</h3>
                  <p className="text-gray-500 text-sm mb-6">Let's discuss your specific requirements.</p>
                  <button className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                    Contact Us
                  </button>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 3. TECHNOLOGY STACK MARQUEE (Light Theme) */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-10">Powered by Modern Technologies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Tech placeholders */}
             {['React', 'Node.js', 'Python', 'AWS', 'Flutter', 'TensorFlow', 'Figma', 'Arduino'].map((tech) => (
               <span key={tech} className="text-xl md:text-3xl font-black text-gray-800 hover:text-brand-primary cursor-default transition-colors">{tech}</span>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;