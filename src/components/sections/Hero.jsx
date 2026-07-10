import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const GoldBadge = () => (
  <div className="position-absolute d-none d-lg-flex justify-content-center align-items-center" style={{ top: '8%', right: '5%', width: '130px', height: '130px', zIndex: 20 }}>
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.5))' }}>
      <defs>
        <path id="curveTop" d="M 20,50 A 30,30 0 0,1 80,50" />
        <path id="curveBottom" d="M 75,55 A 25,25 0 0,1 25,55" />
      </defs>
      
      {/* Outer and Inner Gold Circles */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C8A64E" strokeWidth="1" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#C8A64E" strokeWidth="0.5" strokeDasharray="3,3" />
      
      {/* Curved Text - Top */}
      <text fontSize="6" fill="#C8A64E" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">
        <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
          HERITAGE
        </textPath>
      </text>
      
      {/* Crown Icon */}
      <path d="M 42,35 L 45,41 L 50,33 L 55,41 L 58,35 L 56,43 L 44,43 Z" fill="#C8A64E" />
      
      {/* Straight Text - Center */}
      <text x="50" y="52" fontSize="9" fill="#ffffff" fontWeight="bold" textAnchor="middle" fontFamily="serif" letterSpacing="2">
        TRUST
      </text>
      
      {/* Curved Text - Bottom */}
      <text fontSize="5.5" fill="#C8A64E" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">
        <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
          MODERN LUXURY
        </textPath>
      </text>
    </svg>
  </div>
);

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
      
      {/* Background Image */}
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
          <Col lg={6} xl={6} className="pe-lg-4">
            <div ref={textRef}>
              
              <h1 className="cormorant text-uppercase fw-bold mb-3" style={{ fontSize: '3rem', lineHeight: '1.2', letterSpacing: '1px', color: '#ffffff' }}>
                TALBAR GOLD & DIAMOND<br/>
                IS COMING TO THE <span style={{ color: '#C8A64E' }}>UAE</span>
              </h1>
              
              <h4 className="inter fw-medium mb-3 mt-4" style={{ fontSize: '1.15rem', lineHeight: '1.5', color: '#f8f9fa' }}>
                Introducing the Next Gold & Diamond Retail<br/>
                Growth Story in the UAE
              </h4>
              
              <p className="inter mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '90%', color: '#e2e8f0' }}>
                A heritage jewellery brand from Muttupettai, Tamil Nadu,<br/> 
                entering the UAE market with a strategic expansion<br/> 
                vision powered by Sahmora Investment LLC.
              </p>
              
              {/* Vertical Line Block */}
              <div className="position-relative ps-3 mb-5" style={{ borderLeft: '3px solid #C8A64E' }}>
                <p className="inter mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '85%', color: '#C8A64E' }}>
                  Sahmora Investment LLC is building high-growth<br/>
                  businesses across FMCG, HORECA, retail, luxury,<br/>
                  and investment-backed ventures across the UAE<br/>
                  and GCC.
                </p>
              </div>
              
              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3 mt-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a href="#vision" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff', border: '1px solid rgba(200,166,78,0.5)', fontSize: '0.75rem', letterSpacing: '1px' }}>
                    EXPLORE TALBAR VISION 
                    <svg className="ms-2" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a href="#contact" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ background: 'linear-gradient(135deg, #F9DE8B 0%, #C8A64E 100%)', color: '#0d182b', border: 'none', fontSize: '0.75rem', letterSpacing: '1px' }}>
                    PARTNER WITH SAHMORA
                  </a>
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
