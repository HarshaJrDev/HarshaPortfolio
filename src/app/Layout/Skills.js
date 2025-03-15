import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaAndroid, FaApple, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiExpress, SiRedux, SiTailwindcss, SiFirebase, SiPostman, SiSupabase, SiXcode, SiAndroidstudio, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "React Native", icon: <FaReact className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
    { name: "Android Development", icon: <FaAndroid className="text-green-500" /> },
    { name: "iOS Development", icon: <FaApple className="text-gray-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-600" /> },
    { name: "Redux/Context API", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
    { name: "Xcode", icon: <SiXcode className="text-gray-800" /> },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
  ];
  

const Skills = () => {
  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen text-center">
      <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;