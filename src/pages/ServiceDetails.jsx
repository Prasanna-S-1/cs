import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "IT Services",
    desc: "Full Stack Development, AI & ML, Cloud, and Cybersecurity solutions.",

    about:
      "Our IT Services program is designed to transform students into industry-ready developers. With real-time projects, modern tools, and hands-on coding, learners gain deep technical knowledge and practical exposure.",

    domains: [
      {
        title: "Full Stack Development",
        desc: "Build complete web applications.",
        stack: ["React", "Node.js", "MongoDB", "Express"],
        duration: "45 Days",
        project: "E-commerce Web App",
      },
      {
        title: "AI & Machine Learning",
        desc: "Develop intelligent systems.",
        stack: ["Python", "TensorFlow", "Pandas"],
        duration: "40 Days",
        project: "Prediction System",
      },
      {
        title: "Cloud & DevOps",
        desc: "Deploy scalable apps.",
        stack: ["AWS", "Docker", "CI/CD"],
        duration: "30 Days",
        project: "Cloud Deployment",
      },
      {
        title: "Cybersecurity",
        desc: "Secure applications.",
        stack: ["Kali Linux", "Encryption", "Auth"],
        duration: "25 Days",
        project: "Secure Login System",
      },
    ],
  },

  {
    title: "Core Domains",
    desc: "IoT, Robotics, Embedded Systems.",

    about:
      "Core Domains provide strong hardware and automation knowledge through practical learning. Students build real-world systems and gain hands-on experience with industry tools.",

    domains: [
      {
        title: "IoT Systems",
        desc: "Smart devices with sensors.",
        stack: ["Arduino", "Sensors", "Cloud"],
        duration: "30 Days",
        project: "Smart Home System",
      },
      {
        title: "Robotics",
        desc: "Automation with robots.",
        stack: ["Python", "Motors", "Controllers"],
        duration: "35 Days",
        project: "Line Follower Robot",
      },
      {
        title: "Embedded Systems",
        desc: "Hardware-based solutions.",
        stack: ["Arduino", "C", "Microcontrollers"],
        duration: "30 Days",
        project: "Embedded Device",
      },
      {
        title: "Automation",
        desc: "Industrial automation.",
        stack: ["PLC", "Sensors", "Controllers"],
        duration: "28 Days",
        project: "Automation System",
      },
    ],
  },

  {
    title: "Creative Services",
    desc: "Design, Branding, and Marketing.",

    about:
      "Creative Services focus on building strong brand identity and digital presence. Students learn design tools, marketing strategies, and real-world content creation.",

    domains: [
      {
        title: "UI/UX Design",
        desc: "Design modern interfaces.",
        stack: ["Figma", "Adobe XD"],
        duration: "20 Days",
        project: "Mobile App UI",
      },
      {
        title: "Digital Marketing",
        desc: "Online growth strategies.",
        stack: ["SEO", "Google Ads", "Analytics"],
        duration: "25 Days",
        project: "Marketing Campaign",
      },
      {
        title: "Branding",
        desc: "Build identity.",
        stack: ["Photoshop", "Illustrator"],
        duration: "20 Days",
        project: "Brand Kit",
      },
      {
        title: "Content Creation",
        desc: "Engaging content.",
        stack: ["Premiere Pro", "Canva"],
        duration: "18 Days",
        project: "Video Campaign",
      },
    ],
  },

  {
    title: "Training & Hackathons",
    desc: "Skill-based learning and competitions.",

    about:
      "Training programs are focused on practical learning, teamwork, and real-world problem solving. Hackathons enhance creativity and innovation under pressure.",

    domains: [
      {
        title: "Internships",
        desc: "Real-world experience.",
        stack: ["Projects", "Team Work"],
        duration: "60 Days",
        project: "Live Industry Project",
      },
      {
        title: "Workshops",
        desc: "Hands-on sessions.",
        stack: ["Tools", "Practice"],
        duration: "10 Days",
        project: "Mini Projects",
      },
      {
        title: "Corporate Training",
        desc: "Industry training.",
        stack: ["Professional Tools"],
        duration: "30 Days",
        project: "Case Studies",
      },
      {
        title: "Hackathons",
        desc: "Problem solving.",
        stack: ["Innovation", "Coding"],
        duration: "2 Days",
        project: "Prototype Build",
      },
    ],
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services[id];
  const [openIndex, setOpenIndex] = useState(null);

  if (!service) return <div className="p-10">Service not found</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-purple-600 mb-2">
            {service.title}
          </h1>
          <p className="text-gray-600">{service.desc}</p>
        </div>

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">
            About {service.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {service.about}
          </p>
        </motion.div>

        {/* ACCORDION */}
        <div className="space-y-5">
          {service.domains.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border bg-white shadow-md overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <div>
                  <h3 className="font-bold text-lg text-purple-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>

                <span className="text-xl font-bold">
                  {openIndex === i ? "-" : "+"}
                </span>
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5"
                  >
                    <div className="bg-purple-50 rounded-xl p-4 space-y-3">

                      <p>
                        <span className="font-semibold">
                          Tech Stack:
                        </span>{" "}
                        {item.stack.join(", ")}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Duration:
                        </span>{" "}
                        {item.duration}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Project:
                        </span>{" "}
                        {item.project}
                      </p>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;