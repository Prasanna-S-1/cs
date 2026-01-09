import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* PREMIUM BACKGROUND: Deep Void Purple */}
      <div className="absolute inset-0 bg-[#2E1A5B] z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#482485] rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[100px] opacity-40" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Ready to Grow with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-light">
              Combo Square?
            </span>
          </h2>
          
          <p className="text-xl text-brand-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 4,500+ students and 25+ brands who trust us to elevate their success. Whether you need training or branding, we have the solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#2E1A5B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-neon hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-1">
              Book a Free Consultation
              <ArrowRight size={20} />
            </button>
            
            {/* Secondary Action (Newsletter) */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              <Mail size={20} />
              Subscribe for Updates
            </button>
          </div>

          <p className="mt-8 text-sm text-white/40">
            No spam. Unsubscribe anytime. Join our community today.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;