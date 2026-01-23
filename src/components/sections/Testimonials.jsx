import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anitha R.",
    role: "Student",
    text: "The training gave me real confidence. I cracked interviews because of live projects.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Mehta",
    role: "Startup Founder",
    text: "Our brand presence and conversions improved massively after working with Combo Square.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Ramesh",
    role: "College Partner",
    text: "Their workshops and internships created real industry exposure for our students.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Kavya S.",
    role: "Intern",
    text: "Mentorship and guidance were top-notch. It felt like real industry training.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Arjun K.",
    role: "Business Client",
    text: "Professional delivery, clean execution, and measurable growth.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Sneha P.",
    role: "Student",
    text: "Live projects helped me understand real-world development workflows.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

// duplicate for seamless motion
const loop = [...testimonials, ...testimonials];

const Card = ({ data }) => (
  <div
    className="
      relative
      bg-white
      rounded-3xl
      p-5 sm:p-6
      border border-gray-100
      shadow-[0_20px_45px_rgba(0,0,0,0.08)]
      hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
      transition-all
    "
  >
    <Quote
      size={18}
      className="absolute top-4 right-4 text-purple-300"
    />

    <div className="flex items-center gap-3 mb-4">
      <img
        src={data.avatar}
        alt={data.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-sm">{data.name}</p>
        <p className="text-[11px] text-gray-500 uppercase font-semibold">
          {data.role}
        </p>
      </div>
    </div>

    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
      “{data.text}”
    </p>

    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  </div>
);

const FloatingColumn = ({ speed }) => (
  <motion.div
    animate={{ y: ["0%", "-50%"] }}
    transition={{
      duration: speed,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex flex-col gap-6"
  >
    {loop.map((item, i) => (
      <Card key={i} data={item} />
    ))}
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-10">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-5">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Trusted by <span className="text-purple-600">People & Partners</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Real experiences from students, colleges, and businesses who worked
            with Combo Square.
          </p>
        </div>

        {/* FLOATING GRID */}
        <div
          className="
            relative
            h-[520px]
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-6
            overflow-hidden
          "
        >
          {/* Column 1 */}
          <FloatingColumn speed={26} />

          {/* Column 2 */}
          <FloatingColumn speed={32} />

          {/* Column 3 (desktop only) */}
          <div className="hidden lg:block">
            <FloatingColumn speed={29} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
