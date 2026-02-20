import React from 'react';
import { FaBalanceScale, FaCameraRetro, FaChartLine, FaDraftingCompass, FaFileAlt, FaGlobeAmericas, FaHandshake, FaMapMarkedAlt, FaNetworkWired, FaPencilRuler, FaPlug, FaSatelliteDish } from 'react-icons/fa';
import { PiAlignCenterVerticalSimpleFill } from 'react-icons/pi';
interface ProjectsPreviewSectionProps {
  onNavigate?: (page: string) => void;
}

const ServiceTelecom: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {
  const telecomSlides = [
    {
      img: "images/1t.jpg",
      alt: "AT&T",
      title: "AT&T Wisil",
      description:
        "8113 Lemont Road, Darien, IL 60515 — Guyed Tower - Tower MOD",
    },
    {
      img: "images/2t.jpg",
      alt: "Skyward",
      title: "Skyward NSB",
      description: "1897 N MAIN ST., SEARCY, AR 72143 — Proposed Overall Site",
    },
    {
      img: "images/3t.jpg",
      alt: "Anchor Project",
      title: "Anchor Project",
      description:
        "3810 Bancroft Street, San Diego, CA 92104 — Proposed FRP Screen",
    },
    {
      img: "images/4t.jpg",
      alt: "Verizon",
      title: "Verizon",
      description: "34551 Kaiser Dr, Fremont, CA 94555 — FRP Mount MOD",
    },
    {
      img: "images/5t.jpg",
      alt: "SAC (MXEXP)",
      title: "SAC (MXEXP)",
      description:
        "2660 Civic Center Dr, Roseville, MN 55113 — Monopole tower MOD",
    },
    {
      img: "images/6t.jpg",
      alt: "US Cellular",
      title: "US Cellular",
      description: `289 N. Pekin Rd., Woodland, WA 98674 — Self-Support Tower MOD, Platform Mount MOD`,
    },
  ];
  const telecommunicationBenefitsData = {
    telecommunicationBenefits: [
      {
        title: "Strategic Telecom Design",
        description:
          // "We deliver precision-engineered telecom designs, adhering to the most stringent Indian standards and regulations. Our remote team leverages cutting-edge technology to ensure optimized performance and seamless integration for your projects.",
          "", icon: <FaSatelliteDish className="text-[35px]" style={{ color: "black" }} />,
        highlight: ""
        // "Strategic Telecom Design",
      },
      {
        title: "Value-Driven Telecom Consulting",
        description:
          // "We provide strategic consulting and value engineering to optimize your telecom infrastructure, delivering cost-effective solutions without compromising on quality. Our remote experts ensure efficient resource allocation and accelerated project timelines for your initiatives.",
          "", icon: <FaHandshake className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Delivering Cost-Effective Solutions",
      },
      {
        title: "Collaborative Telecom Innovation",
        description:
          // "We forge strong partnerships with US clients, offering innovative telecom solutions tailored to their specific needs. Our remote team brings deep domain expertise and proactive communication, ensuring successful project outcomes and long-term connectivity for your operations.",
          "",
        icon: <FaNetworkWired className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Ensuring Successful Project Outcomes",
      }
    ]
  };
  const TelecommunicationData = {
    telecommunication: [
      {
        title: "Site Surveys",
        description:
          // "Comprehensive site surveys to identify optimal tower placement, ensuring strong signal strength and a smooth build process.",
          "",
        icon: <FaMapMarkedAlt className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Optimal Placement & Strong Signal.",
      },
      {
        title: "Pile Design",
        description:
          // "Expert pile design providing a rock-solid foundation for your telecom tower on any terrain, ensuring unwavering support.",
          "",
        icon: <PiAlignCenterVerticalSimpleFill className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Rock-solid Foundation.",
      },
      {
        title: "Mount Mapping",
        description:
          // "Advanced mount mapping to identify the perfect placement for telecom equipment, maximizing signal strength and minimizing visual impact.",
          "",
        icon: <FaDraftingCompass className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Maximized Signal, Minimal Impact.",
      },
      {
        title: "Tower Analysis",
        description:
          //"Expert tower analysis ensuring your telecommunication tower is safe, reliable, and meets all code requirements, maximizing uptime.",
          "", icon: <FaChartLine className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        // "Safe & Code-Compliant Structures.",
      },
      {
        title: "Geotechnical Analysis",
        description:
          //"Expert geotechnical analysis to ensure your telecom tower has a stable base, considering soil conditions and potential risks.",
          "",
        icon: <FaGlobeAmericas className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Stable Foundation From the Ground Up.",
      },
      {
        title: "Zoning Construction Drawings",
        description:
          //"Streamlining telecom tower projects by handling zoning approvals and creating detailed construction drawings, saving time and ensuring a compliant build.",
          "",
        icon: <FaPencilRuler className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Fast Approvals, Compliant Builds.",
      },
      {
        title: "Photosimulations",
        description:
          //"Creation of photosimulations for your telecom project, showcasing its visual impact before construction begins, ensuring seamless integration into the landscape.",
          "", icon: <FaCameraRetro className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Visual Clarity Before Building.",
      }
    ],
    projectSupport: [
      {
        title: "Permit Submission and Tracking",
        description:
          //"Handling permit submissions and tracking for your telecom project, expediting approvals and keeping you informed every step of the way.",
          "",
        icon: <FaFileAlt className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        //"Faster Approvals & Transparency.",
      },
      {
        title: "Utility Coordination",
        description:
          //"Expert team tackling complex utility coordination, ensuring a smooth connection to the grid and avoiding delays, powering your project seamlessly.",
          "", icon: <FaPlug className="text-[35px] " style={{ color: "black" }} />,
        highlight: ""
        // "Seamless Utility Integration.",
      },
      {
        title: "Independent Engineering",
        description:
          //"Championing independent engineering reviews for an objective assessment, maximizing safety and code compliance for your telecom project.",
          "", icon: <FaBalanceScale className="text-[35px] " style={{ color: "black" }} />,
        highlight:
          ""//"Unbiased Safety & Compliance.",
      }
    ]
  };
  return (
    <div className="flex flex-1 flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full max-w-[1440px] p-4 lg:p-6">
        <div
          className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden items-start justify-center px-6 lg:px-16"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtPtrssbzv4ILB9_3cvqfIaRBQVRGlJ9bkLfIk0ELSFpOo_LQlm0D32L3lCcqPtLjtCuU7sxCJyQwxARUxy5CA3LJc0YvEaqJ0kJ-QrU_LDPa2Ku4-kyGQu2SNJCgaHv2wO8aS7v1JK-SwqCoDHgphBnjzTj60Kbd9MzyfsFFr2hGnDpUx0FJhIZhhcKPT6qtgTjeSE2PuZPyDGdppfDQ3wlWEey1da_fBlziSOtgpHvF0mhyWBMy6qvvipVzHM-4WZQDL33Dt45v2")' }}
        >
          <div className="flex flex-col gap-4 max-w-[640px] text-left animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-wider w-fit">
              Connectivity Infrastructure
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Telecommunication
            </h1>
            <h2 className="text-gray-200 text-lg lg:text-xl font-normal leading-relaxed max-w-[540px]">
              Connecting the world through robust infrastructure. From macro towers to small cells, we ensure signal integrity and structural safety.

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
            <span className="text-4xl font-bold text-primary">10k+</span>
            <span className="text-sm text-text-muted font-medium">Towers Designed</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">5G</span>
            <span className="text-sm text-text-muted font-medium">Ready Infrastructure</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">200+</span>
            <span className="text-sm text-text-muted font-medium">kmph Wind Rating</span>
          </div>
          <div className="flex flex-col gap-1 border-l-4 border-primary pl-4">
            <span className="text-4xl font-bold text-primary">Pan</span>
            <span className="text-sm text-text-muted font-medium">India Presence</span>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full max-w-[1440px] px-6 lg:px-10 py-20 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-light pb-8">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</h2>
            <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
              Telecom Tower Services
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              From new greenfield towers to rooftop pole mounts and structural strengthening of existing assets.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          {TelecommunicationData.telecommunication.map((feature) => (
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
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiGKt78kOZrUB-xdh6MbblcwxlaGtFQkxnzuTByg93qNhkJcj2hdWGRG5XsGPspZG7oXJ1UI30jvHyZJJ4bvRiiCUEe4P5tihkM5Ikav-uBO3zNnlU3j-63QtmYO1XhD04_8MLlpSSOdzoY6Cmfhz_Ide-UjFeDv4gzgJ_tpXVIDLfWeUv5zpeZquuixhQSjq_22q6E-g4OG3UV9jg13c-bFAb-qe5xajBZzeevGJppg8dHuvyuIFC6ReHUa0snENBee1arcsO19UF")' }}
              ></div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">build</span>
              </div>
              <h3 className="text-text-main text-xl font-bold">Structural Strengthening</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Retrofitting existing towers to support additional tenants and heavier 5G equipment loads.
              </p>
            </div>
          </div> */}
          {/* Card 3 */}
          {/* <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:-translate-y-1">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcuuQ1HROqAj05cfSXzG7oS6CMQmoqtM1XHKsoO0aFn6y6wrPqnqtru3T2UWndJa_FOUjd7Jx5xHi-p4M5kKpG0nJ5TMYV3tpSRdF18wBECmlCk0NLA2uXSmsyisWdpTxGml6a-LG4-jKMxbXkneA3KU_PqnEU-dFxYpMfFymylKrwbv6rPqyzaeUF3O1A1uknudpgdoNK3sxFfFroumg7gDIWhU8L_szjoMqvd_jDrAwoW2sQxO74sN2PaoMPT08gcGvIB3ICJdZ6")' }}
              ></div>
            </div>
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">sensors</span>
              </div>
              <h3 className="text-text-main text-xl font-bold">Smart Poles & Monopoles</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Aesthetic urban structures designed for smart city applications and dense urban environments.
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
          {TelecommunicationData.projectSupport.map((feature, index) => (
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
              Site Survey to Stability Certification
            </h2>
            <p className="text-text-muted">
              Rigorous analysis and certification processes to ensure public safety and network reliability.
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
                <h3 className="text-xl font-bold text-text-main mt-4">Site Survey</h3>
                <p className="text-sm text-text-muted">Assessing soil conditions, wind zones, and available space for tower footprint.</p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/60 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">02</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Load Analysis</h3>
                <p className="text-sm text-text-muted">Calculating antenna loads, wind shear, and seismic forces on the structure.</p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/30 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">03</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Tower Detailing</h3>
                <p className="text-sm text-text-muted">Detailed fabrication drawings for tower members, bolts, and foundations.</p>
              </div>
              {/* Step 4 */}
              <div className="relative flex flex-col gap-4 items-center text-center lg:items-start lg:text-left group">
                <div className="size-24 rounded-full bg-white border-4 border-primary/10 z-10 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-text-muted group-hover:text-primary transition-colors">04</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mt-4">Stability Cert.</h3>
                <p className="text-sm text-text-muted">Final inspection and issuance of stability certificate for regulatory compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full max-w-[1440px] px-6 lg:px-10 py-24 flex flex-col gap-12" id="projects">
        <div className="flex flex-col gap-3 max-w-[700px]">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Portfolio</h2>
          <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
            Telecom Projects
          </h2>
          <p className="text-text-muted text-lg">
            Delivering reliable connectivity backbone across challenging terrains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

          {telecomSlides.map((data, index) => (
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
        </div>
            <div className="w-full  py-24">

          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-light pb-8">
            <div className="flex flex-col gap-3 max-w-[700px]">
              <h2 className="text-text-main text-4xl font-bold leading-tight tracking-tight">
                Benefits
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ">
            {telecommunicationBenefitsData.telecommunicationBenefits.map((feature, index) => (
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
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Ready to connect the world?</h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Partner with Saanvi Structural Soln for safe and reliable telecom infrastructure.
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

export default ServiceTelecom;