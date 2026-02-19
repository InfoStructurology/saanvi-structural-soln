import React from 'react';
import { FaBuilding, FaDraftingCompass, FaHome, FaLightbulb, FaProjectDiagram, FaRoad, FaTools, FaUniversity } from 'react-icons/fa';

interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}
const ServiceBuildings: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {

  const buildingSlides = [
    {
      img: "images/1b.jpg",
      alt: "whiskey",
      title: "Whiskey Row Pheonix",
    },
    {
      img: "images/2b.jpg",
      alt: "build2",
      title: "Stairs - Keim Drive Job",
    },
    {
      img: "images/3b.jpg",
      alt: "build3",
      title: "1460 Fillmore",
    },
    {
      img: "images/4b.jpg",
      alt: "buildings",
      title: "Barrow Neurological Association",
    },
    {
      img: "images/5b.jpg",
      alt: "building",
      title: "Grand Avenue Lofts, Pheonix",
    },
  ];

  const buildingBenefitsData = {
    buildingBenefits: [
      {
        title: "Expertise Across Disciplines",
        description:
          //"Saanvi Structural Soln offers expertise in solar, telecom, and forensic engineering and stamping, ensuring specialised solutions for diverse project needs.",
          "",
        icon: <FaLightbulb className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        // "Ensuring Specialized Solutions",
      },
      {
        title: "Innovative Design Solutions",
        description:
          //  "We provide innovative design and engineering solutions tailored to optimize performance and efficiency while meeting regulatory standards.",
          "", icon: <FaDraftingCompass className="text-[35px]" style={{ color: "black" }} />,
        highlight: ""
        //"Optimize Performance and Efficiency",
      },
      {
        title: "Project Management",
        description:
          //"We offer comprehensive project management services from concept to completion, ensuring quality, timeliness, and cost-effectiveness in every project phase.",
          "", icon: <FaProjectDiagram className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        // "Ensuring Quality, Timeliness, Cost-Effectiveness",
      }
    ]
  };
  const buildings = [
    {
      title: "Commercial",
      description:
        //"Office Buildings, Retail Stores, Malls, Warehouses​",
        "",
      icon: <FaBuilding className="text-[35px] " style={{ color: "black" }} />,
      highlight:
        "",
      // "Powering Business Spaces.",
    },
    {
      title: "Residential",
      description:
        //"Single Family, Multi Family, Apartments, Condominiums, Townhouses​",
        "",
      icon: <FaHome className="text-[35px] " style={{ color: "black" }} />,
      highlight: ""
      // "Energy for Every Home.",
    },
    {
      title: "Institutional",
      description:
        //    "Colleges, Schools, Hospitals, Libraries, Stadiums, IT Parks, Data Centers​",
        "", icon: <FaUniversity className="text-[35px] " style={{ color: "black" }} />,
      highlight:
        ""      // "Reliable Energy for Institutions.",
    },
    {
      title: "Infrastructure",
      description:
        //"Airport and Airline Hangers, Railway Stations, Malls, Bridges, Retaining walls​",
        "", icon: <FaRoad className="text-[35px] " style={{ color: "black" }} />,
      highlight: "",
      //"Infrastructure Powered Sustainably.",
    },
    {
      title: "Construction Phase Services",
      description:
        //"Construction Administration, Special Inspections, Shop Drawing review",
        "", icon: <FaTools className="text-[35px] " style={{ color: "black" }} />,
      highlight: ""
      // "Support Through Construction Phase.",
    }
  ]


  return (
    <div className="flex flex-1 flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full max-w-[1440px] p-4 lg:p-6">
        <div
          className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden items-start justify-center px-6 lg:px-16"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDy5h0emPA-CrBwVInbtOKT7qTsAca8pmOCV07lU-EXir-xOeX1pE6pTvu1n8NfyvLQI9QQtncCOQrNLpphM5eBa7HHDNoDXV7ikBFuHFQKwIHc_BTUXqyJjPsaE-RKOKjPN7L_X4EjWGawmTQE71TTMFQlgkEzHMkTp-k30JO2m8IZ0hkTCXt5lHOeE0pmDxFSccGBIj92BH5paf9j33cbzKP6hDHBzfTo1FGzC1Ewsjysblp5931fRG59EgJIS1LW6zm7yGj9S00I")' }}
        >
          <div className="flex flex-col gap-4 max-w-[640px] text-left animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-wider w-fit">
              Engineering Excellence
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Building
            </h1>
            <h2 className="text-gray-200 text-lg lg:text-xl font-normal leading-relaxed max-w-[540px]">
              Our building design practice balances aesthetic ambition with structural pragmatism, specializing in performance-based design for seismic resilience.

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
            <span className="text-4xl font-bold text-primary">250+</span>
            <span className="text-sm text-text-muted font-medium">Projects Completed</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">15+</span>
            <span className="text-sm text-text-muted font-medium">Years Experience</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">100%</span>
            <span className="text-sm text-text-muted font-medium">Safety Record</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">Global</span>
            <span className="text-sm text-text-muted font-medium">Service Reach</span>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full max-w-[1440px] px-6 lg:px-10 py-20 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-light pb-8">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</h2>
            <h1 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
              Specialized Engineering Services
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              To essential industrial facilities, we provide comprehensive structural design and analysis tailored to your specific needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          {buildings.map((feature) => (
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
          {/* Card 2 */}
          {/* <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0taFzg5f6rPeqS0tnteBeo0kJ4UdFCcrLimgURbJFO-Ew3YW19i23-5_oCBiQ7AGzmwggzxSdNrZAha1qVa2_7MeBr4nL90bRr3kaqJaGmRFvckYwWJEhlUtZ7-fk06UV1JLlI8iiL-F2NkVpKB3Cgh-Q5CJcnVpcNAKEHh_z0XP5BxQKCYUsmdG4hxCUkPqNouJBX4Boil61FvDsUIw1oQGr25xkWDgsMWEIapzO-wOnPG-rRwpRIq49JTGkdaTHACEGcS0Od-ng")' }}
              ></div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">security</span>
              </div>
              <h3 className="text-text-main text-xl font-bold">Seismic Retrofitting</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Enhancing the safety and longevity of existing buildings through advanced strengthening techniques and compliance audits.
              </p>
            </div>
          </div> */}
          {/* Card 3 */}
          {/* <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMCWmY6LiOax9BSuEfuZXD46WgEnoVyfp3ayj0aJETRZAX_04tXExnSIQRKiMc6DcOutSkTdU443ikT1TBaLl6g9B_YM3TlyCH6WXbCL5V7XOYNghCa2L_6ItL50qVwzp5J9DCZJPO-GxoHPe0gbcE887uNFRlV4WmOPXbRJPvNXXg7oOVCfILmRD6993xfWWHrT7cdipSnY_ZDBQu7h1NCi9IRBw5ojBu7nC7jmidJLWWgQt-EMJEaWb7RHbc2R1hqCHQCDDJ1d-L")' }}
              ></div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">factory</span>
              </div>
              <h3 className="text-text-main text-xl font-bold">Industrial Structures</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Robust engineering solutions for warehouses, factories, and heavy-duty industrial plants focused on load capacity and operational efficiency.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Process Timeline Section */}
      <div className="w-full bg-background-off py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col gap-16">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Workflow</h2>
            <h1 className="text-text-main text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Design to Execution Process
            </h1>
            <p className="text-text-muted">
              A systematic approach ensuring precision at every stage of the structural lifecycle.
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
                <h3 className="text-xl font-bold text-text-main mt-4">Consultation</h3>
                <p className="text-sm text-text-muted">Understanding architectural vision and project constraints through deep collaboration.</p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/60 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">02</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Structural Analysis</h3>
                <p className="text-sm text-text-muted">Using FEA and advanced software to simulate loads, stresses, and environmental factors.</p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/30 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">03</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Detailed Design</h3>
                <p className="text-sm text-text-muted">Creating comprehensive construction documents, BIM models, and material specifications.</p>
              </div>
              {/* Step 4 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/10 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">04</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Execution Support</h3>
                <p className="text-sm text-text-muted">On-site supervision and technical support to ensure the build matches the design intent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full max-w-[1440px] px-6 lg:px-10 py-24 flex flex-col gap-12" id="projects">
        <div className="flex flex-col gap-3 max-w-[700px]">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Portfolio</h2>
          <h1 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
            Structural Portfolio
          </h1>
          <p className="text-text-muted text-lg">
            A showcase of our technical precision, featuring building skeletons, CAD models, and completed landmarks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Item 1 (Large) */}
          {buildingSlides.map((data, index) => (
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
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQm9Xalhd15kVdjcrgGqPKqBQi90OT6GIoqr44RiveeDwXWwfeUHQtwVuOXm4Yh0W96JiE8cFGUpFzydN6P7T3cOBv26NZ9KjdG5lvSPcp8BzJBfugKuipihnuTFH7DSlwRVoUsi8gPjNk9QJA4ChxV9YktrkboVXU4rEmELS729JdtaLMjA3lssPL_5qq6gBEN83VKMTIhbObzl6DcxBfFcoTKJJUx9MqC1IqsMniyB61n85MZKz-JXz6Xo1r7WbUaJn3hP2mKgBW")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">Berlin, DE</span>
                    <h3 className="text-white text-lg font-bold">Museum Renovation</h3>
                </div>
            </div> */}
          {/* Item 3 */}
          {/* <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHjMkPzJqBn4q_soyxCbsCQxVh8Uefhu8p-8cqeFfaJgyAfUeRSZbEhzx6IYAXf5J1wcaC56KqJmlpUIjRWHHRZCZWZQYb6g44tqmJ2dvlbtbs3BCNYHVWXtac1dy4wNN3ySlTesLS6hy2smazP5nph1dLmqfZhvDXdio6G4jfKzbjxuPlALHXT74Koxs6aY7ZGcvJRnD7_iY5EcZsf42YF3ifkTGpH6FPAy3LtFYJYVqVtpUaLlUb9eylE3Gunk-pXFKCqH3FZBT-")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">Dubai, UAE</span>
                    <h3 className="text-white text-lg font-bold">Marina Tower Core</h3>
                </div>
            </div> */}
          {/* Item 4 (Large) */}
          {/* <div className="lg:col-span-2 group relative overflow-hidden rounded-lg cursor-pointer">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8lMqsjDyj8Njj_AxBE5JnjlppwIjkVZUdQ_xzkPIo9_nX8OB-Y_Icv4XRViyEu1L0h91AB9nSw5lB-mtDRHlibPo7GhBVev7rx_vWVox89w5BkdREQJ_2Gsi_n70tJFiHnr7uld5QOCyAhvZcIpPuMDNA89acLkhBq8nm9-kZxFzh9pNXLss3WgG8f0r9KDn1tEYSykBzLanBwHBfAYBFoSvK6uZCry12d70UJUkyLRnbsSXHpyW7Z5KysJApXx8g8vH5Dif9IUlp")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">New York, USA</span>
                    <h3 className="text-white text-2xl font-bold mb-1">Hudson Yards BIM Model</h3>
                    <p className="text-gray-300 text-sm max-w-md hidden lg:block opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0">
                        Advanced BIM integration for clash detection and load simulation.
                    </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {buildingBenefitsData.buildingBenefits.map((feature, index) => (
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
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Ready to build the future?</h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Partner with Saanvi Structural Soln for engineering that stands the test of time. Let's discuss your next landmark project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button onClick={() => onNavigate && onNavigate('contact')} className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Project
            </button>
            <button  onClick={() => onNavigate && onNavigate('blogs')} className="px-8 py-4 bg-transparent border-2 border-blue-300 text-white rounded-lg font-bold text-lg hover:bg-blue-800 hover:border-blue-800 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBuildings;