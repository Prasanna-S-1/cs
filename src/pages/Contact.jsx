import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Send,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxUEAluMty3Dse4WAnQfjBPLb1E55BGBJI9P3fSk6wIPdNMikfu6ZT0O-g_VoPmyeCpg/exec";

const contactCards = [
  {
    title: "Visit Us",
    text: "Madipakkam, Chennai",
    icon: MapPin,
    accent: "purple"
  },
  {
    title: "Call Us",
    text: "+91 80728 77622",
    icon: Phone,
    accent: "violet"
  },
  {
    title: "Email",
    text: "combosquare2@gmail.com",
    icon: Mail,
    accent: "pink"
  },
  {
    title: "WhatsApp",
    text: "Instant Support",
    icon: MessageCircle,
    accent: "green",
    link: "https://wa.me/918072877622"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact Form Submission",
          message: formData.message,
          newsletter: formData.newsletter ? "Yes - Subscribe me" : "No",
        }),
      });

      // no-cors means we assume success if no network error
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0f0518] via-[#1a0b2e] to-[#0f0518] text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[160px]" />

      {/* CONTAINER */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 sm:py-24">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-bold mb-6">
              📞 Get in Touch
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-6">
              Let's Talk About <br />
              <span className="text-purple-400">Your Next Move</span>
            </h1>

            <p className="text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed mb-10">
              Whether you're a student, startup, or institution — our team is
              ready to guide you from learning to real-world execution.
            </p>

            {/* CTA BUTTON */}
            <a
              href="https://wa.me/918072877622"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-black font-black shadow-2xl transition-all"
            >
              Chat on WhatsApp <ArrowUpRight />
            </a>
          </div>

          {/* RIGHT INFO GRID */}
          <div className="relative -mt-8 sm:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              {contactCards.map((item, index) => {
                const Icon = item.icon;
                const accentMap = {
                  purple: "hover:border-purple-400 hover:bg-purple-500/10",
                  violet: "hover:border-violet-400 hover:bg-violet-500/10",
                  pink: "hover:border-pink-400 hover:bg-pink-500/10",
                  green: "hover:border-green-400 hover:bg-green-500/10"
                };

                const content = (
                  <div
                    className={`
                      group bg-white/10 backdrop-blur-xl border border-white/20
                      rounded-2xl sm:rounded-3xl
                      p-4 sm:p-6
                      transition-all duration-300
                      ${accentMap[item.accent]}
                    `}
                  >
                    <Icon
                      className={`
                        w-5 h-5 sm:w-6 sm:h-6 mb-3
                        ${item.accent === "green" ? "text-green-400" : "text-purple-400"}
                        group-hover:scale-110 transition
                      `}
                    />
                    <h3 className="font-black text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-snug line-clamp-2">{item.text}</p>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} target="_blank" rel="noreferrer">{content}</a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEND MESSAGE SECTION */}
        <div className="mt-16 sm:mt-20">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl overflow-hidden">

            {/* glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[120px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT CONTENT */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm font-bold mb-6">
                  ✉️ Send Message
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-5">
                  Let's Build Something <br />
                  <span className="text-purple-400">Great Together</span>
                </h2>
                <p className="text-gray-300 max-w-md leading-relaxed">
                  Have a question about programs, internships, services, or partnerships?
                  Drop us a message and our team will reach out shortly.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="col-span-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="col-span-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="sm:col-span-2 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="sm:col-span-2 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition resize-none"
                />

                {/* NEWSLETTER CHECKBOX */}
                <label className="sm:col-span-2 flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 accent-purple-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-white transition">
                     Subscribe to our newsletter for updates & offers
                  </span>
                </label>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black shadow-2xl transition-all active:scale-95"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* SUCCESS MESSAGE */}
                {status === "success" && (
                  <div className="sm:col-span-2 flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-bold">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    Message sent! Saved to Google Sheets & email sent. 🎉
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {status === "error" && (
                  <div className="sm:col-span-2 flex items-center gap-3 px-5 py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-bold">
                    <XCircle className="w-5 h-5 shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-16 sm:mt-24 grid lg:grid-cols-2 gap-12 items-center">

          {/* MAP */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Combo Square Location"
              src="https://www.google.com/maps?q=Madipakkam%20Chennai&output=embed"
              className="w-full h-[300px] sm:h-[380px] border-0"
              loading="lazy"
            />
          </div>

          {/* MAP TEXT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Visit Our <span className="text-purple-400">Workspace</span>
            </h2>
            <p className="text-gray-300 max-w-lg leading-relaxed mb-8">
              Located in the heart of Chennai, our innovation hub is where
              students, creators, and businesses collaborate on real-world
              solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://maps.google.com?q=Madipakkam+Chennai"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-black font-black hover:bg-purple-600 hover:text-white transition-all"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;