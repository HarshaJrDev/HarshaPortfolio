import React, { useState, forwardRef } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaBolt,
  FaUsers,
  FaCogs,
  FaRocket,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    title: "Full-Stack Expertise",
    icon: <FaCode />,
    description:
      "Proficient in the MERN stack, Firebase, and third-party APIs—delivering complete end-to-end solutions.",
  },
  {
    title: "Mobile-First Approach",
    icon: <FaMobileAlt />,
    description:
      "Crafting high-performance React Native apps with seamless UX for both Android and iOS.",
  },
  {
    title: "Fast & Scalable",
    icon: <FaBolt />,
    description:
      "Optimized applications with real-time updates, caching strategies, and scalable architecture.",
  },
  {
    title: "User-Centered Design",
    icon: <FaUsers />,
    description:
      "Designing intuitive, engaging interfaces with a focus on user experience and accessibility.",
  },
  {
    title: "Problem Solver",
    icon: <FaCogs />,
    description:
      "Expert at debugging, system optimization, and shipping feature enhancements under tight timelines.",
  },
  {
    title: "Future-Ready Solutions",
    icon: <FaRocket />,
    description:
      "Building robust applications with modular, scalable codebases to drive long-term business growth.",
  },
];

const WhyHireMe = forwardRef((props, ref) => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 md:px-16 relative"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Why Hire Me?
      </motion.h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer p-6 bg-white/5 border border-gray-700 rounded-xl shadow-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            onClick={() => setSelected(item)}
          >
            <div className="text-3xl mb-3 text-orange-400">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="bg-gray-900 border border-gray-700 text-white max-w-md w-full p-6 rounded-2xl shadow-2xl relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
                <div className="text-4xl mb-4 text-orange-400">
                  {selected.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                <p className="text-gray-300">{selected.description}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
});

WhyHireMe.displayName = "WhyHireMe";

export default WhyHireMe;
