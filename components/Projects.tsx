import React, { useState } from 'react';

const projects = [

  {
    id: 1,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/1.jpg",
    title: "Guajiro_1 MX 129MW",
  },
  {
    id: 2,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/2.jpg",
    title: "NX Horizon XTR_40",
  },
  {
    id: 3,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/3.jpg",
    title: "Blythe_CA",
  },
  {
    id: 4,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/4.jpg",
    alt: "solar4",
    title: "Warwick Solar Farm UQ AUS",
  },
  {
    id: 5,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/5.jpg",
    alt: "Guajiro",
    title: "Sakaka NX ACWA Rows",
  },
  {
    id: 6,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/6.jpg",
    title: "Wright Terrain following Los Banos",
  },
  {
    id: 7,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/7.jpg",
    title: "Wemen Solar Farm AUS",
  },
  {
    id: 8,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/8.jpg",
    title: "Casa Don Pedro Spain aerial 2021",
  },
  {
    id: 9,
    category: 'Solar Engineering',
    location: 'Ahmedabad, India',
    image: "images/9.jpg",
    title: "Cove Mtn_4 Aerial_SRE FSLR",
  },

  {
    id: 10,
    category: 'Building Infrastructure',
    location: 'Mumbai, India',
    image: "images/1b.jpg",
    alt: "whiskey",
    title: "Whiskey Row Pheonix",
  },
  {
    id: 11,
    category: 'Building Infrastructure',
    location: 'Mumbai, India',
    image: "images/2b.jpg",
    alt: "build2",
    title: "Stairs - Keim Drive Job",
  },
  {
    id: 12,
    category: 'Building Infrastructure',
    location: 'Mumbai, India',
    image: "images/3b.jpg",
    alt: "build3",
    title: "1460 Fillmore",
  },
  {
    id: 13,
    category: 'Building Infrastructure',
    location: 'Mumbai, India',
    image: "images/4b.jpg",
    alt: "buildings",
    title: "Barrow Neurological Association",
  },
  {
    id: 14,
    category: 'Building Infrastructure',
    location: 'Mumbai, India',
    image: "images/5b.jpg",
    alt: "building",
    title: "Grand Avenue Lofts, Pheonix",
  },





  {
    id: 15,
    category: 'Telecommunications',
    location: 'Bangalore, India',
    image: "images/1t.jpg",
    alt: "AT&T",
    title: "AT&T Wisil",
    description:
      "8113 Lemont Road, Darien, IL 60515 — Guyed Tower - Tower MOD",
  },
  {
    id: 16,
    category: 'Telecommunications',
    location: 'Bangalore, India',
    image: "images/2t.jpg",
    alt: "Skyward",
    title: "Skyward NSB",
    description: "1897 N MAIN ST., SEARCY, AR 72143 — Proposed Overall Site",
  },
  {
    id: 17,
    category: 'Telecommunications',
    location: 'Bangalore, India',
    image: "images/3t.jpg",
    alt: "Anchor Project",
    title: "Anchor Project",
    description:
      "3810 Bancroft Street, San Diego, CA 92104 — Proposed FRP Screen",
  },
  {
    id: 18,
    category: 'Telecommunications',
    location: 'Bangalore, India',
    image: "images/4t.jpg",
    alt: "Verizon",
    title: "Verizon",
    description: "34551 Kaiser Dr, Fremont, CA 94555 — FRP Mount MOD",
  },
  {
    id: 19,
    category: 'Telecommunications',
    location: 'Bangalore, India',
    image: "images/5t.jpg",
    alt: "SAC (MXEXP)",
    title: "SAC (MXEXP)",
    description:
      "2660 Civic Center Dr, Roseville, MN 55113 — Monopole tower MOD",
  },
  {
    id: 20,
    category: 'Telecommunications',
    location: 'Bangalore, India',
    image: "images/6t.jpg",
    alt: "US Cellular",
    title: "US Cellular",
    description: `289 N. Pekin Rd., Woodland, WA 98674 — Self-Support Tower MOD, Platform Mount MOD`,
  },
];

const filters = ['All Projects', 'Solar Engineering', 'Building Infrastructure', 'Telecommunications'];

interface Project {
  onNavigate?: (page: string) => void;
}
const Projects: React.FC<Project> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  console.log(activeFilter)
  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full relative z-10 min-h-screen bg-background-light">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-32 h-32 top-20 left-[10%] rounded-sm"></div>
        <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-24 h-24 top-40 right-[15%] rounded-sm"></div>
      </div>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-10 py-10 lg:py-16 relative z-10">
        {/* Hero / Heading Section */}
        <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
          <div className="relative inline-block w-fit mx-auto md:mx-0">
            <h1 className="text-text-main text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Our Portfolio
            </h1>
            <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-primary rounded-full"></div>
          </div>
          <p className="text-text-muted text-lg font-normal max-w-2xl mx-auto md:mx-0 mt-2">
            A collection of structural challenges solved through computational precision and engineering artistry.

          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 overflow-x-auto p-2 scrollbar-hide">
          <div className="flex flex-nowrap gap-2 md:gap-4 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={` group flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 ${activeFilter === filter
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white border border-border-light text-text-muted hover:text-primary hover:border-primary/30'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-border-light hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <button onClick={() => onNavigate && onNavigate('blogs')} className="px-6 py-3 bg-white text-primary rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    View Case Study
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-primary ring-1 ring-inset ring-slate-200/20 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-text-muted text-sm">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32">
          <div className="w-full bg-primary py-20 px-6">
            {/* Decorative subtle grid background for CTA */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight max-w-2xl">
                Ready to engineer the future?
              </h2>
              <p className="text-gray-300 text-lg max-w-xl">
                Our team is ready to provide the structural expertise your project needs. Let's discuss your vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button onClick={() => onNavigate && onNavigate('contact')}
                  className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-blue-300 text-white rounded-lg font-bold text-lg hover:bg-blue-800 hover:border-blue-800 transition-colors">
                  Download Brochure
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;