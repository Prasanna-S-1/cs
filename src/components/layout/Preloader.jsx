import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#482485] font-sans"
        >
          {/* LOGO WRAPPER WITH PULSE ANIMATION */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0px 0px 20px rgba(255, 255, 255, 0.2)",
                "0px 0px 40px rgba(255, 255, 255, 0.5)",
                "0px 0px 20px rgba(255, 255, 255, 0.2)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            // FIXED: Using p-0 and height-based scaling to match your Navbar
            className="bg-white p-0 rounded-md flex items-center justify-center h-16 sm:h-20 md:h-24 overflow-hidden"
          >
            <img 
              src={logo} 
              alt="Loading..." 
              // FIXED: Matches Navbar image styling perfectly
              className="h-full w-auto object-contain"
            />
          </motion.div>

          {/* LOADING TEXT WITH ANIMATED DOTS */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-white font-bold tracking-[0.2em] text-sm md:text-base flex items-center gap-1"
          >
            LOADING
            <div className="flex gap-1 ml-1">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              >.</motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;