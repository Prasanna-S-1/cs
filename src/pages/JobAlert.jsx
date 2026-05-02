import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase, MapPin, ExternalLink, MessageCircle,
  ChevronRight, Bell, TrendingUp, Users, Building2,
  Zap, ArrowRight, Star
} from "lucide-react";

// ── MNC COMPANIES ────────────────────────────────────────────
const MNC_COMPANIES = [
  { name: "Google",       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",           careers: "https://careers.google.com" },
  { name: "Microsoft",    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",   careers: "https://careers.microsoft.com" },
  { name: "Amazon",       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",                 careers: "https://amazon.jobs" },
  { name: "TCS",          logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", careers: "https://www.tcs.com/careers" },
  { name: "Infosys",      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",                careers: "https://www.infosys.com/careers" },
  { name: "Wipro",        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", careers: "https://careers.wipro.com" },
  { name: "HCL",          logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/HCL_Technologies_logo_2021.png",  careers: "https://www.hcltech.com/careers" },
  { name: "Accenture",    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",                   careers: "https://www.accenture.com/in-en/careers" },
  { name: "IBM",          logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",                    careers: "https://www.ibm.com/employment" },
  { name: "Cognizant",    logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Cognizant_logo_2022.svg",         careers: "https://careers.cognizant.com" },
  { name: "Capgemini",    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Capgemini_logo.svg",              careers: "https://www.capgemini.com/in-en/careers" },
  { name: "Tech Mahindra",logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Tech_Mahindra_New_Logo.png",     careers: "https://careers.techmahindra.com" },
  { name: "Deloitte",     logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",                   careers: "https://www2.deloitte.com/in/en/careers.html" },
  { name: "Oracle",       logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",                careers: "https://www.oracle.com/in/corporate/careers" },
  { name: "SAP",          logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",              careers: "https://jobs.sap.com" },
];

const ALL_COMPANIES = [
  ...MNC_COMPANIES,
  { name: "Zoho",         careers: "https://careers.zohocorp.com" },
  { name: "Freshworks",   careers: "https://www.freshworks.com/company/careers" },
  { name: "Hexaware",     careers: "https://hexaware.com/careers" },
  { name: "Mphasis",      careers: "https://careers.mphasis.com" },
  { name: "L&T Infotech", careers: "https://www.ltimindtree.com/careers" },
  { name: "Mindtree",     careers: "https://www.ltimindtree.com/careers" },
  { name: "KPMG",         careers: "https://home.kpmg/in/en/home/careers.html" },
  { name: "EY",           careers: "https://www.ey.com/en_in/careers" },
  { name: "PwC",          careers: "https://www.pwc.in/careers.html" },
  { name: "Gartner",      careers: "https://jobs.gartner.com" },
  { name: "Adobe",        careers: "https://www.adobe.com/careers.html" },
  { name: "Salesforce",   careers: "https://salesforce.com/company/careers" },
  { name: "VMware",       careers: "https://careers.vmware.com" },
  { name: "Dell",         careers: "https://jobs.dell.com" },
  { name: "HP",           careers: "https://careers.hpe.com" },
  { name: "Cisco",        careers: "https://jobs.cisco.com" },
  { name: "Intel",        careers: "https://jobs.intel.com" },
  { name: "Qualcomm",     careers: "https://www.qualcomm.com/company/careers" },
  { name: "PayPal",       careers: "https://jobs.paypal.com" },
  { name: "Uber",         careers: "https://www.uber.com/in/en/careers" },
  { name: "Swiggy",       careers: "https://careers.swiggy.com" },
  { name: "Zomato",       careers: "https://www.zomato.com/careers" },
  { name: "Flipkart",     careers: "https://www.flipkartcareers.com" },
  { name: "PhonePe",      careers: "https://careers.phonepe.com" },
  { name: "BYJU'S",       careers: "https://byjus.com/careers" },
  { name: "Paytm",        careers: "https://paytm.com/careers" },
  { name: "MakeMyTrip",   careers: "https://careers.makemytrip.com" },
  { name: "Naukri",       careers: "https://www.infoedge.in/careers.htm" },
  { name: "Razorpay",     careers: "https://razorpay.com/jobs" },
  { name: "HDFC Bank",    careers: "https://www.hdfcbank.com/personal/about-us/careers" },
  { name: "ICICI Bank",   careers: "https://www.icicibank.com/careers" },
  { name: "Bajaj Finserv",careers: "https://www.bajajfinserv.in/careers" },
  { name: "Titan",        careers: "https://www.titan.co.in/corporate/careers.html" },
  { name: "Tata Motors",  careers: "https://www.tatamotors.com/people/careers" },
  { name: "Mahindra",     careers: "https://careers.mahindra.com" },
];

const HIRING_SERIES = [
  {
    series: "#31",
    companies: ["Google", "Microsoft", "Amazon"],
    roles: "SDE · Data Analyst · Cloud Engineer",
    location: "Bangalore · Hyderabad · Remote",
    links: ["https://careers.google.com", "https://careers.microsoft.com", "https://amazon.jobs"],
    badge: " Hot",
    badgeColor: "from-orange-500 to-red-500",
  },
  {
    series: "#30",
    companies: ["TCS", "Infosys", "Wipro"],
    roles: "Software Engineer · System Analyst · DevOps",
    location: "Chennai · Pune · Bengaluru",
    links: ["https://www.tcs.com/careers", "https://www.infosys.com/careers", "https://careers.wipro.com"],
    badge: " New",
    badgeColor: "from-yellow-500 to-orange-500",
  },
  {
    series: "#29",
    companies: ["Accenture", "Capgemini", "Deloitte"],
    roles: "Consultant · Business Analyst · Tech Lead",
    location: "Mumbai · Delhi · Hyderabad",
    links: ["https://www.accenture.com/in-en/careers", "https://www.capgemini.com/in-en/careers", "https://www2.deloitte.com/in/en/careers.html"],
    badge: " Featured",
    badgeColor: "from-purple-500 to-violet-500",
  },
  {
    series: "#28",
    companies: ["Zoho", "Freshworks", "Razorpay"],
    roles: "Frontend Dev · Product Manager · SDE-2",
    location: "Chennai · Bengaluru · Remote",
    links: ["https://careers.zohocorp.com", "https://www.freshworks.com/company/careers", "https://razorpay.com/jobs"],
    badge: " Trending",
    badgeColor: "from-blue-500 to-cyan-500",
  },
  {
    series: "#27",
    companies: ["IBM", "Oracle", "SAP"],
    roles: "Data Engineer · Cloud Architect · ERP Consultant",
    location: "Bengaluru · Hyderabad · Gurgaon",
    links: ["https://www.ibm.com/employment", "https://www.oracle.com/in/corporate/careers", "https://jobs.sap.com"],
    badge: " Premium",
    badgeColor: "from-green-500 to-emerald-500",
  },
  {
    series: "#26",
    companies: ["Swiggy", "Zomato", "PhonePe"],
    roles: "Backend Engineer · ML Engineer · iOS Dev",
    location: "Bengaluru · Gurgaon · Remote",
    links: ["https://careers.swiggy.com", "https://www.zomato.com/careers", "https://careers.phonepe.com"],
    badge: " Startup",
    badgeColor: "from-pink-500 to-rose-500",
  },
];

const Counter = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl sm:text-6xl font-black text-white mb-2">
        {count.toLocaleString()}<span className="text-yellow-400">{suffix}</span>
      </div>
      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
};

const JobAlert = () => {
  return (
    <div className="bg-[#070410] text-white min-h-screen overflow-x-hidden font-sans">

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-600/10 rounded-full blur-[200px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-bold mb-10">
              <Bell size={14} className="animate-bounce" /> Live Job Alerts · Updated Daily
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl xl:text-8xl font-black leading-[1.05] mb-6"
          >
            Daily{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Hiring
              </span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">
              Alerts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Get real job opportunities + learn{" "}
            <span className="text-white font-semibold">how to get selected</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <a
              href="#latest-jobs"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-base shadow-2xl shadow-violet-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <Briefcase size={18} /> View Latest Jobs
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918072877622"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-black text-base shadow-2xl shadow-green-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} /> Join WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-6">Hiring from top companies</p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070410] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070410] to-transparent z-10" />
              <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {[...MNC_COMPANIES, ...MNC_COMPANIES].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity">
                    <img src={c.logo} alt={c.name} className="h-7 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — STATS */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-purple-900/5 to-violet-900/10" />
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
            <Counter target={1000}  suffix="+" label="Jobs Posted" />
            <Counter target={50}    suffix="+" label="Companies" />
            <Counter target={10000} suffix="+" label="Students Reached" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — LATEST HIRING SERIES */}
      <section id="latest-jobs" className="py-24 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-5">
            <Zap size={12} /> Latest Hiring Series
          </span>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Opportunities</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg">Fresh hiring drives from top MNCs — updated weekly by our team</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIRING_SERIES.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col gap-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-white/20 group-hover:text-white/30 transition-colors">{job.series}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r ${job.badgeColor} text-white`}>
                  {job.badge}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-2">Companies</p>
                <div className="flex flex-wrap gap-2">
                  {job.companies.map((c, ci) => (
                    <span key={ci} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-1">Roles</p>
                <p className="text-gray-300 text-sm font-semibold">{job.roles}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <MapPin size={12} className="text-violet-400" />
                {job.location}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
                {job.companies.map((c, ci) => (
                  <a
                    key={ci}
                    href={job.links[ci]}
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 hover:border-violet-500/40 text-violet-300 text-xs font-bold transition-all"
                  >
                    {c} <ExternalLink size={10} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-black mb-2">Explore All <span className="text-violet-400">50 Companies</span></h3>
          <p className="text-gray-500 text-sm mb-8">Direct links to official career pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {ALL_COMPANIES.map((c, i) => (
              <a
                key={i}
                href={c.careers}
                target="_blank" rel="noreferrer"
                className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all"
              >
                <span className="text-sm text-gray-300 group-hover:text-white font-semibold truncate">{c.name}</span>
                <ExternalLink size={12} className="text-gray-600 group-hover:text-violet-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — ABOUT */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/15 via-transparent to-blue-900/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest mb-10">
                <Star size={12} className="text-yellow-400" /> Our Mission
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] mb-8">
                We don't just{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">share jobs.</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 6" fill="none">
                    <path d="M0 4 Q150 0 300 4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="text-2xl sm:text-3xl text-gray-300 font-light leading-relaxed mb-16">
                We help you understand{" "}
                <span className="text-white font-bold">how companies hire</span>{" "}
                and how to{" "}
                <span className="text-violet-400 font-bold">prepare for them.</span>
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, title: "Hiring Insights",   desc: "We break down what companies actually look for in candidates" },
                  { icon: Building2,  title: "Company Research",  desc: "Deep dives into company culture, interview process & salary" },
                  { icon: Users,      title: "Community Support", desc: "10,000+ students learning and growing together every day" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 text-left hover:border-violet-500/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-violet-400" />
                      </div>
                      <h3 className="font-black text-white mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-blue-600/20 border border-violet-500/20 rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-bold mb-8">
              <Bell size={14} /> Don't miss out
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Want daily{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">job updates?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
              Join 10,000+ students getting fresh job alerts, hiring tips and interview prep every day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918072877622"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-black text-base shadow-2xl shadow-green-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={20} /> Join WhatsApp Group
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-black text-base transition-all hover:scale-105 active:scale-95"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default JobAlert;