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
    members:
      [
        {
          "name": "Venkatesh Kannan",
          "role": "Project Lead",
          "linkedin": "https://www.linkedin.com/in/venkatesh-kannan-b52311b4/",
          "img": "images/Venkatesh.jpeg",
          "desc": "Project Lead in the Building department with 15+ years in photovoltaic structural design."
        },
        {
          "name": "Selvamuthumani T",
          "role": "Project Lead",
          "linkedin": "https://www.linkedin.com/in/selvamuthumani-t-345355179/",
          "img": "images/salva.jpeg",
          "desc": "Project Lead in Solar / Renewables; Expert in wind load analysis for solar arrays."
        },
        {
          "name": "Aarthy K",
          "role": "Design Engineer II",
          "linkedin": "https://www.linkedin.com/in/aarthy-k-4859342a0",
          "img": "images/Aarthy.JPG",
          "desc": "Design Engineer II in the Telecom department; Expert in wind load analysis."
        },
        {
          "name": "ABINAYA S",
          "role": "QC Engineer",
          "linkedin": "https://www.linkedin.com/in/abinaya-s-04771929a",
          "img": "images/ABINAYA.JPG",
          "desc": "QC Engineer in Solar / Renewables; Expert in wind load analysis for solar arrays."
        },
        {
          "name": "Ajithkumar L",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/ajithkumar-l-946284362",
          "img": "images/Aijithkumar.JPG",
          "desc": "Design Engineer III in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "ANJU MARY ABRAHAM",
          "role": "Design Engineer I",
          "linkedin": "https://www.linkedin.com/in/anju-mary-abraham-536b69252",
          "img": "images/ANJUMARYABRAHAM.JPG",
          "desc": "Design Engineer I in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Annapoorna",
          "role": "Structural Engineer",
          "linkedin": "https://www.linkedin.com",
          "img": "images/Annapoorna.JPG",
          "desc": "Expert in wind load analysis for solar arrays."
        },
        {
          "name": "Aravindraj G",
          "role": "Team Lead",
          "linkedin": "https://www.linkedin.com/in/aravind-raj-0009b8289",
          "img": "images/Aravindraj.JPG",
          "desc": "Team Lead in the Telecom department; Expert in wind load analysis."
        },
        {
          "name": "Arunmaniswamy D",
          "role": "Design Engineer II",
          "linkedin": "http://linkedin.com/in/arun-mani-samy-8886b7349",
          "img": "images/Arunmaniswamy.JPG",
          "desc": "Design Engineer II in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Balaji S R",
          "role": "Design Engineer II",
          "linkedin": "https://www.linkedin.com/in/balaji-s-r-21996a167/",
          "img": "images/Balaji.JPG",
          "desc": "Design Engineer II in the Telecom department; Expert in wind load analysis."
        },
        {
          "name": "Balakumaran A",
          "role": "Design Engineer II",
          "linkedin": "http://linkedin.com/in/balakumaran-a-b30559223",
          "img": "images/Balakumaran.JPG",
          "desc": "Design Engineer II in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "CHARUMATHI K",
          "role": "Drafter I",
          "linkedin": "https://www.linkedin.com/in/charumathi-k-5605942b3",
          "img": "images/CHARUMATHI.JPG",
          "desc": "Drafter I in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Deepika T",
          "role": "Project Lead",
          "linkedin": "https://www.linkedin.com/in/deepu-raj-6a8349356",
          "img": "images/Deepika.JPG",
          "desc": "Project Lead in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Girija G",
          "role": "Design Engineer II",
          "linkedin": "www.linkedin.com/in/girija-g-g-865216101",
          "img": "images/Girija.JPG",
          "desc": "Design Engineer II in the Building department; Expert in wind load analysis."
        },
        {
          "name": "GUNASHEELA A",
          "role": "Design Engineer III",
          "linkedin": "http://linkedin.com/in/gunasheela-anburaj-32181430a",
          "img": "images/GUNASHEELA.JPG",
          "desc": "Design Engineer III in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "JAYASURIYA R",
          "role": "Design Engineer",
          "linkedin": "https://www.linkedin.com/in/jayasuriya-r-4b6287215",
          "img": "images/JAYASURIYA.JPG",
          "desc": "Design Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "JEEVITHA A",
          "role": "Junior Accountant",
          "linkedin": "https://www.linkedin.com/in/jeevitha-a-142859293",
          "img": "images/JEEVITHA.JPG",
          "desc": "Junior Accountant in the Accounts department; Expert in wind load analysis."
        },
        {
          "name": "Jeyanthi S",
          "role": "Senior Accountant",
          "linkedin": "https://www.linkedin.com/in/jeyanthi-sudalaimuthu-933872226/",
          "img": "images/Jeyanthi.JPG",
          "desc": "Senior Accountant in the Accounts department; Expert in wind load analysis."
        },
        {
          "name": "JOSHUA SAM JOSEPH",
          "role": "Design Engineer",
          "linkedin": "https://www.linkedin.com/in/sam-joshua-272871333",
          "img": "images/JOSHUASAM.JPG",
          "desc": "Design Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Kannan N",
          "role": "QC Engineer",
          "linkedin": "www.linkedin.com/in/kannan-n-3255443b6",
          "img": "images/Kannan.JPG",
          "desc": "QC Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Kirthyvasan",
          "role": "Structural Engineer",
          "linkedin": "https://www.linkedin.com",
          "img": "images/Kirthyvasan.JPG",
          "desc": "Expert in wind load analysis for solar arrays."
        },
        {
          "name": "Kotteswari",
          "role": "Structural Engineer",
          "linkedin": "https://www.linkedin.com",
          "img": "images/Kotteswari.JPG",
          "desc": "Expert in wind load analysis for solar arrays."
        },
        {
          "name": "Mathangi B",
          "role": "Geo-tech Engineer",
          "linkedin": "www.linkedin.com/in/mathangi-b-16a346137",
          "img": "images/Mathangi.JPG",
          "desc": "Geo-tech Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Meera Devi B",
          "role": "Drafter II",
          "linkedin": "https://www.linkedin.com/in/meera-devi-b544b12b0",
          "img": "images/Meeradevi.JPG",
          "desc": "Drafter II in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Meganathan",
          "role": "Structural Engineer",
          "linkedin": "https://www.linkedin.com",
          "img": "images/Meganathan.JPG",
          "desc": "Expert in wind load analysis for solar arrays."
        },
        {
          "name": "Mohana Priya K",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/mohana-priya-748573327",
          "img": "images/MohanaPriya.JPG",
          "desc": "Design Engineer III in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Muthu kumaran",
          "role": "Structural Engineer",
          "linkedin": "https://www.linkedin.com",
          "img": "images/Muthukumaran.JPG",
          "desc": "Expert in wind load analysis for solar arrays."
        },
        {
          "name": "NEELA SUNDARAVALLI M",
          "role": "Design Engineer I",
          "linkedin": "https://www.linkedin.com/in/neela-sundaravalli-m-567074365",
          "img": "images/NEELASUNDARAVALLI.JPG",
          "desc": "Design Engineer I in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Nikhil Raaj K",
          "role": "Geo-tech Engineer",
          "linkedin": "www.linkedin.com/in/nikhilraaj",
          "img": "images/NikhilRaj.JPG",
          "desc": "Geo-tech Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Rekha M",
          "role": "QC Engineer",
          "linkedin": "https://www.linkedin.com/in/rekhamuthazhagan",
          "img": "images/Rekha.JPG",
          "desc": "QC Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "REVATHI E",
          "role": "Senior Technical Writer",
          "linkedin": "https://www.linkedin.com/in/revathi-elayanambi",
          "img": "images/REVATHI.JPG",
          "desc": "Senior Technical Writer in the Forensics department."
        },
        {
          "name": "Sai Kiran M",
          "role": "Project Lead",
          "linkedin": "www.linkedin.com/in/msaikiran25",
          "img": "images/Saikiran.JPG",
          "desc": "Project Lead in the Building department; Expert in wind load analysis."
        },
        {
          "name": "SATHISH B",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/sathish-b-189aa41a0",
          "img": "images/SATHISH.JPG",
          "desc": "Design Engineer III in the Building department; Expert in wind load analysis."
        },
        {
          "name": "shanmugam S",
          "role": "Design Engineer I",
          "linkedin": "https://www.linkedin.com/in/shanmugamsettu",
          "img": "images/shanmugam.JPG",
          "desc": "Design Engineer I in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Sharmila J",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/sharmila-j-99935a265",
          "img": "images/Sharmila.JPG",
          "desc": "Design Engineer III in the Telecom department; Expert in wind load analysis."
        },
        {
          "name": "Sivasankar G K",
          "role": "Design Engineer II",
          "linkedin": "https://www.linkedin.com/in/siva-sankar-9249b7250",
          "img": "images/Sivasankar.JPG",
          "desc": "Design Engineer II in the Telecom department; Expert in wind load analysis."
        },
        {
          "name": "Srijan P",
          "role": "Geo tech Engineer",
          "linkedin": "www.linkedin.com/in/dr-srijan-66a9ab80",
          "img": "images/Srijan.JPG",
          "desc": "Geo tech Engineer in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Subash P",
          "role": "Design Engineer II",
          "linkedin": "https://www.linkedin.com/in/subash03",
          "img": "images/Subash.JPG",
          "desc": "Design Engineer II in Solar / Renewables; Expert in wind load analysis."
        },
        {
          "name": "Thangaraj V",
          "role": "Software Developer",
          "linkedin": "https://www.linkedin.com/in/thangaraj-v-2304vtr1998/",
          "img": "images/Thangaraj.JPG",
          "desc": "Software Developer in Technology; Expert in wind load analysis."
        },
        {
          "name": "Thiyagarajan V",
          "role": "Drafter III",
          "linkedin": "https://www.linkedin.com/in/thiyagu-v-7861b0326",
          "img": "images/Thiyagarajan.JPG",
          "desc": "Drafter III in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Venkatesh Kumar J",
          "role": "Design Engineer II",
          "linkedin": "https://www.linkedin.com/in/venkatesh-kumar-61841a27",
          "img": "images/Venkatesh Kumar.JPG",
          "desc": "Design Engineer II in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Vetrikumar A",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/vetri-kumar-3bb7932a3",
          "img": "images/Vetrikuumar.JPG",
          "desc": "Design Engineer III in the Telecom department; Expert in wind load analysis."
        },
        {
          "name": "Vignesh A",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/vignesh1772000",
          "img": "images/Vignesh.JPG",
          "desc": "Design Engineer III in the Building department; Expert in wind load analysis."
        },
        {
          "name": "Renganayaki K",
          "role": "Team Lead",
          "linkedin": "https://www.linkedin.com/in/renga-nayaki-2a936021a/",
          "img": "images/Renganayaki.JPG",
          "desc": "Team Lead in the Telecom department."
        },
        {
          "name": "Ramya R",
          "role": "QC Engineer",
          "linkedin": "https://www.linkedin.com/in/ramya-ramamoorthy-262157235",
          "img": "images/Ramya.JPG",
          "desc": "QC Engineer specializing in Solar / Renewables."
        },
        {
          "name": "Ammu R",
          "role": "Design Engineer III",
          "linkedin": "https://www.linkedin.com/in/ammurajendran",
          "img": "images/Ammu.JPG",
          "desc": "Design Engineer III in the Telecom department."
        },
        {
          "name": "Avinash Nadh Basuvu",
          "role": "Product Manager",
          "linkedin": null,
          "img": "images/Avinash.JPG",
          "desc": "Product Manager in the Technology department."
        },
        {
          "name": "Darshan AB",
          "role": "Drafter III",
          "linkedin": null,
          "img": "images/Darshan.JPG",
          "desc": "Drafter III in the Building department."
        },
        {
          "name": "Karthik G",
          "role": "Design Engineer II",
          "linkedin": "https://www.linkedin.com/in/karthik-g-82a5a1282",
          "img": "images/Karthik.JPG",
          "desc": "Design Engineer II in the Telecom department."
        },
        {
          "name": "Manikanth T",
          "role": "Software Developer",
          "linkedin": "https://www.linkedin.com/in/manikanth-tarine-704417192/",
          "img": "images/manikanth.jpg",
          "desc": "Software Developer in the Technology department."
        },
        {
          "name": "Kattula Pavan Kumar",
          "role": "Software Developer",
          "linkedin": null,
          "img": "images/Pavan.JPG",
          "desc": "Software Developer in the Technology department."
        },
        {
          "name": "Monisha C",
          "role": "HR",
          "linkedin": "https://www.linkedin.com/in/monisha-chandran-34372a173",
          "img": "images/Monisha.JPG",
          "desc": "Human Resource specialist."
        },
        {
          "name": "Harish E",
          "role": "Design Engineer I",
          "linkedin": "https://www.linkedin.com/in/harish-i-ba939b381",
          "img": "images/Harish.JPG",
          "desc": "Design Engineer I in the Telecom department."
        },
        {
          "name": "Hariharan M",
          "role": "Design Engineer I",
          "linkedin": "https://www.linkedin.com/in/hari-haran-634092325",
          "img": "images/Hariharan.JPG",
          "desc": "Design Engineer I in the Telecom department."
        },
        {
          "name": "Atshaya S",
          "role": "Technical Writer",
          "linkedin": "https://www.linkedin.com/in/atshaya-s-75967a313?",
          "img": "images/Atshaya.JPG",
          "desc": "Technical writer in the Forensics department."
        },
        {
          "name": "Shalini A S",
          "role": "Drafter I",
          "linkedin": "https://www.linkedin.com/in/shalini-a-s-16a415307",
          "img": "images/Shalini.JPG",
          "desc": "Drafter I in the Building department."
        },
        {
          "name": "Sundaravaradan A",
          "role": "Technical Writer",
          "linkedin": "https://www.linkedin.com/in/sundara-varadan-297b5b275",
          "img": "images/Sundaravaradan.JPG",
          "desc": "Technical writer in the Forensics department."
        },
        {
          "name": "Sivasuriya S",
          "role": "Technical Writer",
          "linkedin": "https://www.linkedin.com/in/sivasuriya-s-84456a27a",
          "img": "images/Sivasuriya.JPG",
          "desc": "Technical writer in the Forensics department."
        },
        {
          "name": "Yuvashri A",
          "role": "Technical Writer",
          "linkedin": "https://www.linkedin.com/in/a-yuvashri-0459963b7",
          "img": "images/Yuvashri.JPG",
          "desc": "Technical writer in the Forensics department."
        },
        {
          "name": "Srinivethitha J",
          "role": "Design Engineer I",
          "linkedin": "https://www.linkedin.com/in/srinivethitha-jayachandiran-5a5571391",
          "img": "images/Srinivethitha.JPG",
          "desc": "Design Engineer I in Solar / Renewables."
        },
        {
          "name": "Sarathiaboorvan C",
          "role": "Design Engineer I",
          "linkedin": "http://www.linkedin.com/in/sarathi-c-a831b035a",
          "img": "images/Sarathiaboorvan.JPG",
          "desc": "Design Engineer I in Solar / Renewables."
        },
        {
          "name": "Sathvika A",
          "role": "Drafter I",
          "linkedin": "https://www.linkedin.com/in/sathvika-r-aa7550355",
          "img": "images/Sathvika.JPG",
          "desc": "Drafter I in the Building department."
        }

      ]
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
                    {member.name
                      .toLowerCase()
                      .split(" ")
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
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
