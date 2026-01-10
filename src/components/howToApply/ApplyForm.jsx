import { motion } from "framer-motion";

export default function ApplyForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🚀 Apply Now
      </h2>

      <form className="space-y-5">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Phone" />
        <input className="input" placeholder="Email Address" />

        <select className="input">
          <option>Select a role...</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>UI/UX Designer</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg"
        >
          Submit Application →
        </motion.button>
      </form>
    </motion.div>
  );
}
