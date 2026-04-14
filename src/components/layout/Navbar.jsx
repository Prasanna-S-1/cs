import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

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
            className="fixed top-0 left-0 w-full z-[100] bg-[#482485] py-4"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="flex justify-between items-center">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                  <div className="bg-white rounded-md h-9 overflow-hidden">
                    <img src={logo} alt="Logo" className="h-full w-auto" />
                  </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center gap-8">
                  {navLinks.map((item) => (
                    <Link key={item.name} to={item.path} className="relative group">
                      <span
                        className={`text-[15px] font-semibold ${
                          location.pathname === item.path
                            ? 'text-white'
                            : 'text-purple-200 group-hover:text-white'
                        }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-white transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="hidden lg:block">
                  <Link to="/contact">
                    <button className="px-5 py-2 bg-white text-[#482485] font-semibold rounded-lg flex items-center gap-2">
                      Contact <ChevronRight size={16} />
                    </button>
                  </Link>
                </div>

                {/* MOBILE ICON */}
                <button
                  className="lg:hidden text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={26} /> : <Menu size={26} />}
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
            className="fixed inset-0 bg-[#482485] z-[90] flex flex-col pt-24 px-6 lg:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex justify-between p-4 text-lg font-semibold text-purple-200 hover:text-white"
              >
                {item.name}
                <ChevronRight size={18} />
              </Link>
            ))}

            <div className="mt-6">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 bg-white text-[#482485] font-semibold rounded-xl flex justify-center gap-2">
                  Contact Us <ChevronRight size={18} />
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