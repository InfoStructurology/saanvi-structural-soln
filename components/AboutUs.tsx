import React from 'react';

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
    icon: 'solar_power',
    description: 'Innovating renewable energy infrastructure for a sustainable future.',
    members: [
      { name: "Venkatesh Kannan", role: "Structural Engineer", linkedin: "https://www.linkedin.com/in/venkatesh-kannan-b52311b4/", img: "images/Venkatesh.jpeg", desc: "15+ years in photovoltaic structural design." },
      { name: "Selvamuthumani T", role: "Structural Engineer", linkedin: "https://www.linkedin.com/in/selvamuthumani-t-345355179/", img: "images/salva.jpeg", desc: "Expert in wind load analysis for solar arrays." },
      { name: "Vikram Singh", role: "Design Lead", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7fuqbCvDv-6_-pGq7UmeJhlvTr6KMuCkkLRNLLMSaAUElYd5ra5PwkAQ90Q5GKunzgic4gan3A9_I7WkHDtL4BWJWNk0g3vEr6VyVC8qc_l_UbtUw9rXjfT83IFX_GqMQ951MQzgx8nmdJX8jsRZgE9hitqzL7a6X6mliIVbohiHJS9Rlza43284dD0PK-YFY4Rh4UAb2nHZMU0ziQ8Af5Ko1vehd7QCbvPtLhSszrj_EsNFZAGO8aogbWXdAkDlZ_AqxwlTSdncy", desc: "Specializes in ground-mount optimization." },
      { name: "Priya Desai", role: "Project Manager", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATCFS6duarM8mEKn0amRoq95CB4EyB6Trw3JJ27DhwQIKn7QeYHZxsDkm_fBgQ4xgJ45qk5u1qpieNuRsmIrvIgksqmDpmL7O1wGFjzsH_gS14yIX28PLJUJtBM1c-CRGdQh7cmga-O61KqMiHLsLd6959dIMcRl6cYm2d-DTY6hOy2y4xtwh6n4pcvM66WPnDdkh0rNvGTozx4zpK5gqBXp1So84scMqsTrkw_69hLrFe8UVOczv3KQmOb5GNUbiJ2gC0CFw4RHvv", desc: "Managing large-scale utility solar projects." }
    ]
  },
  {
    id: 'buildings',
    name: 'Buildings & Infrastructure',
    icon: 'apartment',
    description: 'Constructing the skylines of tomorrow with precision and safety.',
    members: [
      { name: "Amit Patel", role: "Director of Civil Eng.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcfhgYFSX4b2h_9LSTp9JAM71U2FwyBSGvd4UYYQTplwJo8WvpdFaGKSB3Z0uDz6y_REIcesiJhx1CLae1UE7PtNPT8EJtZCAwYD1p1xpFqRG9c46cO5ueogpCYYhcslVKbUQc76zdR_YX_ahAYT67SJXOtlPFqRi2petOo9u67aE_3WsSLP6Tr9LGY29zyGssqczd1cNNmD9do7xpSsvRlUCLgm1KDOAHZm3Pu-i9ziCjJ5-mWaXyk4V2tNcGNJxFcebkAtm_XCkG", desc: "20+ years in high-rise structural systems." },
      { name: "Sneha Reddy", role: "Senior Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDntRhNY9wR-P9kmTe_k7QQDcZXsBWNE3YRHqIS4S0aAX2yGronpj_iZG2Cs8me7BXrAQwM4kb7IcuAUFTfASQUx8jcjJk3NxC93T1vIkwXsaywip6hicHTFdkN4ZaDsusgtDIkGHICSALNnXo88BklFxB4JVj1isviENli8AvmizePrKI0TIo_A8D_NlzeuLlka58EcF3x5qhEv4CpUx0x7CO4JWp99t4z4Yuwwe9OKnC2cuIX1c4AV1kBcHhEGY9fnJlzEdWbyhZh", desc: "Focus on sustainable building envelopes." },
      { name: "Rohan Verma", role: "Structural Consultant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrGl7QwFqy_3wkZnUhdjka8EDfMD4zypTUWmT04MNQO1jpt6oap9YnGA55tL_tFu-XufqBTAlVKlHeWKzCLQ2IRTZVjeGf9YgkyHawrKt9v_om8AR2iEgWaIjLw9cz3unPrrSpBn5F9ySg6lwdWX68TdRsjuNafsZGfYPaAndvO3ARpf5QhbPGHQ82ySAry78ioJ88uu6GzUY3mSCfjg1XNasxg_m_g3PaWzYkZt-lfcGXXaHgjyCIv22c-vPOJnc1NNxUBPo3WWGC", desc: "Specialist in seismic retrofitting." }
    ]
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    icon: 'cell_tower',
    description: 'Ensuring connectivity through robust tower engineering.',
    members: [
      { name: "Karthik Iyer", role: "Tower Design Lead", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMh3Z_PVOwrNU8lsdXrn2DICyEjBzMYyL0Hz9FuguloLJ4frJ0J3I0o-PGTgQvI-7RUpvf5yXKQ4Pds494pUoJE59RcriaOey-jwRVPLt-bs7DM-hWiYpYUFM9wc33nxxgCYC_JYKeUUq4b3KmU6OEddR7BSgJes1OoUI8iv68vCYyKh9N4PTN7HD9CLgHz5XbZ14NVa2f8pIOVaglLPSQRmHxx8yzV4LxpMox4U6gUV92BMDqsYqKElN5gTrixxi0odz4QZgkM01k", desc: "Design authority for 5G infrastructure." },
      { name: "Meera Nair", role: "Foundation Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8VpSbUgUvxqL8CONKCQ05lMLEMIvKfGwbCPlOQ0LuqL9k6ebAZoSHx3bfra_tYwpLDBumqBpfL2GZCJ0WxQBF7R5rFzPXcRmJIwcHCLscKthUhQwb5ZIYEtPePdLFLGjjo1Yhtnb6G_Jq9YvgUyqdLO2wD75jjJRVAMpsNZY6Gt0Nxo6LH7VVSgpUfpsq_yxB8r8ZmwP13i8U6ugkO0LfH5GRY-PvHW0InUErG_D-tBbvoeN-8hy5iXVx-Gg79GLXAu52xL6apA2d", desc: "Expert in remote site soil mechanics." }
    ]
  },
  {
    id: 'tech',
    name: 'Technology',
    icon: 'terminal',
    description: 'Driving digital transformation and software solutions.',
    members: [
      { name: "Michael Ross", role: "Lead Dev", img: "https://i.pravatar.cc/300?img=8", desc: "Full-stack architecture." },
      { name: "Emily Blunt", role: "Sys Admin", img: "https://i.pravatar.cc/300?img=10", desc: "Infrastructure stability." }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: 'payments',
    description: 'Managing fiscal health and sustainable growth.',
    members: [
      { name: "David Chen", role: "CFO", img: "https://i.pravatar.cc/300?img=13", desc: "Financial strategy and planning." }
    ]
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: 'groups',
    description: 'Nurturing our most valuable asset: our people.',
    members: [
      { name: "Anita Desai", role: "HR Director", img: "https://i.pravatar.cc/300?img=24", desc: "Organizational culture." },
      { name: "Kevin Hart", role: "Talent Acquisition", img: "https://i.pravatar.cc/300?img=14", desc: "Recruiting top talent." },
      { name: "Laura Croft", role: "Employee Relations", img: "https://i.pravatar.cc/300?img=20", desc: "Team engagement." }
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

          {departments.map((dept) => (
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dept.members.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center p-6 bg-white border border-border-light rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                      <img
                        src={member.img}
                        alt={`Headshot of ${member.name}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-text-main text-center">{member.name}</h4>
                    <p className="text-sm font-medium text-primary mb-2 text-center">{member.role}</p>
                    <p className="text-xs text-center text-text-muted">{member.desc}</p>
                    <a
                      href={member.linkedin} target="_blank"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300"
                    >
                      <img src="images/linkedin.png" alt='Linkedin' className='w-5'>
                      </img>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-24 lg:px-40 bg-white border-t border-border-light">
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
      </section>
    </div>
  );
};

export default AboutUs;
