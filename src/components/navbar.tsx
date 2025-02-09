import React, { useState, useEffect } from "react";
import NavbarItem from "./navbar-item";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "projects", "education"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-background">
      <div className="flex w-full text-foreground p-4 px-10 justify-between">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center align-middle justify-center">
          <p className="text-center w-full font-bold text-foreground-mid text-3xl">U</p>
        </div>
        <div className="hidden md:flex flex-1 align-middle justify-center items-center">
          <ul className="flex gap-5">
            <NavbarItem 
              name="Experience" 
              isActive={activeSection === "experience"}
              onClick={() => scrollToSection("experience")}
            />
            <NavbarItem 
              name="Projects" 
              isActive={activeSection === "projects"}
              onClick={() => scrollToSection("projects")}
            />
            <NavbarItem 
              name="Education" 
              isActive={activeSection === "education"}
              onClick={() => scrollToSection("education")}
            />
          </ul>
        </div>
        <div className="w-16 h-16 rounded-full flex items-center align-middle justify-center text-foreground">
          {/* <MdMenu size={32} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
