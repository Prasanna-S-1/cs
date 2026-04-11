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

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 w-full z-[100] font-sans ${
              scrolled
                ? 'bg-[#482485] py-3 shadow-none border-none'
                : 'bg-[#482485] py-4 lg:py-5 border-none'
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="flex justify-between items-center">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2 z-50">
                  <div className="bg-white rounded-md h-9 lg:h-11 overflow-hidden">
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
                    <Link key={item.name} to={item.path} className="relative group">
                      <span
                        className={`text-[15px] font-bold tracking-wide transition ${
                          location.pathname === item.path
                            ? 'text-white'
                            : 'text-purple-200 group-hover:text-white'
                        }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-white rounded-full transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  ))}
                </div>

                {/* RIGHT BUTTON */}
                <div className="hidden lg:flex items-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-white text-[#482485] font-bold rounded-lg transition flex items-center gap-2"
                    >
                      Contact Us <ChevronRight size={16} />
                    </motion.button>
                  </Link>
                </div>

                {/* MOBILE BUTTON */}
                <button
                  className="lg:hidden p-2 text-white z-50"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#482485] z-[90] flex flex-col pt-28 px-6 lg:hidden"
          >
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
                  className="flex justify-between p-4 text-xl font-bold text-purple-200 hover:text-white"
                >
                  {item.name}
                  <ChevronRight size={20} />
                </Link>
              </motion.div>
            ))}

            <div className="mt-6">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full py-4 bg-white text-[#482485] font-bold rounded-xl flex justify-center gap-2">
                  Contact Us <ChevronRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;