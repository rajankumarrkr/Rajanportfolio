import { FaCertificate, FaMedal } from "react-icons/fa";
import { MdStars } from "react-icons/md";

const Achievements = () => {
  const achievements = [
    {
      title: "Completed MERN Stack Training",
      platform: "Self Learning / Online",
      year: "2024",
      icon: <FaCertificate className="text-blue-600 text-4xl" />,
    },
    {
      title: "Built 3+ Real-World Projects",
      platform: "Portfolio & Freelance",
      year: "2024",
      icon: <FaMedal className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Frontend Responsive Design Skills",
      platform: "React + Tailwind",
      year: "2023",
      icon: <MdStars className="text-purple-500 text-4xl" />,
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen px-8 py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Achievements & Certifications
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        Highlights of my learning journey, completed training, and milestone accomplishments.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-7xl w-full">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="relative bg-white/60 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
          >
            {/* Ribbon */}
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              {ach.year}
            </span>

            {/* Icon */}
            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
              {ach.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 text-center group-hover:text-blue-600 transition">
              {ach.title}
            </h3>

            {/* Platform */}
            <p className="mt-3 text-gray-600 text-sm text-center">
              {ach.platform}
            </p>

            {/* Badge */}
            <div className="mt-6 flex justify-center">
              <span className="px-4 py-1 text-xs bg-blue-50 text-blue-600 rounded-full shadow-sm">
                Verified Achievement
              </span>
            </div>
          </div>
        ))}

        {/* Placeholder card (if no more achievements yet) */}
        <div className="bg-white/50 border border-dashed border-blue-200 rounded-2xl p-6 flex flex-col justify-center items-center text-gray-500 hover:-translate-y-1 transition cursor-pointer">
          <span className="text-4xl">+</span>
          <p className="text-sm mt-2">Add more achievements later</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
