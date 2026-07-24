import React from 'react';
import IgradeHero from '../components/sections/IgradeHero';
import AboutIgrade from '../components/sections/AboutIgrade';
import IgradeServices from '../components/sections/IgradeServices';
import SahmoraEcosystem from '../components/sections/SahmoraEcosystem';
import BrandPortfolio from '../components/sections/BrandPortfolio';
import WhyChooseIgrade from '../components/sections/WhyChooseIgrade';

const Igrade = () => {
  return (
    <div className="igrade-page">
      <IgradeHero />
      <AboutIgrade />
      <IgradeServices />
      <SahmoraEcosystem />
      <BrandPortfolio />
      <WhyChooseIgrade />
    </div>
  );
};

export default Igrade;
