import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { BLOGS } from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.id === id);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!blog) return <div className="h-screen flex items-center justify-center font-bold">Post Not Found</div>;

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100 selection:text-purple-900">
      {/* Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 z-[100] origin-left" style={{ scaleX }} />

      {/* HEADER SECTION */}
      <section className="relative bg-[#0f0518] pt-32 pb-64 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent)]" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Link to="/blog" className="group inline-flex items-center gap-2 text-purple-400 font-bold text-sm mb-10 hover:text-white transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> BACK TO ALL ARTICLES
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
              {blog.title}
            </h1>

            <div className="flex items-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2"><Calendar size={14} className="text-purple-500" /> {blog.date}</div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-purple-500" /> {blog.readTime}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="container mx-auto px-6 max-w-6xl -mt-48 relative z-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Column */}
          <div className="lg:w-3/4">
            <motion.div 
              style={{ y: imageY }}
              className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white bg-white mb-16"
            >
              <img src={blog.image} alt={blog.title} className="w-full aspect-video object-cover" />
            </motion.div>

            <article 
              className="prose prose-lg md:prose-2xl prose-slate max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black
                prose-p:text-slate-600 prose-p:leading-[1.8]
                prose-strong:text-slate-900
                prose-h2:text-4xl prose-h2:mt-16
                prose-blockquote:border-purple-600 prose-blockquote:bg-purple-50/50 prose-blockquote:rounded-2xl prose-blockquote:py-2 prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Sidebar (Share Buttons) */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Share Article</p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 hover:bg-purple-600 hover:text-white hover:border-transparent transition-all"><Linkedin size={20} /></button>
                  <button className="flex items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 hover:bg-[#1DA1F2] hover:text-white hover:border-transparent transition-all"><Twitter size={20} /></button>
                  <button className="flex items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all"><Facebook size={20} /></button>
                  <button className="flex items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-transparent transition-all"><Copy size={20} /></button>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] text-white">
                <h4 className="font-black text-xl mb-4 leading-tight">Join our Innovation Hub</h4>
                <p className="text-sm text-purple-100 mb-6">Get weekly insights delivered to your inbox.</p>
                <input type="email" placeholder="Email" className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50 text-white mb-3 outline-none focus:bg-white/20 transition-all" />
                <button className="w-full py-3 bg-white text-purple-700 font-black rounded-xl hover:scale-[1.02] transition-transform">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BlogPost;