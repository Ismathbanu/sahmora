import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaSearch, FaBullseye, FaChartBar, FaCog, FaCrown, FaAngleDoubleRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const GrowthEngine = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.process-card');
    
    gsap.fromTo(cards,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const steps = [
    { num: '01', title: 'Identify', desc: 'Pinpoint high-potential\nmarkets and timeless\nopportunities.', icon: <FaSearch /> },
    { num: '02', title: 'Invest', desc: 'Allocate capital efficiently\ninto assets with lasting\nvalue and demand.', icon: <FaBullseye /> },
    { num: '03', title: 'Expand', desc: 'Deploy intelligent\nstrategies and open\nhigh-growth locations.', icon: <FaChartBar /> },
    { num: '04', title: 'Scale', desc: 'Integrate advanced systems\nand operational excellence\nto drive scale.', icon: <FaCog /> },
    { num: '05', title: 'Lead', desc: 'Establish market dominance\nand create enduring\ninvestor returns.', icon: <FaCrown /> }
  ];

  return (
    <section className="section-padding text-warm-white position-relative overflow-hidden" ref={sectionRef} style={{ backgroundColor: '#000000', padding: '6rem 0' }}>
      
      {/* Cinematic Gold Particles Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'url("/gold-particles-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5,
        zIndex: 0
      }}></div>

      {/* Dark gradient overlay to ensure text readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.95) 100%)',
        zIndex: 1
      }}></div>

      <Container fluid className="position-relative z-10" style={{ paddingTop: '1rem', maxWidth: '1400px' }}>
        
        {/* Header */}
        <div className="text-center mb-5 pb-4">
          <span className="inter text-uppercase fw-bold d-block mb-3" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--accent-luxury-gold)' }}>
            OUR APPROACH
          </span>
          <h2 className="cormorant fw-bold mb-3" style={{ fontSize: '3.5rem', color: '#ffffff' }}>The Growth Engine</h2>
          <p className="inter mx-auto" style={{ maxWidth: '650px', fontSize: '0.95rem', lineHeight: '1.6', color: '#aaaaaa' }}>
            A systematic, proven approach to scaling luxury retail operations and<br/>maximizing investor value.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="position-relative mt-5 pt-3" style={{ margin: '0 auto', maxWidth: '1200px' }}>
          
          {/* Connecting Gold Glowing Line (from center of first to center of last) */}
          <div className="position-absolute d-none d-lg-block" style={{ 
            height: '2px', 
            background: 'var(--accent-luxury-gold)', 
            top: '45px',
            transform: 'translateY(-50%)',
            left: '10%',
            width: '80%',
            boxShadow: '0 0 15px 2px rgba(200, 166, 78, 0.9), 0 0 5px 1px rgba(200, 166, 78, 0.6)',
            zIndex: 0 
          }}></div>

          <div className="d-flex flex-column flex-lg-row justify-content-between position-relative z-10 w-100">
            {steps.map((step, idx) => (
              <div key={idx} className="process-card position-relative text-center d-flex flex-column align-items-center mb-5 mb-lg-0" style={{ flex: '1 1 0', padding: '0 5px' }}>
                
                {/* Connector Double Arrow Overlay */}
                {idx < steps.length - 1 && (
                  <div className="position-absolute d-none d-lg-flex align-items-center justify-content-center bg-transparent" style={{ 
                    top: '45px', 
                    right: 0, 
                    transform: 'translate(50%, -50%)',
                    color: 'var(--accent-luxury-gold)',
                    fontSize: '1.4rem',
                    zIndex: 2,
                    textShadow: '0 0 15px rgba(200,166,78,1), 0 0 8px rgba(200,166,78,0.8)'
                  }}>
                    <FaAngleDoubleRight />
                  </div>
                )}

                {/* Node Circle */}
                <motion.div 
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(200, 166, 78, 0.7), inset 0 0 15px rgba(200, 166, 78, 0.3)' }}
                  className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{ 
                    width: '90px', 
                    height: '90px', 
                    backgroundColor: '#0a0a0a', 
                    border: '2px solid var(--accent-luxury-gold)',
                    boxShadow: '0 0 15px rgba(200, 166, 78, 0.4), inset 0 0 10px rgba(200, 166, 78, 0.1)',
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center" style={{ color: 'var(--accent-luxury-gold)', fontSize: '1.8rem' }}>
                    {step.icon}
                  </div>
                </motion.div>
                
                {/* Content */}
                <span className="cormorant fw-bold mb-1" style={{ fontSize: '1.3rem', letterSpacing: '1px', color: 'var(--accent-luxury-gold)' }}>{step.num}</span>
                <h5 className="cormorant fw-bold mb-2" style={{ fontSize: '1.6rem', color: '#ffffff' }}>{step.title}</h5>
                <p className="inter mx-auto" style={{ fontSize: '0.8rem', lineHeight: '1.6', color: '#aaaaaa', whiteSpace: 'pre-line', margin: '0' }}>
                  {step.desc}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthEngine;
