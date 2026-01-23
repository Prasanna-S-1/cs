import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
} from "lucide-react";

/* ================= BLOG DATA ================= */
const BLOGS = [
  {
    title: "The Future of Full-Stack: MERN vs MEAN",
    excerpt:
      "Why MongoDB, Express, React, and Node.js are dominating the startup ecosystem and what students should learn first.",
    category: "Tech",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600",
  },
  {
    title: "Designing for Humans: UI Trends to Watch",
    excerpt:
      "Minimalism is evolving. Here’s what’s replacing flat design and why UX thinking matters more than ever.",
    category: "Design",
    date: "Oct 08, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1600",
  },
  {
    title: "How to Land Your First Tech Internship",
    excerpt:
      "A step-by-step guide to crafting resumes, portfolios, and interview strategies that actually work.",
    category: "Career",
    date: "Sep 25, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",
  },
  {
    title: "Innovation Culture Inside High-Growth Startups",
    excerpt:
      "How innovation hubs and startups build fast-moving teams and why students should think like builders.",
    category: "Innovation",
    date: "Sep 12, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600",
  },
];

/* ================= BLOG PAGE ================= */
const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tech", "Design", "Career", "Innovation"];

  /* ================= FILTER LOGIC ================= */
  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      const matchCategory =
        activeCategory === "All" || blog.category === activeCategory;

      const matchSearch = `${blog.title} ${blog.excerpt} ${blog.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#0f0518] via-[#1a0b2e] to-[#2a1248] text-white">

        {/* BACKGROUND GLOWS */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[160px]" />

        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold mb-6">
                <BookOpen size={14} />
                Combo Square Blog
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Ideas that Shape{" "}
                <span className="text-purple-400">Careers & Innovation</span>
              </h1>

              <p className="text-gray-300 text-lg max-w-xl mb-10">
                Explore insights on technology, design, careers, and innovation
                — written for students, developers, and future builders.
              </p>

              {/* SEARCH */}
              <div className="relative max-w-xl">
                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white text-black font-medium focus:outline-none focus:ring-4 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* RIGHT FEATURED CARDS */}
            <div className="grid grid-cols-2 gap-6">
              {BLOGS.slice(0, 2).map((blog, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 backdrop-blur-xl"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />

                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <span className="text-xs font-bold text-purple-300 mb-2">
                      {blog.category}
                    </span>
                    <h3 className="font-black text-lg leading-snug">
                      {blog.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <section className="container mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-wrap gap-4 items-center justify-between">

          {/* CATEGORIES */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition
                  ${
                    activeCategory === cat
                      ? "bg-black text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredBlogs.map((blog, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[220px] w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-black mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {blog.excerpt}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 font-bold">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
