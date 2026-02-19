import React from 'react';
import { InstagramIcon, Linkedin } from 'lucide-react';
interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}
const Footer: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-border-light bg-background-off pt-16 pb-8 px-4 lg:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col gap-6">
          {/* <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 bg-primary"></div>
              <div className="w-1.5 h-1.5 bg-primary/60"></div>
              <div className="w-1.5 h-1.5 bg-primary"></div>
            </div>
            <h2 className="text-xl font-bold text-text-main">Saanvi Structural</h2>
          </div> */}
          <a href="/">
            <img
              src="images/Saanvi.png"
              alt="Saanvi Structural Soln"
              className="object-cover w-56"
            /></a>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs">
            Delivering the resilient backbone of the modern world through computational precision and engineering artistry. Licensed in all 50 states.          </p>
          <div className="flex gap-4 mt-2">
            {/* <a className="text-text-muted hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="text-text-muted hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a> */}
            <a
              href="https://in.linkedin.com/company/saanvi-structural-soln" target="_blank"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/saanvi_structural_official/" target="_blank"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-text-main font-bold text-lg">Quick Links</h3>
          <nav className="flex flex-col gap-3">
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/about">About Us</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/">Our Services</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/projects">Projects</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/">Careers</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/contact">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-text-main font-bold text-lg">Services</h3>
          <nav className="flex flex-col gap-3">
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/service/solar">Solar</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/services/buildings">Buildings</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/services/telecom">Telecom Towers</a>
            <a className="text-text-muted hover:text-primary transition-colors text-sm" href="/blogs">Blogs</a>
            {/* <a className="text-text-muted hover:text-primary transition-colors text-sm" href="#">Peer Review</a> */}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-text-main font-bold text-lg">Contact Us</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
              <p className="text-text-muted text-sm">
                Olympia National Tower, 6th floor, Block 3, A3 & A4,
                <br /> North Phase, Guindy Industrial Estate, Chennai 600032</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              <p className="text-text-muted text-sm">+91 80 1234 5678</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">mail</span>
              <p className="text-text-muted text-sm">Contact@saanvistructural.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm">© 2023 Saanvi Structural Soln. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-text-muted hover:text-primary text-sm" href="#">Privacy Policy</a>
          <a className="text-text-muted hover:text-primary text-sm" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;