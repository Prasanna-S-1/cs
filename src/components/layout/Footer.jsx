import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  Mail, Phone, MapPin, Send, Linkedin, Instagram,
  Twitter, Youtube, Facebook, ArrowRight, Home
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0518] text-white pt-16 sm:pt-24 pb-10 sm:pb-12 overflow-hidden relative border-t border-white/5">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* NEWSLETTER */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-6 sm:p-8 lg:p-14 mb-20 sm:mb-24 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 backdrop-blur-md">
          
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 tracking-tighter">
              Join our Innovation Newsletter
            </h2>
            <p className="text-gray-400 font-medium text-base sm:text-lg">
              Subscribe for tech trends and batch alerts directly to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:min-w-[320px] px-6 py-4 sm:py-5 bg-white/5 border border-white/10 rounded-2xl font-bold focus:outline-none focus:border-brand-primary"
            />
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-brand-primary hover:bg-white hover:text-brand-primary text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-2xl transition-all">
              Subscribe <Send size={18} />
            </button>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 sm:gap-16 mb-20 sm:mb-24">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-7">
            <Link to="/" className="inline-block">
              <div className="bg-white p-2 rounded-2xl shadow-xl w-fit">
                <img src={logo} alt="Combo Square" className="h-12 scale-110" />
              </div>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed text-base sm:text-lg max-w-sm">
              Combo Square is India's premier EdTech & Innovation Hub. We bridge the gap between academic theory and industry reality.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all border border-white/10"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-black mb-8 sm:mb-10 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span> Navigation
            </h4>
            <ul className="space-y-4 sm:space-y-5">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold">
                  <Home size={16} className="text-brand-primary" /> Home
                </Link>
              </li>
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Insights", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white flex items-center gap-2 font-bold">
                    <ArrowRight size={14} className="text-brand-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-black mb-8 sm:mb-10 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span> Programs
            </h4>
            <ul className="space-y-4 sm:space-y-5">
              {[
                "Full Stack Development",
                "IoT & Robotics",
                "Digital Marketing",
                "Internship Program",
              ].map((prog) => (
                <li key={prog}>
                  <Link to="/services" className="text-gray-400 hover:text-white flex items-center gap-2 font-bold">
                    <ArrowRight size={14} className="text-purple-500" />
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-black mb-8 sm:mb-10 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span> Get in Touch
            </h4>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-pink-500" />
                <p className="text-gray-400 font-bold text-sm">
                  909, Bazaar Main Road, Ram Nagar,<br />
                  Madipakkam, Chennai - 600091
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-brand-primary" />
                <a href="tel:+918072877622" className="font-black hover:text-brand-primary">
                  +91 80728 77622
                </a>
              </div>

              <div className="flex gap-4">
                <Mail className="text-brand-neon" />
                <a href="mailto:combosquare2@gmail.com" className="font-black hover:text-brand-neon break-all">
                  combosquare2@gmail.com
                </a>
               
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-10 sm:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <p className="text-gray-500 text-sm font-bold">
            © {currentYear} <span className="text-white">Combo Square</span>. All rights reserved.
          </p>
          <div className="flex gap-8 sm:gap-10 text-sm text-gray-500 font-bold uppercase tracking-widest">
            <Link to="/about" className="hover:text-white">Privacy</Link>
            <Link to="/contact" className="hover:text-white">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
