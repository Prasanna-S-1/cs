import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

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
              Let’s Talk About <br />
              <span className="text-purple-400">Your Next Move</span>
            </h1>

            <p className="text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed mb-10">
              Whether you’re a student, startup, or institution — our team is
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
                        ${
                          item.accent === "green"
                            ? "text-green-400"
                            : "text-purple-400"
                        }
                        group-hover:scale-110 transition
                      `}
                    />

                    <h3 className="font-black text-sm sm:text-base mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-snug line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                );

                return item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
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
          Let’s Build Something <br />
          <span className="text-purple-400">Great Together</span>
        </h2>

        <p className="text-gray-300 max-w-md leading-relaxed">
          Have a question about programs, internships, services, or partnerships?
          Drop us a message and our team will reach out shortly.
        </p>
      </div>

      {/* FORM */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

        <input
          type="text"
          placeholder="Your Name"
          className="col-span-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="col-span-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
        />

        <input
          type="text"
          placeholder="Subject"
          className="sm:col-span-2 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="sm:col-span-2 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition resize-none"
        />

        <button
          type="submit"
          className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-black shadow-2xl transition-all active:scale-95"
        >
          Send Message 🚀
        </button>

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
