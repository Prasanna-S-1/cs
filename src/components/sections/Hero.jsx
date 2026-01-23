import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, Play, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);

  /* ---------------- PARALLAX (SMOOTH & LIGHT) ---------------- */
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
      {/* ================= BACKGROUND LAYERS ================= */}
      <motion.div
        style={{ y: smoothBgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Purple Glow */}
        <div className="absolute -top-32 -right-40 w-[520px] h-[520px] bg-purple-600/30 rounded-full blur-[160px]" />

        {/* Pink Glow */}
        <div className="absolute bottom-[-140px] left-[-120px] w-[520px] h-[520px] bg-pink-500/20 rounded-full blur-[160px]" />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
          bg-[size:64px_64px]"
        />
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        style={{ y: smoothContentY }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* ⚠️ MINI DESKTOP GRID — EVEN ON MOBILE */}
          <div
            className="
              grid
              grid-cols-2
              gap-6
              lg:gap-16
              items-center
            "
          >
            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <Sparkles size={14} className="text-brand-neon" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                  Premium Digital Agency
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white font-black leading-[1.05]
                text-[26px]
                sm:text-[30px]
                lg:text-[64px]
                tracking-tight
              ">
                We Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-400 to-pink-500">
                  Future-Ready
                </span>{" "}
                Brands
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-[13px] sm:text-[14px] lg:text-lg max-w-xl leading-relaxed">
                Combo Square helps students, colleges, and businesses
                scale through internships, real projects, and
                next-generation digital solutions.
              </p>

              {/* Actions */}
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact">
                  <button className="
                    px-5 py-3
                    lg:px-7 lg:py-3.5
                    bg-white text-[#0f0518]
                    font-bold text-sm lg:text-base
                    rounded-xl
                    flex items-center gap-2
                    hover:scale-[1.03]
                    transition-transform
                  ">
                    Get Started <ArrowRight size={16} />
                  </button>
                </Link>

                <Link to="/services">
                  <button className="
                    px-5 py-3
                    lg:px-7 lg:py-3.5
                    bg-white/5 text-white
                    font-bold text-sm lg:text-base
                    rounded-xl
                    border border-white/15
                    backdrop-blur
                    flex items-center gap-2
                    hover:bg-white/10
                  ">
                    <Play size={14} /> Explore
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4 border-t border-white/10">
                {[
                  ["25+", "Clients"],
                  ["100+", "Projects"],
                  ["4.9★", "Rating"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-white font-black text-lg">{v}</p>
                    <p className="text-[10px] uppercase text-gray-500 font-bold">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT VISUAL ================= */}
            <div
  className="
    relative
    w-full
    max-w-[280px]
    sm:max-w-[320px]
    lg:max-w-[420px]
    aspect-[4/5]
    mx-auto
  "
>

              {/* Glow frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-purple-600 blur-[70px] opacity-40 rounded-[2.5rem]" />

              {/* Image card */}
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
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=900&q=80"
                  alt="Combo Square Innovation"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518]/80 via-transparent to-transparent" />
              </motion.div>

              {/* Floating metric */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute
                  -bottom-6
                  -left-6
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
