import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaWarehouse, FaBox, FaUsers, FaConciergeBell, FaShoppingCart, FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const HorecaDivision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.horeca-item');
    
    gsap.fromTo(items,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const strengths = [
    { title: 'Reliable Supply\nCapacity', icon: <FaWarehouse /> },
    { title: 'Wide Product\nRange', icon: <FaBox /> },
    { title: 'Strong Vendor\nRelationships', icon: <FaUsers /> },
    { title: 'Service\nConsistency', icon: <FaConciergeBell /> },
    { title: 'Hospitality Market\nExperience', icon: <FaShoppingCart /> },
    { title: 'Quality-Focused\nOperations', icon: <FaStar /> }
  ];

  return (
    <section id="horeca" className="position-relative overflow-hidden" ref={sectionRef} style={{ backgroundColor: '#FCFBF8', padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Subtle Background Swoop Lines */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ zIndex: 0, opacity: 0.15 }}>
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M1440 0C1000 200 800 600 1440 800" stroke="#C8A64E" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M1440 50C1050 250 850 650 1440 850" stroke="#C8A64E" strokeWidth="1" />
          <path d="M1440 100C1100 300 900 700 1440 900" stroke="#C8A64E" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Decorative Right Image - Perfect Circular Arc */}
      <div className="position-absolute top-0 end-0 h-100 d-none d-lg-block" style={{ width: '20%', zIndex: 1, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          bottom: '-10%',
          left: '0',
          width: '200%',
          borderRadius: '50%',
          borderLeft: '4px solid #C8A64E',
          backgroundImage: 'url("/horeca_dining_plates.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          boxShadow: '-15px 0 40px rgba(0,0,0,0.06)'
        }}></div>
      </div>

      <Container className="position-relative z-10" style={{ maxWidth: '1400px' }}>
        <Row className="align-items-center justify-content-between">
          
          {/* Left Column - Text Content */}
          <Col lg={5} xl={4} className="mb-5 mb-lg-0 pe-lg-4">
            <span className="inter text-uppercase fw-bold d-block mb-3" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '1.5px' }}>
              HORECA DIVISION
            </span>
            
            <h2 className="cormorant mb-4" style={{ fontSize: '3.2rem', lineHeight: '1.15', color: '#1a1a1a', fontWeight: '600' }}>
              Trusted Supply Partner for<br/>
              <span style={{ color: '#C8A64E' }}>Hospitality & Foodservice</span>
            </h2>
            
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C8A64E', marginBottom: '2.5rem' }}></div>
            
            <p className="inter mb-5" style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555555' }}>
              Through brands Goods LLC, Sahmora’s ecosystem supplies hotels, restaurants, cafés, catering companies, and institutional buyers across the UAE.
            </p>

            {/* Quote Box */}
            <div className="position-relative rounded-3" style={{ border: '1px solid rgba(200, 166, 78, 0.4)', padding: '2rem 1.5rem 1.5rem', marginTop: '2rem' }}>
              <div className="position-absolute d-flex align-items-center justify-content-center" style={{ 
                top: '-25px', left: '20px', 
                backgroundColor: '#FCFBF8', 
                padding: '0 10px', 
                color: '#C8A64E', 
                fontSize: '4rem',
                fontFamily: 'serif',
                lineHeight: '1'
              }}>
                “
              </div>
              <p className="inter mb-0 fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#333333' }}>
                The HORECA division reflects Sahmora’s ability to serve demanding business customers with reliability, product depth, and operational discipline.”
              </p>
            </div>
          </Col>

          {/* Right Column - Cards Grid */}
          <Col lg={6} xl={7} className="pe-xl-5">
            <Row className="g-4 g-xl-5">
              {strengths.map((item, idx) => (
                <Col sm={6} key={idx}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="horeca-item bg-white rounded-4 text-center d-flex flex-column align-items-center justify-content-center"
                    style={{ 
                      boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                      padding: '2rem 1.5rem',
                      height: '100%',
                      margin: '0 auto',
                      maxWidth: '280px'
                    }}
                  >
                    {/* Icon Container */}
                    <div className="d-flex align-items-center justify-content-center rounded-circle mb-3" 
                         style={{ 
                           width: '50px', height: '50px', 
                           border: '1px solid #C8A64E',
                           backgroundColor: '#FCFBF8'
                         }}>
                      <div style={{ color: '#C8A64E', fontSize: '1.2rem' }}>
                        {item.icon}
                      </div>
                    </div>
                    
                    <h5 className="cormorant fw-bold mb-3" style={{ fontSize: '1.2rem', color: '#1a1a1a', whiteSpace: 'pre-line', lineHeight: '1.3' }}>
                      {item.title}
                    </h5>
                    
                    <div style={{ width: '15px', height: '2px', backgroundColor: '#C8A64E' }}></div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HorecaDivision;
