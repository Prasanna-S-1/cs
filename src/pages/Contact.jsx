import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  MapPin, Phone, Mail, MessageCircle, ArrowUpRight,
  Send, CheckCircle, XCircle, Loader2,
} from "lucide-react";

// 🔧 Replace with YOUR deployed Google Apps Script URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwX_xr8F_dbTCOejZjGjRO9C5cyTONohh6XNifv8DAGqV-XVzTl9bZuWMISF2Mr8-UMmQ/exec";

const contactCards = [
  { title: "Visit Us",   text: "Madipakkam, Chennai",    icon: MapPin,         accent: "purple" },
  { title: "Call Us",    text: "+91 80728 77622",         icon: Phone,          accent: "violet" },
  { title: "Email",      text: "combosquare2@gmail.com",  icon: Mail,           accent: "pink"   },
  { title: "WhatsApp",   text: "Instant Support",         icon: MessageCircle,  accent: "green",
    link: "https://wa.me/918072877622" },
];

// Labels / extra fields shown per source page
const SOURCE_CONFIG = {
  internship: {
    badge: "🚀 Internship Application",
    heading: "Apply for an Internship",
    sub: "Tell us which role interests you and we'll get back within 24 hours.",
    roleLabel: "Internship Role",
    roles: [
      "Full Stack Intern", "Developer Intern", "Digital Marketing Intern",
      "UI/UX Design Intern", "IoT & Robotics Intern", "Content Creation Intern",
    ],
  },
  courses: {
    badge: "📚 Course Enrollment",
    heading: "Enroll in a Course",
    sub: "Select the course you want and we'll send you the details.",
    roleLabel: "Course Name",
    roles: [
      "Full Stack Development", "Digital Marketing", "UI/UX Design",
      "Python & AI", "IoT & Robotics", "Content Creation",
    ],
  },
  hackathon: {
    badge: "🏆 Hackathon Registration",
    heading: "Register for Hackathon 2026",
    sub: "Fill in your team details. Fee: ₹99 per participant.",
    roleLabel: null, // hackathon uses custom fields
    roles: [],
  },
  contact: {
    badge: "💬 Get in Touch",
    heading: "Let's Talk About Your Next Move",
    sub: "Whether you're a student, startup, or institution — our team is ready to guide you.",
    roleLabel: null,
    roles: [],
  },
};

