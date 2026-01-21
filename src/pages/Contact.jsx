import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, ArrowUpRight, 
  ChevronDown, MessageCircle, Globe, ShieldCheck 
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const address = "909, Bazaar Main Road, Ram Nagar, Madipakkam, Chennai - 600091";

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.134763116524!2d80.1983!3d12.9627";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen pt-20 overflow-x-hidden"
    >
      {/* CONTACT GRID */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">


          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="p-6 sm:p-8 bg-gray-50 rounded-[2rem] border hover:shadow-xl transition">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5">
                  <Phone className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-black">Call Us</h3>
                <p className="text-gray-500 text-sm font-bold">+91 90728 77622</p>

              </div>

              {/* Email */}
              <div className="p-6 sm:p-8 bg-gray-50 rounded-[2rem] border hover:shadow-xl transition">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5">
                  <Mail className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-black">Email Us</h3>
                <p className="text-gray-500 text-sm font-bold truncate">
                  combosquareofficials@gmail.com
                </p>
              </div>
            </div>

            {/* MAP – MOBILE FIXED */}
            <div className="relative flex-grow min-h-[260px] sm:min-h-[400px] rounded-[3rem] overflow-hidden border-8 border-gray-50 shadow-2xl">
              <iframe
                title="Combo Square HQ"
                src={mapEmbedUrl}
                className="w-full h-full grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-black flex items-center gap-1">
                    <MapPin size={14} className="text-brand-primary" /> Combo Square HQ
                  </h4>
                  <p className="text-[10px] text-gray-500">{address}</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-16 rounded-[4rem] shadow-2xl border">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4">
              Send a <span className="text-brand-primary">Message.</span>
            </h2>
            <p className="text-gray-400 mb-10">
              Have a requirement? Our experts will help you.
            </p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Full Name"
                  className="px-6 py-4 sm:py-5 bg-gray-50 rounded-2xl font-bold outline-none"
                />
                <input
                  placeholder="Phone Number"
                  className="px-6 py-4 sm:py-5 bg-gray-50 rounded-2xl font-bold outline-none"
                />
              </div>

              <input
                placeholder="Email Address"
                className="px-6 py-4 sm:py-5 bg-gray-50 rounded-2xl font-bold outline-none w-full"
              />

              <div className="relative">
                <select className="w-full px-6 py-4 sm:py-5 bg-gray-50 rounded-2xl font-bold appearance-none">
                  <option disabled selected>Select Inquiry Type</option>
                  <option>Corporate Branding</option>
                  <option>Web & App Development</option>
                  <option>Industrial Training</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <textarea
                rows="4"
                placeholder="Your message"
                className="px-6 py-4 sm:py-5 bg-gray-50 rounded-3xl font-bold outline-none w-full resize-none"
              />

              <button className="w-full py-5 bg-black text-white rounded-2xl text-lg font-black flex justify-center gap-2 hover:bg-brand-primary">
                Send Now <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-[#0f0518] py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-[#25D366] rounded-[3rem] p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-black text-white">
                Need an instant response?
              </h3>
              <p className="text-white/80 text-sm">
                Chat with us on WhatsApp
              </p>
            </div>
            <a
              href="https://wa.me/919072877622"
              target="_blank"
              className="px-10 py-4 bg-white text-[#25D366] font-black rounded-full text-lg flex items-center gap-2"
            >
              <MessageCircle size={22} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
