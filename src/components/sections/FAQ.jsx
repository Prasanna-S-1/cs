import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  // CONTENT FROM PDF PAGE 5
  {
    question: "Do you provide internships?",
    answer: "Yes, we offer comprehensive internships in IT (Full Stack, AI/ML), Core Domains (IoT, Robotics), and Creative fields. Our programs provide hands-on experience with real-world projects."
  },
  {
    question: "Can colleges collaborate with Combo Square?",
    answer: "Absolutely. We partner with institutions to conduct technical workshops, hackathons, faculty development programs, and placement training to bridge the industry-academia gap."
  },
  // Added based on Service context to flesh out the section
  {
    question: "What services do you offer for startups?",
    answer: "We act as your end-to-end digital partner. From branding and UI/UX design to developing your MVP (Minimum Viable Product) and scaling with digital marketing strategies."
  },
  {
    question: "How can I apply for an internship?",
    answer: "You can apply directly through our Careers page. We have a streamlined process: Apply Online -> Screening -> Interview -> Onboarding."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light text-brand-primary text-sm font-bold mb-6">
            <MessageCircle size={16} />
            HAVE QUESTIONS?
          </div>
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our internships, services, and collaborations.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                activeIndex === index 
                  ? 'border-brand-primary bg-brand-light/30 shadow-lg shadow-brand-primary/10' 
                  : 'border-gray-100 bg-white hover:border-brand-primary/30'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? 'text-brand-primary' : 'text-brand-dark'
                }`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-brand-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-brand-primary/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;