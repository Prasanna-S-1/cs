import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    type: "College Partner",
    quote: "Combo Square helped us train 200+ students in AI & ML, boosting their placement confidence significantly.",
    name: "Dr. S. Ramesh",
    role: "HOD, Engineering Dept",
    tag: "200+ Placements",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    type: "Startup Client",
    quote: "Their branding and video editing services elevated our sales by 40% in just 3 months. Truly next-gen work.",
    name: "Vikram Mehta",
    role: "CEO, TechFlow",
    tag: "40% Growth",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    type: "Student Success",
    quote: "I went from zero coding knowledge to a hired developer at Zoho. The practical training is unmatched.",
    name: "Anitha R.",
    role: "Full Stack Developer",
    tag: "Hired at Zoho",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    type: "Hiring Partner",
    quote: "The students we hired from Combo Square were project-ready from Day 1. Saves us months of training.",
    name: "HR Manager",
    role: "Top MNC",
    tag: "Quality Talent",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  }
];

const column1 = [...testimonials, ...testimonials];
const column2 = [...testimonials.reverse(), ...testimonials];

const Card = ({ item }) => (
  <div className="mb-4 break-inside-avoid">
    <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={item.image} alt={item.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100" />
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.type}</p>
            <p className="text-sm font-bold text-gray-900">{item.name}</p>
          </div>
        </div>
        <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center text-white`}>
          <Quote size={12} fill="currentColor" />
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-600 font-medium leading-relaxed mb-3 text-sm">
        "{item.quote}"
      </p>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
        <div className="flex text-yellow-400 gap-0.5">
          {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="currentColor" />)}
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-gray-50 uppercase tracking-wide text-gray-500">
          {item.tag}
        </span>
      </div>

    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50 overflow-hidden relative">

      {/* Fades */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* TEXT */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-5 shadow-sm">
              <Users size={14} className="text-brand-primary" />
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                Community Feedback
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#0f0518] mb-5 leading-tight">
              Loved by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
                Everyone.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mb-6 max-w-md mx-auto lg:mx-0">
              From students landing their dream jobs to startups scaling their sales. The impact is real.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <div className="px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xl font-black text-[#0f0518]">4.9/5</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Average Rating</p>
              </div>
              <div className="px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xl font-black text-[#0f0518]">2k+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Reviews</p>
              </div>
            </div>
          </div>

          {/* FLOATING CARDS */}
          <div className="lg:col-span-7 h-[420px] sm:h-[520px] lg:h-[600px] relative overflow-hidden flex gap-6">

            {/* Column 1 */}
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="w-full sm:w-1/2 flex flex-col"
            >
              {column1.map((item, i) => <Card key={i} item={item} />)}
            </motion.div>

            {/* Column 2 (hidden on small mobile) */}
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="hidden sm:flex w-1/2 flex-col pt-10"
            >
              {column2.map((item, i) => <Card key={i} item={item} />)}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
