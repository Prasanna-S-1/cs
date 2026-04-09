import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView
} from "framer-motion";
import { 
  ArrowRight, Play, TrendingUp, 
  Atom, Code2, FileJson, Database, Cpu, Layout,
  PenTool, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

// --- 1. ROBUST TYPEWRITER ---
const Typewriter = ({ words, wait = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinker = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinker);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), wait);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
      {subIndex === 0 ? "\u00A0" : words[index].substring(0, subIndex)}
      <span className={`ml-1 w-[3px] h-[0.9em] bg-purple-400 rounded-full ${blink ? "opacity-100" : "opacity-0"}`}></span>
    </span>
  );
};

// --- 2. LIVE ANIMATED COUNTER ---
const AnimatedCounter = ({ from = 0, to, decimals = 0, suffix = "", duration = 2.5 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, to, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={nodeRef} className="tabular-nums">{from.toFixed(decimals)}{suffix}</span>;
};

// --- 3. SUPER 3D CARD (With Spinta-Style Stack) ---
const HeroImageCard = ({ isMobile = false }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isMobile) return;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
  }

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 20 });
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={!isMobile ? { rotateX, rotateY, perspective: 1200, transformStyle: "preserve-3d" } : {}}
      className={`relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] mx-auto ${isMobile ? 'my-10 block lg:hidden' : 'hidden lg:block'}`}
    >
      {/* Background Glow behind image */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 blur-[80px] opacity-50 rounded-full animate-pulse -z-10" />

      <motion.div
        className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1a0b2e] group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="aspect-[4/5] relative">
          {/* SEO UPDATE: Highly descriptive alt text for Google Image Search */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Combo Square EdTech students learning React.js, UI/UX, and Web Development"
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-[#0f0518]/20 to-transparent opacity-90" />
          
          {/* Spinta-Style Floating Stack Badge 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(40px)" }}
            className="absolute top-8 right-[-10px] sm:right-4 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
              <Code2 size={14} />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">React.js</span>
          </motion.div>
          
          {/* Spinta-Style Floating Stack Badge 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ transform: "translateZ(30px)" }}
            className="absolute top-32 left-[-10px] sm:left-4 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-md bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/30">
              <PenTool size={14} />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">UI/UX</span>
          </motion.div>

          {/* Live Stats Bottom Panel */}
          <motion.div 
             style={{ transform: "translateZ(60px)" }}
             className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 border border-green-500/30 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Success Rate</p>
                <p className="text-lg text-white font-black tracking-tight">
                  <AnimatedCounter from={0} to={98.5} decimals={1} suffix="%" duration={2.5} />
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Placed</p>
              <p className="text-lg text-white font-black tracking-tight">
                 <AnimatedCounter from={0} to={500} decimals={0} suffix="+" duration={3} />
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- 4. MAIN HERO COMPONENT ---
const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const smoothBgY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), { stiffness: 60, damping: 20 });

  // Floating background icons
  const floatingIcons = [
    { Icon: Atom, color: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]", delay: 0, x: -140, y: -100 },
    { Icon: Code2, color: "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]", delay: 2, x: 160, y: -80 },
    { Icon: FileJson, color: "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]", delay: 1, x: -100, y: 140 },
    { Icon: Layout, color: "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]", delay: 3, x: 140, y: 120 },
    { Icon: Database, color: "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]", delay: 1.5, x: 20, y: -160 },
    { Icon: Cpu, color: "text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]", delay: 2.5, x: -20, y: 160 },
  ];

  return (
    // SEO UPDATE: Added an aria-label to the main section to describe the page header area
    <section
      ref={sectionRef}
      aria-label="Combo Square Hero Section"
      className="relative bg-[#0f0518] overflow-hidden min-h-screen flex items-center pt-32 pb-20 lg:pt-20 lg:pb-0 w-full"
    >
      {/* 1. Premium Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* 2. Enhanced Background Layer */}
      <motion.div style={{ y: smoothBgY }} className="absolute inset-0 pointer-events-none">
        
        {/* Deep Glow Blobs */}
        <div className="absolute -top-40 -right-60 w-[700px] h-[700px] bg-purple-600/25 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] mix-blend-screen" />
        
        {/* Animated Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:50px_50px]"
        />

        {/* Super Floating Particles */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-30">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: item.x, y: item.y }}
              animate={{ 
                y: [item.y - 20, item.y + 20, item.y - 20], 
                x: [item.x - 15, item.x + 15, item.x - 15], 
                rotate: [0, 10, -10, 0] 
              }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              className={`absolute w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg ${item.color}`}
            >
              <item.Icon size={26} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3. Content Layer */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text */}
          <div className="text-center lg:text-left">
            
            {/* Headline - SEO UPDATE: Kept as H1 but structured perfectly for search bots */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-black leading-[1.1] text-[42px] sm:text-[54px] lg:text-[68px] xl:text-[80px] tracking-tight mb-6"
            >
              Building <br />
              <Typewriter words={["Industry-Ready", "Future-Proof", "Innovation-Led"]} /> 
              <br />
              Talent for the World
            </motion.h1>

            {/* Description - SEO UPDATE: Injected high-value keywords naturally (EdTech, Web Development, Digital Marketing) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-[16px] lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10"
            >
              Launch your tech career with Combo Square's premium EdTech ecosystem. Get industry-ready with hackathon-led training, real-world internships, and hands-on experience in <span className="text-gray-100 font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">UI/UX, Web Development, and Digital Marketing.</span>
            </motion.p>

            {/* Mobile Image (Hidden on Desktop) */}
            <HeroImageCard isMobile={true} />

            {/* CTA Buttons - SEO UPDATE: Added aria-labels for screen readers and SEO crawlers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <Link to="/contact" className="w-full sm:w-auto group" aria-label="Get Started with Combo Square EdTech Training">
                <button className="w-full h-[56px] px-8 bg-white text-[#0f0518] font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-[0.98]">
                  Get Started <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto group" aria-label="Explore Combo Square Design and Development Services">
                <button className="w-full h-[56px] px-8 bg-white/5 text-white font-bold text-sm rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] active:scale-[0.98]">
                  <Play size={16} fill="currentColor" className="opacity-80 group-hover:opacity-100 group-hover:text-purple-400 transition-colors" /> Explore Services
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Desktop Image */}
          <HeroImageCard isMobile={false} />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;