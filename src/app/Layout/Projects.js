import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    name: "E-commerce Mobile App", 
    description: "Developed a full-stack e-commerce application using React Native and MERN. Implemented user authentication with JWT, real-time database using MongoDB Functions, and a seamless shopping experience."
  },
  { 
    name: "Food Delivery with Admin Panel", 
    description: "Built a food delivery app with an admin panel using React Native and Firebase. Features include real-time order tracking, secure payments via Razorpay, and efficient order management for admins."
  },
  { 
    name: "Plan to Travel", 
    description: "Designed a travel planning app using the MERN stack with React Native. Integrated AI chatbot (Gemini), geolocation services, and real-time updates for a seamless booking experience."
  },
  { 
    name: "Logistics Mobile App", 
    description: "Developed a cross-platform logistics app with real-time order tracking, Google Maps integration, push notifications, and offline support using Firebase Firestore."
  },
  { 
    name: "NexaLink", 
    description: "Created an event management app using React Native. Features include social authentication via Auth0, real-time discussions, and offline support for seamless event engagement."
  }
];

const Projects = () => {
  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center">Portfolio</h2>
      
      <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-800 border-l-4 border-orange-500 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-2xl font-semibold text-orange-400">{project.name}</h4>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
