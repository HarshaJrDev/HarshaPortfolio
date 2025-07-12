import React, { useState, forwardRef } from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
  {
    institution: "Kalasalingam Academy of Research and Education",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    duration: "2021 - 2025",
    icon: <FaGraduationCap />,
    iconColor: "text-yellow-400",
    details:
      "Studying Artificial Intelligence and Machine Learning with projects on NLP, computer vision, and full-stack apps using MERN.",
  },
  {
    institution: "Sri Chaitanya College",
    degree: "Intermediate (MPC)",
    duration: "2019 - 2021",
    icon: <FaUniversity />,
    iconColor: "text-blue-400",
    details:
      "Completed Math, Physics, Chemistry coursework with emphasis on analytical reasoning and IIT-JEE fundamentals.",
  },
  {
    institution: "Sri Gurudatta High School",
    degree: "SSC (10th Grade)",
    duration: "2018 - 2019",
    icon: <FaSchool />,
    iconColor: "text-green-400",
    details:
      "Focused on foundational academics, including science fairs, logical competitions, and school-wide leadership programs.",
  },
];

const Education = forwardRef((props, ref) => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white py-20 px-6 font-poppins"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🎓 Education Background
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500 transition-all duration-300 shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => setSelected(edu)}
          >
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-black p-3 rounded-full border border-purple-600 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-all`}
              title={`Click for details about ${edu.institution}`}
            >
              <div className={`text-3xl ${edu.iconColor}`}>{edu.icon}</div>
            </div>

            <div className="pt-10 text-center">
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <p className="text-md text-gray-300 mt-1">{edu.degree}</p>
              <p className="text-sm text-purple-400 mt-1">{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 p-8 rounded-xl max-w-lg mx-4 text-white shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2">{selected.institution}</h3>
              <p className="text-md text-purple-300 mb-1">{selected.degree}</p>
              <p className="text-sm text-gray-400 mb-4">{selected.duration}</p>
              <p className="text-sm text-gray-300">{selected.details}</p>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

Education.displayName = "Education";

export default Education;
