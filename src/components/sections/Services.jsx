import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "IT Services",
    tag: "Scalable Software",
    description:
      "Full Stack Development, AI & ML, Data Analytics, Cloud Computing, and Cybersecurity solutions for real-world business needs.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Core Domains",
    tag: "Hardware & Innovation",
    description:
      "IoT, Robotics, Embedded Systems, and Automation programs with strong hands-on and industry exposure.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Creative Services",
    tag: "Brand & Growth",
    description:
      "UI/UX Design, Digital Marketing, Video Editing, and Branding to elevate reach and engagement.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Training & Hackathons",
    tag: "Skill Development",
    description:
      "Internships, Workshops, Corporate Training, and Hackathons focused on job-ready skills.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  return (
    <section className="relative py-14 sm:py-18 lg:py-24 bg-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-purple-50 pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-10">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="inline-flex px-6 py-2.5 rounded-full bg-purple-100 text-purple-700 font-extrabold mb-5">
            OUR SERVICES
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Complete <span className="text-purple-600">Ecosystem</span>
            <br /> for Growth & Innovation
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We deliver technology, creativity, and training solutions under one powerful ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-44 lg:h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute top-3 left-3 text-xs font-bold text-white bg-purple-600 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-black mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* ✅ CLICKABLE BUTTON */}
                <div
                  onClick={() => navigate(`/service/${i}`)}
                  className="flex items-center gap-2 text-sm font-bold text-purple-700 cursor-pointer hover:underline"
                >
                  Learn More <ArrowUpRight size={14} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;