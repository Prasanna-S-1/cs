import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      {/* =======================
          NAVBAR (DESKTOP UNCHANGED)
      ======================= */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b border-white/10 ${
          scrolled 
            ? 'bg-[#482485]/95 backdrop-blur-md py-3 shadow-2xl' 
            : 'bg-[#482485] py-4 lg:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            
            {/* LOGO — KEPT EXACTLY AS YOU ASKED */}
            <Link to="/" className="flex items-center gap-2 group relative z-50">
              <div className="bg-white p-0 rounded-md flex items-center justify-center h-9 lg:h-11 w-auto shadow-lg transform transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <img 
                  src={logo} 
                  alt="Combo Square" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link key={item.name} to={item.path} className="relative group py-2">
                  <span className={`text-[15px] font-bold transition-colors ${
                    location.pathname === item.path 
                      ? 'text-white' 
                      : 'text-purple-200 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-white rounded-full transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex">
              <Link to="/contact">
                <button className="px-6 py-2.5 bg-white text-[#482485] font-bold rounded-lg flex items-center gap-2">
                  Contact Us <ChevronRight size={16} />
                </button>
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button 
              className="lg:hidden p-2 text-white z-50 hover:bg-white/10 rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =======================
          MOBILE MENU (PREMIUM & COMPACT)
      ======================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed inset-0 bg-[#482485]/95 backdrop-blur-xl z-40 pt-20 px-6 lg:hidden"
          >
            {/* Soft glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[90px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/40 rounded-full blur-[90px]" />

            <div className="flex flex-col gap-2">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-[17px] font-semibold transition-all ${
                      location.pathname === item.path 
                        ? 'bg-white/10 text-white' 
                        : 'text-purple-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    <ChevronRight size={18} className="opacity-60" />
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <div className="mt-6">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-white text-[#482485] py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-95">
                    Let’s Talk <ExternalLink size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
