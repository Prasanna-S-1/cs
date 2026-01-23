import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile
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
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 font-sans border-b border-white/10 ${
          scrolled 
            ? 'bg-[#482485]/95 backdrop-blur-md py-3 shadow-2xl' 
            : 'bg-[#482485] py-4 lg:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            
            {/* =======================
                1. LOGO (RAZOR THIN FIT)
            ======================= */}
            <Link to="/" className="flex items-center gap-2 group relative z-50">
               {/* FIX: 
                   - p-0: No padding at all. The white box is exactly the size of the image.
                   - h-9 lg:h-11: Keeps the logo sized correctly.
                   - overflow-hidden: Cuts off any excess.
               */}
               <div className="bg-white p-0 rounded-md flex items-center justify-center h-9 lg:h-11 w-auto shadow-lg transform transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                 <img 
                   src={logo} 
                   alt="Combo Square" 
                   className="h-full w-auto object-contain" 
                 />
               </div>
            </Link>

            {/* =======================
                2. DESKTOP NAV
            ======================= */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="relative group py-2"
                >
                  <span className={`text-[15px] font-bold tracking-wide transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-white' : 'text-purple-200 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Underline Effect */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-white rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,255,255,0.8)] ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* =======================
                3. RIGHT ACTION
            ======================= */}
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

            {/* =======================
                4. MOBILE TOGGLE
            ======================= */}
            <button 
              className="lg:hidden p-2 text-white z-50 hover:bg-white/10 rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* =======================
          5. MOBILE MENU
      ======================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#482485] z-40 flex flex-col pt-24 px-6 lg:hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/50 rounded-full blur-[80px] -z-10" />

            <div className="flex flex-col gap-4">
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
                    className={`flex items-center justify-between p-4 rounded-xl border-b border-white/10 text-xl font-bold transition-all ${
                        location.pathname === item.path 
                        ? 'text-white bg-white/10' 
                        : 'text-purple-200 hover:text-white hover:pl-6'
                    }`}
                  >
                    {item.name}
                    <ChevronRight size={20} className="opacity-50" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                   <button className="w-full bg-white text-[#482485] text-lg font-bold py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
                     Let's Talk <ExternalLink size={20} />
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