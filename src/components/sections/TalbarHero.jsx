import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TalbarHero = () => {
  return (
    <section className="position-relative d-flex align-items-center overflow-hidden" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050709', 
      backgroundImage: "url('/bannerhero.jpeg')", // Updated to match home page hero
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      color: '#ffffff'
    }}>
      {/* Dark Overlay for text readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        background: 'linear-gradient(to right, rgba(10,8,0,0.95) 0%, rgba(10,8,0,0.8) 40%, rgba(10,8,0,0.3) 100%)',
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
                  OUR VENTURE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="cormorant fw-bold mb-4" style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                lineHeight: '1.1',
                letterSpacing: '1px',
                color: '#ffffff'
              }}>
                Talbar Gold<br />
                <span style={{ color: '#C8A64E' }}>& Diamonds.</span>
              </h1>

              {/* Description */}
              <p className="inter mb-0" style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.8', 
                color: '#E0E0E0', 
                maxWidth: '550px' 
              }}>
                A heritage jewellery brand bringing traditional Indian trust, exceptional craftsmanship, and pure gold to the heart of the UAE. Experience brilliance that celebrates every moment.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TalbarHero;
