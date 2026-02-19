import React from 'react';

const reasons = [
  {
    icon: "verified_user",
    title: "ISO Certified",
    description: "ISO 9001:2015 certified quality management systems ensuring consistent delivery."
  },
  {
    icon: "map",
    title: "Pan-India Presence",
    description: "Projects delivered successfully across diverse Indian terrains and climate zones."
  },
  {
    icon: "currency_rupee",
    title: "Cost-Optimized",
    description: "Value engineering to reduce material costs without compromising structural safety."
  },
  {
    icon: "gavel",
    title: "Code Compliant",
    description: "Strict adherence to IS Codes (IS 456, IS 800) and local municipal bylaws."
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-12 py-20 max-w-[1440px]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-[720px]">
          <h2 className="text-text-main text-3xl md:text-4xl font-bold leading-tight">Why Choose Saanvi Structural Soln?</h2>
          <p className="text-text-muted text-lg font-normal leading-normal">Engineering excellence combined with deep local regulatory knowledge to deliver safe, sustainable, and cost-effective solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 rounded-xl border border-border-light bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{reason.icon}</span>
              </div>
              <div>
                <h3 className="text-text-main text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;