import React from "react";
import { FaCode, FaMobileAlt, FaBolt, FaUsers, FaCogs, FaRocket, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  { title: "Full-Stack Expertise", icon: <FaCode className="text-blue-400 text-5xl" />, description: "Skilled in MERN stack, Firebase, and third-party API integrations." },
  { title: "Mobile-First Approach", icon: <FaMobileAlt className="text-green-400 text-5xl" />, description: "Building high-performance React Native apps for Android & iOS." },
  { title: "Fast & Scalable", icon: <FaBolt className="text-yellow-400 text-5xl" />, description: "Optimized for performance with real-time updates and caching strategies." },
  { title: "User-Centered Design", icon: <FaUsers className="text-purple-400 text-5xl" />, description: "Creating intuitive and engaging UI/UX for seamless user experiences." },
  { title: "Problem-Solver", icon: <FaCogs className="text-orange-400 text-5xl" />, description: "Efficient debugging, feature enhancements, and system optimizations." },
  { title: "Scalable Solutions", icon: <FaRocket className="text-red-400 text-5xl" />, description: "Developing robust and future-proof applications for business growth." },
];

const workExperience = [
  {
    company: "WebMOBI, Bengaluru",
    role: "React Native Developer Intern",
    duration: "6 Months",
    description: "Worked on building event-based mobile applications. Integrated Firebase for real-time data sync and enhanced app performance.",
  },
  {
    company: "Bliptyn Technologies",
    role: "React Native Developer Intern",
    duration: "4 Months",
    description: "Worked on their internal project as a Frontend Developer & UI Designer. Utilized AI for screen generation, improving both productivity and design skills.",
    achievements: [
      "Developed various UI screens, including login, registration, and dashboard.",
      "Implemented Open API Map Integration & various chart integrations in React Native.",
      "Worked on a client project involving Figma design and building a Tauri application using ReactJS.",
      "Gained insights into AI prompting techniques & AI-powered development tools.",
      "Enhanced React Native proficiency with the latest framework updates.",
    ],
  },
];

const WhyHireMe = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">🚀 Why Hire Me?</h2>

      {/* Why Hire Me Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {reason.icon}
            <h4 className="text-2xl font-semibold mt-4">{reason.title}</h4>
            <p className="text-gray-300 mt-2">{reason.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Work Experience Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-10">💼 Work Experience</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
              whileHover={{ scale: 1.02 }}
            >
              <FaBriefcase className="text-orange-400 text-5xl mb-4 sm:mr-6" />
              <div>
                <h3 className="text-2xl font-semibold">{job.company}</h3>
                <p className="text-lg text-gray-300">{job.role}</p>
                <span className="text-yellow-400 font-bold">{job.duration}</span>
                <p className="text-gray-300 mt-2">{job.description}</p>
                {job.achievements && (
                  <ul className="mt-3 text-gray-400 list-disc list-inside">
                    {job.achievements.map((achieve, idx) => (
                      <li key={idx}>{achieve}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
