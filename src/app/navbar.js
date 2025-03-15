"use client"
import React, { useRef, useState } from "react";
import About from "../app/Layout/About";
import Skills from "../app/Layout/Skills";
import Projects from "../app/Layout/Projects";
import Contact from "../app/Layout/Contact";
import WhyHireMe from "../app/Layout/WhyHireMe";
import Education from '../app/Layout/Education'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const whyHireMeRef = useRef(null);
  const WorkExperience = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="text-2xl font-bold">
          Ravuri <span className="text-orange-500 font-poppins">Harsha</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-6 text-lg ${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
        >
          <button onClick={() => scrollToSection(aboutRef)} className="block md:inline hover:text-orange-400 transition duration-300">
            
          </button>
          <button onClick={() => scrollToSection(skillsRef)} className="block md:inline hover:text-orange-400 transition duration-300">
            
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="block md:inline hover:text-orange-400 transition duration-300">
            
          </button>
          <button onClick={() => scrollToSection(whyHireMeRef)} className="block md:inline hover:text-orange-400 transition duration-300">

          </button>
          <button onClick={() => scrollToSection(contactRef)} className="block md:inline hover:text-orange-400 transition duration-300">
            
          </button>
          <button onClick={() => scrollToSection(WorkExperience)} className="block md:inline hover:text-orange-400 transition duration-300">

          </button>
          <button onClick={() => scrollToSection(Education)} className="block md:inline hover:text-orange-400 transition duration-300">

          </button>
        </div>
      </nav>
      <div className="pt-20">
        <About ref={aboutRef} className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">About Me</h2>
        </About>
        <WhyHireMe ref={whyHireMeRef} className="h-screen bg-gray-500 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Why Hire Me?</h2>
        </WhyHireMe>
        <Education ref={Education} className="h-screen bg-gray-500 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Education</h2>
        </Education>
  
        <Skills ref={skillsRef} className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Skills</h2>
        </Skills>
        <Projects ref={projectsRef} className="h-screen bg-gray-300 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Projects</h2>
        </Projects>
       
        <Contact ref={contactRef} className="h-screen bg-gray-400 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Contact</h2>
        </Contact>
      </div>
    </>
  );
};

export default NavBar;
