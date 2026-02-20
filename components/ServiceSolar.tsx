import React from 'react';
import { FaArrowsAltH, FaBalanceScale, FaBatteryFull, FaBolt, FaChargingStation, FaClipboardCheck, FaCogs, FaHome, FaIndustry, FaSun, FaUsers, FaWind } from 'react-icons/fa';
import { PiAlignCenterVerticalSimpleFill } from 'react-icons/pi';

interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}
const ServiceSolar: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {


  const SolarProjects = [
    {
      img: "images/1.jpg",
      alt: "Solar",
      title: "Guajiro_1 MX 129MW",
    },
    {
      img: "images/2.jpg",
      alt: "Solar",
      title: "NX Horizon XTR_40",
    },
    {
      img: "images/3.jpg",
      alt: "solar3",
      title: "Blythe_CA",
    },
    {
      img: "images/4.jpg",
      alt: "solar4",
      title: "Warwick Solar Farm UQ AUS",
    },
    {
      img: "images/5.jpg",
      alt: "Guajiro",
      title: "Sakaka NX ACWA Rows",
    },
    {
      img: "images/6.jpg",
      alt: "solar 6",
      title: "Wright Terrain following Los Banos",
    },
    {
      img: "images/7.jpg",
      alt: "solar7",
      title: "Wemen Solar Farm AUS",
    },
    {
      img: "images/8.jpg",
      alt: "solar8",
      title: "Casa Don Pedro Spain aerial 2021",
    },
    {
      img: "images/9.jpg",
      alt: "solar9",
      title: "Cove Mtn_4 Aerial_SRE FSLR",
    },
  ];
  const SolarBenifits = {
    capabilities: [
      {
        title: "Comprehensive Engineering Services",
        description:
          "", icon: <FaClipboardCheck className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
      },
      {
        title: "Specialized Structural Solutions",
        description:
          "", icon: <FaCogs className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
      },
      {
        title: "Expertise Across Sectors",
        description:
          "", icon: <FaIndustry className="text-[35px]" style={{ color: "black" }} />,
        highlight: ""
      }
    ]
  };
  const SolarServices = {
    main: [{
      title: "Fixed Tilt",
      description:
        "",
      icon: <FaArrowsAltH className="text-[35px]" style={{ color: "black" }} />,
      highlight:
        ""
    },
    {
      title: "Trackers",
      description:

        "", icon: <FaSun className="text-[35px] text-orange-500" style={{ color: "black" }} />,
      highlight: ""
    },
    {
      title: "Rooftop-Commercial & Residential",
      description:
        "", icon: <FaHome className="text-[35px] text-red-500" style={{ color: "black" }} />,
      highlight: ""
    },
    {
      title: "Pile Design",
      description:
        "", icon: <PiAlignCenterVerticalSimpleFill className="text-[35px] text-yellow-500" style={{ color: "black" }} />,
      highlight: ""
    },
    {
      title: "Substation Structure",
      description:
        "", icon: <FaBolt className="text-[35px] text-green-500" style={{ color: "black" }} />,
      highlight: ""
    },
    {
      title: "Battery Energy Storage System (BESS) Support Structure",
      description:
        "", icon: <FaBatteryFull className="text-[35px] text-red-500" style={{ color: "black" }} />,
      highlight: "",
    },
    {
      title: "Inverter Supporting Structure",
      description:
        "", icon: <FaChargingStation className="text-[35px] text-yellow-500" style={{ color: "black" }} />,
      highlight:
        ""
    }],
    additional: [
      {
        title: "Peer Review",
        description:
          "", icon: <FaUsers className="text-[35px] text-cyan-600" style={{ color: "black" }} />,
        highlight: "",
      },
      {
        title: "Independent Engineering",
        description:
          "", icon: <FaBalanceScale className="text-[35px] text-emerald-600" style={{ color: "black" }} />,
        highlight:
          "",
      },
      {
        title: "Wind Tunnel Guidance",
        description:
          "", icon: <FaWind className="text-[35px] text-sky-600" style={{ color: "black" }} />,
        highlight: ""
      }

    ]
  }
  return (
    <div className="flex flex-1 flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full max-w-[1440px] p-4 lg:p-6">
        <div
          className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden items-start justify-center px-6 lg:px-16"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAu0HPcyz3wn7dJxgWuVG67yoFDyv_7O66d2Qwsj8Ar-dijLOEn3JAPMB2kM5tFqaSN1EQ0nBL5X_cQDDjuct_xypD-rYzPsctrfyE6HPFQGg5L2F7399zkHQuCunze3qR8ScKaXt9hqM9Jp9LU6K0wQSsvdvXTUZ90G_uXLI1x2KB8zcGlw4Q9S6-0bd0WFrnDoHFmXD8O0USrcXRIYpfedmVwwfMRVlr_aP8fRXiZEohBoa4bjX1A0Yvlkh54ffXmuo0Ol3e9tdJw")' }}
        >
          <div className="flex flex-col gap-4 max-w-[640px] text-left animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-wider w-fit">
              Sustainable Energy
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Solar
            </h1>
            <h2 className="text-gray-200 text-lg lg:text-xl font-normal leading-relaxed max-w-[540px]">
              Engineering the foundation of the renewable transition. From 500 MW utility-scale plants to complex commercial carports, we optimize steel and foundations for speed and stability.

            </h2>
            <div className="flex gap-4 mt-4">
              <button onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }} className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white hover:text-primary transition-all duration-300">
                <span>View Projects</span>
              </button>
              <button onClick={() => onNavigate && onNavigate('contact')} className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary/90 border-2 border-transparent transition-all duration-300 shadow-lg shadow-blue-900/20">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white border-b border-border-light py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">40GW+</span>
            <span className="text-sm text-text-muted font-medium">Capacity Installed</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">50</span>
            <span className="text-sm text-text-muted font-medium">States Covered</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">5000+</span>
            <span className="text-sm text-text-muted font-medium">Project Completed</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">-40%</span>
            <span className="text-sm text-text-muted font-medium">Design Time</span>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full max-w-[1440px] px-6 lg:px-10 py-20 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-light pb-8">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</h2>
            <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
              Solar Infrastructure Services
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              We engineer foundations and structures that withstand diverse soil conditions and extreme weather, maximizing your plant's operational efficiency.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          {SolarServices.main.map((feature) => (
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">

              <div className="p-8 flex flex-col gap-4 items-center flex-1">
                <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-white group-hover:text-white transition-colors">
                  {feature.icon}
                  {/* <span className="material-symbols-outlined text-2xl">grid_view</span> */}
                </div>
                <h3 className="text-text-main text-xl font-bold">{feature.title}</h3>
                {/* <p className="text-text-muted text-sm leading-relaxed">
                  Fixed tilt and tracker system foundations optimized for piles, screw piles, or ballast foundations depending on geo-tech reports.
                </p> */}
              </div>
            </div>))
          }

          {/* <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div 
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR3Wb8wycmUP5ON1naie14Q7EwUqUQP0waZIL5Syzb40v_Yj5MP3980Sru6THoJfQyjwnkXFbbUL_VFnHKAnsyrOc_lXXN20zVtM7Ti2MGUv6mI5WXQ32Pc2WQ5f-lXp-4nGhLsShPKuhdqlEZvCvf5Pffl1zSnunxbL7otijdIZG3bukRL3vcc86Se0C-4b34SO14cmjRm-NxlaydfRbAAXVqwSJmriEnU2wvhx6f2OqgmTjjqHDNNbJoCv8RVfQ31hiKMsoW0gdM")' }}
              ></div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">solar_power</span>
              </div>
              <h3 className="text-text-main text-xl font-bold">Rooftop Solutions</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                  Non-penetrative and elevated structures for industrial sheds and RCC roofs, ensuring load distribution and structural safety.
              </p>
            </div>
          </div>
          <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div 
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmoBktc1ClBe2Ddpf-IDBM_lIod9tsYvfMHd70ppZNuCNdF4_H8tByG7QmN3a1QgV6-xEx07ciNInb-uuzr7xIGRe23RrnD1gc12ku5REEDGtbG6eU-mj5M64I5T9V94FLD7OKGtKUc_uDq-YxcL4tDgmNQvIJgIyL_a0vXIcRnLTG6tolcZopAyRWvyqgWvlutfgmg25tdKmA5s_kG1KXwVA9Rs2e7Ikc39WdtgHapfBbFJlasxgbHg-FG18nhpCE-Go-DzCcJTeE")' }}
              ></div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">water</span>
              </div>
              <h3 className="text-text-main text-xl font-bold">Floating & Carport Solar</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                  Innovative designs for floating solar bodies and parking lot canopies that maximize space utilization.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-light pb-8">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
              Adtional Services
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SolarServices.additional.map((feature, index) => (
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">

              <div className="p-8 flex flex-col gap-4 items-center flex-1">
                <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-white group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-text-main text-xl font-bold">{feature.title}</h3>

              </div>
            </div>))
          }
        </div>

      </div>

      {/* Process Timeline Section */}
      <div className="w-full bg-background-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col gap-16">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Workflow</h2>
            <h2 className="text-text-main text-3xl lg:text-4xl font-bold leading-tight mb-6">
              From Soil Lab to Solar Generation
            </h2>
            <p className="text-text-muted">
              A streamlined engineering process ensuring rapid deployment and long-term stability.
            </p>
          </div>
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-12 left-0 w-full h-0.5 bg-border-light hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Step 1 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary z-10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Geo-Tech Analysis</h3>
                <p className="text-sm text-text-muted">Analyzing soil bearing capacity and pull-out strength to determine foundation type.</p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/60 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">02</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Structure Design</h3>
                <p className="text-sm text-text-muted">STAAD Pro simulations for dead loads, live loads, and critical wind speeds.</p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/30 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">03</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Prototype Testing</h3>
                <p className="text-sm text-text-muted">On-site pile load tests and prototype assembly to validate theoretical designs.</p>
              </div>
              {/* Step 4 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/10 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">04</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Installation Support</h3>
                <p className="text-sm text-text-muted">Guidance during the pile driving and module mounting phases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="projects" className="w-full max-w-[1440px] px-6 lg:px-10 py-24 flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-[700px]">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Portfolio</h2>
          <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
            Solar Projects
          </h2>
          <p className="text-text-muted text-lg">
            Showcasing utility-scale parks and innovative distributed energy projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Item 1 (Large) */}
          {SolarProjects.map((data, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer 
      ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity"></div>

              <div className={`absolute bottom-0 left-0 w-full ${index === 0 ? "p-8" : "p-6"}`}>
                <h3 className={`text-white font-bold ${index === 0 ? "text-2xl" : "text-lg"}`}>
                  {data.title}
                </h3>
              </div>
            </div>
          ))}



          {/* Item 2 */}
          {/* <div className="group relative overflow-hidden rounded-lg cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR3Wb8wycmUP5ON1naie14Q7EwUqUQP0waZIL5Syzb40v_Yj5MP3980Sru6THoJfQyjwnkXFbbUL_VFnHKAnsyrOc_lXXN20zVtM7Ti2MGUv6mI5WXQ32Pc2WQ5f-lXp-4nGhLsShPKuhdqlEZvCvf5Pffl1zSnunxbL7otijdIZG3bukRL3vcc86Se0C-4b34SO14cmjRm-NxlaydfRbAAXVqwSJmriEnU2wvhx6f2OqgmTjjqHDNNbJoCv8RVfQ31hiKMsoW0gdM")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">Pune, India</span>
              <h3 className="text-white text-lg font-bold">Industrial Rooftop</h3>
            </div>
          </div> */}
          {/* Item 3 */}
          {/* <div className="group relative overflow-hidden rounded-lg cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmoBktc1ClBe2Ddpf-IDBM_lIod9tsYvfMHd70ppZNuCNdF4_H8tByG7QmN3a1QgV6-xEx07ciNInb-uuzr7xIGRe23RrnD1gc12ku5REEDGtbG6eU-mj5M64I5T9V94FLD7OKGtKUc_uDq-YxcL4tDgmNQvIJgIyL_a0vXIcRnLTG6tolcZopAyRWvyqgWvlutfgmg25tdKmA5s_kG1KXwVA9Rs2e7Ikc39WdtgHapfBbFJlasxgbHg-FG18nhpCE-Go-DzCcJTeE")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">Kerala, India</span>
              <h3 className="text-white text-lg font-bold">Floating Solar Pilot</h3>
            </div>
          </div> */}
        </div>
        <div className="w-full  py-24">

          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-light pb-8">
            <div className="flex flex-col gap-3 max-w-[700px]">
              <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
                Benefits
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-8">
            {SolarBenifits.capabilities.map((feature, index) => (
              <div className="group flex flex-col  items-centerbg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">

                <div className="p-8 flex flex-col gap-4 flex-1 items-center">
                  <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-white group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-text-main text-xl font-bold">{feature.title}</h3>

                </div>
              </div>))
            }
          </div>
        </div>
      </div>




      {/* CTA Section */}
      <div className="w-full bg-primary py-20 px-6">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Ready to power the future?</h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Partner with Saanvi Structural Soln for efficient and durable solar infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button onClick={() => onNavigate && onNavigate('contact')}
              className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Project
            </button>
            <button onClick={() => onNavigate && onNavigate('blogs')} className="px-8 py-4 bg-transparent border-2 border-blue-300 text-white rounded-lg font-bold text-lg hover:bg-blue-800 hover:border-blue-800 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSolar;