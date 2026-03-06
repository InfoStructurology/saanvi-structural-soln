import React from 'react';

const icon = <svg
  viewBox="0 0 512 512"
  className="w-8 h-8 text-primary"
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
// Data for all departments
const departments = [
  {
    id: 'management',
    name: 'Management',
    icon: 'admin_panel_settings',
    description: 'Guiding our strategic vision and operational excellence.',
    members: [
      { name: "Madhan Kumar K, MS, P.E", role: "Director", linkedin: "https://www.linkedin.com/in/madhankumark-ms-pe/", img: "images/maf.avif", desc: "Visionary leader with 20+ years in infra." },
      { name: "Sridhar Kethu P.E", role: "Director of Engineering", linkedin: "https://www.linkedin.com/in/sridhar-kethu-62997a166/", img: "images/sri.avif", desc: "Operational excellence and strategy." }
    ]
  },
  {
    id: 'solar',
    name: 'Solar Engineering',
    icon: icon,
    description: 'Innovating renewable energy infrastructure for a sustainable future.',
    members: [
      { name: "Venkatesh Kannan", role: "Structural Engineer", linkedin: "https://www.linkedin.com/in/venkatesh-kannan-b52311b4/", img: "images/Venkatesh.jpeg", desc: "15+ years in photovoltaic structural design." },
      { name: "Selvamuthumani T", role: "Structural Engineer", linkedin: "https://www.linkedin.com/in/selvamuthumani-t-345355179/", img: "images/salva.jpeg", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Aarthy", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Aarthy.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "ABINAYA", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/ABINAYA.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Aijithkumar", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Aijithkumar.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "ANJU MARY ABRAHAM", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/ANJUMARYABRAHAM.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Annapoorna", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Annapoorna.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Aravindraj", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Aravindraj.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Arunmaniswamy", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Arunmaniswamy.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Balaji", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Balaji.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Balakumaran", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Balakumaran.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "CHARUMATHI K", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/CHARUMATHI.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Deepika", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Deepika.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Girija", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Girija.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "GUNASHEELA", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/GUNASHEELA.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "JAYASURIYA", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/JAYASURIYA.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "JEEVITHA", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/JEEVITHA.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Jeyanthi", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Jeyanthi.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "JOSHUA SAM", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/JOSHUASAM.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Kannan", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Kannan.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Kirthyvasan", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Kirthyvasan.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Kotteswari", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Kotteswari.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Mathangi", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Mathangi.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Meera devi", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Meeradevi.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Meganathan", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Meganathan.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Mohana Priya", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/MohanaPriya.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Muthu kumaran", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Muthukumaran.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "NEELA SUNDARAVALLI M", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/NEELASUNDARAVALLI.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Nikhil Raj", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/NikhilRaj.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Rekha", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Rekha.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "REVATHI", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/REVATHI.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Saikiran", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Saikiran.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "SATHISH", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/SATHISH.JPG", desc: "Expert in wind load analysis for solar arrays." },
      // { name: "Selvamuthumani", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Selvamuthumani.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "shanmugam", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/shanmugam.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Sharmila", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Sharmila.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Sivasankar", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Sivasankar.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Srijan", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Srijan.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Subash", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Subash.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Thangaraj", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Thangaraj.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Thiyagarajan", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Thiyagarajan.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Venkatesh Kumar", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Venkatesh Kumar.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Vetrikuumar", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Vetrikuumar.JPG", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Vignesh", role: "Structural Engineer", linkedin: "https://www.linkedin.com", img: "images/Vignesh.JPG", desc: "Expert in wind load analysis for solar arrays." }]
  },
  {
    id: 'buildings',
    name: 'Buildings & Infrastructure',
    icon: 'apartment',
    description: 'Constructing the skylines of tomorrow with precision and safety.',
    members: []
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    icon: 'cell_tower',
    description: 'Ensuring connectivity through robust tower engineering.',
    members: [
    ]
  },
  {
    id: 'tech',
    name: 'Technology',
    icon: 'terminal',
    description: 'Driving digital transformation and software solutions.',
    members: [
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: 'payments',
    description: 'Managing fiscal health and sustainable growth.',
    members: [
    ]
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: 'groups',
    description: 'Nurturing our most valuable asset: our people.',
    members: [
    ]
  }
];
interface ABoutus {
  onNavigate: (page: string) => void;
}
const AboutUs: React.FC<ABoutus> = ({ onNavigate }) => {
  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark bg-grid-pattern bg-fixed w-full">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-40 lg:py-24 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col gap-6">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Est.  2013 in Chennai
          </div>
          <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em] lg:text-6xl">
            Engineering India's <span className="text-primary">Resilient Future</span>
          </h1>
          <p className="text-text-muted text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Saanvi Structural Soln blends precision engineering with innovative design to deliver infrastructure that stands the test of time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 pb-20 lg:px-40">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group flex flex-col gap-6 rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-text-main">Our Mission</h2>
              <p className="text-text-muted leading-relaxed">
                To provide world-class structural engineering solutions that ensure safety, sustainability, and efficiency for every project we touch. We aim to bridge the gap between architectural vision and structural reality through rigorous analysis and creative problem-solving.
              </p>
            </div>
          </div>
          {/* Vision Card */}
          <div className="group flex flex-col gap-6 rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-text-main">Our Vision</h2>
              <p className="text-text-muted leading-relaxed">
                To become India's leading consultancy for complex structural challenges in solar, telecommunications, and high-rise infrastructure. We envision a skyline defined by strength and a landscape powered by sustainable energy structures designed by our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Departments */}
      <section className="px-6 py-16 lg:px-40 bg-white/50 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-text-main lg:text-4xl mb-4">Our Leadership & Departments</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Meet the experts driving innovation across our specialized verticals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments
              .flatMap((dept) => dept.members)
              .map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-white border border-border-light rounded-xl shadow-sm"
                >
                  <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-2">
                    <img
                      src={member.img}
                      alt={`Headshot of ${member.name}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-text-main text-center">
                    {member.name.charAt(0).toUpperCase() + member.name.slice(1).toLowerCase()}
                  </h4>

                  <p className="text-sm font-medium text-primary mb-2 text-center">
                    {member.role}
                  </p>

                  <p className="text-xs text-center text-text-muted">
                    {member.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* {departments.map((dept) => (
            <div key={dept.id} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-2xl">{dept.icon}</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-text-main">{dept.name}</h3>
                  <p className="text-xs text-text-muted hidden sm:block">{dept.description}</p>
                </div>
                <div className="h-px bg-border-light flex-1 ml-4"></div>
              </div>
              <div className="overflow-hidden relative">
                <div
                  className={`flex gap-6 ${dept.members.length > 3 ? "animate-scroll" : "flex-wrap justify-left"
                    }`}
                >
                  {(dept.members.length > 3
                    ? [...dept.members, ...dept.members] // duplicate only if scrolling
                    : dept.members
                  ).map((member, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-72 flex flex-col items-center p-6 bg-white border border-border-light rounded-xl shadow-sm"
                    >
                      <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                        <img
                          src={member.img}
                          alt={`Headshot of ${member.name}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <h4 className="text-lg font-bold text-text-main text-center">
                        {member.name}
                      </h4>

                      <p className="text-sm font-medium text-primary mb-2 text-center">
                        {member.role}
                      </p>

                      <p className="text-xs text-center text-text-muted">
                        {member.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))} */}

        </div >
      </section >

      {/* Call to Action */}
      < section className="px-6 py-24 lg:px-40 bg-white border-t border-border-light" >
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-text-main lg:text-4xl tracking-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-text-muted text-lg">
            Whether you are looking for a structural partner or the next step in your career, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button onClick={() => onNavigate && onNavigate('contact')} className="group flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-base font-bold">
              <span className="mr-2">Join Our Team</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="group flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-base font-bold">

              <a href="mailto:Contact@saanvistructural.com,info@structurology.com" >
                <span className="mr-2">Contact Leadership</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">mail</span>
              </a>
            </button>
          </div>
        </div>
      </section >
    </div >
  );
};

export default AboutUs;
