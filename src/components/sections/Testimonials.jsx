import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, PlayCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "College Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    quote: "Combo Square helped us train 200+ students in AI & ML, boosting their placement confidence significanty.",
    rating: 5,
    tag: "College Collaboration"
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    quote: "Their branding and video editing services elevated our sales by 40% in just three months. Exceptional work!",
    rating: 5,
    tag: "Branding Client"
  },
  // Adding a student one to balance the grid (Implied from "Learner Growth" stats)
  {
    id: 3,
    name: "Priya S.",
    role: "Student Intern",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    quote: "The internship program changed my career path. I learned React and Tailwind in depth!",
    rating: 5,
    tag: "Internship Success"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      
      {/* Background: Floating Quotes */}
      <div className="absolute top-10 left-10 text-brand-primary/5 transform -rotate-12">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-brand-primary/5 transform rotate-12">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-brand-dark mb-4"
          >
            Client <span className="text-brand-primary">Success Stories</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we are making a difference for colleges, startups, and students.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative group"
            >
              {/* Top Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-brand-light text-brand-primary text-xs font-bold uppercase rounded-full">
                {item.tag}
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                   <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary p-0.5">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-full" />
                   </div>
                   {/* Video Pulse Indicator */}
                   <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                      <PlayCircle size={16} className="text-brand-primary fill-brand-primary/20" />
                   </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-brand-primary/0 group-hover:ring-brand-primary/50 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* TRUST BADGE STRIP (Simulated Marquee) */}
        <div className="mt-20 pt-10 border-t border-gray-200/60">
           <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by 25+ Partners</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using generic tech names/icons as placeholders for client logos */}
              {['TechCorp', 'EduLearn', 'FutureSystems', 'InnovateAI', 'GlobalDesign'].map((brand, i) => (
                 <span key={i} className="text-xl font-black text-gray-300 hover:text-brand-primary cursor-default">{brand}</span>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;