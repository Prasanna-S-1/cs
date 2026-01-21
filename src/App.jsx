import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- LAYOUT COMPONENTS ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// --- PAGE COMPONENTS ---
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        
        {/* Navigation Bar - Stays at the top of every page */}
        <Navbar />

        {/* Main Content Area - Injects the active page based on URL */}
        <main className="flex-grow">
          <Routes>
            
            {/* 1. Home Page - The Hero Landing */}
            <Route path="/" element={<Home />} />
            
            {/* 2. About Us - The Visionaries & Story */}
            <Route path="/about" element={<About />} />

            {/* 3. Services - The Digital Empire Showroom */}
            <Route path="/services" element={<Services />} />

            {/* 4. Careers - The Premium Job Portal */}
            <Route path="/careers" element={<Careers />} />

            {/* 5. Blog - The Knowledge & Insights Hub */}
            <Route path="/blog" element={<Blog />} />

            {/* 6. Contact - The Cinematic Map & Inquiry Page */}
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>

        {/* Footer - Stays at the bottom of every page */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;