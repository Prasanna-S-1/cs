import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Preloader from "./components/layout/Preloader";
import SEO from "./components/SEO/SEO";

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageSEO = {
  "/": {
    title: "Tech Powered Career Hub",
    description: "Combo Square is Chennai's leading EdTech platform. Get industry-ready with internships, web development courses, digital marketing training, UI/UX design, hackathons, and job alerts.",
    keywords: "combo square, edtech chennai, tech career hub, internship chennai, placement training",
  },
  "/about": {
    title: "About Us",
    description: "Learn about Combo Square - our mission, team, and story. We bridge the gap between academic learning and industry demands for students in Chennai.",
    keywords: "about combo square, combo square team, edtech company chennai, combo square story",
  },
  "/services": {
    title: "Our Services",
    description: "Explore Combo Square services: IT Development, IoT & Robotics, Digital Marketing, Branding & UI/UX, Internship Programs, and Placement Training.",
    keywords: "combo square services, web development training, digital marketing course, UI UX training chennai, IoT robotics course",
  },
  "/careers": {
    title: "Careers",
    description: "Join the Combo Square team. Explore career opportunities in tech, digital marketing, and EdTech in Chennai.",
    keywords: "careers combo square, jobs in edtech, tech jobs chennai, combo square hiring",
  },
  "/blog": {
    title: "Blog",
    description: "Read the latest articles from Combo Square on tech careers, web development tips, digital marketing, and EdTech trends.",
    keywords: "combo square blog, tech career tips, web development blog, edtech articles chennai",
  },
  "/contact": {
    title: "Contact Us",
    description: "Get in touch with Combo Square. Based in Madipakkam, Chennai. Call +91 8072877622 or email combosquareofficials@gmail.com.",
    keywords: "contact combo square, combo square chennai address, combo square phone number",
  },
  "/hackathon": {
    title: "Hackathon",
    description: "Participate in Combo Square hackathons. Build real projects, win prizes, and get noticed by top companies. Open to all students in India.",
    keywords: "hackathon india 2026, student hackathon chennai, combo square hackathon, coding competition",
  },
  "/internship-courses": {
    title: "Internship & Courses",
    description: "Enroll in Combo Square internship programs and courses in web development, digital marketing, UI/UX design, and more. Get certified and job-ready.",
    keywords: "internship program chennai, web development course, digital marketing course chennai, UI UX internship, combo square courses",
  },
  "/job-alerts": {
    title: "Job Alerts",
    description: "Get the latest job alerts for freshers and students from Combo Square. Daily updates on tech jobs, internships, and placement opportunities.",
    keywords: "job alerts freshers, tech job alerts india, fresher jobs chennai, combo square job alerts",
  },
};

function AppRoutes() {
  const location = useLocation();
  const seo = pageSEO[location.pathname] || {};

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
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
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/internship-courses" element={<InternshipCourses />} />
            <Route path="/job-alerts" element={<JobAlert />} />
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
    </>
  );
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
      <AppRoutes />
    </Router>
  );
}

export default App;