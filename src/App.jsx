import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";

import TechStack from "./components/TechStack";

import Achievements from "./components/Achievements";
import Blog from "./components/Blog";

import Contact from "./components/Contact";


function App() {
  return (
    <>
     
      <div className="pt-20">
         <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Services/>
        <Experience/>
      
        <TechStack/>
      
        <Achievements/>
        <Blog/>
     
        <Contact/>
      </div>
    </>
  );
}

export default App;
