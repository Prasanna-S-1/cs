import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- LAYOUT COMPONENTS ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// --- HOME PAGE SECTIONS (For the One-Page Scroll Experience) ---
import Hero from './components/sections/Hero';
import WhoWeAre from './components/sections/WhoWeAre';
import ServicesSection from './components/sections/Services'; // The section displayed on Home
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

// --- FULL PAGES (For Detailed Navigation) ---
import About from './pages/About';
import ServicesPage from './pages/Services'; // The detailed Services Matrix page
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact'; // <--- NEW CONTACT PAGE IMPORT

// --- HELPER: SCROLL TO TOP ON ROUTE CHANGE ---
// This ensures that when you click a link, the new page starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- HOME PAGE COMPONENT ---
// Bundles all landing page sections
const Home = () => (
  <>
    <div id="home"><Hero /></div>
    <div id="about"><WhoWeAre /></div>
    <div id="services"><ServicesSection /></div>
    <div id="why-us"><WhyChooseUs /></div>
    <div id="testimonials"><Testimonials /></div>
    <div id="faq"><FAQ /></div>
    <div id="contact"><CTA /></div>
  </>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white min-h-screen font-sans">
        <Navbar />
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Dedicated Inner Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} /> {/* <--- NEW CONTACT ROUTE */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}