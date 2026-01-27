import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-purple-50 pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-10">

        {/* ✅ CENTERED HEADER */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span
            className="
              inline-flex items-center justify-center
              px-6 py-2.5
              rounded-full
              bg-purple-100
              text-purple-700
              text-base sm:text-lg
              font-extrabold
              mb-6
            "
          >
            OUR SERVICES
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Complete{" "}
            <span className="text-purple-600">Ecosystem</span>
            <br />
            for Growth & Innovation
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            We deliver technology, creativity, and training solutions under one
            powerful ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-5
            lg:gap-10
          "
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white
                border border-gray-100
                shadow-[0_18px_45px_rgba(0,0,0,0.08)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-36 sm:h-40 lg:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-purple-600/90 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5 lg:p-7">
                <h3 className="text-base sm:text-lg lg:text-xl font-black mb-2">
                  {service.title}
                </h3>

                <p
                  className="
                    text-gray-600 text-[13px] sm:text-sm leading-relaxed
                    line-clamp-2
                    lg:line-clamp-none
                    mb-4
                  "
                >
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-purple-700 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* hover ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-purple-500/0 group-hover:ring-purple-500/30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
