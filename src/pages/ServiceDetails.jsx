import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "IT Services",
    desc: "Full Stack Development, AI & ML, Cloud, and Cybersecurity solutions.",

    about:
      "IT Services focus on building scalable applications and preparing students for real-world software development roles.",

    domains: [
      {
        title: "Full Stack Development",
        content: "Build complete web apps using React, Node.js, and databases.",
      },
      {
        title: "AI & Machine Learning",
        content: "Develop intelligent systems using data and algorithms.",
      },
      {
        title: "Cloud & DevOps",
        content: "Deploy apps using AWS and CI/CD pipelines.",
      },
      {
        title: "Cybersecurity",
        content: "Secure applications and protect sensitive data.",
      },
    ],

    courses: [
      "React JS",
      "Node JS",
      "MongoDB",
      "AWS",
      "Docker",
      "API Development",
    ],
  },

  {
    title: "Core Domains",
    desc: "IoT, Robotics, and Embedded Systems learning.",

    about:
      "Core Domains provide hands-on experience in hardware and automation technologies with real-time projects.",

    domains: [
      {
        title: "IoT Systems",
        content: "Build smart devices using sensors and cloud.",
      },
      {
        title: "Robotics",
        content: "Create automation systems and robots.",
      },
      {
        title: "Embedded Systems",
        content: "Work with Arduino and Raspberry Pi.",
      },
      {
        title: "Automation",
        content: "Implement real-time industrial automation.",
      },
    ],

    courses: [
      "Arduino",
      "Raspberry Pi",
      "Embedded C",
      "IoT Cloud",
      "Sensors",
    ],
  },

  {
    title: "Creative Services",
    desc: "Design, Branding, and Marketing solutions.",

    about:
      "Creative Services help businesses grow through design, marketing, and digital storytelling.",

    domains: [
      {
        title: "UI/UX Design",
        content: "Design user-friendly digital experiences.",
      },
      {
        title: "Digital Marketing",
        content: "SEO, ads, and social media growth.",
      },
      {
        title: "Branding",
        content: "Build strong brand identity.",
      },
      {
        title: "Content Creation",
        content: "Create engaging digital content.",
      },
    ],

    courses: [
      "Figma",
      "Photoshop",
      "SEO",
      "Social Media Marketing",
      "Video Editing",
    ],
  },

  {
    title: "Training & Hackathons",
    desc: "Skill development with real-world exposure.",

    about:
      "Training programs focus on making students job-ready through practical learning and competitions.",

    domains: [
      {
        title: "Internships",
        content: "Work on real-time projects.",
      },
      {
        title: "Workshops",
        content: "Hands-on learning sessions.",
      },
      {
        title: "Corporate Training",
        content: "Industry-level training.",
      },
      {
        title: "Hackathons",
        content: "Solve real-world challenges.",
      },
    ],

    courses: [
      "Project Building",
      "Team Collaboration",
      "Problem Solving",
      "Presentation Skills",
    ],
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) return <div className="p-10">Service not found</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-black text-purple-600 mb-3">
            {service.title}
          </h1>
          <p className="text-gray-600">{service.desc}</p>
        </motion.div>

        {/* ABOUT */}
        <div className="mb-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            {service.about}
          </p>
        </div>

        {/* DOMAINS */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {service.domains.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-purple-50 rounded-xl border"
            >
              <h3 className="font-bold text-purple-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* COURSES */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Courses</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {service.courses.map((c, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;