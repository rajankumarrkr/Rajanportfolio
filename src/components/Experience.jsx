import { FaBriefcase, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experience = [
    {
      role: "Freelance Full Stack Developer",
      period: "2024 | Self-Employed (6 Months - Remote)",
      desc: "Delivered 5+ production-level full-stack web applications using MERN stack. Built platforms with 1,000+ and 500+ users. Implemented JWT authentication, REST APIs, and optimized MongoDB database. Developed responsive UI using React.js and Tailwind CSS.",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-8 py-20 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Experience
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        A quick journey of my development growth and hands-on work.
      </p>

      {/* Timeline */}
      <div className="relative mt-14 w-full max-w-4xl">

        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

        {experience.map((exp, idx) => (
          <div
            key={idx}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Icon */}
            <div className="bg-white shadow-lg rounded-full p-4 z-10">
              {exp.icon}
            </div>

            {/* Card */}
            <div
              className={`bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-md border border-blue-100 max-w-xs md:max-w-md mt-6 md:mt-0 ${
                idx % 2 === 0 ? "md:ml-10" : "md:mr-10"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>

              <p className="text-blue-600 text-sm font-medium mt-1">
                {exp.period}
              </p>

              <p className="text-gray-600 text-sm mt-3">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
