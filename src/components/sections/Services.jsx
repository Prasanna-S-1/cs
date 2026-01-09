import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Palette, ArrowRight, Smartphone, Globe, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "IT Services",
    icon: <Code2 size={40} />,
    desc: "Next-gen Web & App development driven by modern frameworks like React, Node.js, and Python.",
    tags: ["Full Stack", "AI & ML", "Cloud DevOps"],
    color: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: 2,
    title: "Core Domains",
    icon: <Cpu size={40} />,
    desc: "Bridging hardware and software with IoT, Embedded Systems, and Robotics automation.",
    tags: ["IoT Solutions", "Robotics", "Embedded"],
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: 3,
    title: "Creative Studio",
    icon: <Palette size={40} />,
    desc: "Crafting digital identities with premium branding, UI/UX design, and cinematic video editing.",
    tags: ["Branding", "UI/UX", "Video Editing"],
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    border: "group-hover:border-pink-500/50"
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-brand-light overflow-hidden">
      
      {/* Background Decor (Subtle Tech Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-brand-primary text-sm font-bold tracking-wide mb-4 shadow-sm"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6"
          >
            Comprehensive Solutions across <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              IT, Core, and Creative
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            We don't just build projects; we build careers and brands. Explore our specialized domains designed for growth.
          </p>
        </div>

        {/* 3D Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl ${service.shadow} overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon Box */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Animated Button */}
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                Learn More 
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Decorative Border Bottom */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;