import { motion } from "framer-motion";

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ApplyStep({ step, title, description, index }) {
  return (
    <motion.div
      custom={index}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-6 items-start"
    >
      {/* Circle */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-lg"
      >
        {step}
      </motion.div>

      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
