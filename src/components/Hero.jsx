import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col-reverse lg:flex-row justify-center items-center"
    >
      {/* LEFT TEXT */}
      <div className="flex flex-col justify-center max-w-2xl text-center lg:text-left animate-fadeIn">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
          Hi, I'm <span className="text-blue-600">Rajan Kumar</span>
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
          Full Stack MERN Developer
        </h2>

        <p className="mt-6 text-gray-600 text-md md:text-lg max-w-xl mx-auto lg:mx-0 leading-7">
          I create scalable web applications using MongoDB, Express.js, React, and Node.js.
          Passionate about clean code, modern UI, and solving real-world problems.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-700 transition font-medium"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE (CIRCLE) */}
      <div className="flex justify-center lg:justify-end mb-10 lg:mb-0 lg:ml-16">
        <div className="relative group">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition duration-300"></div>

          <img
            src={profile}
            alt="Rajan Kumar"
            className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
