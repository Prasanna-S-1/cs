import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, Building2, GraduationCap, Globe2 } from 'lucide-react';

// --- HELPER: SPOTLIGHT CARD (Premium Glow Effect) ---
const SpotlightCard = ({ children, className = "", color = "rgba(139,92,246,0.15)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-gray-100 bg-white overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-20 bg-gray-50/30 min-h-screen font-sans selection:bg-brand-primary selection:text-white">

      {/* 1. HERO SECTION (Consistent Premium Dark Theme) */}
      <section className="relative py-24 bg-[#0f0518] text-white overflow-hidden">
        {/* Animated Background FX */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-neon text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-md shadow-lg">
              <MessageCircle size={14} /> GET IN TOUCH
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Let's Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-300 to-white">
                Something Great
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you're a student looking for training or a business seeking digital growth, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT FORM & MAP SECTION */}
      <section className="py-24 relative -mt-10 z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: Info Cards & 3D Map */}
            <div className="space-y-8">
              {/* Floating Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <SpotlightCard className="p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-brand-light/30 rounded-xl flex items-center justify-center text-brand-primary mb-4 border border-brand-primary/10">
                    <Phone />
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark">Call Us</h3>
                  <p className="text-gray-500 text-sm mt-1">+91 98765 43210</p>
                  <p className="text-brand-primary text-xs font-bold mt-2 uppercase tracking-wide">Mon-Fri, 9am-6pm</p>
                </SpotlightCard>

                <SpotlightCard className="p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-brand-light/30 rounded-xl flex items-center justify-center text-brand-primary mb-4 border border-brand-primary/10">
                    <Mail />
                  </div>
                  <h3 className="font-bold text-lg text-brand-dark">Email Us</h3>
                  <p className="text-gray-500 text-sm mt-1">hello@combosquare.com</p>
                  <p className="text-brand-primary text-xs font-bold mt-2 uppercase tracking-wide">24/7 Support</p>
                </SpotlightCard>
              </div>

              {/* High-Tech Map Container */}
              <div className="bg-white p-2 rounded-[2rem] shadow-2xl border border-gray-100 h-[450px] relative group overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.625663731174!2d80.2078652!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8c1c496c13%3A0x6335160868778401!2sMadipakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704907123456!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '1.5rem' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Floating Location Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl border border-gray-100 shadow-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-primary shrink-0">
                       <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark text-sm">Combo Square HQ</p>
                      <p className="text-xs text-gray-500">Madipakkam, Chennai</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-colors">
                    <ArrowRight size={18} className="-rotate-45"/>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: Holographic Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
               {/* Background Glows */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
               
               <h3 className="text-3xl font-extrabold text-brand-dark mb-2">Send a Message</h3>
               <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
               
               <form className="space-y-6 relative z-10">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all font-medium" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all font-medium" placeholder="+91 98765 43210" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                   <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all font-medium" placeholder="john@example.com" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700 ml-1">I'm interested in...</label>
                   <div className="relative">
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all font-medium appearance-none cursor-pointer">
                       <option>Select a Service</option>
                       <option>IT Internship Program</option>
                       <option>Core Domain Training</option>
                       <option>Creative Branding Services</option>
                       <option>College Collaboration</option>
                       <option>Business Project</option>
                     </select>
                     <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                       <ArrowRight size={16} className="rotate-90" />
                     </div>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                   <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all font-medium resize-none" placeholder="Tell us a bit more about your requirements..."></textarea>
                 </div>

                 <button type="button" className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-primary transition-all shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                   Send Message <Send size={20} />
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP CTA (PDF Page 10 Requirement) */}
      <section className="py-20 bg-brand-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             <span className="text-brand-neon font-bold tracking-widest text-xs uppercase mb-4 block">Collaboration</span>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Partner with Combo Square</h2>
             <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
               Colleges & Clients: Let's collaborate to build impactful futures. We provide end-to-end support for placements, training, and brand growth.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="flex items-center gap-2 bg-white text-brand-dark px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-neon hover:text-white transition-all">
                  <Building2 size={18} /> For Colleges
                </button>
                <button className="flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-brand-primary transition-all">
                  <Globe2 size={18} /> For Business
                </button>
             </div>
           </div>
        </div>
      </section>

      {/* 4. DIRECT WHATSAPP CTA */}
      <section className="py-6 bg-[#25D366] text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="font-bold">Need an instant response?</p>
          <button className="inline-flex items-center gap-2 bg-white text-[#128C7E] px-6 py-2 rounded-full font-bold shadow-sm hover:scale-105 transition-transform">
            <MessageCircle size={18} /> Chat on WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;