import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLaptopCode, FaCalendarAlt, FaTasks, FaCertificate, FaFigma, FaMicrochip } from "react-icons/fa";
export const Experience = () => {
  const internships = [
    {
      role: "Python Full Stack",
      company: "Shiash Info Solutions Private Limited",
      duration: "Aug 2024 - Oct 2024",
      description: "Completed a 3-month intensive Full Stack Python internship focusing on desktop, console, and web application development. Gained strong foundational and hands-on experience in backend logic, GUI development, and database management using Python.",
      responsibilities: [
        "Developed 5+ Python-based GUI applications using Tkinter",
        "Built console and web apps integrating Python with SQL databases",
        "Implemented CRUD operations and user input validations",
        "Designed modular code with error handling and functional flow"
      ],
      certificateUrl: "https://drive.google.com/file/d/1_1lQAWaD-VXIMhnQJUPVNEpUVwD4i97h/view?usp=sharing",
      icon: <FaLaptopCode className="text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      role: "UI/UX Designer",
      company: "RETECH Solutions Private Limited",
      duration: "Jul 2024 - Aug 2024",
      description: "Completed an online internship in UI/UX Design with a strong focus on user-centered design principles and real-time mobile app design using Figma.",
      responsibilities: [
        "Designed an E-Commerce Mobile App UI for 'Online Shopping for Various Categories' using Figma",
        "Created wireframes, low/mid/high-fidelity prototypes for responsive designs",
        "Applied key UX laws: Hick’s Law, Fitts’s Law, Jakob’s Law, and Law of Proximity",
        "Practiced design systems, consistency, accessibility, and user flow mapping"

      ],
      certificateUrl: "https://drive.google.com/file/d/1bjkMAgs5fcClh2ZpXzahW3bmuruUjbdz/view?usp=sharing",
      icon: <FaFigma className="text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      role: "Frontend Developer",
      company: "Empower Guiding Centre",
      duration: "Jun 2023 - Jul 2023",
      description: "Successfully completed a one-month internship in Frontend Development, focusing on web design fundamentals and project-based learning using modern frontend tools and technologies.",
      responsibilities: [
        "Built static web pages using HTML, CSS, and JavaScript",
        "Learned and applied responsive design principles",
        "Worked with Visual Studio Code IDE for structured web development",
        "Developed user-friendly UI with consistent layout and styling"

      ],
      certificateUrl: "https://drive.google.com/file/d/1yoy9rXKBCKFge2kWBcylGGhIfMMEvukW/view?usp=sharing",
      icon: <FaLaptopCode className="text-white" />,
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      role: "Internship Trainee",
      company: "National Small Industries Corporation Ltd.",
      duration: "Feb 2023 - Feb 2023",
      description: "Completed a 2-week internship focused on the fundamentals of Embedded Systems and IoT, including hands-on experience with microcontrollers, sensors, and simulation tools.",
      responsibilities: [
        "Worked on basic embedded projects using Arduino UNO and sensors",
        "Designed circuit simulations using Proteus Design Suite",
        "Explored core IoT concepts and real-time applications",
        "Learned fundamentals of embedded programming and hardware-software interfacing"

      ],
      certificateUrl: "https://drive.google.com/file/d/1KmJc604RoJI5Y2MIGlUPXlavGXPMOxzK/view?usp=sharing",
      icon: <FaMicrochip className="text-white" />,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-700"
    }
  ];
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Internship Experience
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Verified professional internships with detailed responsibilities and certificates
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="flex-1 bg-gray-800/50 rounded-xl border border-gray-700/50 p-8 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_10px_30px_rgba(96,165,250,0.1)] group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`${intern.color} p-4 rounded-xl flex-shrink-0 shadow-lg`}>
                        {intern.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{intern.role}</h3>
                        <p className="text-blue-400 text-lg">{intern.company}</p>
                        <div className="flex items-center text-gray-400 mt-2">
                          <FaCalendarAlt className="mr-2" />
                          <span>{intern.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg">
                      {intern.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="flex items-center text-white font-semibold mb-4">
                        <FaTasks className="mr-3 text-blue-400" />
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-4 pl-2">
                        {intern.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3"></span>
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href={intern.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-blue-400 hover:bg-blue-500/10 hover:text-white transition-colors group-hover:border-blue-400/50 text-lg"
                      >
                        <FaCertificate className="mr-3" />
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};