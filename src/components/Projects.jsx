const Projects = () => {
  const projects = [
    {
      title: "Coursify – Full Stack LMS",
      desc: "Course platform with authentication & role-based access, course enrollment, student dashboard, and optimized backend queries.",
      highlights: [
        "Authentication & role-based access",
        "Course enrollment & dashboard",
        "Responsive UI with React + Tailwind",
        "Optimized backend & queries",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      live: "https://course-hub-pied.vercel.app/",
      github: "https://github.com/rajankumarrkr/CourseHub",
    },
    {
      title: "TravelMate – Trip Planning App",
      desc: "Full-stack MERN trip planning app with JWT authentication, dynamic itinerary generation, and expense tracking with category aggregation.",
      highlights: [
        "JWT authentication",
        "Dynamic itinerary generation",
        "Expense tracking & category aggregation",
        "Controller–Service–Model architecture",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Axios"],
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      live: "https://travel-mate-mu-five.vercel.app/",
      github: "https://github.com/rajankumarrkr/TravelMate",
    },
    {
      title: "ShopKart – MERN E-commerce",
      desc: "Full-featured e-commerce platform with cart & checkout, JWT authentication, admin dashboard, and responsive UI.",
      highlights: [
        "Cart & checkout flow",
        "JWT authentication + admin dashboard",
        "Responsive UI & performance optimization",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      live: "https://shopkart-topaz.vercel.app/",
      github: "https://github.com/rajankumarrkr/Shopkart",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Projects
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        A showcase of real-world projects built with MERN stack and modern UI practices.
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 w-full max-w-7xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group rounded-2xl overflow-hidden shadow-xl border border-blue-100 backdrop-blur-lg bg-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              {/* Title Overlay */}
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition">
                {project.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-6">{project.desc}</p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                <a
                  href={project.live}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
