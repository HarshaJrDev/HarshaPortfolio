import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload, FaEye } from "react-icons/fa";


const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-amber-800 to-gray-700 text-white p-10">
      {/* Left Section: Image */}
      <motion.div
        className="relative w-52 h-52 md:w-64 md:h-64 rounded-full  shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >


<img
  width={200}
  height={200}
  src="/Ownimage.jpeg"
  className="w-full h-full object-cover"
  alt="Image"
/>

      </motion.div>

      {/* Right Section: About Me */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-orange-400"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, Im Harsha Vardhan
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Passionate React Native developer with experience in building scalable mobile applications. I specialize in creating high-performance apps with smooth user experiences.
        </motion.p>

        <motion.p
          className="mt-4 text-md text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Experienced in JavaScript, TypeScript, Firebase, and API integrations. Constantly learning and staying updated with the latest in mobile development.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 mt-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/ravuri-harshavardhan-52220726b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HarshaJrDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          className="flex space-x-4 mt-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="/React_Native Ravuri_HarshaVardhan.pdf" // Replace with actual resume link
            target="_blank"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg flex items-center space-x-2 transform hover:scale-105 transition"
          >
            <FaEye />
            <span>View Resume</span>
          </a>
          <a
            href="/React_Native Ravuri_HarshaVardhan.pdf" // Replace with actual resume link
            download="React_Native Ravuri_HarshaVardhan.pdf"
            className="px-6 py-3  bg-gray-900 text-white font-semibold rounded-full shadow-lg flex items-center space-x-2 transform hover:scale-105 transition"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
