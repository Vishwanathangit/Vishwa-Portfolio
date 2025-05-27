import { useEffect } from "react";
import React from "react";
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.mobile-menu-content')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, setMenuOpen]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-40 
                 transition-all duration-300 ease-in-out overflow-hidden
                 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="mobile-menu-content flex flex-col items-center justify-center h-full">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-blue-500 transition-colors"
          aria-label="Close Menu"
        >
          &times;
        </button>
        <div className="flex flex-col items-center space-y-8 px-4">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "certificates", label: "Certifications" },
            { id: "about", label: "Resume" },
            { id: "extracurricular", label: "Activities" },
            { id: "interests", label: "Interests" },
            { id: "contact", label: "Contact" }
          ].map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold text-white transform transition-all duration-300
                          hover:text-blue-500
                          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: menuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};