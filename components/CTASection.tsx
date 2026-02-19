import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-12 pb-20 pt-8 max-w-[1440px]">
      <div className="relative w-full rounded-2xl overflow-hidden bg-primary p-10 lg:p-20 text-center shadow-xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Ready to Engineer Your Next Project?</h2>
          <p className="text-blue-100 text-lg leading-relaxed">Let's discuss your requirements and build something robust together. Our team is ready to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-primary hover:bg-gray-100 text-base font-bold transition-all shadow-lg">
              <span>Get a Free Quote</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 text-base font-bold transition-all">
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;