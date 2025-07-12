import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaAndroid,
  FaApple, FaServer, FaCode
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiMysql, SiExpress, SiRedux, SiTailwindcss,
  SiFirebase, SiPostman, SiSupabase, SiXcode, SiAndroidstudio, SiFigma
} from "react-icons/si";

// Skills data
const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", level: "Advanced", type: "Frontend" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", level: "Advanced", type: "Frontend" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: "Advanced", type: "Frontend" },
  { name: "React.js", icon: FaReact, color: "text-blue-400", level: "Advanced", type: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black", level: "Intermediate", type: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400", level: "Advanced", type: "Styling" },
  { name: "Redux / Context", icon: SiRedux, color: "text-purple-500", level: "Advanced", type: "State Management" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400", level: "Advanced", type: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-500", level: "Advanced", type: "Backend" },
  { name: "REST APIs", icon: FaServer, color: "text-gray-600", level: "Advanced", type: "Backend" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", level: "Intermediate", type: "Backend" },
  { name: "Supabase", icon: SiSupabase, color: "text-green-500", level: "Intermediate", type: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: "Intermediate", type: "Database" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: "Intermediate", type: "Database" },
  { name: "React Native", icon: FaReact, color: "text-blue-400", level: "Advanced", type: "Mobile" },
  { name: "Android Dev", icon: FaAndroid, color: "text-green-500", level: "Intermediate", type: "Mobile" },
  { name: "iOS Dev", icon: FaApple, color: "text-gray-800", level: "Intermediate", type: "Mobile" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-900", level: "Advanced", type: "Tooling" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600", level: "Advanced", type: "Testing" },
  { name: "VS Code", icon: FaCode, color: "text-blue-500", level: "Expert", type: "Tooling" },
  { name: "Xcode", icon: SiXcode, color: "text-gray-800", level: "Intermediate", type: "IDE" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-600", level: "Intermediate", type: "IDE" },
  { name: "Figma", icon: SiFigma, color: "text-purple-600", level: "Intermediate", type: "Design" },
];

// Group by type
const groupedSkills = skills.reduce((acc, skill) => {
  acc[skill.type] = acc[skill.type] || [];
  acc[skill.type].push(skill);
  return acc;
}, {});

// Component
const Skills = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-mt-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-4 sm:px-6 md:px-12 font-poppins"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛠️ Technical Skills
      </motion.h2>

      <div className="space-y-14 max-w-7xl mx-auto">
        {Object.entries(groupedSkills).map(([type, skills]) => (
          <div key={type}>
            <h3 className="text-xl font-semibold mb-6 text-purple-400">{type}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl text-center shadow-md hover:bg-white/10 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <div className={`text-3xl mb-3 ${skill.color}`}>
                    {React.createElement(skill.icon)}
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p className="text-sm text-gray-400">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
