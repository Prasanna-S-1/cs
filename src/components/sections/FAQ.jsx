import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Do you provide internships?",
    answer: "Yes, we provide industry-standard internships in IT (Full Stack, AI), Core (IoT, Robotics), and Creative domains. You will work on live client projects, not just dummy demos."
  },
  {
    question: "Can colleges collaborate with Combo Square?",
    answer: "Absolutely. We partner with over 30+ colleges to conduct workshops, hackathons, faculty development programs, and on-campus placement training."
  },
  {
    question: "Is the training beginner-friendly?",
    answer: "100%. Our modules are designed for students from any background. We start from the absolute basics and take you to a professional level with hands-on practice."
  },
  {
    question: "Do you offer placement support?",
    answer: "Yes, we have a dedicated placement cell. From resume building to mock interviews, we support you until you get hired by one of our 50+ hiring partners."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24">

          {/* LEFT */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-100 rounded-full mb-5">
              <HelpCircle size={14} className="text-purple-600" />
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                Support
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f0518] mb-5 leading-tight">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
                Questions.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mb-7 leading-relaxed">
              Everything you need to know about our internships, training, and collaborations. Can't find the answer?
            </p>

            <Link to="/contact">
              <button className="
                w-full sm:w-auto
                px-7 py-3.5
                bg-[#0f0518] text-white
                font-bold rounded-2xl
                shadow-lg shadow-brand-primary/20
                transition-all flex items-center justify-center gap-3
                active:scale-95
              ">
                <MessageCircle size={18} />
                <span>Chat with Mentor</span>
              </button>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`
                    border rounded-2xl sm:rounded-3xl overflow-hidden
                    transition-all duration-300
                    ${isOpen
                      ? 'bg-white border-brand-primary/20 shadow-lg shadow-brand-primary/5'
                      : 'bg-gray-50 border-gray-100 hover:bg-white'}
                  `}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full px-5 py-4 sm:p-7 text-left"
                  >
                    <span className={`
                      text-base sm:text-lg font-bold pr-6
                      ${isOpen ? 'text-brand-primary' : 'text-gray-900'}
                    `}>
                      {faq.question}
                    </span>

                    <div className={`
                      w-9 h-9 sm:w-10 sm:h-10
                      rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${isOpen
                        ? 'bg-brand-primary text-white rotate-180 shadow-md'
                        : 'bg-white text-gray-400 border border-gray-200'}
                    `}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-8 pb-6 sm:pb-8">
                          <div className="h-px w-full bg-gray-100 mb-4 sm:mb-6"></div>
                          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
