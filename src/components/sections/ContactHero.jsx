import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="position-relative d-flex align-items-center overflow-hidden" style={{ 
      minHeight: '60vh', // Shorter hero for contact page
      backgroundColor: '#050709', 
      backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')", // Luxury office building interior
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#ffffff'
    }}>
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        background: 'linear-gradient(to right, rgba(5,7,9,1) 0%, rgba(5,7,9,0.85) 50%, rgba(5,7,9,0.4) 100%)',
        zIndex: 1 
      }}></div>

      <Container className="position-relative z-10" style={{ maxWidth: '1400px', paddingTop: '80px' }}>
        <Row>
          <Col lg={8} xl={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Section Label */}
              <div className="d-flex align-items-center mb-3">
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
                <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
                  CONNECT WITH SAHMORA
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="cormorant fw-bold mb-4" style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                lineHeight: '1.1',
                color: '#ffffff'
              }}>
                Contact Us.<br />
                <span style={{ color: '#C8A64E' }}>Partner for Growth.</span>
              </h1>

              {/* Description */}
              <p className="inter mb-0" style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#E0E0E0', 
                maxWidth: '600px' 
              }}>
                Whether you are looking for strategic investment, business development, or a powerful distribution network, our team is ready to help you scale.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHero;
