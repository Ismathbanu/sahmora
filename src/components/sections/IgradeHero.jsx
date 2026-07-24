import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const IgradeHero = () => {
  return (
    <section className="position-relative d-flex align-items-center overflow-hidden" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050709', 
      backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop')", // Warehouse/Logistics at night
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#ffffff'
    }}>
      {/* Dark Overlay for text readability (matches the left-heavy darkness in the image) */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        background: 'linear-gradient(to right, rgba(10,8,0,0.95) 0%, rgba(10,8,0,0.7) 50%, rgba(10,8,0,0.2) 100%)',
        zIndex: 1 
      }}></div>

      <Container className="position-relative z-10" style={{ maxWidth: '1400px', paddingTop: '80px' }}>
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
                  DISTRIBUTION THAT DRIVES BUSINESS
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="cormorant fw-bold mb-4" style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                lineHeight: '1.1',
                color: '#ffffff'
              }}>
                Powering Distribution.<br />
                <span style={{ color: '#C8A64E' }}>Delivering Growth.</span>
              </h1>

              {/* Description */}
              <p className="inter mb-5" style={{ 
                fontSize: '1.05rem', 
                lineHeight: '1.8', 
                color: '#E0E0E0', 
                maxWidth: '550px' 
              }}>
                Igrade Goods LLC is a leading FMCG and HORECA distribution company delivering efficient supply chain solutions, reliable product distribution, and operational excellence. We move your business forward.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact-us" className="btn-luxury px-4 py-3 rounded-0 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: '#C8A64E', color: '#0d182b', border: 'none', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                    PARTNER WITH IGRADE
                    <HiArrowRight className="ms-2" size={16} />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact-us" className="btn-luxury px-4 py-3 rounded-0 fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#ffffff', border: '1px solid rgba(200,166,78,0.5)', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
                    CONTACT US
                    <HiArrowRight className="ms-2" size={16} color="#C8A64E" />
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

export default IgradeHero;
