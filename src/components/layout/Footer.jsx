import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  ArrowRight,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f0518] text-white overflow-hidden border-t border-white/10">
      {/* ================= BACKGROUND DECOR ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-purple-600/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-[-200px] w-[420px] h-[420px] bg-brand-primary/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-10">

        {/* ================= NEWSLETTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            bg-white/5
            border border-white/10
            rounded-[2.5rem]
            p-6 sm:p-8 lg:p-14
            mb-20
            backdrop-blur-xl
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight mb-4">
              Join our Innovation Newsletter
            </h2>
            <p className="text-gray-400 font-medium max-w-xl">
              Subscribe for tech trends and batch alerts directly to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-6
                py-4
                bg-white/10
                border border-white/15
                rounded-2xl
                font-bold
                text-white
                placeholder:text-gray-400
                focus:outline-none
                focus:border-brand-primary
              "
            />
            <button
              className="
                px-8
                py-4
                bg-brand-primary
                hover:bg-white
                hover:text-brand-primary
                text-white
                font-black
                rounded-2xl
                flex
                items-center
                justify-center
                gap-3
                transition-all
                shadow-xl
              "
            >
              Subscribe <Send size={18} />
            </button>
          </div>
        </motion.div>

        {/* ================= MAIN FOOTER GRID ================= */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-12
            gap-x-10
            gap-y-14
            mb-20
          "
        >
          {/* BRAND */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <img src={logo} alt="Combo Square" className="h-11" />
              </div>
            </Link>

            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Combo Square is India's premier EdTech & Innovation Hub. We bridge
              the gap between academic theory and industry reality.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      flex items-center justify-center
                      text-gray-400
                      hover:bg-brand-primary
                      hover:text-white
                      transition-all
                    "
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-black mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-brand-primary rounded-full" />
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <Home size={14} className="text-brand-primary" />
                  Home
                </Link>
              </li>
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Insights", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                  >
                    <ArrowRight size={13} className="text-brand-primary" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="font-black mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-purple-500 rounded-full" />
              Programs
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                "Full Stack Development",
                "IoT & Robotics",
                "Digital Marketing",
                "Internship Program",
              ].map((prog) => (
                <li key={prog}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                  >
                    <ArrowRight size={13} className="text-purple-400" />
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-black mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-pink-500 rounded-full" />
              Get in Touch
            </h4>

            <div className="space-y-6 text-sm font-bold">
              <div className="flex gap-4">
                <MapPin className="text-pink-500 shrink-0" />
                <p className="text-gray-400 leading-relaxed">
                  909, Bazaar Main Road, Ram Nagar,
                  <br />
                  Madipakkam, Chennai - 600091
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="text-brand-primary" />
                <a
                  href="tel:+918072877622"
                  className="hover:text-brand-primary"
                >
                  +91 80728 77622
                </a>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="text-brand-neon" />
                <a
                  href="mailto:combosquare2@gmail.com"
                  className="hover:text-brand-neon break-all"
                >
                  combosquare2@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            pt-8
            border-t border-white/10
            flex flex-col sm:flex-row
            justify-between
            items-center
            gap-4
            text-xs
            font-bold
            text-gray-500
          "
        >
          <p>
            © {currentYear}{" "}
            <span className="text-white">Combo Square</span>. All rights
            reserved.
          </p>

          <div className="flex gap-8 uppercase tracking-widest">
            <Link to="/about" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
