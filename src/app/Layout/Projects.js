import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "E-commerce Mobile App",
    description:
      "Developed a full-stack e-commerce application using React Native and MERN. Implemented user authentication with JWT, real-time database using MongoDB Functions, and a seamless shopping experience.",
    link: "https://drive.google.com/drive/folders/1E74UdmFMMwmGq4IYzy8pPClHe-NnUAIy?usp=sharing",
  },
  {
    name: "Food Delivery with Admin Panel",
    description:
      "Built a food delivery app with an admin panel using React Native and Firebase. Features include real-time order tracking, secure payments via Razorpay, and efficient order management for admins.",
    link: "https://your-link-to-food-delivery-app.com",
  },
  {
    name: "Plan to Travel",
    description:
      "Designed a travel planning app using the MERN stack with React Native. Integrated AI chatbot (Gemini), geolocation services, and real-time updates for a seamless booking experience.",
    link: "https://your-link-to-plan-to-travel.com",
  },
  {
    name: "Logistics Mobile App",
    description:
      "Developed a cross-platform logistics app with real-time order tracking, Google Maps integration, push notifications, and offline support using Firebase Firestore.",
    link: "https://drive.google.com/file/d/12SU804zzYv24-ks1Ct_f6O0Rx8_3Hr0l/view?usp=sharing",
  },
  {
    name: "NexaLink",
    description:
      "Created an event management app using React Native. Features include social authentication via Auth0, real-time discussions, and offline support for seamless event engagement.",
    link: "https://your-link-to-nexalink.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.div
      className="p-10 bg-gray-900 text-white min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group p-6 bg-gray-800 border-l-4 border-orange-500 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.05] hover:bg-gray-700"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-2xl font-semibold text-orange-400 flex items-center gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1"
              >
                {project.name}
                <ExternalLink
                  size={18}
                  className="text-orange-300 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </h4>
            <p className="text-gray-300 mt-2 transition-opacity duration-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
