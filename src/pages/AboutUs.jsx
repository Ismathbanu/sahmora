import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import OurStory from '../components/sections/OurStory';
import VisionMission from '../components/sections/VisionMission';
import CoreValues from '../components/sections/CoreValues';
import InvestmentStrategy from '../components/sections/InvestmentStrategy';
import WhyPartner from '../components/sections/WhyPartner';

const AboutUs = () => {
  return (
    <div className="about-us-page" style={{ backgroundColor: '#050709' }}>
      {/* 1. Hero Banner */}
      <AboutHero />

      {/* 2. Our Story */}
      <OurStory />

      {/* 3. Our Vision and Our Mission */}
      <VisionMission />

      {/* 4. Our Core Values */}
      <CoreValues />

      {/* 5. Investment Strategy */}
      <InvestmentStrategy />

      {/* 6. Why Partner With Sahmora */}
      <WhyPartner />
    </div>
  );
};

export default AboutUs;
