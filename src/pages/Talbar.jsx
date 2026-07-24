import React from 'react';
import TalbarHero from '../components/sections/TalbarHero';
import TalbarLaunch from '../components/sections/TalbarLaunch';
import WhyUAE from '../components/sections/WhyUAE';
import UAEExpansion from '../components/sections/UAEExpansion';
import SignatureCollections from '../components/sections/SignatureCollections';

const Talbar = () => {
  return (
    <div className="talbar-page">
      <TalbarHero />
      <TalbarLaunch />
      <WhyUAE />
      <UAEExpansion />
      <SignatureCollections />
    </div>
  );
};

export default Talbar;
