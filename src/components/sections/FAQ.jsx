import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  HelpCircle,
  Smile,
  Briefcase,
  BookOpen,
  Building2,
  Code,
  Award,
} from "lucide-react";

const faqs = [
  {
    icon: Smile,
    q: "What is Combo Square?",
    a: "Combo Square is an EdTech and innovation hub that provides training, internships, and digital solutions for students, colleges, and businesses.",
  },
  {
    icon: Briefcase,
    q: "Do you provide internships?",
    a: "Yes. We provide industry-focused internships with real projects, mentorship, and certification.",
  },
  {
    icon: BookOpen,
    q: "Are your programs beginner friendly?",
    a: "Yes. Our programs are structured from fundamentals to real-world applications.",
  },
  {
    icon: Building2,
    q: "Do you work with colleges?",
    a: "Yes. We partner with colleges for workshops, internships, and training programs.",
  },
  {
    icon: Code,
    q: "What services do you offer?",
    a: "We offer branding, web development, digital marketing, and creative services.",
  },
  {
    icon: Award,
    q: "Is certification provided?",
    a: "Yes. All programs and internships include verified certification.",
  },
];

const FAQCard = ({ item, open, onClick }) => {
  const Icon = item.icon;

  return (
    <div
      className={`
        relative rounded-3xl border bg-white transition-all overflow-hidden
        ${
          open
            ? "border-purple-300 shadow-[0_28px_60px_rgba(139,92,246,0.22)]"
            : "border-gray-100 shadow-[0_18px_36px_rgba(0,0,0,0.06)]"
        }
      `}
    >
      {open && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl opacity-50 -z-10" />
      )}

      <button
        onClick={onClick}
        className="w-full flex items-start gap-5 p-6 sm:p-7 text-left"
      >
        <div
          className={`
            w-12 h-12 rounded-2xl flex items-center justify-center shrink-0
            ${open ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"}
          `}
        >
          <Icon size={22} />
        </div>

        <h4 className="font-black text-base sm:text-lg text-gray-900 leading-snug flex-1">
          {item.q}
        </h4>

        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-purple-600 mt-1"
        >
          <ChevronRight size={22} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="px-6 sm:px-7 pb-6 sm:pb-7"
          >
            <p className="text-gray-600 text-base leading-relaxed">
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
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-purple-100 rounded-full blur-[160px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-10 relative">

        {/* ✅ HEADER – MATCHING WHO WE ARE */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="
            inline-flex items-center justify-center gap-2
            px-6 py-2.5
            rounded-full
            bg-purple-100
            text-purple-700
            text-base sm:text-lg
            font-extrabold
            mb-6
          ">
            <HelpCircle size={18} />
            FAQs
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Frequently Asked{" "}
            <span className="text-purple-600">Questions</span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Clear answers about our programs, services, and partnerships.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
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
