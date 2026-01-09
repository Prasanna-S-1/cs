import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // <--- NEW IMPORTS
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#482485]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
          : 'bg-[#482485] py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
       {/* LOGO - Zero Margin, Maximum Fit */}
<Link to="/" className="flex items-center">
   {/* p-0: Removes ALL padding. 
       rounded-md: Keeps the corners slightly curved.
       overflow-hidden: Ensures the image clips to the rounded corners. 
   */}
   <div className="bg-white p-0 rounded-md shadow-lg overflow-hidden flex items-center justify-center border border-white/10">
     <img 
       src={logo} 
       alt="Combo Square" 
       // h-14 makes it slightly larger than before to compensate for removing padding
       // block: Removes any tiny line-height gaps at the bottom
       className="h-14 w-auto object-contain block" 
     />
   </div>
</Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`font-medium hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all text-sm uppercase tracking-wide ${
                location.pathname === item.path ? 'text-white bg-white/20' : 'text-white/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-white text-[#482485] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5">
            Get Started
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#482485] border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-lg text-white font-medium border-b border-white/10 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;