import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Vision2030 from './components/sections/Vision2030';
import TalbarLaunch from './components/sections/TalbarLaunch';
import WhyUAE from './components/sections/WhyUAE';
import GoldInvestment from './components/sections/GoldInvestment';
import UAEExpansion from './components/sections/UAEExpansion';
import SahmoraEcosystem from './components/sections/SahmoraEcosystem';
import BusinessStrength from './components/sections/BusinessStrength';
import GrowthEngine from './components/sections/GrowthEngine';
import Vision2050 from './components/sections/Vision2050';
import WhyPartner from './components/sections/WhyPartner';
import Contact from './components/sections/Contact';
import SahmoraPartner from './components/sections/SahmoraPartner';
import HorecaDivision from './components/sections/HorecaDivision';
import InvestmentStrategy from './components/sections/InvestmentStrategy';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision2030 />
        <TalbarLaunch />
        <WhyUAE />
        <GoldInvestment />
        <UAEExpansion />
        <SahmoraPartner />
        <SahmoraEcosystem />
        <BusinessStrength />
        <GrowthEngine />
        <HorecaDivision />
        <Vision2050 />
        <InvestmentStrategy />
        <WhyPartner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
