import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact-form" className="w-full relative z-10 py-16 lg:py-24 bg-white/50 backdrop-blur-sm border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-main mb-6 leading-tight">
            Let's engineer the <span className="text-primary">future</span> together.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Precision structural consulting for solar, buildings, and telecom. Send us a message to discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Form Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[2rem] p-1 border border-primary/20 shadow-xl shadow-slate-200/50">
              <div className="rounded-[1.8rem] bg-white p-6 sm:p-10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-text-main">Send us a message</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                  </div>
                </div>
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold text-text-muted mb-2">First name</label>
                      <input type="text" name="first-name" id="first-name" placeholder="Amit" className="block w-full rounded-lg border border-primary/30 bg-slate-50 px-4 py-3 text-text-main placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold text-text-muted mb-2">Last name</label>
                      <input type="text" name="last-name" id="last-name" placeholder="Sharma" className="block w-full rounded-lg border border-primary/30 bg-slate-50 px-4 py-3 text-text-main placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-text-muted mb-2">Work Email</label>
                      <input type="email" name="email" id="email" placeholder="amit@company.com" className="block w-full rounded-lg border border-primary/30 bg-slate-50 px-4 py-3 text-text-main placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-text-muted mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 border-r border-primary/10 pr-2 my-2">
                          <span className="text-slate-500 text-sm font-medium">+91</span>
                        </div>
                        <input type="tel" name="phone" id="phone" placeholder="98765 43210" className="block w-full rounded-lg border border-primary/30 bg-slate-50 pl-16 pr-4 py-3 text-text-main placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-sm font-semibold text-text-muted mb-2">I'm interested in</label>
                    <div className="relative">
                      <select id="sector" name="sector" style={{backgroundImage:"none"}} className="block w-full appearance-none rounded-lg border border-primary/30 bg-slate-50 px-4 py-3 text-text-main focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none cursor-pointer" defaultValue="">
                        <option value="" disabled>Select Project Type</option>
                        <option>Solar</option>
                        <option>Buildings</option>
                        <option>Telecommunication</option>
                        <option>Others</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-muted mb-2">Project Details</label>
                    <textarea id="message" name="message" rows={4} placeholder="Please describe your project requirements, location, and estimated timeline..." className="block w-full rounded-lg border border-primary/30 bg-slate-50 px-4 py-3 text-text-main placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none resize-none"></textarea>
                  </div>
                  <div className="flex items-start pt-2">
                    <div className="flex h-5 items-center">
                      <input id="privacy" name="privacy" type="checkbox" className="h-4 w-4 rounded border-primary/30 text-primary focus:ring-primary" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="font-medium text-slate-500">I agree to the <a href="#" className="text-primary font-semibold hover:underline">privacy policy</a>.</label>
                    </div>
                  </div>
                  <button type="submit" className="w-full flex justify-center items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all mt-4">
                    Request Quote
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar Info Section */}
          <div className="lg:col-span-5 space-y-8 flex flex-col h-full">
            <div className="bg-white rounded-[2rem] border border-primary/10 shadow-lg p-8 space-y-8">
              <h3 className="text-xl font-bold text-text-main border-b border-primary/10 pb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Email Us</p>
                    <a href="mailto:Contact@saanvistructural.com" className="text-base font-semibold text-text-main hover:text-primary transition-colors">Contact@saanvistructural.com{" "}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Call Us</p>
                    <a href="tel: 044 4284 5115" className="text-base font-semibold text-text-main hover:text-primary transition-colors"> PH - 044- 4284 5115</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Head Office</p>
                    <p className="text-base font-semibold text-text-main leading-snug"> Olympia National Tower, 6th floor, Block 3, A3 & A4,
                      <br /> North Phase, Guindy Industrial Estate, Chennai 600032</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex-grow min-h-[300px] w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-slate-100 shadow-md group">
              <div className="absolute inset-0 bg-slate-200">
                <iframe
                  src="https://www.google.com/maps?q=Olympia+National+Tower+6th+floor+Block+3+A3+A4+North+Phase+Guindy+Industrial+Estate+Chennai+600032&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  title="Saanvi Structural soln Gandhi Street chennai"
                ></iframe>
              </div>
              <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center">
                {/* <div className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-20"></div>

                <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary shadow-xl shadow-primary/30 text-white ring-4 ring-white">
                  <span className="material-symbols-outlined text-sm sm:text-base md:text-lg">
                    apartment
                  </span>
                </div> */}

                {/* <div className="  sm:-top-14 whitespace-nowrap rounded-lg bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-primary shadow-xl border border-primary/10">
                  Saanvi Structural soln
                  <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white border-b border-r border-primary/10"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;