import React from "react";
import { Mail, ArrowRight, Zap, Users, Brain, TrendingUp } from "lucide-react";
// import { Reveal } from "@/components/Reveal";
// import useSEO from "@/components/SEO";
interface ProjectsPreviewSectionProps {
    onNavigate?: (page: string) => void;
}
const Careers: React.FC<ProjectsPreviewSectionProps> = ({ onNavigate }) => {
    //   const seoContent = useSEO({
    //     title: "Engineering Careers | Join the Saanvi Structural Soln Team",
    //     description:
    // "Build your career at Saanvi Structural Soln. We are hiring structural engineers for innovative solar, telecom, building projects. Join a team dedicated to excellence.",    keywords:
    //       "engineering jobs, structural engineer careers, solar engineering roles, telecom engineering jobs, work at Saanvi Structural Soln, engineering employment, hiring structural engineers",
    //     ogTitle: "Careers at Saanvi Structural Soln | We Are Hiring",
    //     ogDescription:
    //       "Looking for a career in structural engineering? Join Saanvi Structural Soln and work on the future of solar, buildings, and telecom infrastructure.",
    //     ogUrl: "https://www.Saanvi Structural Soln.com/careers",
    //     modifiedDate: "2026-01-20",
    //     publishedDate: "2026-01-20",
    //     ogImage: "https://www.Saanvi Structural Soln.com/images/logo.png"
    //   });
    return (
        <>
            {/* {seoContent} */}
            <div className="bg-brand-light">
                {/* <CareersHero /> */}
                <section
                    id="careers"
                    className=" py-24 lg:py-14 overflow-hidden relative"
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                            {/* Visuals - Placed first for visual rhythm (Image Left, Text Right) */}
                            <div className="lg:w-1/2 relative w-full order-1">
                                <div className="relative aspect-square lg:aspect-[4/5]">
                                    {/* Main Image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
                                        alt="Engineering Team"
                                        className="w-[90%] h-[90%] object-cover absolute top-0 left-0 rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                                    />

                                    {/* Floating Dark Box */}
                                    <div className="w-[65%] bg-slate-900 absolute bottom-8 right-0 p-8 flex flex-col justify-center shadow-2xl rounded-sm">
                                        <div className="text-[#234167] mb-4">
                                            <Users size={32} />
                                        </div>
                                        <h3 className="text-white font-serif text-2xl mb-2">
                                            Join the Elite.
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            We don’t just fill positions—we partner with engineers who want to rewrite the rules of modern infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="lg:w-1/2 order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-[1px] w-8 bg-[#234167]"></div>
                                    <span className="text-[#234167] font-bold tracking-widest uppercase text-xs">
                                        Careers
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-8 leading-tight">
                                    Shape the skyline, <br />{" "}
                                    <span className="italic text-slate-500 text-[#234167]">
                                        define your legacy
                                    </span>
                                    .
                                </h2>

                                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                                    At Saanvi Structural Soln, we are looking for problem solvers who
                                    thrive at the intersection of technical precision and
                                    creative agility. If you’re ready to move beyond
                                    traditional engineering constraints, you belong here.
                                </p>

                                {/* Benefits / Culture Grid - reusing the border-left style */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                                    <div className="border-l-2 border-[#234167] pl-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Brain size={18} className="text-[#234167]" />
                                            <h4 className="font-serif font-bold text-slate-900 text-lg">
                                                Innovation First
                                            </h4>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Work with proprietary algorithms and AI-driven
                                            workflows.
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-[#234167] pl-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <TrendingUp size={18} className="text-[#234167]" />
                                            <h4 className="font-serif font-bold text-slate-900 text-lg">
                                                Rapid Growth
                                            </h4>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Direct mentorship from partners and accelerated career
                                            paths.
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-[#234167] pl-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Zap size={18} className="text-[#234167]" />
                                            <h4 className="font-serif font-bold text-slate-900 text-lg">
                                                High Impact
                                            </h4>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Your designs will shape megawatt-scale energy and
                                            high projects.
                                        </p>
                                    </div>
                                </div>

                                {/* Call to Action Box */}
                                <div className="bg-white border border-slate-200 p-8 shadow-sm rounded-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#234167] opacity-2 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>

                                    <h4 className="font-serif text-xl text-slate-900 mb-2">
                                        Ready to apply?
                                    </h4>
                                    <p className="text-slate-500 text-sm mb-6 max-w-sm">
                                        We are always looking for exceptional talent. Send your
                                        resume and portfolio directly to our leadership team.
                                    </p>

                                    <a
                                        href="mailto:contact@Saanvi Structural Soln.com"
                                        className="inline-flex items-center gap-3 text-[#234167] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                                    >
                                        <Mail size={18} />
                                        contact@Saanvi Structural Soln.com
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Careers;

const CareersHero = () => {
    return (
        <section className="relative py-32 bg-brand-dark overflow-hidden">
            {/* Background Elements */}
            {/* Updated image to reflect a collaborative/engineering work environment */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-luminosity"></div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-brand-maroon/95 via-brand-dark/90 to-brand-dark/95"></div>

            {/* Grain Texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            {/* Decorative Accent - A subtle gold line moving through the background */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Tagline */}
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-1 border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm rounded-full">
                    <span className="text-brand-gold font-mono text-xs uppercase tracking-[0.2em]">
                        Join the Collective
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-8xl font-sans font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                    ENGINEERING <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-white">
                        FUTURE
                    </span>{" "}
                    ICONS
                </h1>

                {/* Body Text */}
                <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                    We are looking for the next generation of structural visionaries. At
                    Saanvi Structural Soln, your work doesn't just support buildings—it helps drive
                    the global transition to sustainable infrastructure.
                </p>

                {/* Scroll Indicator or CTA (Optional) */}
                {/* <div className="mt-12 flex justify-center gap-6">
            <div className="w-1 h-12 bg-gradient-to-b from-brand-gold to-transparent animate-pulse"></div>
          </div> */}
            </div>

            {/* Side Decorative Text (Common in high-end engineering/architectural sites) */}
            {/* <div className="absolute hidden lg:block bottom-12 right-12">
        <p className="text-white/10 [writing-mode:vertical-lr] font-mono text-xs tracking-widest uppercase">
          Innovation / Resilience / Excellence
        </p>
      </div> */}
        </section>
    );
};
