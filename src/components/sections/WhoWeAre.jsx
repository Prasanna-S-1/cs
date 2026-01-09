import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Rocket, Trophy } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Creative Graphics (Image Collage) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team Collaboration" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stats Card 1 (Top Left) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[200px]"
            >
              <div className="bg-brand-primary/10 p-2 rounded-lg text-brand-primary">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">4,500+</h4>
                <p className="text-xs text-gray-500">Followers & Students</p>
              </div>
            </motion.div>

            {/* Floating Stats Card 2 (Bottom Right) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[200px]"
            >
              <div className="bg-brand-secondary/10 p-2 rounded-lg text-brand-secondary">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">100+</h4>
                <p className="text-xs text-gray-500">Successful Projects</p>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 top-10 -right-10 grid grid-cols-4 gap-2">
               {[...Array(16)].map((_, i) => (
                 <div key={i} className="w-2 h-2 rounded-full bg-brand-primary/20" />
               ))}
            </div>
          </motion.div>

          {/* RIGHT: Text Content (From PDF Page 4) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-light border border-brand-primary/20 text-brand-primary text-sm font-bold tracking-wide mb-6">
              WHO WE ARE
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              More Than a Design Agency, We Are an <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Innovation Hub.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We empower students, colleges, and startups with technology-driven solutions and creative branding. Our mission is to bridge the gap between academic learning and industry requirements.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                "25+ Trusted Clients Globally",
                "Technology-Driven Solutions",
                "Creative Branding Experts"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-primary shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="text-brand-primary font-bold border-b-2 border-brand-primary hover:text-brand-dark hover:border-brand-dark transition-all pb-1">
              Read Our Story
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;