import React from 'react';
import IndustriesHero from '../components/sections/IndustriesHero';
import IndustriesApproach from '../components/sections/IndustriesApproach';
import FeaturedIndustries from '../components/sections/FeaturedIndustries';
import WhyIndustries from '../components/sections/WhyIndustries';
import InvestmentCriteria from '../components/sections/InvestmentCriteria';

const IndustriesWeServe = () => {
  return (
    <div className="industries-page">
      <IndustriesHero />
      <IndustriesApproach />
      <FeaturedIndustries />
      <WhyIndustries />
      <InvestmentCriteria />
    </div>
  );
};

export default IndustriesWeServe;
