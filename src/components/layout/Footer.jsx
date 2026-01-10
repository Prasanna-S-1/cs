import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import logo from '../../assets/images/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#0f0518] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor (Subtle Glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP GRID: 4 Columns */}
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          
          {/* COL 1: Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
               <div className="bg-white px-2 py-1 rounded-lg">
                 <img src={logo} alt="Combo Square" className="w-10 h-8 object-contain" />
               </div>
               <span className="text-2xl font-bold tracking-tight">
                 Combo<span className="text-brand-primary">Square</span>
               </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A next-gen digital agency bridging the gap between academic learning and industry demands.
            </p>
            <div className="flex gap-4">
              {[<Instagram />, <Linkedin />, <Facebook />, <Twitter />].map((icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
                >
                  {React.cloneElement(icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Our Services</h4>
            <ul className="space-y-4">
              {['IT Development', 'IoT & Robotics', 'Digital Marketing', 'Branding & UI/UX', 'Internship Programs', 'Placement Training'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors flex items-center gap-2 group">
                     <span className="group-hover:text-white transition-colors">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Subscribe to get the latest internship alerts and tech news.
            </p>
            
            {/* Glassmorphic Input */}
            <div className="relative mb-8 group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 p-2 bg-brand-primary rounded-lg text-white hover:bg-brand-secondary transition-colors shadow-lg">
                <Send size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 text-gray-400">
                <MapPin className="shrink-0 text-brand-primary" size={20} />
                <span className="text-sm">Madipakkam, Chennai, Tamil Nadu, India.</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="shrink-0 text-brand-primary" size={20} />
                <span className="text-sm">combosquareofficials@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="shrink-0 text-brand-primary" size={20} />
                <span className="text-sm">+91 8072877622</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Combo Square. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;