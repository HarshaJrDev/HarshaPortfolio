// components/Hero.js
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20 flex flex-col justify-center items-start relative">
      <div className="absolute top-0 left-0 w-full h-full rounded-b-[3rem] bg-gradient-to-br from-neutral-900 to-black z-[-1]" />

      <motion.h1
        className="text-[3.5rem] sm:text-[5rem] font-extrabold leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Full-stack <br />
        <span className="text-white">Developer</span>
      </motion.h1>

      <p className="text-gray-400 mt-6 max-w-xl text-lg">
        My goal is to <span className="text-white font-medium italic">write maintainable, clean and understandable code</span> to make development enjoyable.
      </p>

      <div className="flex gap-4 mt-10">
        <a href="#" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
          Projects →
        </a>
        <a href="#" className="border border-white px-6 py-2 rounded-full hover:bg-white/10 transition">
          About Me
        </a>
      </div>

      <div className="flex gap-6 text-2xl mt-12">
        <a href="#"><FaGithub className="hover:text-gray-400 transition" /></a>
        <a href="#"><FaLinkedin className="hover:text-blue-400 transition" /></a>
        <a href="#"><FaTelegram className="hover:text-cyan-400 transition" /></a>
        <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
      </div>
    </section>
  );
};

export default Hero;
