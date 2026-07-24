import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="position-relative d-flex align-items-center" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050709', 
      backgroundImage: "url('/about_hero_bg.png')", // Generated Dark luxury architectural interior
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
                  ABOUT SAHMORA
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="cormorant fw-bold mb-3" style={{ 
                fontSize: '3.5rem', 
                lineHeight: '1.2',
                letterSpacing: '1px',
                color: '#ffffff'
              }}>
                Investing Beyond Capital.<br />
                Building Beyond Business.
              </h1>

              {/* Description */}
              <p className="inter" style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#E0E0E0', 
                maxWidth: '500px' 
              }}>
                Introduce Sahmora as a UAE-based investment and business development company focused on identifying, investing in, and scaling high-potential businesses across the UAE and GCC.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;
