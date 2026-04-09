<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- LAYOUT COMPONENTS ---
import Preloader from './components/layout/Preloader'; // <-- Added Preloader import
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
=======
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
>>>>>>> 0ba3b56a0e77b0d671ec1896894447a1d898bdfa

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails"; // ✅ detail page

// ✅ Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
<<<<<<< HEAD
      {/* The Preloader sits at the highest z-index. 
        It will show/hide based on the isLoading state. 
      */}
      <Preloader isLoading={isLoading} />
=======
      <ScrollToTop /> {/* ✅ important */}
>>>>>>> 0ba3b56a0e77b0d671ec1896894447a1d898bdfa

      <div className="flex flex-col min-h-screen bg-white">
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          <Routes>
            {/* MAIN PAGES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* ✅ SERVICE DETAILS PAGE */}
            <Route path="/service/:id" element={<ServiceDetails />} />

            {/* OPTIONAL: 404 PAGE */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center h-[60vh] text-center">
                  <h1 className="text-2xl font-bold text-gray-600">
                    404 - Page Not Found
                  </h1>
                </div>
              }
            />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;