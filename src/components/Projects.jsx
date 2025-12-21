const Projects = () => {
  const projects = [
    {
  title: "Smart Grocery Web App",
  desc: "A MERN-based ecommerce platform enabling online orders, cart checkout, and inventory management.",
  tech: ["React", "Node.js", "MongoDB", "Express"],
  img: "https://images.unsplash.com/photo-1584270354949-1c7a97c189c0",
  live: "#",
  github: "#",
},

    {
      title: "Student Task Manager",
      desc: "Task and notes manager for students with reminders and authentication support.",
      tech: ["React", "Tailwind", "Express", "MongoDB"],
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", // laptop productivity image
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A sleek and responsive MERN portfolio showcasing services, projects, and contact integration.",
      tech: ["React", "Tailwind", "Node.js"],
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3", // design mockup image
      live: "#",
      github: "#",
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
