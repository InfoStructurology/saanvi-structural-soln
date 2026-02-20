import React from 'react';
import { InstagramIcon, Linkedin } from 'lucide-react';

interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {

  // Updated to take a string argument for the path
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If no onNavigate prop is provided, let the browser handle the link naturally
    if (!onNavigate) return;

    e.preventDefault(); // Stop full page reload
    console.log(`Navigating to ${path}...`);
    onNavigate(path);
  };

  return (
    <footer className="w-full border-t border-border-light bg-background-off pt-16 pb-8 px-4 lg:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col gap-6">
          <a href="/" onClick={(e) => handleNavigation(e, 'home')}>
            <img
              src="images/Saanvi.png"
              alt="Saanvi Structural Soln"
              className="object-cover w-56"
            />
          </a>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs">
            Delivering the resilient backbone of the modern world through computational precision and engineering artistry. Licensed in all 50 states.
          </p>
          <div className="flex mt-2">
            <a href="https://in.linkedin.com/company/saanvi-structural-soln" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300">
              <img src="images/linkedin.png" alt="linkedin"  className='w-5'>
              </img>            </a>
            <a href="https://www.instagram.com/saanvi_structural_official/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300">
              <img src="images/insta.png"  alt="instagram"className='w-5' />            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-text-main font-bold text-lg">Quick Links</h3>
          <nav className="flex flex-col gap-3">
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/about" onClick={(e) => handleNavigation(e, 'about')}>About Us</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/" onClick={(e) => handleNavigation(e, 'home')}>Our Services</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/projects" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a>
          </nav>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-text-main font-bold text-lg">Services</h3>
          <nav className="flex flex-col gap-3">
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="service/solar" onClick={(e) => handleNavigation(e, 'service-solar')}>Solar</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="service/buildings" onClick={(e) => handleNavigation(e, 'service-building')}>Buildings</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="service/telecom" onClick={(e) => handleNavigation(e, 'service-telecom')}>Telecom Towers</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/blogs" onClick={(e) => handleNavigation(e, 'blogs')}>Blogs</a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-text-main font-bold text-lg">Contact Us</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
              <p className="text-text-muted text-sm">
                Olympia National Tower, 6th floor, Block 3, A3 & A4,
                <br /> North Phase, Guindy Industrial Estate, Chennai 600032
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              <p className="text-text-muted text-sm">044- 4284 5115</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">mail</span>
              <p className="text-text-muted text-sm">Contact@saanvistructural.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">© 2026 Saanvi Structural Soln. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-text-muted hover:text-primary text-sm" href="#">Privacy Policy</a>
          <a className="text-text-muted hover:text-primary text-sm" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;