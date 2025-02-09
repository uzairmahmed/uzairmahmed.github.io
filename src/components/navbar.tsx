import React, { useState, useEffect } from "react";
import NavbarItem from "./navbar-item";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="flex w-full text-foreground p-4 px-10 justify-between items-center">
        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-200 flex items-center align-middle justify-center">
          <p className="text-center w-full font-bold text-foreground-mid text-2xl lg:text-3xl">U</p>
        </div>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background md:hidden">
            <div className="p-4 flex flex-col gap-4">
              <NavbarItem 
                name="Experience" 
                isActive={activeSection === "experience"}
                onClick={() => {
                  scrollToSection("experience");
                  setMobileMenuOpen(false);
                }}
              />
              <NavbarItem 
                name="Projects" 
                isActive={activeSection === "projects"}
                onClick={() => {
                  scrollToSection("projects");
                  setMobileMenuOpen(false);
                }}
              />
              <NavbarItem 
                name="Education" 
                isActive={activeSection === "education"}
                onClick={() => {
                  scrollToSection("education");
                  setMobileMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
