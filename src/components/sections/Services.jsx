import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Code2, Cpu, Palette, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'it',
    title: 'IT Services',
    subtitle: 'Scalable Software Solutions',
    desc: 'Full Stack, AI & ML, Data Analytics, Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    icon: Code2,
    color: 'bg-blue-500'
  },
  {
    id: 'core',
    title: 'Core Domains',
    subtitle: 'Hardware & Innovation',
    desc: 'IoT, Robotics, Embedded Systems, Automation',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    icon: Cpu,
    color: 'bg-purple-500'
  },
  {
    id: 'creative',
    title: 'Creative Services',
    subtitle: 'Branding & Design',
    desc: 'Digital Marketing, UI/UX, Video Editing, Branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    icon: Palette,
    color: 'bg-pink-500'
  },
  {
    id: 'training',
    title: 'Training & Hackathons',
    subtitle: 'Skill Development',
    desc: 'Internships, Career Programs, College Workshops',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
    icon: GraduationCap,
    color: 'bg-orange-500'
  }
];

const Services = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-4 shadow-sm"
            >
              <Layers size={14} className="text-brand-primary" />
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                Our Expertise
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f0518] leading-tight">
              We Provide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
                360° Solutions
              </span>{" "}
              for Everyone.
            </h2>
          </div>

          <Link to="/services" className="hidden md:block">
            <button className="group flex items-center gap-2 font-bold text-gray-500 hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary pb-1">
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -8 }}
              className="
                group relative bg-white rounded-3xl overflow-hidden
                border border-gray-100 shadow-sm
                hover:shadow-2xl transition-all duration-500
                h-[260px] sm:h-[300px] lg:h-[400px]
              "
            >

              {/* IMAGE */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/40 to-transparent opacity-90"></div>
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end z-10">

                {/* ICON */}
                <div
                  className={`
                    w-11 h-11 rounded-2xl ${service.color}
                    flex items-center justify-center text-white
                    mb-auto shadow-lg
                    transform translate-y-4 opacity-0
                    lg:group-hover:translate-y-0 lg:group-hover:opacity-100
                    transition-all duration-500
                  `}
                >
                  <service.icon size={22} />
                </div>

                <div className="transition-transform duration-500 lg:group-hover:-translate-y-2">
                  <p className="text-[11px] font-bold text-brand-neon uppercase tracking-wider mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-2 text-white font-bold text-sm">
                  <span>Learn More</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-3xl transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE CTA */}
        <div className="mt-8 sm:mt-10 text-center md:hidden">
          <Link to="/services">
            <button className="w-full py-3.5 bg-white border border-gray-200 text-[#0f0518] font-bold rounded-xl shadow-sm active:scale-95 transition">
              View All Solutions
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
