import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Target, Lightbulb, Users, Rocket, Award, Heart, Zap, CheckCircle2, Linkedin, Twitter, Globe, BarChart3, Layers, Code2 } from 'lucide-react';

// --- HELPER: SPOTLIGHT CARD ---
const SpotlightCard = ({ children, className = "", color = "rgba(139,92,246,0.15)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-gray-100 bg-white overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- HELPER: ANIMATED COUNTER ---
const Counter = ({ value, label, icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-50 text-center relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-light/50 rounded-bl-full -mr-4 -mt-4" />
    <div className="w-12 h-12 mx-auto bg-brand-light text-brand-primary rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-4xl font-extrabold text-brand-dark mb-1">{value}</h3>
    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</p>
  </motion.div>
);

const About = () => {
  // --- 3D TILT LOGIC FOR THE NEW IMAGE SECTION ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };


  return (
    <div className="pt-20 bg-gray-50/30 min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-28 bg-[#0f0518] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-neon text-xs font-bold tracking-[0.2em] mb-6 inline-block backdrop-blur-md">
              SINCE 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              Building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-purple-300 to-white">
                Tomorrow's Leaders
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              From TAS Innovation to <strong>Combo Square</strong>. We are the bridge between academic learning and industry reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY (Timeline & ULTRA PREMIUM 3D IMAGE) */}
      <section className="py-24 relative bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Timeline Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-brand-light space-y-12"
            >
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-10 h-10 bg-brand-primary border-4 border-white rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  2024
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Born from TAS Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Started as a passion project to blend technology, design, and education. We realized students needed more than just theory.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-10 h-10 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center text-brand-primary text-xs font-bold shadow-lg">
                  NOW
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">The Innovation Hub</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rebranded as Combo Square. Serving 50+ clients and empowering thousands of students with skills that actually matter.
                </p>
              </div>
            </motion.div>

            {/* Right: ULTRA PREMIUM 3D INTERACTIVE IMAGE */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
               className="relative perspective-1000 group"
            >
               {/* Back Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-[40px] transform translate-z-[-50px] scale-105 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
               
               {/* Main Image Container */}
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-white transform translate-z-[20px]">
                 <img 
                   src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                   alt="Modern Tech Innovation Hub" 
                   className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                 />
                 {/* Image Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518]/80 via-transparent to-transparent"></div>
               </div>

               {/* Floating Glass Badge 1 (Top Left) */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 -left-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 transform translate-z-[60px]"
               >
                 <div className="bg-brand-primary p-2 rounded-lg text-white"><Rocket size={20}/></div>
                 <div>
                   <h4 className="font-bold text-brand-dark">50+ Startups</h4>
                   <p className="text-xs text-gray-600">Accelerated globally</p>
                 </div>
               </motion.div>

               {/* Floating Glass Badge 2 (Bottom Right) */}
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-10 -right-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 transform translate-z-[80px]"
               >
                 <div className="bg-brand-secondary p-2 rounded-lg text-white"><Users size={20}/></div>
                 <div>
                   <h4 className="font-bold text-brand-dark">2,500+ Community</h4>
                   <p className="text-xs text-gray-600">Active Learners</p>
                 </div>
               </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. OUR IMPACT */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-white/60">Real results reflecting our commitment to excellence.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter icon={<Users size={24} />} value="2,500+" label="Students Trained" />
            <Counter icon={<Globe size={24} />} value="30+" label="Colleges Partnered" />
            <Counter icon={<CheckCircle2 size={24} />} value="100+" label="Projects Delivered" />
            <Counter icon={<Rocket size={24} />} value="50+" label="Startups Promoted" />
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <SpotlightCard className="rounded-3xl p-10 shadow-xl border-gray-100" color="rgba(168, 85, 247, 0.15)">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the bridge between students, startups, and industries through creativity and technology.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-3xl p-10 shadow-xl border-gray-100" color="rgba(59, 130, 246, 0.15)">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver impactful branding, digital marketing, and skill development programs while building tomorrow's leaders.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Our Approach</h2>
            <p className="text-gray-600">Every project begins with innovation and ends with measurable results.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 z-0"></div>
            {[
              { title: "Idea", icon: <Lightbulb />, desc: "Understanding the vision" },
              { title: "Strategy", icon: <Layers />, desc: "Crafting a roadmap" },
              { title: "Execution", icon: <Code2 />, desc: "Precision & Creativity" },
              { title: "Growth", icon: <BarChart3 />, desc: "Scalable Success" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 bg-white p-6 rounded-2xl shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-brand-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-brand-primary/30 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CSR / SOCIAL IMPACT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[40px] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Heart className="fill-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Social Impact & CSR</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                We support students, artisans, and communities by creating opportunities, preserving creativity, and building digital platforms for growth. We believe in technology for good.
              </p>
              <button className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors hover:shadow-xl">
                Join Our Initiatives
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-16">Meet The Visionaries</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Founder 1 */}
            <SpotlightCard className="rounded-3xl p-8 hover:shadow-2xl transition-all border-gray-100 bg-white">
              <div className="w-28 h-28 mx-auto bg-gray-50 rounded-full mb-6 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <Users size={40} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Ahamad Thowfeek B</h3>
              <p className="text-brand-primary font-bold text-xs uppercase tracking-wide mb-4">Founder & CEO</p>
              <p className="text-gray-500 text-sm mb-6">Visionary leader in branding & education.</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <Linkedin size={18} className="hover:text-brand-primary cursor-pointer"/>
                <Twitter size={18} className="hover:text-brand-primary cursor-pointer"/>
              </div>
            </SpotlightCard>

            {/* Founder 2 */}
            <SpotlightCard className="rounded-3xl p-8 hover:shadow-2xl transition-all border-gray-100 bg-white">
               <div className="w-28 h-28 mx-auto bg-gray-50 rounded-full mb-6 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <Users size={40} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Nazneen A</h3>
              <p className="text-brand-primary font-bold text-xs uppercase tracking-wide mb-4">Co-Founder & Creative Dir.</p>
              <p className="text-gray-500 text-sm mb-6">Driving force behind design & creativity.</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <Linkedin size={18} className="hover:text-brand-primary cursor-pointer"/>
                <Twitter size={18} className="hover:text-brand-primary cursor-pointer"/>
              </div>
            </SpotlightCard>

            {/* Core Team */}
            <SpotlightCard className="rounded-3xl p-8 hover:shadow-2xl transition-all border-gray-100 bg-white">
               <div className="w-28 h-28 mx-auto bg-gray-50 rounded-full mb-6 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <Users size={40} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Core Team</h3>
              <p className="text-brand-primary font-bold text-xs uppercase tracking-wide mb-4">Specialists & Mentors</p>
              <p className="text-gray-500 text-sm mb-6">Experts in AI, UI/UX, and Innovation.</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <Linkedin size={18} className="hover:text-brand-primary cursor-pointer"/>
                <Globe size={18} className="hover:text-brand-primary cursor-pointer"/>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;