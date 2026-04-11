import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"; // ✅ ADDED

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';

import logoImg from '../../assets/images/logo.png';

const Footer = () => {

  const socialLinks = [
    { icon: <Instagram />, url: "https://www.instagram.com/combo_square_?igsh=Mjg1NXM2dTZkcHVv" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/company/combo-square/" },
    { icon: <Facebook />, url: "https://www.facebook.com/profile.php?id=61562432777570" },
    { icon: <Twitter />, url: "https://x.com/combosquare_" }
  ];

  return (
    <footer className="bg-[#0f0518] text-white pt-14 sm:pt-18 lg:pt-24 pb-12 relative overflow-hidden">

      {/* BRAND TEXT */}
      <div className="relative w-full h-[90px] sm:h-[140px] md:h-[220px] flex items-center justify-center overflow-hidden px-3 sm:px-6">
        <h1 className="text-[11.5vw] sm:text-[10.5vw] md:text-[9vw] font-extrabold text-white/10 whitespace-nowrap">
          {"COMBO SQUARE"}
        </h1>
      </div>

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* GRID */}
        <div className="grid lg:grid-cols-4 gap-12 mb-20">

          {/* LOGO */}
          <div className="space-y-8">
            <Link to="/" className="block w-48">
              <img 
                src={logoImg} 
                alt="Combo Square Logo" 
                className="w-full h-auto object-contain mix-blend-screen"
              />
            </Link>

            <p className="text-gray-400">
              A next-gen digital agency bridging the gap between academic learning
              and industry demands.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition"
                >
                  {React.cloneElement(social.icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Careers', 'Blog', 'Contact'].map((item) => {
                const path = item === 'Home'
                  ? '/'
                  : `/${item.toLowerCase().replace(' ', '-')}`;

                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="text-gray-400 hover:text-purple-500 transition"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {[
                'IT Development',
                'IoT & Robotics',
                'Digital Marketing',
                'Branding & UI/UX',
                'Internship Programs',
                'Placement Training'
              ].map((item) => {
                const path = `/services#${item
                  .toLowerCase()
                  .replace(/ & /g, '-')
                  .replace(/ /g, '-')}`;

                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="text-gray-400 hover:text-purple-500 transition"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-lg font-bold mb-8">Stay Updated</h4>

            <p className="text-gray-400 mb-6 text-sm">
              Subscribe to get the latest internship alerts and tech news.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="relative mb-8"
            >
              <input
                type="hidden"
                name="access_key"
                value="1b0f54ea-c13f-4f18-a52e-1d49ceddcd98"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 pr-12 text-white"
              />

              <button
                type="submit"
                className="absolute right-2 top-2 p-2 bg-purple-600 rounded-lg text-white"
              >
                <Send size={18} />
              </button>
            </form>

            {/* CONTACT */}
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} /> Madipakkam, Chennai, India
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <a href="mailto:combosquareofficials@gmail.com">
                  combosquareofficials@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <a href="tel:+918072877622">+91 8072877622</a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Combo Square. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;