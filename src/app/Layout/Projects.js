import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    name: "E-commerce Mobile App", 
    description: "Developed a full-stack e-commerce application using React Native and Mern.Implemented user authentication, including signup and login functionality,using Jwt Authentication.Designed and built a real-time database utilizing Mongo Database Functions for backend logic and data processing tasks",
    image: "ecommerce.png"
  },
  { 
    name: "Food Delivery with Admin Panel", 
    description: "Developed a delivery app with an admin panel using React Native for the frontend and Firebase for the backend. The app features real-time delivery tracking with OpenStreetMap integration, secure payment processing through Razorpay, and robust user authentication. The admin panel allows efficient management of orders, deliveries, and user data, with real-time updates powered by Firebase Firestore. Designed to be user-friendly and scalable, the app supports seamless order placement, tracking, and payment, catering to both customers and administrators.",
    image: "food_delivery.png"
  },
  { 
    name: "Plan to Travel", 
    description: "To plan your travel using MERN stack with React Native, consider Gemini (AI chatBot) buildingrobust application that integrates MongoDB for storing data,Express.js for handling server-side logic, Node.js for backend operations, and React Native for a cross- platform mobile experience. Utilize features like geolocation services, real- time updates, and intuitive user interfaces to enhance the travel planning and booking process seamlessly",
    image: "travel.png"
  },
  { 
    name: "Logistics Mobile App", 
    description: "Developed a cross-platform logistics mobile app using React Native for the frontend and Firebase for the backend, enabling real-time order tracking and seamless user authentication. Integrated Google Maps for delivery visualization, ensuring an intuitive experience for users. Utilized Firebase Firestore for real-time updates and AsyncStorage for offline functionality, allowing continuous data access. Implemented push notifications via Firebase Cloud Messaging (FCM) to provide instant order status updates. This scalable and user-friendly solution enhances delivery management efficiency while ensuring smooth performance across devices",
    image: "logistics.png"
  },
  { 
    name: "NexaLink", 
    description: "NexaLink is a cross-platform event management app built with React Native for both Android and iOS. It allows users to share ideas, ask questions, and connect with like-minded attendees during events. For authentication, it integrates Auth0, supporting social login, passwordless sign-in, and JWT-based security. The backend, powered by API integrations, efficiently manages event data, discussions, and notifications. With real- time updates, image caching, and offline support, NexaLink delivers a seamless and engaging event experience for all users",
    image: "nexalink.png"
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
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-2xl font-semibold">{project.name}</h4>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
      
  
    </div>
  );
};

export default Projects;
