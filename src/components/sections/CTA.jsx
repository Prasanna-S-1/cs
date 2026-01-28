import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative bg-[#12061d] overflow-hidden py-10 sm:py-14 lg:py-18">

      
      {/* ========= BACKGROUND EFFECTS ========= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-purple-600/30 blur-[160px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[420px] h-[420px] bg-pink-500/20 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-10" />
      </div>

      {/* ========= CONTAINER ========= */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="
            relative
            rounded-[2.2rem]
            bg-gradient-to-br from-white/10 via-white/5 to-transparent
            border border-white/10
            backdrop-blur-xl
            shadow-[0_40px_120px_rgba(0,0,0,0.55)]
            px-6 py-10
            sm:px-10 sm:py-14
          "
        >

          {/* ✅ FIXED GRID */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              items-center
            "
          >

            {/* ========= TEXT (TOP ON MOBILE) ========= */}
            <div className="space-y-5 text-center lg:text-left">

              <div className="inline-flex mx-auto lg:mx-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-[10px] sm:text-xs font-bold tracking-wide">
                <Sparkles size={12} className="text-purple-300" />
                READY TO LEVEL UP?
              </div>

              <h2 className="text-[26px] sm:text-4xl font-black leading-tight text-white">
                Start Your Journey with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                  Combo Square
                </span>
              </h2>

              <p className="text-white/70 text-[13px] sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                We help students, colleges, and businesses move from learning
                to real-world execution through internships, live projects,
                and industry-driven programs.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                {["Internships", "Live Projects", "Mentorship"].map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-xs font-semibold text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ========= ACTION CARD (BOTTOM ON MOBILE) ========= */}
            <div
              className="
                relative
                bg-white
                rounded-[1.8rem]
                p-6
                sm:p-8
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                flex
                flex-col
                justify-between
                gap-6
              "
            >
              <div className="space-y-3 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  Talk to Our Experts
                </h3>

                <p className="text-gray-600 text-[12px] sm:text-sm leading-relaxed">
                  Get personalized guidance on programs, internships,
                  and services tailored to your goals.
                </p>
              </div>

              <div className="space-y-3">
                <Link to="/contact">
                  <button
                    className="
                      w-full
                      px-4 py-3
                      rounded-xl
                      bg-[#12061d]
                      text-white
                      font-bold
                      text-sm
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition
                      active:scale-95
                    "
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </Link>

                <a
                  href="tel:+918072877622"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-gray-200
                    text-gray-800
                    font-bold
                    text-sm
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-gray-50
                    transition
                  "
                >
                  <PhoneCall size={16} />
                  Call Now
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
