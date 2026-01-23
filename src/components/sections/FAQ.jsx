import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Combo Square?",
    a: "Combo Square is an EdTech and innovation hub that provides training, internships, and digital solutions for students, colleges, and businesses.",
  },
  {
    q: "Do you provide internships?",
    a: "Yes. We provide industry-focused internships with real projects, mentorship, and certification.",
  },
  {
    q: "Are your programs beginner friendly?",
    a: "Yes. Our programs are structured from fundamentals to real-world applications.",
  },
  {
    q: "Do you work with colleges?",
    a: "Yes. We partner with colleges for workshops, internships, and training programs.",
  },
  {
    q: "What services do you offer?",
    a: "We offer branding, web development, digital marketing, and creative services.",
  },
  {
    q: "Is certification provided?",
    a: "Yes. All programs and internships include verified certification.",
  },
];

const FAQCard = ({ item, open, onClick }) => {
  return (
    <div
      className={`
        relative
        rounded-3xl
        border
        bg-white
        transition-all
        overflow-hidden
        ${
          open
            ? "border-purple-300 shadow-[0_28px_60px_rgba(139,92,246,0.22)]"
            : "border-gray-100 shadow-[0_18px_36px_rgba(0,0,0,0.06)]"
        }
      `}
    >
      {/* glow only for active */}
      {open && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl opacity-50 -z-10" />
      )}

      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left"
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className={`
            w-10 h-10 rounded-xl flex items-center justify-center shrink-0
            ${open ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"}
          `}
        >
          <ChevronRight size={18} />
        </motion.div>

        <h4 className="font-black text-sm sm:text-base text-gray-900 leading-snug">
          {item.q}
        </h4>
      </button>

      {/* ANSWER (isolated animation – NO layout bleed) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="px-5 sm:px-6 pb-5 sm:pb-6"
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* soft background */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-purple-100 rounded-full blur-[140px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-10 relative">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-5">
            <HelpCircle size={16} />
            FAQs
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Frequently Asked{" "}
            <span className="text-purple-600">Questions</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Clear answers about our programs, services, and partnerships.
          </p>
        </div>

        {/* GRID – IMPORTANT: NO layout animation here */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((item, i) => (
            <FAQCard
              key={i}
              item={item}
              open={activeIndex === i}
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
