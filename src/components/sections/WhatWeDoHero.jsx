import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhatWeDoHero = () => {
  return (
    <section className="position-relative d-flex align-items-center overflow-hidden" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050709', 
      backgroundImage: "url('/dubai_skyline_golden_hour.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#ffffff'
    }}>
      {/* Dark Overlay for better text readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)',
        zIndex: 1 
      }}></div>

      <Container className="position-relative z-10" style={{ maxWidth: '1400px' }}>
        <Row>
          <Col lg={7} xl={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Section Label */}
              <div className="d-flex align-items-center mb-3">
                <span className="inter fw-bold text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
                  WHAT WE DO
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="cormorant fw-bold mb-4" style={{ 
                fontSize: '3.5rem', 
                lineHeight: '1.2',
                letterSpacing: '1px',
                color: '#ffffff'
              }}>
                Strategic Capital.<br />
                Operational Excellence.<br />
                <span style={{ color: '#C8A64E' }}>Sustainable Growth.</span>
              </h1>

              {/* Description */}
              <p className="inter mb-5" style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#E0E0E0', 
                maxWidth: '550px' 
              }}>
                Sahmora’s business model goes beyond conventional investment. We provide strategic capital, deep operational expertise, commercial guidance, and scalable growth frameworks to ensure the long-term success of every enterprise we partner with.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3 mt-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact-us" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ background: 'linear-gradient(135deg, #F9DE8B 0%, #C8A64E 100%)', color: '#0d182b', border: 'none', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                    Partner With Sahmora
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact-us" className="btn-luxury px-4 py-3 rounded-2 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff', border: '1px solid rgba(200,166,78,0.5)', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                    Contact Us
                    <svg className="ms-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDoHero;
