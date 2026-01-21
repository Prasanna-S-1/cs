import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// --- 1. IMPORT THE NEW COMPONENTS YOU CREATED ---
// Make sure these paths match exactly where you saved the files!
import AboutHero from '../components/sections/about/AboutHero';
import OurStory from '../components/sections/about/OurStory';
import Team from '../components/sections/about/Team';
import CTA from '../components/sections/CTA'; // Reusing the CTA from Home

const About = () => {
  
  // Scrolls to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white overflow-x-hidden"
    >
      
      {/* 2. RENDER THEM IN ORDER */}
      
      {/* The "Spotlight" Hero */}
      <AboutHero />

      {/* The "Purple Beam" Timeline */}
      <OurStory />

      {/* The "Visionaries" Team Grid */}
      <Team />

      {/* The "Cosmic" Footer Call-to-Action */}
      <CTA />

    </motion.main>
  );
};

export default About;