import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ExpertiseSection from './ExpertiseSection';
import ProjectsPreviewSection from './ProjectsPreviewSection';
import FeaturedProjectSection from './FeaturedProjectSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ContactSection from './ContactSection';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <ExpertiseSection  onNavigate={onNavigate} />
      <ProjectsPreviewSection onNavigate={onNavigate} />
      <FeaturedProjectSection  onNavigate={onNavigate} />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
};

export default Home;