import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "E-commerce Mobile App",
    description:
      "Full-stack React Native app with MERN backend. Includes JWT authentication, MongoDB functions, and a smooth shopping experience.",
    link: "https://drive.google.com/drive/folders/1E74UdmFMMwmGq4IYzy8pPClHe-NnUAIy?usp=sharing",
  },
  {
    name: "Food Delivery + Admin Panel",
    description:
      "React Native + Firebase-based app. Real-time tracking, Razorpay payments, and admin order management dashboard.",
    link: "https://your-link-to-food-delivery-app.com",
  },
  {
    name: "Plan to Travel",
    description:
      "MERN + React Native travel planner. Includes AI chatbot (Gemini), geolocation, and real-time trip updates.",
    link: "https://your-link-to-plan-to-travel.com",
  },
  {
    name: "Logistics Mobile App",
    description:
      "Cross-platform logistics app with live order tracking, push notifications, and offline support using Firebase.",
    link: "https://drive.google.com/file/d/12SU804zzYv24-ks1Ct_f6O0Rx8_3Hr0l/view?usp=sharing",
  },
  {
    name: "NexaLink",
    description:
      "React Native event manager with Auth0 social login, real-time chats, and offline capabilities.",
    link: "https://your-link-to-nexalink.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-tr from-black via-gray-900 to-gray-950 text-white py-20 px-4 sm:px-6 md:px-12 font-poppins"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:border-orange-400 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg font-semibold text-orange-400 mb-2 hover:underline"
            >
              {project.name}
              <ExternalLink
                size={18}
                className="ml-1 text-orange-300 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

Projects.displayName = "Projects";

export default Projects;
