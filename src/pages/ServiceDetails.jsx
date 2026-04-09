import { useParams } from "react-router-dom";

const services = [
  {
    title: "IT Services",
    desc: "Full Stack Development, AI & ML, Data Analytics, Cloud Computing, and Cybersecurity solutions.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    points: [
      "Full Stack Web & App Development",
      "AI & Machine Learning Solutions",
      "Cloud & DevOps Integration",
      "Cybersecurity & Data Protection",
    ],
  },
  {
    title: "Core Domains",
    desc: "IoT, Robotics, Embedded Systems, and Automation programs.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    points: [
      "IoT Product Development",
      "Robotics & Automation",
      "Embedded Systems Design",
      "Industry-Based Projects",
    ],
  },
  {
    title: "Creative Services",
    desc: "UI/UX Design, Digital Marketing, Branding, and Video Editing.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    points: [
      "UI/UX Design",
      "Social Media Marketing",
      "Brand Identity",
      "Video Editing & Content Creation",
    ],
  },
  {
    title: "Training & Hackathons",
    desc: "Internships, Workshops, Corporate Training, and Hackathons.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    points: [
      "Internship Programs",
      "Hands-on Workshops",
      "Corporate Training",
      "Hackathons & Events",
    ],
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services[id];

  return (
    <section className="py-16 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-purple-600 mb-4">
            {service?.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {service?.desc}
          </p>
        </div>

        {/* IMAGE */}
        <div className="mb-12">
          <img
            src={service?.image}
            alt={service?.title}
            className="w-full h-[300px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {service?.points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-purple-50 border border-purple-100 shadow-sm"
            >
              <p className="font-semibold text-gray-800">
                ✅ {point}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;