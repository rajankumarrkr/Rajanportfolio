const Blog = () => {
  const blogs = [
    {
      title: "Getting Started with MERN Stack",
      desc: "A beginner-friendly guide to understanding MongoDB, Express, React, and Node.",
      img: "https://images.unsplash.com/photo-1581092334485-8f202a11c13d",
      tag: "MERN",
      date: "Jan 2025",
      link: "#",
    },
    {
      title: "Why Tailwind CSS Makes UI Faster",
      desc: "Learn how utility-first design speeds up development and keeps design consistent.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      tag: "Tailwind",
      date: "Dec 2024",
      link: "#",
    },
    {
      title: "How to Deploy Apps on Vercel & Render",
      desc: "A simple walkthrough of deploying frontend and backend applications for free.",
      img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tag: "Deployment",
      date: "Nov 2024",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className="min-h-screen px-8 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Blog & Articles
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        Sharing my learning journey, tutorials, and insights from web development.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-7xl w-full">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-blue-100 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 cursor-pointer"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                  {blog.tag}
                </span>
                <p className="text-xs text-gray-500">{blog.date}</p>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                {blog.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-6">
                {blog.desc}
              </p>

              <a
                href={blog.link}
                className="inline-block mt-6 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}

        {/* Placeholder card */}
        <div className="border border-dashed border-blue-200 rounded-2xl p-6 flex flex-col justify-center items-center bg-white/40 text-gray-500">
          <span className="text-4xl">+</span>
          <p>Add more blogs soon</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
