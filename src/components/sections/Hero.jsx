import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Play, Layers, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const ref = useRef(null);

  // 1. SCROLL PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // 2. 3D MOUSE TILT (DESKTOP FEEL)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-[100svh] lg:min-h-screen
        flex items-center
        pt-24 sm:pt-28 lg:pt-28
        pb-10 sm:pb-12
        overflow-hidden
        bg-[#0f0518]
        perspective-[2000px]
      "
    >

      {/* BACKGROUND */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-30 mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px] opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div style={{ y: textY }} className="text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-neon"></span>
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                Next-Gen Digital Agency
              </span>
            </motion.div>

            <h1 className="
              text-[38px] sm:text-5xl lg:text-7xl
              font-black text-white leading-[1.1]
              mb-5 sm:mb-6
              tracking-tight
            ">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="block">
                We Elevate Your
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="block">
                Brand by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-300 to-pink-400 animate-gradient-x">
                  Creativity.
                </span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                text-base sm:text-lg
                text-gray-400
                mb-8 sm:mb-10
                leading-relaxed
                max-w-xl
                mx-auto lg:mx-0
                font-medium
              "
            >
              Combo Square is a next-gen digital agency helping students, colleges, and businesses grow through internships, training, and creative services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              <Link to="/contact" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-neon to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition" />
                <button className="relative w-full sm:w-auto px-7 py-3.5 bg-white text-[#0f0518] text-base sm:text-lg font-bold rounded-xl flex items-center justify-center gap-2 active:scale-95 transition">
                  Get Started <ArrowRight size={18} />
                </button>
              </Link>

              <Link to="/services">
                <button className="w-full sm:w-auto px-7 py-3.5 bg-white/5 border border-white/10 text-white text-base sm:text-lg font-bold rounded-xl backdrop-blur-sm active:scale-95 transition flex items-center justify-center gap-2">
                  <Play size={16} className="fill-current" /> Explore Services
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-5 border-t border-white/10 pt-6"
            >
              {[
                ["25+", "Clients"],
                ["4,500+", "Followers"],
                ["100+", "Projects"],
              ].map(([v, l]) => (
                <div key={l} className="text-left">
                  <p className="text-xl sm:text-2xl font-black text-white">{v}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL (HIDDEN ON SMALL MOBILE) */}
          <div className="relative h-[420px] sm:h-[500px] w-full flex items-center justify-center hidden md:flex">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[300px] sm:w-[400px] aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-purple-600 rounded-[2.5rem] blur-[60px] opacity-40" />
              <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden transform translate-z-20">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
                  alt="Innovation Hub"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl transform translate-z-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-neon">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Growth</p>
                    <p className="text-xl font-black text-white">+150%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 text-brand-neon opacity-50 transform translate-z-10"
              >
                <Star size={60} fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