const HACKATHON_CATEGORIES = [
  "Agriculture", "Healthcare", "EdTech", "FinTech", "Cybersecurity",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  // ?source=internship | courses | hackathon  (default: contact)
  const source = SOURCE_CONFIG[searchParams.get("source")] ? searchParams.get("source") : "contact";
  const config = SOURCE_CONFIG[source];

  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "",
    role: "",          // internship role or course name
    teamName: "",      // hackathon
    teamSize: "",      // hackathon
    category: "",      // hackathon
    message: "",
    newsletter: false,
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: source }),
      });
      setStatus("success");
      setFormData({
        name: "", email: "", mobile: "", role: "",
        teamName: "", teamSize: "", category: "", message: "", newsletter: false,
      });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition";

  return (
    <section className="relative bg-gradient-to-br from-[#0f0518] via-[#1a0b2e] to-[#0f0518] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 sm:py-24">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-bold mb-6">
              {config.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-6">
              {config.heading.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-purple-400">
                {config.heading.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed mb-10">
              {config.sub}
            </p>
            <a
              href="https://wa.me/918072877622"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-black font-black shadow-2xl transition-all"
            >
              Chat on WhatsApp <ArrowUpRight />
            </a>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {contactCards.map((item, index) => {
              const Icon = item.icon;
              const accentMap = {
                purple: "hover:border-purple-400 hover:bg-purple-500/10",
                violet: "hover:border-violet-400 hover:bg-violet-500/10",
                pink:   "hover:border-pink-400 hover:bg-pink-500/10",
                green:  "hover:border-green-400 hover:bg-green-500/10",
              };
              const content = (
                <div className={`group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 ${accentMap[item.accent]}`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-3 ${item.accent === "green" ? "text-green-400" : "text-purple-400"} group-hover:scale-110 transition`} />
                  <h3 className="font-black text-sm sm:text-base mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-snug line-clamp-2">{item.text}</p>
                </div>
              );
              return item.link
                ? <a key={index} href={item.link} target="_blank" rel="noreferrer">{content}</a>
                : <div key={index}>{content}</div>;
            })}
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="mt-16 sm:mt-20">
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[120px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm font-bold mb-6">
                  ✉️ Send Message
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-5">
                  Let's Build Something <br />
                  <span className="text-purple-400">Great Together</span>
                </h2>
                <p className="text-gray-300 max-w-md leading-relaxed">
                  {source === "hackathon"
                    ? "Register your team for Combo Square Hackathon 2026. ₹99 per participant. May 2–3, 2026."
                    : source === "internship"
                    ? "Apply for an internship and our team will review your application within 24 hours."
                    : source === "courses"
                    ? "Enroll in a course and we'll send you the syllabus and fee details."
                    : "Have a question about programs, internships, services, or partnerships? Drop us a message."}
                </p>
              </div>

              {/* DYNAMIC FORM */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                {/* Common fields */}
                <input type="text"  name="name"   placeholder="Your Name"   value={formData.name}   onChange={handleChange} required className={`col-span-1 ${inputClass}`} />
                <input type="email" name="email"  placeholder="Your Email"  value={formData.email}  onChange={handleChange} required className={`col-span-1 ${inputClass}`} />
                <input type="tel"   name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required pattern="[0-9]{10}" maxLength={10} className={`sm:col-span-2 ${inputClass}`} />

                {/* Internship / Course role dropdown */}
                {config.roleLabel && (
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className={`sm:col-span-2 ${inputClass} bg-[#1a0b2e]`}
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled className="bg-[#1a0b2e] text-white">{`Select ${config.roleLabel}`}</option>
                    {config.roles.map((r) => <option key={r} value={r} className="bg-[#1a0b2e] text-white">{r}</option>)}
                  </select>
                )}

                {/* Hackathon-specific fields */}
                {source === "hackathon" && (
                  <>
                    <input
                      type="text" name="teamName" placeholder="Team Name"
                      value={formData.teamName} onChange={handleChange} required
                      className={`col-span-1 ${inputClass}`}
                    />
                    <select
                      name="teamSize" value={formData.teamSize} onChange={handleChange} required
                      className={`col-span-1 ${inputClass} bg-[#1a0b2e]`}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-[#1a0b2e] text-white">Team Size</option>
                      {[2,3,4,5,6].map((n) => <option key={n} value={n} className="bg-[#1a0b2e] text-white">{n} Members</option>)}
                    </select>
                    <select
                      name="category" value={formData.category} onChange={handleChange} required
                      className={`sm:col-span-2 ${inputClass} bg-[#1a0b2e]`}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-[#1a0b2e] text-white">Select Category</option>
                      {HACKATHON_CATEGORIES.map((c) => <option key={c} value={c} className="bg-[#1a0b2e] text-white">{c}</option>)}
                    </select>
                  </>
                )}

                <textarea
                  name="message" rows="4" placeholder="Your Message"
                  value={formData.message} onChange={handleChange} required
                  className={`sm:col-span-2 ${inputClass} resize-none`}
                />

                {/* Newsletter — not for hackathon */}
                {source !== "hackathon" && (
                  <label className="sm:col-span-2 flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox" name="newsletter"
                      checked={formData.newsletter} onChange={handleChange}
                      className="w-4 h-4 accent-purple-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-300 group-hover:text-white transition">
                      ✉️ Subscribe to our newsletter for updates &amp; offers
                    </span>
                  </label>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-purple-500 hover:bg-purple-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black shadow-2xl transition-all active:scale-95"
                >
                  {status === "sending" ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" />
                      {source === "hackathon" ? "Register Team" :
                       source === "internship" ? "Submit Application" :
                       source === "courses" ? "Enroll Now" : "Send Message"}
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="sm:col-span-2 flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-bold">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {source === "hackathon"
                      ? "Team registered! Saved to Hackathon Sheet. 🏆"
                      : source === "internship"
                      ? "Application submitted! Saved to Internship Sheet. 🚀"
                      : source === "courses"
                      ? "Enrollment submitted! Saved to Courses Sheet. 📚"
                      : "Message sent! Saved to Google Sheets. 🎉"}
                  </div>
                )}

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

        {/* MAP */}
        <div className="mt-16 sm:mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Combo Square Location"
              src="https://www.google.com/maps?q=Madipakkam%20Chennai&output=embed"
              className="w-full h-[300px] sm:h-[380px] border-0"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Visit Our <span className="text-purple-400">Workspace</span>
            </h2>
            <p className="text-gray-300 max-w-lg leading-relaxed mb-8">
              Located in the heart of Chennai, our innovation hub is where
              students, creators, and businesses collaborate on real-world solutions.
            </p>
            <a
              href="https://maps.google.com?q=Madipakkam+Chennai"
              target="_blank" rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-black font-black hover:bg-purple-600 hover:text-white transition-all"
            >
              Open in Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;