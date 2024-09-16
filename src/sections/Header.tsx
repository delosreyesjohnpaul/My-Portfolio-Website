"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  // Use IntersectionObserver to track the active section while scrolling
  useEffect(() => {
    const sections = ["home", "projects", "about", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust to detect when the section is in view
    };

    // Add the type for 'entries' and 'entry' as IntersectionObserverEntry[]
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((sectionId) => {
      const sectionElement = document.querySelector(`#${sectionId}`);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.querySelector(`#${sectionId}`);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-center sticky top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {/* Home Link */}
        <Link href="#home" onClick={() => setActiveSection("home")} className={`nav-item ${activeSection === "home" ? "bg-white text-gray-900" : "hover:bg-white hover:text-gray-900"}`}>
          Home
        </Link>

        {/* Projects Link */}
        <Link href="#projects" onClick={() => setActiveSection("projects")} className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900" : "hover:bg-white hover:text-gray-900"}`}>
          Projects
        </Link>

        {/* About Link */}
        <Link href="#about" onClick={() => setActiveSection("about")} className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900" : "hover:bg-white hover:text-gray-900"}`}>
          About
        </Link>

        {/* Contact Link */}
        <Link href="#contact" onClick={() => setActiveSection("contact")} className={`nav-item ${activeSection === "contact" ? "bg-white text-gray-900" : "hover:bg-white hover:text-gray-900"}`}>
          Contacts
        </Link>
      </nav>
    </div>
  );
};
