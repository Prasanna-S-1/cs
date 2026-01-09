import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Search, Tag, Clock, ArrowRight, User, Mail, Send, ChevronRight, BookOpen, Sparkles, TrendingUp, Layers } from 'lucide-react';

// --- HELPER: SPOTLIGHT CARD (Reusing the premium glow effect) ---
const SpotlightCard = ({ children, className = "", color = "rgba(139,92,246,0.15)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-gray-100 bg-white overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- DATA: STRICTLY FROM PDF PAGE 9 ---
const categories = [
  "All",
  "Internships & Careers",
  "Digital Marketing Trends",
  "IT & Tech Innovations",
  "College Collaborations",
  "Success Stories"
];

const blogPosts = [
  {
    id: 1,
    title: "How Hackathons Boost Placements",
    category: "Internships & Careers",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    author: "Ahamad Thowfeek",
    role: "Founder",
    desc: "Why participating in coding challenges is the #1 way to get noticed by top recruiters in 2026."
  },
  {
    id: 2,
    title: "Digital Marketing for Startups: Beginner's Guide",
    category: "Digital Marketing Trends",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    date: "Jan 08, 2026",
    readTime: "7 min read",
    author: "Nazneen A",
    role: "Creative Dir.",
    desc: "A step-by-step blueprint to scaling your brand visibility with zero budget using organic SEO."
  },
  {
    id: 3,
    title: "Why UI/UX Design is the Future of Branding",
    category: "IT & Tech Innovations",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800",
    date: "Jan 05, 2026",
    readTime: "6 min read",
    author: "Creative Team",
    role: "Designers",
    desc: "It's not just about looks. Learn how user experience drives customer loyalty and sales."
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="pt-20 bg-gray-50/30 min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      
      {/* 1. HERO SECTION (Knowledge Hub) */}
      <section className="relative py-24 bg-[#0f0518] text-white overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-neon text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(168,127,251,0.2)]">
              <BookOpen size={14} /> KNOWLEDGE HUB
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Insights & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-300 to-white">
                Innovations
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Expert advice on careers, technology, and branding straight from the industry mentors at Combo Square.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. FEATURED BLOG (Massive Parallax Card) */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 grid lg:grid-cols-12 cursor-pointer hover:shadow-brand-primary/20 transition-all duration-500"
          >
            {/* Image Side (7 Cols) */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-brand-dark/20 z-10 mix-blend-multiply group-hover:bg-brand-dark/0 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Blog" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-md text-brand-dark px-4 py-2 rounded-full text-xs font-bold uppercase shadow-lg flex items-center gap-2">
                <Sparkles size={14} className="text-brand-primary fill-brand-primary"/> Featured Post
              </div>
            </div>

            {/* Content Side (5 Cols) */}
            <div className="lg:col-span-5 p-10 lg:p-14 flex flex-col justify-center bg-white relative">
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rotate-45 hidden lg:block"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-6 uppercase tracking-wider">
                   <span className="text-brand-primary">Internships & Careers</span>
                   <span>•</span>
                   <span>Jan 12, 2026</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 leading-tight group-hover:text-brand-primary transition-colors duration-300">
                  Best Internships for Students in India 2025: IT, Core, and Creative Fields
                </h2>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">
                  A comprehensive guide to finding the right career path. Discover why practical experience in IT, IoT, and Design is more valuable than just a degree in the current market.
                </p>
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                   <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                      <User className="text-gray-400" size={24} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-brand-dark">Ahamad Thowfeek B</p>
                      <p className="text-xs text-gray-500 font-medium">Founder & Mentor</p>
                   </div>
                   <div className="ml-auto">
                     <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                       <ArrowRight size={20} />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 3. CATEGORIES & RECENT POSTS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Categories Pill Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all border shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/25 scale-105' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-brand-primary/50 hover:text-brand-primary hover:-translate-y-0.5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid with Spotlight Effect */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post, i) => (
              <SpotlightCard 
                key={post.id}
                className="rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full flex flex-col"
              >
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-brand-dark z-10 shadow-sm border border-white/50">
                    {post.category}
                  </div>
                  <img src={post.image} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" alt={post.title} />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3 hover:text-brand-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-brand-light rounded-full flex items-center justify-center border border-white shadow-sm">
                        <User size={14} className="text-brand-primary"/>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">{post.author}</p>
                        <p className="text-[10px] text-gray-400 uppercase">{post.role}</p>
                      </div>
                    </div>
                    <span className="text-brand-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* 4. NEWSLETTER & AUTHOR SECTION [PDF Requirement] */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Author Section (Glassmorphic Side Panel) */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/30 rounded-full blur-2xl"></div>
              
              <h3 className="font-bold text-xl text-brand-dark mb-6 flex items-center gap-2 relative z-10">
                <User className="text-brand-primary" size={20}/> Our Authors
              </h3>
              
              <p className="text-gray-600 text-sm mb-8 leading-relaxed relative z-10">
                Our blogs are written by industry mentors, trainers, and top student contributors from Combo Square's ecosystem.
              </p>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-brand-light/20 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">AT</div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">Ahamad T.</p>
                    <p className="text-xs text-gray-500">Tech Lead</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-brand-light/20 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">NA</div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">Nazneen A.</p>
                    <p className="text-xs text-gray-500">Creative Lead</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section (Massive Dark Card) */}
            <div className="lg:col-span-2 bg-brand-dark p-8 md:p-12 rounded-[2rem] relative overflow-hidden text-white flex flex-col justify-center shadow-2xl group">
              {/* Background FX */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/20 rounded-full blur-[100px] group-hover:bg-brand-primary/30 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md shadow-inner mx-auto md:mx-0">
                     <Mail className="text-brand-neon w-7 h-7" />
                  </div>
                  <h3 className="font-black text-2xl md:text-3xl mb-3">Stay Ahead of the Curve</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Subscribe to get weekly tips on careers, branding strategies, and digital marketing trends delivered to your inbox.
                  </p>
                </div>

                <div className="w-full md:w-auto">
                  <div className="bg-white/10 p-2 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
                    <div className="bg-white rounded-xl p-1 flex shadow-sm">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-transparent border-none text-brand-dark placeholder-gray-400 px-4 focus:ring-0 outline-none w-full md:w-64 font-medium"
                      />
                      <button className="bg-brand-primary hover:bg-brand-dark text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all shadow-md">
                        <Send size={20} />
                      </button>
                    </div>
                  </div>
                  <p className="text-white/30 text-[10px] text-center mt-3 uppercase tracking-wider font-bold">No Spam. Unsubscribe Anytime.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Blog;