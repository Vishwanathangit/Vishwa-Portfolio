import { motion } from "framer-motion";
import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaBriefcase, FaBehance } from "react-icons/fa";
import emailjs from '@emailjs/browser';
const Vishwa = () => {
  return <span>Vishwa</span>;
};
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((response) => {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        setSubmitStatus('error');
        console.error('Failed to send message:', err);
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-indigo-900/10 relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-100">
              <Vishwa />
            </h3>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Have a project in mind or want to connect? Send me a message!
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gray-800/70 rounded-lg border border-gray-500 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-100 flex items-center">
                  <FaPaperPlane className="mr-3 text-blue-400" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100 mb-1">Location</h4>
                      <p className="text-gray-300">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100 mb-1">Email</h4>
                      <a
                        href="mailto:vishwanathan1720@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        vishwanathan1720@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <FaPhone className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100 mb-1">Phone</h4>
                      <a href="tel:+91 7305266720" className="text-gray-300 hover:text-blue-400 transition-colors">
                        +91 7305266720
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
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
                        className="bg-gray-700/70 p-3 rounded-lg transition-all duration-200"
                        whileHover={{ y: -2 }}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/70 rounded-lg border border-gray-500 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-100 flex items-center">
                  <FaBriefcase className="mr-3 text-green-400" />
                  Availability
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Current Status</h4>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-gray-300">Available for new opportunities</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Preferred Contact Method</h4>
                    <p className="text-gray-300">Email or LinkedIn message</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Response Time</h4>
                    <p className="text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/70 rounded-lg border border-gray-500 p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-100 flex items-center">
                <FaEnvelope className="mr-3 text-cyan-400" />
                Send Me a Message
              </h3>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 p-4 bg-green-500/30 border border-green-400/50 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 p-4 bg-red-500/30 border border-red-400/50 rounded-lg text-red-400 text-center"
                >
                  Oops! Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700/70 border border-gray-500 rounded-lg px-4 py-3 text-gray-100 transition focus:outline-none focus:border-cyan-400"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700/70 border border-gray-500 rounded-lg px-4 py-3 text-gray-100 transition focus:outline-none focus:border-cyan-400"
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-700/70 border border-gray-500 rounded-lg px-4 py-3 text-gray-100 transition focus:outline-none focus:border-cyan-400"
                    placeholder="What's this about?"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-700/70 border border-gray-500 rounded-lg px-4 py-3 text-gray-100 transition focus:outline-none focus:border-cyan-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 py-3 px-6 rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50"
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Contact;