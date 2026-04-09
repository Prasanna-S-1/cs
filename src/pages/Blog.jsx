import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogData"; // Ensure this matches your folder path

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tech", "Design", "Career", "Innovation"];

  // Logic to filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      const matchCategory = activeCategory === "All" || blog.category === activeCategory;
      const matchSearch = `${blog.title} ${blog.excerpt} ${blog.category}`
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-[#FDFDFF] min-h-screen">
      
      {/* ================= PREMIUM HERO SECTION ================= */}
      <section className="relative bg-[#0f0518] text-white pt-32 pb-24 overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-8 shadow-2xl backdrop-blur-md">
              <BookOpen size={14} /> Knowledge & Insights
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-10 tracking-tighter">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                Tech & Design.
              </span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
              Explore deep dives into modern development, cutting-edge UI trends, and 
              strategies to skyrocket your tech career.
            </p>

            {/* ENHANCED SEARCH BOX */}
            <div className="relative max-w-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-[2rem] blur opacity-25 group-focus-within:opacity-50 transition-all duration-500" />
              <div className="relative">
                <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, topics, or trends..."
                  className="w-full pl-16 pr-8 py-6 rounded-[2rem] bg-white/10 border border-white/10 text-white font-semibold focus:outline-none focus:border-purple-500/50 backdrop-blur-xl transition-all placeholder:text-gray-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FILTER & GRID AREA ================= */}
      <section className="container mx-auto px-6 lg:px-12 -mt-10 relative z-20 pb-32">
        
        {/* INTERACTIVE CATEGORY BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-16 bg-white p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 max-w-fit"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all duration-300
                ${activeCategory === cat
                  ? "bg-[#0f0518] text-white shadow-xl scale-105"
                  : "bg-transparent text-slate-400 hover:bg-slate-50 hover:text-purple-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, i) => (
              <motion.div
                layout
                key={blog.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={`/blog/${blog.id}`} className="group block h-full">
                  <article className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col h-full transition-all duration-500 relative">
                    
                    {/* Image Header */}
                    <div className="relative h-72 overflow-hidden">
                      <motion.img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-6 left-6 px-5 py-2 bg-white/90 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 shadow-sm border border-white/50">
                        {blog.category}
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                        <span className="flex items-center gap-2"><Calendar size={14} className="text-purple-500" /> {blog.date}</span>
                        <span className="flex items-center gap-2"><Clock size={14} className="text-purple-500" /> {blog.readTime}</span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-black mb-5 text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">
                        {blog.title}
                      </h3>

                      <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Footer Interaction */}
                      <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                        <span className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-purple-600 transition-colors">
                          Read Article <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-32 text-center"
          >
            <h3 className="text-3xl font-black text-slate-300 italic">No articles match your search.</h3>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Blog;