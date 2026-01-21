import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Mail, ArrowRight } from 'lucide-react';

// --- DATA ---
const allPosts = [
  {
    id: 1,
    title: "The Future of Full-Stack: MERN vs. MEAN",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    desc: "Why MongoDB, Express, React, and Node.js are dominating the startup ecosystem in 2025."
  },
  {
    id: 2,
    title: "Designing for Humans: UI Trends to Watch",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    date: "Oct 08, 2025",
    readTime: "4 min read",
    desc: "Minimalism is dead? Here is what's replacing the flat design trend next year."
  },
  {
    id: 3,
    title: "How to Land Your First Tech Internship",
    category: "Career",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    date: "Sep 25, 2025",
    readTime: "6 min read",
    desc: "A step-by-step guide to crafting a resume that gets past the ATS."
  },
  {
    id: 4,
    title: "IoT in Agriculture: Smart Farming",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    date: "Sep 15, 2025",
    readTime: "7 min read",
    desc: "How sensors and automation are revolutionizing agriculture."
  },
  {
    id: 5,
    title: "Understanding React Server Components",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
    date: "Sep 10, 2025",
    readTime: "8 min read",
    desc: "A deep dive into the architecture changing modern web apps."
  },
  {
    id: 6,
    title: "The Art of Brand Storytelling",
    category: "Design",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
    date: "Aug 30, 2025",
    readTime: "5 min read",
    desc: "Your logo is not your brand. Learn how to tell a story."
  },
];

const categories = ["All", "Tech", "Design", "Career", "Innovation"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    setFilteredPosts(
      activeCategory === "All"
        ? allPosts
        : allPosts.filter(p => p.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen overflow-x-hidden"
    >

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0f0518] rounded-b-[3rem] lg:rounded-b-[5rem]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.9] mb-6">
            INSIGHTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">
              & STORIES
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Deep dives into tech, design, and the future of work.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
            <div className="flex overflow-x-auto gap-2 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold border ${
                    activeCategory === cat
                      ? "bg-black text-white"
                      : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200"
              />
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  layout
                  className="bg-white rounded-3xl overflow-hidden border hover:shadow-xl transition flex flex-col"
                >
                  {/* ✅ MOBILE FIX HERE */}
                  <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <Clock size={12} /> {post.date} · {post.readTime}
                    </div>

                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 flex-grow line-clamp-3">
                      {post.desc}
                    </p>

                    <span className="mt-4 font-bold flex items-center gap-2">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-[#0f0518] rounded-3xl p-10 text-center text-white">
          <Mail size={32} className="mx-auto mb-6" />
          <h2 className="text-3xl sm:text-5xl font-black mb-6">Stay in the Loop</h2>
          <p className="text-gray-400 mb-8">
            Weekly insights on tech & careers.
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-grow px-6 py-4 rounded-xl bg-white/10"
              placeholder="Enter your email"
            />
            <button className="px-8 py-4 bg-brand-primary rounded-xl font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </motion.main>
  );
};

export default Blog;
