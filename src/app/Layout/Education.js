import React from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Kalasalingam Academy of Research and Education",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    duration: "2021 - 2025",
    cgpa: "7.0",
    icon: <FaGraduationCap className="text-4xl text-yellow-400" />,
  },
  {
    institution: "Sri Chaitanya College",
    degree: "Intermediate (MPC)",
    duration: "2019 - 2021",
    percentage: "88%",
    icon: <FaUniversity className="text-4xl text-blue-400" />,
  },
  {
    institution: "Sri Gurudatta High School",
    degree: "SSC (10th Grade)",
    duration: "2018 - 2019",
    cgpa: "9.5",
    icon: <FaSchool className="text-4xl text-green-400" />,
  },
];

const Education = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        🎓 Education Background
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center">{edu.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{edu.institution}</h3>
            <p className="text-lg text-gray-300 mt-2">{edu.degree}</p>
            <p className="text-sm text-gray-400">{edu.duration}</p>
            {edu.cgpa && <p className="text-md font-bold text-yellow-300 mt-2">CGPA: {edu.cgpa}</p>}
            {edu.percentage && <p className="text-md font-bold text-blue-300 mt-2">Percentage: {edu.percentage}%</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
