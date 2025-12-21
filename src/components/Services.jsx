import { FaLaptopCode, FaServer, FaPaintBrush, FaCloud } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      desc: "End-to-end development using MERN stack to build fast, scalable, and secure applications.",
      icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
    },
    {
      title: "Frontend UI/UX Development",
      desc: "Modern, responsive, and meaningful user interfaces using React & Tailwind.",
      icon: <FaPaintBrush className="text-pink-500 text-4xl" />,
    },
    {
      title: "Backend & API Development",
      desc: "REST APIs, authentication, and database modeling using Node, Express & MongoDB.",
      icon: <FaServer className="text-green-600 text-4xl" />,
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploying and managing applications using Vercel, Render, and cloud platforms.",
      icon: <FaCloud className="text-purple-600 text-4xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen px-8 py-20 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Services
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        I offer professional development services tailored to client needs and modern standards.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 w-full max-w-7xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-blue-100 hover:border-blue-300 transition-all hover:-translate-y-2 cursor-pointer group"
          >
            <div className="flex justify-center">{service.icon}</div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center group-hover:text-blue-600 transition">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-600 text-sm text-center">
              {service.desc}
            </p>

            {/* Learn More Button */}
            <div className="mt-6 flex justify-center">
              <button className="px-5 py-2 text-blue-600 border border-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
