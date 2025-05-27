import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaCode, FaMusic, FaCamera, FaBook, FaGamepad, FaHiking, FaVideo, FaFigma, FaUtensils,  } from "react-icons/fa";
import { SiDevdotto, SiOpenai } from "react-icons/si";
import { MdSportsCricket } from "react-icons/md";
export const Interests = () => {
  const techInterests = [
    { name: "Web Development", icon: <FaCode className="text-blue-400" /> },
    { name: "UI/UX Design", icon: <SiDevdotto className="text-purple-400" /> },
    { name: "App Design", icon: <FaFigma className="text-green-400" /> },
    { name: "AI Prompting", icon: <SiOpenai className="text-red-400" /> }
  ];
  const creativeInterests = [
    { name: "Photography", icon: <FaCamera className="text-yellow-400" /> },
    { name: "Music Production", icon: <FaMusic className="text-pink-400" /> },
    { name: "Creative Writing", icon: <FaBook className="text-cyan-400" /> },
    { name: "Video Editing", icon: <FaVideo className="text-orange-400" /> }
  ];
  const otherInterests = [
    { name: "Cricket", icon: <MdSportsCricket className="text-blue-400 text-xl" /> },
    { name: "Trekking", icon: <FaHiking className="text-green-400" /> },
   { name: "Gaming", icon: <FaGamepad className="text-red-400" /> },
    { name: "Cooking", icon: <FaUtensils className="text-yellow-400" /> }
  ];
  return (
    <section
      id="interests"
      className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/10 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Interests
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Beyond code - things that inspire and motivate me
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/70 rounded-lg border border-gray-500 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <FaCode className="text-blue-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Tech & Code</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {techInterests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/30 rounded-lg p-4 flex items-center space-x-3 border border-gray-500"
                  >
                    <div className="text-xl">{interest.icon}</div>
                    <span className="text-gray-300 text-sm">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/70 rounded-lg border border-gray-500 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <FaCamera className="text-purple-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Creative Pursuits</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {creativeInterests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/30 rounded-lg p-4 flex items-center space-x-3 border border-gray-500"
                  >
                    <div className="text-xl">{interest.icon}</div>
                    <span className="text-gray-300 text-sm">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/70 rounded-lg border border-gray-500 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                  <FaHiking className="text-green-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Other Passions</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {otherInterests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/30 rounded-lg p-4 flex items-center space-x-3 border border-gray-500"
                  >
                    <div className="text-xl">{interest.icon}</div>
                    <span className="text-gray-300 text-sm">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mt-12 bg-gray-800/70 rounded-lg border border-gray-500 p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-100 flex items-center">
              <FaCode className="mr-3 text-pink-400" />
              Why These Matter
            </h3>
            <p className="text-gray-300 text-sm">
              My diverse interests fuel creativity in my development work. Photography teaches me about composition 
              that translates to UI design, music production helps me understand rhythm in user flows, and trekking 
              reminds me that the best solutions often come when I step away from the screen.
            </p>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Interests;