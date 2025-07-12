"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import About from "../app/Layout/About";
import Skills from "../app/Layout/Skills";
import Projects from "../app/Layout/Projects";
import Contact from "../app/Layout/Contact";
import WhyHireMe from "../app/Layout/WhyHireMe";
import Education from "../app/Layout/Education";
import WorkExperience from "../app/Layout/WorkExperience"; // Add this file if not already

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const refs = {
    About: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
    WhyHireMe: useRef(null),
    Education: useRef(null),
    WorkExperience: useRef(null),
  };

const scrollToSection = (key) => {
  const sectionRef = refs[key];
  if (sectionRef?.current) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // Only close mobile menu if it's currently open
  if (isOpen) {
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Wait for scroll to initiate before collapsing menu
  }
};


  const navItems = [
    "About",
    "Skills",
    "Projects",
    "WhyHireMe",
    "Education",
    "WorkExperience",
    "Contact",
  ];

  return (
    <>
      {/* Nav */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Ravuri <span className="text-orange-500">Harsha</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white text-lg">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-orange-400 transition-all duration-200"
              >
                {item.replace(/([A-Z])/g, " $1").trim()}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden md:hidden bg-gray-900 px-6 pb-4"
            >
              <div className="flex flex-col space-y-4 text-white text-lg">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="hover:text-orange-400 transition-all duration-200 text-left"
                  >
                    {item.replace(/([A-Z])/g, " $1").trim()}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sections */}
      <div className="pt-24">
        <About ref={refs.About} />
        <WhyHireMe ref={refs.WhyHireMe} />
        <Education ref={refs.Education} />
        <Skills ref={refs.Skills} />
        <Projects ref={refs.Projects} />
        <WorkExperience ref={refs.WorkExperience} />
        <Contact ref={refs.Contact} />
      </div>
    </>
  );
};

export default NavBar;
