import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaJava, FaPython, FaCode, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiCanva } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import Emclogo from '../../assets/images/emc.jpeg';
import Neo from '../../assets/images/neo.png';
import Guvi from '../../assets/images/guvi.png';
import Canva from '../../assets/images/canva.jpeg';
import Cisco from '../../assets/images/cosco.png';
import Ima from '../../assets/images/ima.jpeg';
import Qrl from '../../assets/images/qct.jpeg';
const Certifications = () => {
  const certifications = [
    {
      title: "HTML & CSS Workshop",
      issuer: "Error Makes Clever",
      date: "August 2023",
      description: "Certified in modern web markup, responsive design principles, CSS animations, and accessibility standards.",
      icon: (
        <div className="flex space-x-2">
          <SiHtml5 className="text-orange-600 text-3xl" />
          <SiCss3 className="text-blue-600 text-3xl" />
        </div>
      ),
      badge: Emclogo,
      skills: ["HTML5", "CSS3", "Flexbox/Grid", "Responsive Design"],
      color: "from-orange-500 to-blue-500",
      url: "https://drive.google.com/file/d/1l0AQ2GUQdUE5_DiN3M8xwttFkYTBkj3y/view?usp=sharing",
      iconBg: "bg-white/90",
    },
    {
      title: "Mastering JavaScript",
      issuer: "Error Makes Clever",
      date: "September 2023",
      description: "Proved expertise in modern JavaScript, ES6+ features, asynchronous programming, and design patterns.",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      badge: Emclogo,
      skills: ["Basic Coding", "DOM", "ES6+", "Async/Await", "Design Patterns"],
      color: "from-amber-500 to-blue-500",
      url: "https://drive.google.com/file/d/1CuE1OomqJ5YhZ2G_Tm2rfSC2apKLLelc/view?usp=sharing",
      iconBg: "bg-gray-900/90",
    },
    {
      title: "Fundamentals of Web Development",
      issuer: "Error Makes Clever",
      date: "January 2025",
      description: "Covered core web technologies including HTML, CSS, JavaScript, and web performance optimization.",
      icon: <FaCode className="text-purple-400 text-3xl" />,
      badge: Emclogo,
      skills: ["HTML5","CSS3","Tailwind CSS","ES6+", "Async/Await","DOM Manipulation", "Responsive Design", "Web APIs"],
      color: "from-yellow-500 to-red-500",
      url: "https://drive.google.com/file/d/1y6_tocoMmotH5RP2hn_0dPeTZO0YQY9S/view?usp=sharing",
      iconBg: "bg-white/90",
    },
    {
      title: "Prompt Engineering Certification",
      issuer: "Error Makes Clever",
      date: "May 2025",
      description: "Mastered techniques for crafting effective prompts for AI language models and optimizing outputs.",
      icon: <div className="text-emerald-400 text-3xl font-bold">AI</div>,
      badge: Emclogo,
      skills: ["LLMs", "Fine-tuning", "Optimization", "Retrieval-Augmented Generation", "AI Prompting"],
      color: "from-emerald-500 to-green-500",
      url: "https://drive.google.com/file/d/1zwA_y2_RWjwYBkZbona0t8K8wI_tCIfh/view?usp=sharing",
      iconBg: "bg-gray-900/90",
    },
    {
      title: "Programming in Core Java",
      issuer: "Neo Orange Technology",
      date: "October 2023",
      description: "Mastered object-oriented programming concepts, Java syntax, and application development.",
      icon: <FaJava className="text-red-500 text-3xl" />,
      badge: Neo,
      skills: ["OOP", "Java SE", "Problem Solving"],
      color: "from-red-500 to-amber-500",
      url: "https://drive.google.com/file/d/1OuK55aWbfrr8xYpIlTG7yqkxJS1ALdIN/view?usp=sharing",
      iconBg: "bg-white/90",
    },
    {
      title: "Python Programming",
      issuer: "Guvi Geek Network Pvt Ltd",
      date: "November 2024",
      description: "Validated skills in Python programming, OOP concepts, debugging techniques, and application development",
      icon: <FaPython className="text-yellow-500 text-3xl" />,
      badge: Guvi,
      skills: ["Basic Programminng", "Loops", "Debugging", "OOP"],
      color: "from-blue-500 to-cyan-500",
      url: "https://drive.google.com/file/d/1S68GkLTK_erBU_q8z-SomWph4294fPp8/view?usp=drive_link",
      iconBg: "bg-white/90",
    },
    {
      title: "Canva Essentials",
      issuer: "Canva Design School",
      date: "November 2024",
      description: "Certified in graphic design principles, visual communication, and creating professional designs using Canva.",
      icon: <SiCanva className="text-blue-400 text-3xl" />,
      badge: Canva,
      skills: ["Graphic Design", "Branding", "Visual Communication", "Photo Editing Fundamentals,"],
      color: "from-blue-400 to-teal-500",
      url: "https://drive.google.com/file/d/1EBGakMZhCesucbE841s8-ul5b5NJxzox/view?usp=sharing",
      iconBg: "bg-white/90",
    },
    {
      title: "Network Essentials",
      issuer: "Cisco Networking Academy",
      date: "March 2023",
      description: "Validated foundational knowledge of networking concepts, protocols, and infrastructure components.",
      icon: <BiNetworkChart className="text-blue-400 text-3xl" />,
      badge: Cisco,
      skills: ["TCP/IP", "Routing", "Security", "Network Communication", "IPv4 & IPv6"],
      color: "from-blue-500 to-indigo-500",
      url: "https://drive.google.com/file/d/1Mm0JgLuKGEHjYju9aGuahxTIShY4h1GS/view?usp=sharing",
      iconBg: "bg-white/90",
    },
    {
      title: "Workshop on Power BI",
      issuer: "Imarticus Learning",
      date: "November 2024",
      description: "Certified in Power BI with hands-on experience in data collection, transformation, modeling, and visualization",
      icon: <FaDatabase className="text-yellow-500 text-3xl" />,
      badge: Ima,
      skills: ["DAX", "Data Modeling", "Visualizations", "Power BI", "Data Preprocessing"],
      color: "from-sky-500 to-blue-500",
      url: "https://drive.google.com/file/d/1-dKYb3p249kDDeB2-trdH8oPeCMt3bTZ/view?usp=sharing",
      iconBg: "bg-gray-900/90",
    },
    {
      title: "Quantum Professional",
      issuer: "Q-Ctrl",
      date: "October 2024",
      description: "Certified in basic quantum computing principles, Qiskit framework, and foundational quantum algorithms",
      icon: <BsFillLightningChargeFill className="text-cyan-400 text-3xl" />,
      badge: Qrl,
      skills: ["Qubits", "Quantum Gates", "Qiskit"],
      color: "from-cyan-400 to-blue-500",
      url: "https://drive.google.com/file/d/1H9_2yUOeCSpAxCcocsT0IhDgA_UutjlY/view?usp=sharing",
      iconBg: "bg-gray-900/90",
    },
  ];
  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-gray-900 to-indigo-900/10 relative">
      <RevealOnScroll>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Certifications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Validated expertise through industry-recognized certifications
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group ${
                  index >= certifications.length - 2
                    ? "lg:col-span-2 lg:mx-auto lg:max-w-md"
                    : ""
                }`}
              >
                <div className="h-full bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className={`p-4 sm:p-6 ${cert.color} bg-gradient-to-r`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{cert.title}</h3>
                        <p className="text-black/90 text-sm sm:text-base">{cert.issuer}</p>
                      </div>
                      <div className={`${cert.iconBg} p-2 sm:p-3 rounded-lg backdrop-blur-sm flex items-center justify-center`}>
                        {cert.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-700/50 border-2 border-white/10 flex items-center justify-center overflow-hidden">
                        {typeof cert.badge === 'string' ? (
                          <img
                            src={cert.badge}
                            alt={`${cert.title} badge`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <img
                            src={cert.badge}
                            alt={`${cert.title} badge`}
                            className="w-full h-full object-cover"
                          />
                        )}
                        <span
                          className="text-xs text-gray-400"
                          style={{ display: 'none' }}
                        >
                          Badge Unavailable
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{cert.description}</p>
                    <div className="mt-auto">
                      <div className="mb-4">
                        <h4 className="text-sm text-gray-400 mb-2">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-gray-700/50 text-gray-300 py-1 px-2 sm:px-3 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-sm text-gray-400">Issued: {cert.date}</span>
                        <span className="text-xs bg-white/10 text-white py-1 px-2 rounded">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Certifications;