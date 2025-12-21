import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Contact & Connect
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        Feel free to reach out for collaboration, project inquiries, or freelance work.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 w-full max-w-5xl">

        {/* Email Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-blue-200 shadow-xl rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition cursor-pointer">
          <FaEnvelope className="text-blue-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">Email</h3>
          <p className="mt-2 text-gray-600 text-sm">rajankumarrkr4576@gmail.com</p>

          <a
            href="mailto:rajankumarrkr4576@gmail.com"
            className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Send Email
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-blue-200 shadow-xl rounded-2xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition cursor-pointer">
          <FaPhoneAlt className="text-green-600 text-4xl" />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">Phone</h3>
          <p className="mt-2 text-gray-600 text-sm">+91 9815154045</p>

          <a
            href="tel:+919815154045"
            className="mt-5 px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-16 flex gap-8 text-3xl text-blue-600">
        <a href="#" className="hover:scale-125 transition"><FaGithub /></a>
        <a href="#" className="hover:scale-125 transition"><FaLinkedin /></a>
        <a href="https://wa.me/919815154045" className="hover:scale-125 transition text-green-600"><FaWhatsapp /></a>
      </div>

      {/* WhatsApp Floating CTA */}
      <a
        href="https://wa.me/919815154045"
        className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-green-700 transition hidden md:block"
      >
        Chat on WhatsApp
      </a>

      {/* Map (Optional / Placeholder) */}
      <div className="mt-16 w-full max-w-4xl h-64 rounded-2xl overflow-hidden border border-blue-200 shadow-md">
        <iframe
          title="map"
          className="w-full h-full"
          src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
