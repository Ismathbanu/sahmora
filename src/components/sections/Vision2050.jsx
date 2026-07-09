import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaStore, FaChartLine, FaGlobe } from 'react-icons/fa';
import { AiOutlineGold } from 'react-icons/ai';

gsap.registerPlugin(ScrollTrigger);

const Vision2050 = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.animate-up');
    
    gsap.fromTo(elements,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const timeline = [
    { year: '2024', text: 'Foundation\n& Growth' },
    { year: '2030', text: 'Market Leadership\nin UAE' },
    { year: '2040', text: 'Regional Expansion\nAcross GCC' },
    { year: '2050', text: 'Global Luxury\nInvestment Leader' }
  ];

  return (
    <section id="vision" className="position-relative" style={{ backgroundColor: '#ffffff', color: '#111', padding: '6rem 0' }} ref={sectionRef}>
      
      <Container className="container-luxury position-relative">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-2 animate-up">
          <span className="inter text-uppercase fw-bold d-block mb-3" style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--accent-luxury-gold)' }}>
            THE LONG-TERM HORIZON
          </span>
          <h2 className="cormorant mb-3" style={{ fontSize: '4.5rem', color: '#1a1a1a', fontWeight: '500' }}>
            Vision <span style={{ color: 'var(--accent-luxury-gold)' }}>2050</span>
          </h2>
          <p className="inter mx-auto text-dark" style={{ fontSize: '0.95rem', maxWidth: '650px', lineHeight: '1.8' }}>
            By 2050, Sahmora Investment LLC aims to be the preeminent luxury and gold investment conglomerate in the Middle East, setting global standards for quality, transparency, and shareholder value.
          </p>
        </div>

        {/* Middle Infographic Section */}
        <div className="position-relative d-flex flex-column align-items-center mb-5 pb-4">
          
          {/* Horizontal Dotted Line connecting the blocks */}
          <div className="position-absolute w-100 d-none d-lg-block" style={{ 
            top: '160px', 
            borderTop: '1px dashed rgba(200, 166, 78, 0.6)', 
            zIndex: 0,
            maxWidth: '900px'
          }}></div>

          <Row className="w-100 justify-content-center align-items-center position-relative z-10" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Left Card: Boutiques */}
            <Col lg={4} md={6} className="mb-4 mb-lg-0 px-lg-4 animate-up d-flex justify-content-end">
              <div className="bg-white text-center d-flex flex-column align-items-center position-relative"
                style={{ 
                  border: '1px solid rgba(200,166,78,0.4)', 
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.02)',
                  width: '260px',
                  padding: '2.5rem 1.5rem',
                  zIndex: 2
                }}
              >
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px', backgroundColor: '#111' }}>
                  <FaStore style={{ color: 'var(--accent-luxury-gold)', fontSize: '1.5rem' }} />
                </div>
                <h3 className="cormorant fw-medium mb-1" style={{ fontSize: '3.2rem', color: 'var(--accent-luxury-gold)', lineHeight: '1' }}>75</h3>
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)', margin: '15px auto' }}></div>
                <p className="inter fw-bold mb-0 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1.5px', color: '#111' }}>BOUTIQUES</p>
              </div>
            </Col>

            {/* Center Circle: Valuation */}
            <Col lg={4} md={12} className="mb-4 mb-lg-0 animate-up text-center d-flex justify-content-center z-10 position-relative">
              
              {/* Outer Glow Ring */}
              <div className="rounded-circle position-relative d-flex flex-column align-items-center justify-content-center bg-white"
                style={{ 
                  width: '320px', 
                  height: '320px', 
                  boxShadow: '0 0 0 2px rgba(200, 166, 78, 0.5), 0 20px 40px rgba(200, 166, 78, 0.1)',
                  zIndex: 2
                }}
              >
                {/* Inner Crisp Gold Ring */}
                <div className="position-absolute rounded-circle" style={{ 
                  width: '92%', height: '92%', 
                  border: '1px solid rgba(200, 166, 78, 0.3)'
                }}></div>

                {/* Overlapping Top Icon */}
                <div className="position-absolute start-50 translate-middle rounded-circle bg-white d-flex align-items-center justify-content-center" style={{ 
                  top: '0',
                  width: '64px', 
                  height: '64px', 
                  border: '2px solid rgba(200, 166, 78, 0.8)',
                  zIndex: 3
                }}>
                  <FaChartLine style={{ color: 'var(--accent-luxury-gold)', fontSize: '1.4rem' }} />
                </div>

                <div className="position-relative z-10 mt-3 d-flex flex-column align-items-center">
                  <span className="cormorant fw-bold mb-0" style={{ fontSize: '1.3rem', letterSpacing: '2px', color: '#111' }}>AED</span>
                  <span className="cormorant mb-3" style={{ fontSize: '5rem', lineHeight: '0.9', color: 'var(--accent-luxury-gold)', fontWeight: '500' }}>3.75B</span>
                  <span className="inter fw-bold d-block text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px', color: '#111' }}>PROJECTED</span>
                  <span className="inter fw-bold d-block text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px', color: '#111' }}>VALUATION</span>
                </div>
              </div>
            </Col>

            {/* Right Card: Gold */}
            <Col lg={4} md={6} className="px-lg-4 animate-up d-flex justify-content-start z-10">
              <div className="bg-white text-center d-flex flex-column align-items-center position-relative"
                style={{ 
                  border: '1px solid rgba(200,166,78,0.4)', 
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.02)',
                  width: '260px',
                  padding: '2.5rem 1.5rem',
                  zIndex: 2
                }}
              >
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px', backgroundColor: '#111' }}>
                  <AiOutlineGold style={{ color: 'var(--accent-luxury-gold)', fontSize: '1.8rem' }} />
                </div>
                <h3 className="cormorant fw-medium mb-1" style={{ fontSize: '3rem', color: 'var(--accent-luxury-gold)', lineHeight: '1.1' }}>7,500 Kg</h3>
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)', margin: '15px auto' }}></div>
                <p className="inter fw-bold mb-0 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1.5px', color: '#111' }}>GOLD ANNUALLY</p>
              </div>
            </Col>
            
          </Row>
          
          {/* Global Presence Pill */}
          <div className="mt-4 pt-2 animate-up position-relative" style={{ zIndex: 10 }}>
            <div className="bg-white rounded-pill d-flex align-items-center shadow-sm"
              style={{ border: '1px solid rgba(200,166,78,0.4)', padding: '6px 20px 6px 6px', maxWidth: '400px' }}
            >
              <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', backgroundColor: '#111' }}>
                <FaGlobe style={{ color: 'var(--accent-luxury-gold)', fontSize: '1.2rem' }} />
              </div>
              <div className="text-start">
                <p className="inter fw-bold mb-0 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#111' }}>GLOBAL PRESENCE</p>
                <p className="inter mb-0" style={{ fontSize: '0.75rem', color: '#666' }}>Expanding across key markets worldwide</p>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Bottom */}
        <div className="position-relative mt-5 pt-3 animate-up mx-auto" style={{ maxWidth: '1000px' }}>
          
          {/* Main line with arrow at end */}
          <div className="position-absolute start-0 w-100 d-flex align-items-center" style={{ top: '16px' }}>
            <div className="flex-grow-1" style={{ height: '2px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
            {/* Arrowhead */}
            <div style={{ 
              width: '12px', height: '12px', 
              borderTop: '2px solid var(--accent-luxury-gold)', 
              borderRight: '2px solid var(--accent-luxury-gold)', 
              transform: 'rotate(45deg)',
              marginLeft: '-4px'
            }}></div>
          </div>

          <Row className="position-relative z-10 justify-content-between text-center mx-0">
            {timeline.map((item, idx) => (
              <Col key={idx} xs={3} className="d-flex flex-column align-items-center">
                {/* Node */}
                <div className="rounded-circle mb-3" style={{ width: '14px', height: '14px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
                
                {/* Text */}
                <h4 className="cormorant fw-medium mb-1" style={{ fontSize: '1.4rem', color: 'var(--accent-luxury-gold)' }}>{item.year}</h4>
                <p className="inter fw-medium" style={{ fontSize: '0.85rem', color: '#111', whiteSpace: 'pre-line', lineHeight: '1.4' }}>{item.text}</p>
              </Col>
            ))}
          </Row>
          
        </div>

      </Container>
    </section>
  );
};

export default Vision2050;
