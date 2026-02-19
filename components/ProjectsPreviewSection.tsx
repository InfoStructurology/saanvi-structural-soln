import React from 'react';

const projects = [
  {
    id: 1,
    category: 'Solar Engineering',
    title: 'Guajiro_1 MX 129MW',
    location: '',
    image: 'images/1.jpg',
  },
  {
    id: 2,
    category: 'Building Infrastructure',
    title: 'Whiskey Row Pheonix',
    location: '',
    image: 'images/1b.jpg',
  },
  {
    id: 3,
    category: 'Telecommunications',
    title: 'AT&T Wisil',
    location: '',
    image: 'images/1t.jpg',
  },
];

interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}

const ProjectsPreviewSection: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-background-off py-20 border-y border-border-light">
      <div className="w-full px-4 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="flex flex-col gap-3 max-w-[700px]">
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Portfolio</span>
                <h2 className="text-text-main text-3xl md:text-5xl font-bold leading-tight">Delivering Landmarks</h2>
                <p className="text-text-muted text-lg">
                    A glimpse into our diverse portfolio of engineering excellence across India.
                </p>
            </div>
            <button 
                onClick={() => onNavigate && onNavigate('projects')}
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all whitespace-nowrap"
                aria-label="View all projects"
            >
                View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-border-light hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                        src={project.image}
                        alt={`Photo of ${project.title} in ${project.location}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width="600"
                        height="450"
                        />
                        <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-md bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-primary shadow-sm">
                            {project.category}
                        </span>
                        </div>
                         {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <button 
                                onClick={() => onNavigate && onNavigate('projects')}
                                className="px-6 py-3 bg-white text-primary rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                                aria-label={`View details for ${project.title}`}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col gap-2">
                        <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                        {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-text-muted text-sm">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">location_on</span>
                        <span>{project.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <button 
            onClick={() => onNavigate && onNavigate('projects')}
            className="flex md:hidden items-center justify-center gap-2 text-primary font-bold mt-8 w-full h-12 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
        >
            View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;