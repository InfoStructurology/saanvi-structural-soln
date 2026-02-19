import React from 'react';

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "20+", label: "Years of Excellence" },
  { value: "25", label: "States Covered" },
  { value: "45+", label: "Team Members" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-12 py-12 bg-background-off border-y border-border-light">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2 items-center text-center p-4">
            <p className="text-primary text-4xl font-bold">{stat.value}</p>
            <p className="text-text-muted text-sm font-medium uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;