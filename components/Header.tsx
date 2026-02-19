import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-border-light bg-white/95 backdrop-blur-md px-4 py-4 lg:px-12 shadow-sm">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => handleNavClick('home')}
      >
        {/* <div className="flex flex-col gap-1 items-center justify-center"> */}
        {/* <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-primary"></div>
            <div className="w-1.5 h-1.5 bg-primary/60"></div>
            <div className="w-1.5 h-1.5 bg-primary"></div>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-primary/60"></div>
            <div className="w-1.5 h-1.5 bg-primary"></div>
            <div className="w-1.5 h-1.5 bg-primary/60"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-text-main text-lg font-bold leading-none tracking-tight">SAANVI</h2>
          <span className="text-[10px] text-text-muted uppercase tracking-widest leading-none mt-1">Structural Soln</span>
        </div> */}
        <img src="images/Saanvi.png" alt="saanvi logo" className="w-32" >
        </img>
      </div>

      <div className="hidden md:flex flex-1 justify-end items-center gap-10">
        <nav className="flex items-center gap-10">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`flex items-center gap-1 text-base font-medium uppercase tracking-wide transition-colors ${['service-solar', 'service-building', 'service-telecom'].includes(currentPage || '') ? 'text-primary-dark font-bold' : 'text-primary hover:text-primary-dark'}`}
            >
              Services
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border-light rounded-lg shadow-lg py-2 flex flex-col animate-fade-in-up">
                <button
                  onClick={() => handleNavClick('service-solar')}
                  className="text-left px-4 py-3 text-text-main hover:bg-background-off hover:text-primary transition-colors text-sm font-medium"
                >
                  Solar Energy
                </button>
                <button
                  onClick={() => handleNavClick('service-building')}
                  className="text-left px-4 py-3 text-text-main hover:bg-background-off hover:text-primary transition-colors text-sm font-medium"
                >
                  Building
                </button>
                <button
                  onClick={() => handleNavClick('service-telecom')}
                  className="text-left px-4 py-3 text-text-main hover:bg-background-off hover:text-primary transition-colors text-sm font-medium"
                >
                  Telecommunication                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-base font-medium uppercase tracking-wide transition-colors ${currentPage === 'about' ? 'text-primary-dark font-bold' : 'text-primary hover:text-primary-dark'}`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className={`text-base font-medium uppercase tracking-wide transition-colors ${currentPage === 'projects' ? 'text-primary-dark font-bold' : 'text-primary hover:text-primary-dark'}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('blogs')}
            className={`text-base font-medium uppercase tracking-wide transition-colors ${currentPage === 'blogs' ? 'text-primary-dark font-bold' : 'text-primary hover:text-primary-dark'}`}
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-base font-medium uppercase tracking-wide transition-colors ${currentPage === 'contact' ? 'text-primary-dark font-bold' : 'text-primary hover:text-primary-dark'}`}
          >
            Contact
          </button>
        </nav>
      </div>

      <button
        className="md:hidden text-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border-light shadow-lg py-4 flex flex-col items-center gap-4 md:hidden z-50">
          <div className="flex flex-col items-center w-full">
            <span className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Services</span>
            <button
              onClick={() => handleNavClick('service-solar')}
              className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide py-1"
            >
              Solar
            </button>
            <button
              onClick={() => handleNavClick('service-building')}
              className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide py-1"
            >
              Buildings
            </button>
            <button
              onClick={() => handleNavClick('service-telecom')}
              className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide py-1"
            >
              Telecom
            </button>
          </div>
          <div className="w-16 h-px bg-border-light my-2"></div>
          <button
            onClick={() => handleNavClick('about')}
            className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('blogs')}
            className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide"
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-primary hover:text-primary-dark transition-colors text-base font-medium uppercase tracking-wide"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;