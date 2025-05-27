import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaNode, FaReact, FaHtml5, FaBootstrap, FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdOutlineApi } from "react-icons/md";
import { SiTailwindcss, SiReact, SiJavascript, SiExpress } from "react-icons/si";
import MovieAppImage from "../../assets/images/movie-thumbnail.png";
import WeatherAppImage from "../../assets/images/weather.png";
import TaskAppImage from "../../assets/images/task.png";
import AppleCloneImage from "../../assets/images/apple.jpeg";
import SymposiumImage from "../../assets/images/Pranav.png";
import EcommerceImage from "../../assets/images/Nostra.png";
import DeepSightX from "../../assets/images/deepsight.png";
import Udemy from "../../assets/images/udamey.jpeg";
import Trip from "../../assets/images/trip.png";
export const Projects = () => {
  const projects = [
    {
      title: "DeepSightX",
      description:
        "AI Disease Detection Web App built with React, Tailwind CSS, and Roboflow API. Supports image and webcam input, real-time diagnosis of eye conditions, PDF report generation, and responsive design. Enables accessible healthcare with lightweight deployment.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-purple-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "RoboFlowAPI", icon: <MdOutlineApi className="text-green-500" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/DeepSightX.git",
      liveLink: "https://deepsightx.netlify.app/",
      image: DeepSightX,
    },
    {
      title: "Movie App",
      description:
        "Movie Web Application built with React and TMDB API. Includes genre-based browsing, search functionality, paginated results, and a dynamic wishlist. Built using React Router for multi-page navigation and state management for real-time updates.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-purple-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "API", icon: <MdOutlineApi className="text-green-500" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Movie-App-React.git",
      liveLink: "https://movie-app-react-ruby.vercel.app/",
      image: MovieAppImage,
    },
    {
      title: "Weather App React",
      description:
        "Responsive Weather App built with React, Vite, and Tailwind CSS. Integrates OpenWeatherMap API to display real-time weather by city, including temperature and conditions. Features clean UI, mobile-friendly design, and environment-based API key handling.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-purple-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "API", icon: <MdOutlineApi className="text-green-500" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Weather-App-React.git",
      liveLink: "https://weather-app-react-flame-chi.vercel.app/",
      image: WeatherAppImage,
    },
    {
      title: "Task Management App",
      description:
        "Task Management App built with React and React Router DOM. Features full CRUD functionality with form and table layout, local storage integration for data persistence, and multi-page routing using URL parameters.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-purple-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Task-Management-App-React.git",
      liveLink: "https://task-management-app-react-one.vercel.app/",
      image: TaskAppImage,
    },
    {
      title: "Apple Clone",
      description:
        "Static Apple website clone built with ReactJS. Focused on creating a clean, responsive UI using reusable components. Strengthened skills in JSX, props, and component-based architecture for scalable front-end development.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-purple-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Apple-Clone-React.git",
      liveLink: "https://apple-clone-react-sage.vercel.app/",
      image: AppleCloneImage,
    },
    {
      title: "Symposium Pranav 2K24",
      description:
        "Symposium Website built using HTML, CSS, Bootstrap, and JavaScript. Led the team as Team Lead to create a fully responsive, multi-page site with sections like Home, About, and Events. Deployed on Hostinger with cross-browser compatibility and structured, user-friendly design.",
      technologies: [
        { name: "Html", icon: <FaHtml5 className="text-blue-400" /> },
        { name: "CSS", icon: <FaCss3 className="text-purple-400" /> },
        { name: "BootStrap", icon: <FaBootstrap className="text-green-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-blue-400" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Pranav-2K24.git",
      liveLink: "https://pranav2k24.netlify.app/",
      image: SymposiumImage,
    },
    {
      title: "Nostra E - Commerce",
      description:
        "Nostra E-commerce website built from scratch using HTML, CSS, and JavaScript. Features include a functional search bar, checkbox-based filtering, scroll-triggered animations, and a fully responsive, user-friendly UI.",
      technologies: [
        { name: "Html", icon: <FaHtml5 className="text-blue-400" /> },
        { name: "Css", icon: <FaCss3 className="text-gray-300" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-purple-500" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Nostra-E-Commerce-Clone.git",
      liveLink: "https://vishwanathangit.github.io/Nostra-E-Commerce-Clone/",
      image: EcommerceImage,
    },
    {
      title: "Udemy - Clone",
      description:
        "Udemy clone rebuilt using ReactJS, transforming a static HTML/CSS site into reusable components. Gained hands-on experience with React rendering and structure. Deployed live on Vercel for easy sharing and testing.",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-gray-300" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Udemy-Clone-React.git",
      liveLink: "https://udemy-clone-react-ruddy.vercel.app/",
      image: Udemy,
    },
    {
      title: "Tripadvisor - Clone",
      description:
        "Tripadvisor clone website built with HTML and CSS. Implemented Flexbox, media queries, and positioning for a fully responsive design. Gained hands-on experience with layout adaptation and deployed the project via GitHub.",
      technologies: [
        { name: "Html", icon: <FaHtml5 className="text-blue-400" /> },
        { name: "Css", icon: <FaCss3 className="text-gray-300" /> },
      ],
      codeLink: "https://github.com/Vishwanathangit/Tripadvisor-Clone.git",
      liveLink: "https://vishwanathangit.github.io/Tripadvisor-Clone/",
      image: Trip,
    },
  ];
  const handleTouchStart = (e) => {
    console.log("Touch event triggered on:", e.target);
  };
  const handleLinkClick = (url) => {
    console.log("Navigating to:", url);
    window.open(url, "_blank", "noopener");
  };
  return (
    <section id="projects" className="h-auto py-12 bg-gradient-to-b from-gray-900 to-indigo-900/10 relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        {[...Array(12)].map((_, i) => {
          const icons = [FaCode, SiJavascript, SiReact, SiExpress, FaHtml5, SiTailwindcss];
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              className="absolute text-white/30 text-3xl sm:text-4xl"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: 0.8,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                transition: {
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            >
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4"
            >
              A collection of my best work, each crafted with attention to detail and innovative solutions
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
                onTouchStart={handleTouchStart}
              >
                <div className="h-full bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="h-32 sm:h-40 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                        console.log(`Image failed to load: ${project.title}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-black/30 p-1 rounded-md text-xs">
                          {tech.icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm text-gray-400 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-700/50 text-gray-300 py-1 px-2 sm:px-3 rounded-full text-xs flex items-center gap-1"
                          >
                            {tech.icon}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-auto">
                      <a
                        href={project.codeLink}
                        onClick={() => handleLinkClick(project.codeLink)}
                        className="flex-1 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white py-2 px-3 rounded-lg text-xs sm:text-sm transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-1" />
                        Code
                      </a>
                      <a
                        href={project.liveLink}
                        onClick={() => handleLinkClick(project.liveLink)}
                        className="flex-1 flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-3 rounded-lg text-xs sm:text-sm transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/Vishwanathangit"
              onClick={() => handleLinkClick("https://github.com/Vishwanathangit")}
              className="inline-flex items-center px-4 py-2 border border-indigo-500/30 text-indigo-400 rounded-full hover:bg-indigo-500/10 transition-all duration-300 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
              <svg
                className="ml-2 w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Projects;