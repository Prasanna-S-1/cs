import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, XCircle, Loader2, Send, Upload, X,
  Briefcase, BookOpen, ChevronDown, Star, Zap, Users, Award
} from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwX_xr8F_dbTCOejZjGjRO9C5cyTONohh6XNifv8DAGqV-XVzTl9bZuWMISF2Mr8-UMmQ/exec";

const DOMAINS = [
  "Full Stack Development",
  "Frontend Development",
  "Data Science",
  "Data Analytics",
  "Artificial Intelligence",
  "UI & UX Designing",
  "IoT & Robotics",
  "Cyber Security",
  "Autocad & Catia",
  "Medical Domains",
];

const DURATIONS = [
  "One Month",
  "Two Months",
  "Three Months",
  "Six Months",
];

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Final Year", "Other"];

const stats = [
  { value: "500+", label: "Students Trained", icon: Users },
  { value: "10+", label: "Domains", icon: Zap },
  { value: "95%", label: "Placement Rate", icon: Star },
  { value: "50+", label: "Certifications", icon: Award },
];

const SelectField = ({ label, name, value, onChange, options, required = true }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-bold text-purple-200">{label}{required && <span className="text-pink-400 ml-1">*</span>}</label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-400 focus:bg-white/10 transition appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-[#1a0b2e]">{`Select ${label}`}</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1a0b2e]">{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
    </div>
  </div>
);

const InputField = ({ label, name, value, onChange, type = "text", placeholder, required = true, pattern, maxLength }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-bold text-purple-200">{label}{required && <span className="text-pink-400 ml-1">*</span>}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      pattern={pattern}
      maxLength={maxLength}
      className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition"
    />
  </div>
);

const InternshipCourses = () => {
  const [lookingFor, setLookingFor] = useState(""); // "Internship" | "Courses" | ""
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [status, setStatus] = useState("idle");
  const fileRef = useRef();

  const [form, setForm] = useState({
    name: "", email: "", mobile: "", college: "",
    year: "", department: "", domain: "", duration: "", portfolio: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size < 2 * 1024) {
      setResumeError("Resume must be at least 2 KB.");
      setResumeFile(null);
      return;
    }
    setResumeError("");
    setResumeFile(file);
  };

  const toBase64 = (file) =>
    new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result.split(",")[1]);
      r.onerror = rej;
      r.readAsDataURL(file);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!lookingFor) return;
    if (!resumeFile) { setResumeError("Please upload your resume."); return; }
    setStatus("sending");

    try {
      let resumeBase64 = "";
      let resumeName = "";
      if (resumeFile) {
        resumeBase64 = await toBase64(resumeFile);
        resumeName = resumeFile.name;
      }

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          lookingFor,
          resume: resumeBase64,
          resumeName,
          type: lookingFor === "Internship" ? "internship" : "courses",
        }),
      });

      setStatus("success");
      setForm({ name: "", email: "", mobile: "", college: "", year: "", department: "", domain: "", duration: "", portfolio: "" });
      setLookingFor("");
      setResumeFile(null);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#0f0518] text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[200px]" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-bold mb-8">
              <Briefcase size={14} /> Internship & Courses
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <BookOpen size={14} /> Learn · Build · Launch
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
              Build Your{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400">
                  Future
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q100 0 200 6" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              With Us
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Get industry-ready with real projects, mentor guidance, and a certificate that employers trust.
              Apply for an internship or enroll in a course — all in one place.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
                  >
                    <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-black text-white">{s.value}</div>
                    <div className="text-xs text-gray-400 font-semibold">{s.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD FORM ─────────────────────────────────────────── */}
      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Form Card */}
          <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/20 text-purple-300 text-sm font-bold mb-4">
                  ✨ Apply Now
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-3">
                  Start Your <span className="text-purple-400">Application</span>
                </h2>
                <p className="text-gray-400 text-sm">All fields are mandatory except Portfolio Link</p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <InputField label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />

                {/* Email */}
                <InputField label="Email ID" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />

                {/* Mobile */}
                <InputField label="Contact Number" name="mobile" type="tel" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile number" pattern="[0-9]{10}" maxLength={10} />

                {/* College */}
                <InputField label="College Name" name="college" value={form.college} onChange={handleChange} placeholder="Your college / university" />

                {/* Year */}
                <SelectField label="Current Year" name="year" value={form.year} onChange={handleChange} options={YEARS} />

                {/* Department */}
                <InputField label="Department" name="department" value={form.department} onChange={handleChange} placeholder="e.g. Computer Science, ECE" />

                {/* Looking For — full width toggle */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-bold text-purple-200">
                    Looking For <span className="text-pink-400 ml-1">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Internship", "Courses"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setLookingFor(opt)}
                        className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm border transition-all ${
                          lookingFor === opt
                            ? "bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-purple-400/50 hover:bg-white/10"
                        }`}
                      >
                        {opt === "Internship" ? <Briefcase size={15} /> : <BookOpen size={15} />}
                        {opt}
                      </button>
                    ))}
                  </div>
                  {!lookingFor && status === "sending" && (
                    <p className="text-pink-400 text-xs mt-1">Please select Internship or Courses</p>
                  )}
                </div>

                {/* Domain */}
                <div className="sm:col-span-2">
                  <SelectField label="Domain You're Looking For" name="domain" value={form.domain} onChange={handleChange} options={DOMAINS} />
                </div>

                {/* Duration */}
                <div className="sm:col-span-2">
                  <SelectField label="How Many Months?" name="duration" value={form.duration} onChange={handleChange} options={DURATIONS} />
                </div>

                {/* Resume Upload */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-purple-200">
                    Upload Your Resume <span className="text-pink-400 ml-1">*</span>
                    <span className="text-gray-500 font-normal ml-2">(minimum 2 KB)</span>
                  </label>
                  <div
                    onClick={() => fileRef.current.click()}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                      resumeFile
                        ? "border-green-500/50 bg-green-500/5"
                        : "border-white/10 bg-white/5 hover:border-purple-400/50 hover:bg-white/10"
                    }`}
                  >
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="hidden"
                    />
                    {resumeFile ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                        <span className="text-green-400 text-sm font-bold flex-1 truncate">{resumeFile.name}</span>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setResumeFile(null); fileRef.current.value = ""; }}
                          className="text-gray-400 hover:text-red-400 transition"
                        >
                          <X size={16} />
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 text-purple-400 shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300 font-semibold">Click to upload resume</p>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX accepted</p>
                        </div>
                      </>
                    )}
                  </div>
                  {resumeError && <p className="text-pink-400 text-xs">{resumeError}</p>}
                </div>

                {/* Portfolio */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-purple-200">
                    Your Portfolio Link
                    <span className="text-gray-500 font-normal ml-2">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={handleChange}
                    placeholder="https://yourportfolio.com"
                    className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-base shadow-2xl shadow-purple-500/30 transition-all active:scale-95"
                >
                  {status === "sending" ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Submit Application</>
                  )}
                </button>

                {/* Success */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="sm:col-span-2 flex items-start gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-black">Application Submitted Successfully! 🎉</p>
                        <p className="text-sm text-green-300/80 mt-1">Our team will review your application and reach out within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="sm:col-span-2 flex items-center gap-3 px-5 py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                    >
                      <XCircle className="w-5 h-5 shrink-0" />
                      <p className="font-bold">Something went wrong. Please try again.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-500 text-xs">
            {["🔒 Your data is safe", "📧 Response within 24hrs", "✅ Verified mentors", "🏆 Certificate on completion"].map((t) => (
              <span key={t} className="font-semibold">{t}</span>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default InternshipCourses;