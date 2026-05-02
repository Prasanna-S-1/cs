import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

const NEWSLETTER_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCYIfvlyJ8OppD6Q6BPBnwN4yCTHjxjQruf3sYO78_W2sXSpRJt6HXwa3LtL3zD2f7/exec";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setSubStatus("sending");
    try {
      await fetch(NEWSLETTER_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, type: "newsletter" }),
      });
      setSubStatus("success");
      setEmail("");
    } catch (err) {
      setSubStatus("error");
    }
  };

  const socialLinks = [
    { icon: <Instagram />, url: "https://www.instagram.com/combo_square_?igsh=Mjg1NXM2dTZkcHVv" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/company/combo-square/" },
    { icon: <Facebook />, url: "https://www.facebook.com/profile.php?id=61562432777570" },
    { icon: <Twitter />, url: "https://x.com/combosquare_" },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Job Alerts', path: '/job-alerts' },
    { name: 'Internship & Courses', path: '/internship-courses' },
    { name: 'Hackathon', path: '/hackathon' },
  ];

  const services = [
    'IT Development',
    'IoT & Robotics',
    'Digital Marketing',
    'Branding & UI/UX',
    'Internship Programs',
    'Placement Training',
  ];

  return (
    <footer className="bg-[#0f0518] text-white pt-14 sm:pt-18 lg:pt-24 pb-12 relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-4 gap-12 mb-20">

          <div className="space-y-8">
            <Link to="/" className="block w-48">
              <img
                src={logoImg}
                alt="Combo Square Logo"
                className="w-full h-auto object-contain mix-blend-screen"
              />
            </Link>
            <p className="text-gray-400">
              A next-gen digital agency bridging the gap between academic learning and industry demands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition"
                >
                  {React.cloneElement(social.icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-purple-500 transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    to={"/services#" + item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                    className="text-gray-400 hover:text-purple-500 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Stay Updated</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Subscribe to get the latest internship alerts and tech news.
            </p>

            {subStatus === "success" ? (
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm mb-8 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                <CheckCircle size={18} />
                Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                />
                <button
                  type="submit"
                  disabled={subStatus === "sending"}
                  className="absolute right-2 top-2 p-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition disabled:opacity-60"
                >
                  {subStatus === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            )}

            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Madipakkam, Chennai, India</span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} />
                <a href="mailto:combosquareofficials@gmail.com">combosquareofficials@gmail.com</a>
              </div>
              <div className="flex gap-3">
                <Phone size={18} />
                <a href="tel:+918072877622">+91 8072877622</a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Combo Square. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;