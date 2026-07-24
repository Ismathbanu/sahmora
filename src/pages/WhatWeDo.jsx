import React from 'react';
import WhatWeDoHero from '../components/sections/WhatWeDoHero';
import OurApproach from '../components/sections/OurApproach';
import WhatWeDoServices from '../components/sections/WhatWeDoServices';
import HowWeCreateValue from '../components/sections/HowWeCreateValue';
import InvestmentProcess from '../components/sections/InvestmentProcess';
import WhyApproachWorks from '../components/sections/WhyApproachWorks';

const WhatWeDo = () => {
  return (
    <div className="what-we-do-page">
      {/* 1. Hero Section */}
      <WhatWeDoHero />

      {/* 2. Our Approach */}
      <OurApproach />

      {/* 3. What We Do Services */}
      <WhatWeDoServices />

      {/* 4. How We Create Value */}
      <HowWeCreateValue />

      {/* 5. Our Investment Process */}
      <InvestmentProcess />

      {/* 6. Why Our Approach Works */}
      <WhyApproachWorks />
    </div>
  );
};

export default WhatWeDo;
