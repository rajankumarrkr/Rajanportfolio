import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiCollection,
  HiCode,
  HiBriefcase,
  HiMail,
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Background dim when mobile menu opens */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-blue-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide cursor-pointer">
            Portfolio
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "services", label: "Services" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id} className="relative group cursor-pointer">
                <Link to={item.id} smooth duration={500}>
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* HAMBURGER ICON */}
          <button
            className="md:hidden text-3xl text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Modern Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white/60 backdrop-blur-2xl border-l border-blue-100 shadow-2xl rounded-l-3xl transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start px-8 pt-28 gap-8 text-lg font-semibold text-gray-800">

            <MobileNavItem icon={<HiHome />} label="Home" to="hero" close={toggleMenu} />
            <MobileNavItem icon={<HiUser />} label="About" to="about" close={toggleMenu} />
            <MobileNavItem icon={<HiCode />} label="Skills" to="skills" close={toggleMenu} />

            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 rounded-xl text-white shadow-lg w-full">
              <HiCollection className="text-xl" />
              <Link to="projects" smooth duration={500} onClick={toggleMenu}>
                Projects
              </Link>
            </div>

            <MobileNavItem
              icon={<HiBriefcase />}
              label="Services"
              to="services"
              close={toggleMenu}
            />
            <MobileNavItem
              icon={<HiMail />}
              label="Contact"
              to="contact"
              close={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

/* COMPONENT: Mobile Menu Reusable Item */
const MobileNavItem = ({ icon, label, to, close }) => (
  <div className="flex items-center gap-4 w-full hover:bg-blue-50 py-3 px-4 rounded-xl transition cursor-pointer">
    <span className="text-blue-600 text-xl">{icon}</span>
    <Link to={to} smooth duration={500} onClick={close}>
      {label}
    </Link>
  </div>
);

export default Navbar;
