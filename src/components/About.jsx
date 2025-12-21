

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-24 bg-white"
    >
      <div className="max-w-3xl text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          About Me
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          I'm <span className="font-semibold text-blue-600">Rajan Kumar</span>, a 
          passionate Full Stack MERN Developer who enjoys building scalable and 
          user-friendly web applications. I focus on writing clean code, creating 
          intuitive UI, and solving real-world problems with modern technologies. 
          I am continuously improving my skills and exploring new tools to deliver 
          better solutions.
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="bg-blue-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-600 text-xl">MERN Developer</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Skilled in MongoDB, Express.js, React, Node.js, and REST APIs.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-600 text-xl">UI/UX Mindset</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Focus on usability, responsiveness, and modern UI design.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-600 text-xl">Problem Solver</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Passionate about tackling real-world challenges with code.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-blue-600 text-xl">Continuous Learner</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Always improving and exploring the latest technologies.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm shadow-sm">JavaScript</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm shadow-sm">Frontend + Backend</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm shadow-sm">API Development</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm shadow-sm">Responsive Design</span>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-6 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
