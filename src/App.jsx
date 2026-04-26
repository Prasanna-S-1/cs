import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Preloader from "./components/layout/Preloader";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Hackathon from "./pages/Hackathon";
import InternshipCourses from "./pages/InternshipCourses";
import JobAlert from "./pages/JobAlert";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader isLoading={isLoading} />
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-[#482485] overflow-x-hidden">
        <Navbar />

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:id" element={<ServiceDetails />} />

            {/* NEW PAGES */}
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/internship-courses" element={<InternshipCourses />} />
            <Route path="/job-alerts" element={<JobAlert />} />

            {/* 404 */}
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

        <Footer />
      </div>
    </Router>
  );
}

export default App;