import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const workExperience = [
  {
    company: "Algorizz",
    role: "Full Stack Developer",
    duration: "Currently Working",
    description:
      "Developing scalable full-stack applications using modern JavaScript stacks. Responsible for backend APIs, frontend architecture, and cloud deployments.",
    icon: <FaLaptopCode className="text-green-400 text-3xl" />,
  },
  {
    company: "Webseeder Technologies",
    role: "React Native Developer",
    duration: "2 Months",
    description:
      "Engineered cross-platform mobile applications using React Native. Focused on performance, smooth UI navigation, and state management.",
    achievements: [
      "Built a full-featured Laundry Management App with separate interfaces for customers, drivers, and admins.",
      "Implemented secure e-commerce functionality including payments, scheduling, and order tracking.",
      "Developed backend REST APIs using Node.js and Express.js.",
      "Integrated push notifications and real-time order updates.",
    ],
    icon: <MdWork className="text-blue-400 text-3xl" />,
  },
  {
    company: "WebMOBI, Bengaluru",
    role: "React Native Developer",
    duration: "6 Months",
    description:
      "Contributed to event-based mobile apps. Integrated Firebase for real-time synchronization and optimized app performance.",
    icon: <FaBuilding className="text-purple-400 text-3xl" />,
  },
  {
    company: "Bliptyn Technologies",
    role: "React Native Developer",
    duration: "4 Months",
    description:
      "Led frontend development and UI design initiatives using React Native, Figma, and AI-powered tools.",
    achievements: [
      "Created multiple UI screens including login, registration, and dashboards.",
      "Implemented OpenStreetMap and dynamic charts for advanced visual insights.",
      "Collaborated on a cross-platform Tauri app built with ReactJS.",
      "Enhanced productivity with AI-assisted design and coding tools.",
    ],
    icon: <FaLaptopCode className="text-orange-400 text-3xl" />,
  },
];

const Experience = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-mt-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 font-poppins"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💼 Work Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-14">
        {workExperience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-10 border-l-4 border-purple-600"
          >
            <div className="absolute -left-6 top-1 animate-pulse">
              <div className="bg-purple-600 p-3 rounded-full hover:scale-105 transition duration-200 ease-in-out">
                {exp.icon}
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-purple-600/30 transition duration-300 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-purple-300">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-400">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
