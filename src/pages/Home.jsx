import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// --- IMPORTING ALL PREMIUM SECTIONS ---
import Hero from '../components/sections/Hero';
import WhoWeAre from '../components/sections/WhoWeAre';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

const Home = () => {
  
  // Scroll to top on mount (Fixes scroll position when navigating)
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
      
      {/* 1. HERO SECTION (The First Impression) */}
      <Hero />

      {/* 2. WHO WE ARE (Innovation Hub Intro) */}
      <WhoWeAre />

      {/* 3. SERVICES SNAPSHOT (Cinematic Cards) */}
      <Services />

      {/* 4. WHY CHOOSE US (Before vs After Engine) */}
      <WhyChooseUs />

      {/* 5. TESTIMONIALS (Vertical Floating Wall) */}
      <Testimonials />

      {/* 6. FAQ (Smart Accordion) */}
      <FAQ />

      {/* 7. CTA & NEWSLETTER (Cosmic Portal) */}
      <CTA />

    </motion.main>
  );
};

export default Home;