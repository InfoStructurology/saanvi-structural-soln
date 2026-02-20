import React from 'react';
const icon = <svg
  viewBox="0 0 512 512"
  className="w-10 h-10 text-primary"
  fill="currentColor"
>
  {/* Sun */}
  <circle cx="390" cy="120" r="60" />
  {/* Sun Rays */}
  <g stroke="currentColor" strokeWidth="12" strokeLinecap="round">
    <line x1="390" y1="30" x2="390" y2="0" />
    <line x1="390" y1="210" x2="390" y2="240" />
    <line x1="300" y1="120" x2="270" y2="120" />
    <line x1="480" y1="120" x2="510" y2="120" />
    <line x1="330" y1="60" x2="305" y2="35" />
    <line x1="450" y1="60" x2="475" y2="35" />
    <line x1="330" y1="180" x2="305" y2="205" />
    <line x1="450" y1="180" x2="475" y2="205" />
  </g>

  {/* Solar Panel Frame */}
  <polygon points="80,200 360,170 400,360 120,390" />

  {/* Panel Grid Lines */}
  <g stroke="#ffffff" strokeWidth="8">
    {/* Vertical lines */}
    <line x1="150" y1="190" x2="180" y2="380" />
    <line x1="220" y1="180" x2="250" y2="370" />
    <line x1="290" y1="175" x2="320" y2="365" />
    {/* Horizontal lines */}
    <line x1="100" y1="240" x2="380" y2="215" />
    <line x1="110" y1="290" x2="390" y2="265" />
    <line x1="120" y1="340" x2="400" y2="315" />
  </g>

  {/* Stand */}
  <rect x="230" y="390" width="40" height="70" />
  <polygon points="150,470 350,470 400,500 100,500" />
</svg>
const expertise = [
  {
    icon: icon,
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