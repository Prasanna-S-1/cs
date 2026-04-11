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
  PenTool
} from "lucide-react";
import { Link } from "react-router-dom";

// --- TYPEWRITER ---
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
    <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
      {subIndex === 0 ? "\u00A0" : words[index].substring(0, subIndex)}
      <span className={`ml-1 w-[3px] h-[0.9em] bg-purple-400 ${blink ? "opacity-100" : "opacity-0"}`}></span>
    </span>
  );
};

// --- COUNTER ---
const AnimatedCounter = ({ from = 0, to, decimals = 0, suffix = "" }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = from;
    const end = to;
    const duration = 2000;
    const increment = (end - start) / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        ref.current.textContent = end + suffix;
        clearInterval(counter);
      } else {
        ref.current.textContent = start.toFixed(decimals) + suffix;
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, from, to, decimals, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
};

// --- HERO ---
const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-[#482485] to-[#0f0518] overflow-hidden min-h-screen flex items-center pt-32 pb-20"
    >
      {/* Background glow */}
      <motion.div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-500 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 blur-[120px] rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Building <br />
            <Typewriter words={["Future-Ready", "Industry-Ready", "Smart Talent"]} />
          </h1>

          <p className="text-gray-300 mb-8 max-w-lg">
            Learn Web Development, UI/UX and Digital Skills with real-world projects and internships.
          </p>

          <div className="flex gap-4">
            <Link to="/contact">
              <button className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </button>
            </Link>

            <Link to="/services">
              <button className="border border-white text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Play size={16} /> Explore
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 text-white">
            <div>
              <p className="text-2xl font-bold">
                <AnimatedCounter to={500} suffix="+" />
              </p>
              <p className="text-sm text-gray-400">Students</p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                <AnimatedCounter to={98} suffix="%" />
              </p>
              <p className="text-sm text-gray-400">Success</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="students"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;