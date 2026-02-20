import React from 'react';

interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}

const HeroSection: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {

  return (
    <section className="w-full px-4 lg:px-12 py-16 lg:py-24 max-w-[1440px] flex flex-col lg:flex-row items-center justify-center min-h-[80vh]">
      <div className="relative w-full flex flex-col items-center justify-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl -mt-20 relative">
          {/* Abstract Grid Graphic */}
          {/* <div className="flex gap-8 mb-4 opacity-90" aria-hidden="true">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary rounded-sm"></div>
              <div className="w-10 h-10 bg-primary rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-4 mt-8"> 
              <div className="w-10 h-10 bg-primary rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-4 mt-8"> 
              <div className="w-10 h-10 bg-primary rounded-sm"></div>
              <div className="w-10 h-10 bg-primary rounded-sm"></div>
            </div>
          </div>

          <h1 className="text-text-main text-5xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            SAANVI STRUCTURAL SOLN
          </h1>
          <p className="text-text-muted text-2xl lg:text-3xl font-light tracking-wide">
            Consulting Structural Engineering
          </p> */}
          <img
            src="images/Saanvi.png"
            alt="Saanvi Structural Soln"
            className="object-cover"
          />

          <div className="flex flex-wrap gap-6 mt-10 justify-center w-full">
            <button onClick={() => onNavigate && onNavigate('contact')}
              className="flex items-center justify-center gap-3 h-14 px-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-medium transition-all group">
              <span className="material-symbols-outlined group-hover:text-white transition-colors">mail</span>
              <span>Contact us</span>
            </button>
            <button className="flex items-center justify-center gap-3 h-14 px-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-medium transition-all group">
              <span className="material-symbols-outlined group-hover:text-white transition-colors">calendar_month</span>
              <a target="_blank"
                href="https://calendly.com/"> <span>Schedule a call</span></a>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-12 absolute right-12 top-1/2 -mt-20 -translate-y-1/2">
          <button onClick={() => onNavigate && onNavigate('service-solar')}
          ><div className="group flex flex-col items-center gap-2 cursor-pointer">

              <span className="text-6xl text-text-main group-hover:text-primary transition-colors"></span>
              <svg
                viewBox="0 0 512 512"
                className="w-20 h-20 text-primary"
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
              <span className="text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Solar</span>

            </div> </button>
          <button onClick={() => onNavigate && onNavigate('service-building')}>
            <div className="group flex flex-col items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-6xl text-text-main group-hover:text-primary transition-colors text-primary" >apartment</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Buildings</span>
            </div>
          </button>
          <button onClick={() => onNavigate && onNavigate('service-telecom')}
          >          <div className="group flex flex-col items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-6xl text-text-main group-hover:text-primary transition-colors text-primary">cell_tower</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Telecom</span>
            </div>
          </button>

        </div>
      </div>

      {/* Side Icons (Desktop) */}


      {/* Bottom Icons (Mobile) */}
      <div className="flex lg:hidden flex-row gap-20 mt-12 justify-center w-full">
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => onNavigate && onNavigate('service-solar')}
          >           <svg
            viewBox="0 0 512 512"
            className="w-20 h-20 text-primary"
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
            </svg></button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => onNavigate && onNavigate('service-building')}>

            <span className="material-symbols-outlined text-7xl text-text-main text-primary">apartment</span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => onNavigate && onNavigate('service-telecom')}
          >
            <span className="material-symbols-outlined text-7xl text-text-main text-primary">cell_tower</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;