import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, TrendingUp, Globe2, Sparkles, Briefcase } from 'lucide-react';

const comparisonData = [
  {
    before: "Limited exposure to real-world projects",
    after: "Industry internships with hands-on experience",
    icon: <Briefcase size={24} />
  },
  {
    before: "Lack of clear career direction",
    after: "Cutting-edge training in latest technologies",
    icon: <TrendingUp size={24} />
  },
  {
    before: "No branding identity or market presence",
    after: "Global exposure and creative brand growth",
    icon: <Globe2 size={24} />
  },
  {
    before: "Missing industry connections",
    after: "Strong portfolio and placement confidence",
    icon: <Sparkles size={24} />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-brand-light/30 -skew-y-3 z-0 transform -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-light border border-brand-primary/20 text-brand-primary text-sm font-bold tracking-wide mb-4"
          >
            THE COMBO SQUARE ADVANTAGE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6"
          >
            Why Students & Brands <br/>
            <span className="text-brand-primary">Choose Us?</span>
          </motion.h2>
        </div>

        {/* THE COMPARISON ENGINE */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-0 relative">
          
          {/* CENTER VS BADGE (Floating) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl items-center justify-center z-20 font-black text-gray-300 border-4 border-gray-50 text-xl">
            VS
          </div>

          {/* LEFT SIDE: BEFORE (The Problem) */}
          <div className="bg-gray-50 rounded-l-3xl p-10 border border-gray-100 md:pr-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 bg-gray-200/50 rounded-bl-2xl text-xs font-bold text-gray-500 uppercase tracking-wider">
              Before Combo Square
            </div>
            
            <div className="space-y-8 mt-8">
              {comparisonData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-gray-400 grayscale transition-all duration-500 group-hover:grayscale-0"
                >
                  <XCircle size={28} className="shrink-0 text-gray-300" />
                  <p className="font-medium text-lg line-through decoration-gray-300">{item.before}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: AFTER (The Solution - Premium) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark rounded-r-3xl p-10 md:pl-16 relative overflow-hidden shadow-2xl text-white transform md:scale-105 md:-translate-x-4 z-10"
          >
            {/* Glowing Gradient Background */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/30 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="absolute top-0 left-0 p-4 bg-brand-primary rounded-br-2xl text-xs font-bold text-white uppercase tracking-wider shadow-lg">
              After Combo Square
            </div>

            <div className="space-y-8 mt-8 relative z-10">
              {comparisonData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-neon shrink-0 shadow-[0_0_15px_rgba(168,127,251,0.3)]">
                    {item.icon}
                  </div>
                  <p className="font-bold text-lg text-white">{item.after}</p>
                </motion.div>
              ))}
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </motion.div>

        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-primary transition-colors text-lg group">
            See Our Success Stories 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;