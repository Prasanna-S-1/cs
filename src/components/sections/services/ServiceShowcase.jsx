import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Development",
    subtitle: "Web & App Engineering",
    desc: "Industry-grade MERN stack development with live projects, deployment, and real client exposure.",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400",
  },
  {
    title: "IoT & Robotics",
    subtitle: "Hardware Innovation",
    desc: "Hands-on embedded systems, sensors, automation, PCB basics and real-world hardware applications.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Marketing",
    subtitle: "Brand Growth",
    desc: "SEO, paid ads, social media growth, content strategy and analytics-driven performance marketing.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1400",
  },
  {
    title: "Internship Programs",
    subtitle: "Career Launchpad",
    desc: "Certified internships with mentorship, real tasks, portfolio building and placement guidance.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400",
  },
];

const ServiceShowcase = () => {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-xs sm:text-sm mb-5">
            Our Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0f0518] leading-tight mb-5">
            Core Domains that <br className="hidden sm:block" />
            <span className="text-purple-600">Build Real Careers</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
            We focus on practical, industry-aligned domains that convert skills
            into jobs, startups, and scalable products.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-2 
            lg:grid-cols-4 
            gap-4 
            sm:gap-6 
            lg:gap-8
          "
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="
                group
                relative
                bg-white
                rounded-3xl
                border border-gray-100
                overflow-hidden
                shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-[140px] sm:h-[170px] lg:h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    scale-105
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-6 lg:p-7">
                <p className="text-[11px] sm:text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">
                  {item.subtitle}
                </p>

                <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0f0518] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-[12px] sm:text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-purple-500/30 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
