import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // ===============================
  // OPTIMIZED SCROLL DETECTION
  // ===============================
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Detect if page is scrolled down (for background blur)
      setScrolled(currentScroll > 20);

      // Detect Scroll Direction (Up/Down)
      if (currentScroll > lastScrollY && currentScroll > 100) {
        // Scrolling DOWN -> Hide Navbar
        setShowNavbar(false);
      } else {
        // Scrolling UP -> Show Navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when Mobile Menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
          NAVBAR (SCROLL BASED)
      ======================= */}
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 font-sans border-b border-white/10 ${
              scrolled 
                ? 'bg-[#482485]/95 backdrop-blur-md py-3 shadow-2xl' 
                : 'bg-[#482485] py-4 lg:py-5'
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="flex justify-between items-center">
                
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2 group relative z-50">
                  <div className="bg-white p-0 rounded-md flex items-center justify-center h-9 lg:h-11 shadow-lg transform transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="h-full w-auto object-contain" 
                    />
                  </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center gap-10">
                  {navLinks.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="relative group py-2"
                    >
                      <span className={`text-[15px] font-bold tracking-wide transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-white'
                          : 'text-purple-200 group-hover:text-white'
                      }`}>
                        {item.name}
                      </span>

                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-white rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,255,255,0.8)] ${
                        location.pathname === item.path
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                  ))}
                </div>

                {/* RIGHT ACTION (DESKTOP) */}
                <div className="hidden lg:flex items-center gap-6">
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-white text-[#482485] text-[15px] font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2"
                    >
                      Contact Us <ChevronRight size={16} />
                    </motion.button>
                  </Link>
                </div>

                {/* MOBILE TOGGLE BUTTON */}
                <button 
                  className="lg:hidden p-2 text-white z-50 hover:bg-white/10 rounded-lg transition-colors active:scale-95" 
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* =======================
          MOBILE MENU DRAWER
      ======================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#482485] z-[90] flex flex-col pt-28 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {/* Mobile Links */}
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 text-xl font-bold border-b border-white/5 ${
                        location.pathname === item.path ? 'text-white pl-6' : 'text-purple-200'
                    } hover:text-white transition-all duration-300`}
                  >
                    {item.name}
                    <ChevronRight size={20} className="opacity-50" />
                  </Link>
                </motion.div>
              ))}

              {/* 🆕 FIXED: MOBILE CONTACT BUTTON ADDED HERE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 bg-white text-[#482485] text-lg font-black rounded-xl shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
                    Contact Us <ChevronRight size={20} />
                  </button>
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;