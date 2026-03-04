import React, { useState, useRef, useEffect } from "react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (page: string) => {
    onNavigate?.(page);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }

      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navButtonStyle = (page: string | string[]) => {
    const isActive = Array.isArray(page)
      ? page.includes(currentPage || "")
      : currentPage === page;

    return `px-4 py-2 rounded-md text-base font-medium uppercase tracking-wide transition-all ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-primary hover:bg-blue-600 hover:text-white"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-light bg-white/95 backdrop-blur-md px-4 py-4 lg:px-12 shadow-sm">
      
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => handleNavClick("home")}
      >
        <img src="images/Saanvi.png" alt="saanvi logo" className="w-32" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-10">
        <nav className="flex items-center gap-6">
          
          {/* Services */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={navButtonStyle([
                "service-solar",
                "service-building",
                "service-telecom",
              ])}
            >
              Services
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border-light rounded-lg shadow-lg py-2 flex flex-col">
                <button
                  onClick={() => handleNavClick("service-solar")}
                  className="text-left px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Solar Energy
                </button>
                <button
                  onClick={() => handleNavClick("service-building")}
                  className="text-left px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Building
                </button>
                <button
                  onClick={() => handleNavClick("service-telecom")}
                  className="text-left px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Telecommunication
                </button>
              </div>
            )}
          </div>

          {/* About */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className={navButtonStyle(["about", "career"])}
            >
              About
            </button>

            {isAboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border-light rounded-lg shadow-lg py-2 flex flex-col">
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-left px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavClick("career")}
                  className="text-left px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Career
                </button>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          <button
            onClick={() => handleNavClick("projects")}
            className={navButtonStyle("projects")}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick("blogs")}
            className={navButtonStyle("blogs")}
          >
            Blogs
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={navButtonStyle("contact")}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border-light shadow-lg py-4 flex flex-col items-center gap-4 md:hidden z-50">
          
          <button onClick={() => handleNavClick("service-solar")} className={navButtonStyle("service-solar")}>Solar</button>
          <button onClick={() => handleNavClick("service-building")} className={navButtonStyle("service-building")}>Buildings</button>
          <button onClick={() => handleNavClick("service-telecom")} className={navButtonStyle("service-telecom")}>Telecommunication</button>

          <div className="w-16 h-px bg-border-light my-2"></div>

          <button onClick={() => handleNavClick("about")} className={navButtonStyle("about")}>About Us</button>
          <button onClick={() => handleNavClick("career")} className={navButtonStyle("career")}>Career</button>

          <div className="w-16 h-px bg-border-light my-2"></div>

          <button onClick={() => handleNavClick("projects")} className={navButtonStyle("projects")}>Projects</button>
          <button onClick={() => handleNavClick("blogs")} className={navButtonStyle("blogs")}>Blogs</button>
          <button onClick={() => handleNavClick("contact")} className={navButtonStyle("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;