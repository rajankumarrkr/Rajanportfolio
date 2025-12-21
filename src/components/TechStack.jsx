import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiVercel,
  SiPostman,
  SiRender,
} from "react-icons/si";

const TechStack = () => {
  const stack = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-900 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "GitHub", icon: "💻" },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
    { name: "Render", icon: <SiRender className="text-purple-500 text-4xl" /> },
  ];

  return (
    <section
      id="techstack"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Tech Stack & Tools
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-xl text-lg">
        The modern technologies I use to build responsive, scalable, and full-stack applications.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-14 max-w-6xl w-full">
        {stack.map((tech, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-xl border border-blue-200 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl transition-all group"
          >
            {/* Icon */}
            <div className="group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>

            {/* Name */}
            <p className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600 text-sm">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
