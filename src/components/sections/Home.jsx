import { useEffect, useState } from "react";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
export const Home = () => {
  const [typingText, setTypingText] = useState("");
  const roles = ["MERN Stack Developer", "Full Stack Developer","Software Developer","UI/UX Designer", "Web Developer", "Junior Web Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1000;
  useEffect(() => {
    const typeWriter = () => {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        setTypingText(currentRole.substring(0, typingText.length - 1));
      } else {
        setTypingText(currentRole.substring(0, typingText.length + 1));
      }
      if (!isDeleting && typingText === currentRole) {
        setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    const timer = setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, currentRoleIndex, isDeleting]);
  const iconStyle =
    "flex flex-col items-center transform transition-transform duration-300 hover:rotate-x-12 hover:rotate-y-6 hover:scale-110 perspective-1000";
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-md animate-pulse opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 filter blur-md animate-pulse opacity-20"></div>
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight"
          >
            Hi, I'm &lt;Vishwa /&gt;
          </motion.h1>
          <div className="h-16 mb-8 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-mono text-blue-300">
              {typingText}
              <span className="animate-blink">|</span>
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            className="flex justify-center space-x-8 mb-8"
          >
            <motion.div className={iconStyle} whileHover={{ scale: 1.1, rotate: 5 }}>
              <FaReact className="text-4xl text-blue-400 drop-shadow-lg" />
              <span className="text-xs text-gray-300 mt-2">React</span>
            </motion.div>
            <motion.div className={iconStyle} whileHover={{ scale: 1.1, rotate: 5 }}>
              <SiExpress className="text-4xl text-gray-100 drop-shadow-lg" />
              <span className="text-xs text-gray-300 mt-2">Express</span>
            </motion.div>
            <motion.div className={iconStyle} whileHover={{ scale: 1.1, rotate: 5 }}>
              <FaNodeJs className="text-4xl text-green-400 drop-shadow-lg" />
              <span className="text-xs text-gray-300 mt-2">Node.js</span>
            </motion.div>
            <motion.div className={iconStyle} whileHover={{ scale: 1.1, rotate: 5 }}>
              <SiMongodb className="text-4xl text-green-500 drop-shadow-lg" />
              <span className="text-xs text-gray-300 mt-2">MongoDB</span>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            I build modern web applications with cutting-edge technologies.
            Focused on creating responsive, scalable, and user-friendly solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#projects"
              className="relative overflow-hidden bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            <motion.a
              href="#contact"
              className="relative overflow-hidden border border-blue-400/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition-all hover:bg-blue-400/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-blue-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>
        </div>
      </RevealOnScroll>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => {
          const Icon = i % 4 === 0 ? FaReact :
                      i % 4 === 1 ? SiExpress :
                      i % 4 === 2 ? FaNodeJs : SiMongodb;

          const iconColor = i % 4 === 0 ? 'text-blue-400/20' :
                            i % 4 === 1 ? 'text-gray-200/20' :
                            i % 4 === 2 ? 'text-green-400/20' : 'text-green-500/20';
          const size = `${Math.random() * 3 + 2.5}rem`;
          return (
            <motion.div
              key={i}
              className={`absolute ${iconColor}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: size,
                zIndex: Math.floor(Math.random() * 2),
                opacity: 0.3,
              }}
              initial={{
                x: Math.random() * 50 - 25,
                y: Math.random() * 50 - 25,
                rotate: Math.random() * 360,
              }}
              animate={{
                x: [0, Math.random() * 15 - 7.5, 0],
                y: [0, Math.random() * 15 - 7.5, 0],
                rotate: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: Math.random() * 140 + 100,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};