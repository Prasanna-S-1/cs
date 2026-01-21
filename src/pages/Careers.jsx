import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Search, Users, Heart, Zap, Globe } from 'lucide-react';

const images = {
  meeting: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  solo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
};

const jobs = [
  {
    id: '01',
    role: "MERN Stack Developer",
    type: "Full Time",
    location: "Chennai / Hybrid",
    tags: ["React", "Node.js", "MongoDB"],
    desc: "Build and scale full-stack applications used by real users."
  },
  {
    id: '02',
    role: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    tags: ["Figma", "UX"],
    desc: "Design clean, intuitive interfaces for modern products."
  },
  {
    id: '03',
    role: "IoT Research Lead",
    type: "Contract",
    location: "On-Site",
    tags: ["Embedded", "PCB"],
    desc: "Lead hardware innovation and applied research."
  }
];

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white overflow-x-hidden"
    >

      {/* HERO */}
      <section
        className="
          relative
          pt-20 pb-14
          sm:pt-24 sm:pb-16
          lg:pt-32 lg:pb-24
          bg-[#0f0518]
          rounded-b-[2.5rem]
          sm:rounded-b-[4rem]
        "
      >
        <div className="container mx-auto px-4 text-center text-white">

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase mb-5 sm:mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            We are hiring
          </span>

          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-8xl
              font-black
              leading-[0.95]
              mb-5 sm:mb-6
            "
          >
            DON’T JUST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">
              WORK.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto">
            Build meaningful products at the intersection of education and innovation.
          </p>
        </div>
      </section>

      {/* BENTO GRID */}
      <section
        className="
          py-14
          sm:py-16
          lg:py-24
          container mx-auto px-4
        "
      >
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0f0518] mb-8 sm:mb-10">
          Why Join Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[{ img: images.team, icon: Users, title: "Collaboration" },
            { img: images.meeting, icon: Heart, title: "Mentorship" },
            { img: images.solo, icon: Zap, title: "Creative Freedom" },
            { img: images.office, icon: Globe, title: "Global Impact" }
          ].map((item, i) => (
            <div
              key={i}
              className={`
                relative
                h-[200px]
                sm:h-[220px]
                lg:h-[350px]
                rounded-3xl
                overflow-hidden
                shadow-lg
                ${i === 0 || i === 3 ? 'md:col-span-2' : ''}
              `}
            >
              <img src={item.img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 text-white">
                <item.icon size={22} />
                <p className="text-base sm:text-lg font-bold mt-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOB BOARD */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black">Open Positions</h2>
            <button className="hidden sm:flex items-center gap-2 px-5 py-2 bg-white border rounded-full text-sm font-bold">
              <Search size={14} /> View all
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {jobs.map(job => (
              <div
                key={job.id}
                className="
                  bg-white
                  rounded-2xl
                  p-4
                  sm:p-5
                  lg:p-7
                  border
                  hover:bg-brand-primary
                  hover:text-white
                  transition-all
                  flex
                  flex-col
                  sm:flex-row
                  justify-between
                  gap-4
                "
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold">{job.role}</h3>
                  <p className="text-xs sm:text-sm opacity-80">{job.desc}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {job.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-black/5 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-3">
                  <span className="flex items-center gap-1 text-xs sm:text-sm opacity-80">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <button className="px-5 py-2 bg-black text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-white hover:text-brand-primary transition">
                    Apply <ArrowRight size={14} />
                  </button>
                </div>
              </div>
 
            ))}
          </div>
        </div>
      </section>

    </motion.main>
  );
};

export default Careers;
