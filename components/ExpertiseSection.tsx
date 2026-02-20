import React from 'react';

const expertise = [
  {
    icon: "solar_power",
    title: "Solar",
    description: "Utility-scale and residential solar structural analysis.",
    imageUrl: "images/solar.jpg",
    alt: "Solar panels mounted on structural framework in a field",
    link: 'service-solar'
  },
  {
    icon: "apartment",
    title: "Buildings",
    description: "High-rise & complex facility design.",
    imageUrl: "images/buildings.jpg",
    alt: "Modern high-rise glass building exterior looking up",
    link: 'service-building'

  },
  {
    icon: "cell_tower",
    title: "Telecommunication",
    description: "Tower analysis & modification.",
    imageUrl: "images/telecommuni.jpg",
    alt: "Telecommunication tower against a blue sky",
    link:'service-telecom'

  }
];
interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}

const ExpertiseSection: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full px-4 lg:px-12 py-20 max-w-[1440px] flex flex-col gap-12">
      <div className="flex flex-col gap-4 items-center text-center">
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Expertise</span>
        <h1 className="text-text-main text-3xl md:text-5xl font-bold leading-tight">Specialized Structural Solutions</h1>
        <p className="text-text-muted text-lg max-w-2xl">The intersection of computational precision and structural artistry.
          Building the resilient backbone of the modern world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertise.map((item, index) => (
          <article key={index} className="group relative flex flex-col bg-white border border-border-light hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div className="flex flex-col gap-4 p-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">{item.icon}</span>
                <h3 className="text-xl font-bold text-text-main">{item.title}</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
              <button
                onClick={() => onNavigate && onNavigate(item.link)}
                className="mt-2 inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-wide"
                aria-label={`Learn more about ${item.title}`}
              >
                Learn more
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;