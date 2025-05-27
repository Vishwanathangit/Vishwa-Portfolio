import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";
import { FaCode,FaChalkboardTeacher, FaUsers } from "react-icons/fa";
export const Extracurricular = () => {
  const activities = [
    {
      title: "Website Team Lead",
      organization: "Pranav 2K24",
      duration: "Apr 2024",
      description: [
        "Led a team to develop a symposium website for our college",
        "Built using HTML, CSS, Bootstrap, and JavaScript",
        "Deployed the website successfully on Hostinger"
      ],
      icon: <FaCode className="text-yellow-500 text-xl" />,
      accent: "from-yellow-600/20 to-yellow-600/10"
    },
    {
      title: "Event - Coordinator",
      organization: "Pranav - 2K24",
      duration: "Apr 2024",
      description: [
        `Served as Event Coordinator for "Fusion Forum" at our college symposium`,
        "Conducted the event smoothly along with my team",
        "Managed participation of 50+ teams with efficient coordination"
      ],
      icon: <FaUsers className="text-purple-500 text-xl" />,
      accent: "from-purple-600/20 to-purple-600/10"
    },
    {
      title: "Presentation - E Cube",
      organization: "MSEC",
      duration: "Sept 2024",
      description: [
        "Presented a mini project at the E-Cube (Enrichment, Enhancement, Empowerment) inter-college event",
        "Secured 3rd prize among multiple participating teams",
        "Demonstrated technical and practical knowledge effectively"
      ],
      icon: <FaChalkboardTeacher className="text-green-500 text-xl" />,
      accent: "from-green-600/20 to-green-600/10"
    }
  ];
  return (
    <section id="extracurricular" className="py-20 bg-gradient-to-b from-gray-900/95 via-gray-900 to-purple-900/30">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 bg-clip-text text-transparent inline-block">
              Extracurricular Activities
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Beyond academics, I actively engage in tech communities and continuous learning
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${activity.accent} border border-white/10 hover:border-transparent transition-all duration-300 hover:scale-[1.02] group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                      <p className="text-purple-300/90 font-medium">{activity.organization}</p>
                    </div>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-white/5 text-purple-300 mb-4 inline-block">
                    {activity.duration}
                  </span>
                  <ul className="space-y-2 flex-grow">
                    {activity.description.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-start before:content-['▹'] before:text-purple-400 before:mr-3 before:mt-1 before:text-sm text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 right-0 -bottom-20 h-40 w-full bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none"></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};