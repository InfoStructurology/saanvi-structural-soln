import React from 'react';
import ContactSection from './ContactSection';

const ContactUs: React.FC = () => {
  return (
    <div className="w-full relative z-10 min-h-screen">
      {/* Page-specific background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-32 h-32 top-20 left-[10%] rounded-sm"></div>
        <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-24 h-24 top-40 right-[15%] rounded-sm"></div>
        <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-48 h-48 bottom-20 left-[5%] rounded-sm"></div>
        <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-16 h-16 bottom-[40%] right-[5%] rounded-sm"></div>
      </div>

      <ContactSection />
    </div>
  );
};

export default ContactUs;