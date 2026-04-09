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
        relative rounded-3xl border bg-white transition-all overflow-hidden
        ${
          open
            ? "border-purple-300 shadow-[0_28px_60px_rgba(139,92,246,0.22)]"
            : "border-gray-100 shadow-[0_18px_36px_rgba(0,0,0,0.06)]"
        }
      `}
    >
      {/* glow */}
      {open && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl opacity-50 -z-10" />
      )}

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 sm:p-7 text-left"
      >
        <h4 className="font-black text-base sm:text-lg text-gray-900">
          {item.q}
        </h4>

        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-purple-600"
        >
          <ChevronRight size={22} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
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

      {/* background */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-purple-100 rounded-full blur-[160px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-10 relative">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-flex px-6 py-2.5 rounded-full bg-purple-100 text-purple-700 font-extrabold mb-6">
            FAQs
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Frequently Asked{" "}
            <span className="text-purple-600">Questions</span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl">
            Clear answers about our programs, services, and partnerships.
          </p>
        </div>

        {/* LINE BY LINE */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {faqs.map((item, index) => (
            <FAQCard
              key={index}
              item={item}
              open={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;