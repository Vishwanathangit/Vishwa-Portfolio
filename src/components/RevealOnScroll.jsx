import { useEffect, useRef } from "react";
import React from "react";
export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      element.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element); 
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    element.classList.remove("visible"); 
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};