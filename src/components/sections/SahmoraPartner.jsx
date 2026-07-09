import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChartBar, FaTruck, FaShoppingCart, FaHandshake, FaChartLine, FaGem } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const SahmoraPartner = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.focus-card');
    
    gsap.fromTo(cards,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const focusAreas = [
    { 
      title: 'Business Growth', 
      desc: 'Driving sustainable\nand profitable growth', 
      icon: <FaChartBar /> 
    },
    { 
      title: 'Distribution\nDevelopment', 
      desc: 'Building efficient and\nwide-reaching networks', 
      icon: <FaTruck /> 
    },
    { 
      title: 'Retail Expansion', 
      desc: 'Expanding presence across\nkey retail channels', 
      icon: <FaShoppingCart /> 
    },
    { 
      title: 'Strategic\nPartnerships', 
      desc: 'Collaborating with\ntrusted partners', 
      icon: <FaHandshake /> 
    },
    { 
      title: 'Brand Scaling', 
      desc: 'Elevating brands into\nmarket leaders', 
      icon: <FaChartLine /> 
    },
    { 
      title: 'Long-term Value\nCreation', 
      desc: 'Creating enduring value\nfor stakeholders', 
      icon: <FaGem /> 
    }
  ];

  return (
    <section id="partner" className="section-padding position-relative overflow-hidden" ref={sectionRef} style={{ backgroundColor: '#0B0C10', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Skyline & Glow */}
      <div className="position-absolute bottom-0 start-0 w-100" style={{
        height: '500px',
        backgroundImage: 'linear-gradient(to top, rgba(200,166,78,0.1) 0%, transparent 100%), url("/dubai-skyline-gold.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
        opacity: 0.4,
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <Container className="container-luxury position-relative z-10 py-5">
        <Row className="align-items-center">
          
          {/* Left Column */}
          <Col lg={5} className="mb-5 mb-lg-0 pe-lg-5">
            
            <div className="d-flex align-items-center mb-4">
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E', marginRight: '15px' }}></div>
              <span className="inter text-uppercase fw-bold tracking-widest" style={{ fontSize: '0.8rem', color: '#C8A64E', letterSpacing: '2px' }}>
                SAHMORA INVESTMENT LLC
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E', marginLeft: '15px' }}></div>
            </div>
            
            <h2 className="cormorant mb-4" style={{ fontSize: '3.5rem', lineHeight: '1.2', color: '#ffffff', fontWeight: '500' }}>
              The Growth Partner<br/>Behind the <span style={{ color: '#C8A64E' }}>Vision</span>
            </h2>
            
            <div style={{ width: '60px', height: '2px', backgroundColor: '#C8A64E', marginBottom: '2.5rem' }}></div>
            
            <p className="inter mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#a0a0a0', maxWidth: '95%' }}>
              Sahmora Investment LLC is a UAE-based investment company focused on identifying, investing in, and scaling high-potential businesses across FMCG, HORECA, retail, luxury, and strategic growth sectors.
            </p>
            <p className="inter mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#a0a0a0', maxWidth: '95%' }}>
              The company’s role is to provide the capital, vision, business infrastructure, market access, and execution discipline required to transform promising brands into scalable regional ventures.
            </p>

          </Col>

          {/* Right Column: Cards Grid */}
          <Col lg={7} className="ps-lg-4">
            <Row className="g-4">
              {focusAreas.map((item, idx) => (
                <Col md={6} key={idx}>
                  <div className="focus-card p-4 rounded-3 d-flex align-items-center h-100 position-relative overflow-hidden" 
                       style={{ 
                         background: 'linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)', 
                         border: '1px solid rgba(200, 166, 78, 0.25)',
                         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(200, 166, 78, 0.02)',
                         backdropFilter: 'blur(10px)'
                       }}>
                    
                    {/* Subtle top-left glow inside card */}
                    <div className="position-absolute top-0 start-0 w-50 h-50" style={{
                      background: 'radial-gradient(circle at top left, rgba(200, 166, 78, 0.1) 0%, transparent 70%)',
                      zIndex: 0
                    }}></div>

                    <div className="d-flex align-items-center position-relative z-10 w-100">
                      {/* Icon Container */}
                      <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" 
                           style={{ 
                             width: '55px', height: '55px', 
                             border: '1px solid rgba(200, 166, 78, 0.6)',
                             backgroundColor: 'transparent'
                           }}>
                        <div style={{ color: '#C8A64E', fontSize: '1.5rem' }}>
                          {item.icon}
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="ms-4">
                        <h5 className="cormorant fw-bold mb-2" style={{ fontSize: '1.25rem', color: '#ffffff', whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                          {item.title}
                        </h5>
                        <p className="inter mb-0" style={{ fontSize: '0.8rem', color: '#a0a0a0', whiteSpace: 'pre-line', lineHeight: '1.5' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default SahmoraPartner;
