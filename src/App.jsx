import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- LAYOUT COMPONENTS ---
import Preloader from './components/layout/Preloader'; // <-- Added Preloader import
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
  // --- STATE FOR PRELOADER ---
  const [isLoading, setIsLoading] = useState(true);

  // --- LOADING EFFECT ---
  useEffect(() => {
    // Simulate initial loading time (e.g., fetching data, loading assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000ms = 2 seconds. Adjust as needed!

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Router>
      {/* The Preloader sits at the highest z-index. 
        It will show/hide based on the isLoading state. 
      */}
      <Preloader isLoading={isLoading} />

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