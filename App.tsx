import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import ServiceSolar from './components/ServiceSolar';
import ServiceBuildings from './components/ServiceBuildings';
import ServiceTelecom from './components/ServiceTelecom';
import Footer from './components/Footer';
import "tailwindcss";
// Define SEO Metadata interface
interface PageSEO {
  title: string;
  description: string;
  url: string;
}

// SEO Configuration
const seoData: Record<string, PageSEO> = {
  home: {
    title: "Saanvi Structural Soln - Consulting Structural Engineering",
    description: "Leading structural engineering consultancy in India specializing in Solar, Telecom, and High-Rise Building infrastructure projects.",
    url: "/"
  },
  about: {
    title: "About Us - Saanvi Structural Soln",
    description: "Learn about our history since 2008, our mission to engineer resilient future infrastructure, and our expert team.",
    url: "/about"
  },
  contact: {
    title: "Contact Us - Saanvi Structural Soln",
    description: "Get in touch for structural consulting for solar, buildings, and telecom projects. Request a free quote today.",
    url: "/contact"
  },
  projects: {
    title: "Our Portfolio - Saanvi Structural Soln",
    description: "Explore our portfolio of completed structural engineering projects across Solar, Buildings, and Telecommunications sectors.",
    url: "/projects"
  },
  blogs: {
    title: "Engineering Insights Blog - Saanvi Structural Soln",
    description: "Stay updated with the latest trends, technologies, and insights in structural engineering and infrastructure development.",
    url: "/blogs"
  },
  'service-solar': {
    title: "Solar Structural Engineering Services - Saanvi",
    description: "Expert solar mounting structure design and foundation analysis for GW-scale solar parks and rooftop installations.",
    url: "/services/solar"
  },
  'service-building': {
    title: "Building Structural Engineering Services - Saanvi",
    description: "Precision structural design for high-rise residential, commercial complexes, and industrial warehouses.",
    url: "/services/buildings"
  },
  'service-telecom': {
    title: "Telecom Tower Engineering Services - Saanvi",
    description: "Specialized design and analysis for telecom towers, 5G rollouts, and rooftop strengthening.",
    url: "/services/telecom"
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle SEO, Scroll, and URL updates
  useEffect(() => {
    // 1. Scroll to top for better UX/LCP
    window.scrollTo({ top: 0, behavior: 'auto' });

    // 2. Update Document Title
    const data = seoData[currentPage] || seoData['home'];
    document.title = data.title;

    // 3. Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = data.description;
      document.head.appendChild(meta);
    }

    // 4. Update Canonical Link
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', `https://saanvistructural.com${data.url}`);
    }

    // 5. Update URL history (simulating routing)
    if (window.location.pathname !== data.url) {
      window.history.pushState({ page: currentPage }, "", data.url);
    }

  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        // Simple fallback mapping if state is lost
        const path = window.location.pathname;
        const foundKey = Object.keys(seoData).find(key => seoData[key].url === path);
        setCurrentPage(foundKey || 'home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white">
      {/* Background Elements - Kept minimal for performance */}
      <div className="fixed inset-0 pointer-events-none z-0 square-grid" aria-hidden="true"></div>
      <div className="fixed top-20 left-10 w-16 h-16 floating-square z-0" aria-hidden="true"></div>
      <div className="fixed top-1/3 right-1/4 w-12 h-12 floating-square z-0" aria-hidden="true"></div>

      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-1 flex flex-col items-center w-full z-10">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutUs onNavigate={setCurrentPage}  />}
        {currentPage === 'contact' && <ContactUs />}
        {currentPage === 'projects' && <Projects   onNavigate={setCurrentPage} />}
        {currentPage === 'blogs' && <Blogs />}
        {currentPage === 'service-solar' && <ServiceSolar onNavigate={setCurrentPage}/>}
        {currentPage === 'service-building' && <ServiceBuildings onNavigate={setCurrentPage}/>}
        {currentPage === 'service-telecom' && <ServiceTelecom onNavigate={setCurrentPage} />}
      </main>
 
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;