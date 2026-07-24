import React from 'react';
import Hero from '../components/sections/Hero';
import BusinessHighlights from '../components/sections/BusinessHighlights';
import AboutSahmora from '../components/sections/AboutSahmora';
import WhatWeDoHome from '../components/sections/WhatWeDoHome';
import HowWeCreateValue from '../components/sections/HowWeCreateValue';
import IndustriesWeServeHome from '../components/sections/IndustriesWeServeHome';
import SahmoraPartner from '../components/sections/SahmoraPartner';
import VisionMission from '../components/sections/VisionMission';

const Home = () => {
  return (
    <>
      <Hero />
      <BusinessHighlights />
      <AboutSahmora />
      <WhatWeDoHome />
      <HowWeCreateValue />
      <IndustriesWeServeHome />
      <SahmoraPartner />
      <VisionMission />
    </>
  );
};

export default Home;
