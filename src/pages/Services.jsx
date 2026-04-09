import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import ServicesHero from '../components/sections/services/ServicesHero';
import ServiceShowcase from '../components/sections/services/ServiceShowcase';
import CTA from '../components/sections/CTA'; 

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#050505] min-h-screen text-white overflow-x-hidden"
    >
      {/* 1. HERO */}
      <ServicesHero />

      {/* 2. INTERACTIVE TABS */}
      <ServiceShowcase />

      {/* 3. CTA (Always end with a call to action) */}
      <CTA />

    </motion.main>
  );
};

export default Services;