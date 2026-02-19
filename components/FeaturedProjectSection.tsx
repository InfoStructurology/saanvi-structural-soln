import React from 'react';

interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}
const FeaturedProjectSection: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-white py-20 border-b border-border-light">
      <div className="px-4 lg:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-text-main text-3xl md:text-4xl font-bold leading-tight">
            Featured Project: <br /> <span className="text-primary">Kurnool Ultra Mega Solar Park</span>
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h4 className="text-text-main font-bold">1000 MW Capacity</h4>
                <p className="text-text-muted text-sm mt-1">Structural design for module mounting structures.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h4 className="text-text-main font-bold">Soil Optimization</h4>
                <p className="text-text-muted text-sm mt-1">Pile foundation design optimized for black cotton soil.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
              <div>
                <h4 className="text-text-main font-bold">Wind Load Analysis</h4>
                <p className="text-text-muted text-sm mt-1">Designed to withstand wind speeds up to 47 m/s.</p>
              </div>
            </div>
          </div>
          <button onClick={() => onNavigate && onNavigate('blogs')} className="w-fit mt-4 flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary text-white hover:bg-primary-dark text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95" aria-label="View case study for Kurnool Solar Park">
            <span>View Case Study</span>
          </button>
        </div>
        <div className="flex-1 w-full h-full min-h-[400px] rounded-2xl overflow-hidden relative shadow-2xl">
          <img
            src="https://picsum.photos/1200/800?random=105"
            alt="Aerial view of Kurnool Ultra Mega Solar Park"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width="1200"
            height="800"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;