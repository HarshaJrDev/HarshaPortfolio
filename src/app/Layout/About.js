import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEye,
  FaReact,
  FaNodeJs,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";

const techStack = [
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <FaNodeJs />, color: "text-green-500" },
  { icon: <SiFirebase />, color: "text-yellow-400" },
  { icon: <SiRedux />, color: "text-purple-400" },
  { icon: <SiJavascript />, color: "text-yellow-300" },
  { icon: <SiTypescript />, color: "text-blue-400" },
  { icon: <SiTailwindcss />, color: "text-sky-400" },
];

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-poppins overflow-hidden"
    >
      {/* Left: Profile Image + Tech Stack */}
      <motion.div
        className="relative flex flex-col items-center justify-center w-full md:w-1/2 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-white/10 border-4 border-orange-400 backdrop-blur-md shadow-2xl p-2 animate-float">
          <Image
            src="/Image.png"
            alt="Harsha Vardhan"
            width={320}
            height={320}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              className={`text-3xl ${tech.color} bg-white/10 p-3 rounded-full shadow-lg backdrop-blur-md`}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right: Text and Info */}
      <motion.div
        className="md:w-1/2 flex flex-col gap-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Name + Tagline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          Hi, I'm Harsha Vardhan
        </h1>

        <div className="text-base sm:text-lg text-gray-400 font-medium">
          React Native Developer | Full Stack Enthusiast
        </div>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Crafting high-performance apps with delightful UI. I specialize in building full-stack mobile & web applications that scale.
        </p>

        {/* Freelancing & Projects Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm sm:text-base text-orange-300 font-semibold">
          <span className="flex items-center gap-2">
            <FaBriefcase className="text-orange-400" />
            Freelancing since 2023
          </span>
          <span className="flex items-center gap-2">
            <FaProjectDiagram className="text-yellow-400" />
            Built 4+ end-to-end projects
          </span>
        </div>

        <p className="text-sm italic text-gray-500">
          “I don't just write code. I engineer user experiences.”
        </p>

        {/* Terminal style */}
        <div className="bg-black border border-gray-700 rounded-xl p-4 font-mono text-green-400 text-sm shadow-inner w-full mt-2">
          <p className="text-green-500"> harsha.run()</p>
          <p>// Developing fullstack applications 💚</p>
        </div>

        {/* Resume Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="/React_Native Ravuri_HarshaVardhan.pdf"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-full shadow hover:scale-105 transition"
          >
            <FaEye />
            View Resume
          </a>
          <a
            href="/React_Native Ravuri_HarshaVardhan.pdf"
            download="React_Native Ravuri_HarshaVardhan.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white text-white font-semibold rounded-full shadow hover:scale-105 transition"
          >
            <FaDownload />
            Download
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-6 text-2xl">
          <a
            href="https://linkedin.com/in/ravuri-harshavardhan-52220726b"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HarshaJrDev"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
});

About.displayName = "About";

export default About;
