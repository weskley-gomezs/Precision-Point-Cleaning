import React from 'react';
import { Hero } from './Hero';
import { CleaningServicesIntro } from './CleaningServicesIntro';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { StatsSection } from './StatsSection';
import { CustomizePlanSection } from './CustomizePlanSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CleaningServicesIntro />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <StatsSection />
      <CustomizePlanSection />
    </>
  );
};