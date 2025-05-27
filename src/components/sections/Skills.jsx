import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { MdOutlineApi } from "react-icons/md";
import {FaReact,FaNodeJs,FaPython,FaGitAlt,FaFigma,FaGithub,FaJava,FaDatabase,FaBehance} from "react-icons/fa6";
import {SiTailwindcss,SiJavascript,SiHtml5,SiCss3,SiBootstrap,SiCanva,SiMysql,SiPostman,SiOpenai,SiPycharm,SiIntellijidea,SiVercel} from "react-icons/si";
import codevs from "../../assets/images/code-vs.png";
export const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "BootStrap", icon: <SiBootstrap className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Java", icon: <FaJava className="text-white" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "VS Code", icon: <img src={codevs} alt="VS Code" className="w-8 h-8" /> },
    { name: "PyCharm", icon: <SiPycharm className="text-green-500" /> },
    { name: "IntelliJ", icon: <SiIntellijidea className="text-red-500" /> },
    { name: "Prompt Engineering", icon: <SiOpenai className="text-white" /> },
    { name: "PostMan", icon: <SiPostman className="text-orange-500" /> },
    { name: "REST APIs", icon: <MdOutlineApi className="text-green-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white-500" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Canva", icon: <SiCanva className="text-purple" /> },
    { name: "Behance", icon: <FaBehance className="text-white-500" /> }
  ];
return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Tech Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Technologies I work with regularly
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex flex-col items-center w-20"
              >
                <div
                  className="bg-gray-800 p-4 rounded-xl text-4xl transition duration-300 ease-in-out
                             hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.6)]"
                >
                  {skill.icon}
                </div>
                <span className="mt-3 text-gray-300 text-sm text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Built", value: "10+" },
                { label: "Lines of Code", value: "5000+" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50"
                >
                  <div className="text-3xl font-bold mb-2 text-blue-400">
                    {item.value}
                  </div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Skills;