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

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost"; // ✅ NEW: Individual Blog Post Page
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";

// ✅ Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />

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
            
            {/* ✅ BLOG DETAILS PAGE (Dynamic Routing) */}
            <Route path="/blog/:id" element={<BlogPost />} />

            <Route path="/contact" element={<Contact />} />

            {/* SERVICE DETAILS PAGE */}
            <Route path="/service/:id" element={<ServiceDetails />} />

            {/* 404 PAGE */}
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