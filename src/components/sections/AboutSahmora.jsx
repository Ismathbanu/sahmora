import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSahmora = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#F5F0E7' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left: Large Image */}
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
            <div className="position-relative w-100" style={{ height: '600px', borderRadius: '12px', overflow: 'hidden' }}>
              <div 
                className="w-100 h-100" 
                style={{ 
                  backgroundImage: "url('/bannerhero.jpeg')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  filter: 'grayscale(20%) contrast(1.1)' 
                }} 
              />
              {/* Decorative Gold Elements */}
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ border: '1px solid rgba(200, 166, 78, 0.3)', transform: 'translate(15px, 15px)', borderRadius: '12px', pointerEvents: 'none' }}></div>
            </div>
          </Col>

          {/* Right: Content */}
          <Col lg={6}>
            <div className="ps-lg-4">
              <h6 className="inter fw-bold tracking-widest mb-3 uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '2px' }}>
                ABOUT SAHMORA
              </h6>
              
              <h2 className="cormorant fw-bold mb-4" style={{ color: '#000000', fontSize: '3rem', lineHeight: '1.2' }}>
                More Than Capital.<br />
                We Build Businesses.
              </h2>
              
              <p className="inter mb-5" style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Sahmora Investment LLC goes beyond traditional investment. We are a dynamic business development platform that identifies market gaps, strategically invests capital, and deploys operational expertise to scale brands across the UAE and GCC.
              </p>
              
              <div className="mb-5">
                {[
                  "Strategic Investment",
                  "Business Development",
                  "Long-Term Partnerships"
                ].map((highlight, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-3">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="inter fw-medium" style={{ color: '#000000', fontSize: '1rem' }}>{highlight}</span>
                  </div>
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
                <Link to="/about-us" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-inline-flex align-items-center justify-content-center shadow-sm" style={{ background: 'transparent', color: '#000000', border: '1px solid #C8A64E', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                  DISCOVER OUR STORY
                  <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSahmora;
