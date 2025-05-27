import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub,FaEnvelope, FaPhone, FaMapMarkerAlt, FaBehance } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-indigo-900/10 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-100">
              &lt;Vishwa /&gt;
            </h3>
            <p className="text-gray-300 text-sm">
              Building innovative web solutions with passion and precision.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: <FaLinkedin className="text-blue-400" />, url: "https://www.linkedin.com/in/vishwanathan2004/", label: "LinkedIn" },
                { icon: <FaGithub className="text-gray-300" />, url: "https://github.com/Vishwanathangit/", label: "GitHub" },
                { icon: <FaBehance className="text-cyan-400" />, url: "https://www.behance.net/VishwanathanDesigns", label: "Behance" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/70 p-2 rounded-lg transition-all duration-200"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Resume", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-100">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center md:justify-start items-center text-gray-300">
                <FaEnvelope className="mr-2 text-green-400" />
                <a
                  href="mailto:vishwanathan1720@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  vishwanathan1720@gmail.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center text-gray-300">
                <FaPhone className="mr-2 text-purple-400" />
                <a href="tel:+917305266720" className="hover:text-cyan-400 transition-colors">
                  +91 7305266720
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center text-gray-300">
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                Chennai, Tamil Nadu
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-12 text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Vishwa. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}