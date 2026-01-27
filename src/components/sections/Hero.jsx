import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const smoothBgY = useSpring(bgY, { stiffness: 60, damping: 20 });
  const smoothContentY = useSpring(contentY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-[#0f0518]
        overflow-hidden
        min-h-[90svh]
        lg:min-h-screen
        flex items-center
      "
    >
      {/* ================= BACKGROUND ================= */}
      <motion.div
        style={{ y: smoothBgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-32 -right-40 w-[520px] h-[520px] bg-purple-600/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-140px] left-[-120px] w-[520px] h-[520px] bg-pink-500/20 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
          bg-[size:64px_64px]"
        />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <motion.div
        style={{ y: smoothContentY }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              lg:gap-12
              items-center
              lg:items-center
              lg:py-10
            "
          >
            {/* ================= TEXT ================= */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h1
                className="
                  text-white font-black leading-[1.05]
                  text-[28px]
                  sm:text-[32px]
                  lg:text-[72px]
                  xl:text-[80px]
                  tracking-tight
                "
              >
                We Elevate Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-400 to-pink-500">
                  Brand
                </span>{" "}
                by Creativity
              </h1>

              <p className="text-gray-400 text-[14px] sm:text-[15px] lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Combo Square is a next-gen digital agency helping students,
                colleges, and businesses grow through internships, training,
                and creative services.
              </p>
            </div>

            {/* ================= IMAGE ================= */}
            <div
  className="
    relative
    w-full
    max-w-[200px]
    sm:max-w-[240px]
    lg:max-w-[360px]
    aspect-[4/5]
    lg:aspect-[3/5]
    mx-auto
    mt-6
    lg:pt-16
  "
>


              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-purple-600 blur-[70px] opacity-40 rounded-[2.5rem]" />

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="
                  relative
                  h-full
                  rounded-[2.2rem]
                  overflow-hidden
                  border border-white/15
                  shadow-2xl
                  scale-[0.9]
                  lg:scale-[0.9]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=900&q=80"
                  alt="Combo Square Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518]/80 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute
                  -bottom-4
                  -left-4
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  px-4 py-3
                  rounded-2xl
                  shadow-xl
                  flex items-center gap-3
                "
              >
                <div className="w-9 h-9 rounded-full bg-brand-primary/30 flex items-center justify-center text-brand-neon">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Growth
                  </p>
                  <p className="text-lg text-white font-black">+150%</p>
                </div>
              </motion.div>
            </div>

            {/* ================= CTA ================= */}
            <div className="col-span-1 lg:col-span-2 flex justify-center items-center gap-4 mt-2 lg:mt-0">
              <Link to="/contact">
                <button
                  className="
                    px-6 py-3
                    bg-white text-[#0f0518]
                    font-bold text-sm lg:text-base
                    rounded-xl
                    flex items-center gap-2
                  "
                >
                  Get Started <ArrowRight size={16} />
                </button>
              </Link>

              <Link to="/services">
                <button
                  className="
                    px-6 py-3
                    bg-white/5 text-white
                    font-bold text-sm lg:text-base
                    rounded-xl
                    border border-white/15
                    backdrop-blur
                    flex items-center gap-2
                  "
                >
                  <Play size={14} /> Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;