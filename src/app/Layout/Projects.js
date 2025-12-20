import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "HubbleMeet",
    description:
      "Identity-based professional networking app with swipe-to-connect discovery, QR-based virtual business cards, 30–60s pitch videos, real-time chat, and subscription-based access control.",
    link: "https://play.google.com/store/apps/details?id=com.hubble.app",
  },
  {
    name: "HubbleMeet (iOS)",
    description:
      "iOS version of HubbleMeet published on the App Store, delivering the same identity-driven networking experience with optimized performance for iOS devices.",
    link: "https://apps.apple.com/in/app/hubblemeet/id6752544354",
  },
  {
    name: "Dandar Patient App",
    description:
      "Healthcare and telemedicine app enabling doctor appointment booking, online consultations, real-time chat, and medicine ordering with secure patient data handling.",
    link: "https://play.google.com/store/apps/details?id=com.dandarpatient&hl=en",
  },
  {
    name: "Donor Driver App",
    description:
      "Logistics and routing app built with React Native CLI and Mapbox, supporting multi-stop navigation, real-time task updates, and backend synchronization.",
  },
  {
    name: "E-commerce Mobile App",
    description:
      "Full-stack React Native e-commerce app with MERN backend, JWT authentication, MongoDB integration, and a smooth end-to-end shopping experience.",
    link: "https://drive.google.com/drive/folders/1E74UdmFMMwmGq4IYzy8pPClHe-NnUAIy?usp=sharing",
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
