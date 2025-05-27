import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaDownload, FaUserTie } from "react-icons/fa";
export const About = () => {
  const education = [
    {
      year: "2025",
      degree: "B.E. ECE",
      institution: "Meenakshi Sundararajan Engineering College",
      description: "Graduated with Electronics and Communication Engineering",
      icon: <FaGraduationCap className="text-blue-400" />
    },
    {
      year: "2021",
      degree: "12th Grade (HSC)",
      institution: "Chennai Boys Higher Secondary School",
      description: "Specialized in Mathematics and Computer Science",
      icon: <FaGraduationCap className="text-green-400" />
    },
    {
      year: "2019",
      degree: "10th Grade (SSLC)",
      institution: "Chennai Boys Higher Secondary School",
      description: "Schooling with focus on Science and Mathematics",
      icon: <FaGraduationCap className="text-purple-400" />
    }
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-indigo-900/10"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              My journey, education, and passion for technology
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <FaUserTie className="text-blue-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate developer with a strong foundation in Electronics and Communication Engineering. My journey began with a curiosity for technology that grew through my academic years and continues to drive me today.
                </p>
                <p>
                  I specialize in building modern web applications using cutting-edge technologies. My education has provided me with both theoretical knowledge and practical skills to solve complex problems.
                </p>
                <p>
                  I enjoy learning new technologies, contributing to open-source projects, and I also do share my knowledge with others in the developer community.
                </p>
              </div>
              <div className="mt-12 pt-4 border-t border-gray-700">
                <a
                  href="https://drive.google.com/file/d/1c1WeYCrFKAPAOOQ-1Bp7UhtS2nhCwiXj/view?usp=sharing"
                  target="_blank"
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-150 hover:scale-[1.03] active:scale-95"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-500/10 p-3 rounded-lg mr-4">
                  <FaGraduationCap className="text-green-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6 relative pl-6 border-l border-gray-600">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-7 top-0 bg-gray-700 border-2 border-blue-400 w-5 h-5 rounded-full flex items-center justify-center">
                      {edu.icon}
                    </div>
                    <div className="ml-2">
                      <span className="text-xs text-gray-400">{edu.year}</span>
                      <h4 className="font-bold text-white">{edu.degree}</h4>
                      <p className="text-blue-400 text-sm mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};