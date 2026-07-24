import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section className="position-relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#000000' }}>
      
      {/* Background Image (Dubai Skyline & Gold Architecture placeholder) */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: `url('/bannerhero.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        zIndex: 0
      }}></div>

      {/* Smooth Black Gradient Fade on the Left */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0) 80%)',
        zIndex: 1
      }}></div>

      <Container className="position-relative" style={{ zIndex: 10, paddingTop: '15vh' }}>
        <Row className="align-items-center">
          <Col lg={7} xl={6} className="pe-lg-4">
            <div ref={textRef}>
              
              <h1 className="cormorant fw-bold mb-3" style={{ fontSize: '3.5rem', lineHeight: '1.2', letterSpacing: '1px', color: '#ffffff' }}>
                Building Businesses.<br/>
                Creating Value.<br/>
                <span style={{ color: '#C8A64E' }}>Growing Futures.</span>
              </h1>
              
              <p className="inter mb-5 mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%', color: '#e2e8f0' }}>
                Sahmora Investment LLC is a premier investment and business development group based in the UAE. We identify strategic opportunities, build sustainable brands, and foster long-term partnerships across retail, luxury, FMCG, and emerging industries.
              </p>
              
              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3 mt-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/about-us" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ background: 'linear-gradient(135deg, #F9DE8B 0%, #C8A64E 100%)', color: '#0d182b', border: 'none', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                    Explore Sahmora
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact-us" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff', border: '1px solid rgba(200,166,78,0.5)', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                    Partner With Us
                    <svg className="ms-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </motion.div>
                
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

