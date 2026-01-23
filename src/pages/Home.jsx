import React from "react";

// Sections
import Hero from "../components/sections/Hero";
import WhoWeAre from "../components/sections/WhoWeAre";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyChooseUs />
      <Stats />          {/* ✅ Stats placed correctly */}
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
