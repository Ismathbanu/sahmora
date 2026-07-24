import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const IndustriesApproach = () => {
  return (
    <section className="section-padding position-relative" style={{ 
      backgroundColor: '#FAF8F3', 
      backgroundImage: "url('/wireframe_bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Light Overlay to ensure text readability against the wireframe */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        backgroundColor: 'rgba(250, 248, 243, 0.85)', 
        zIndex: 1 
      }}></div>

      <Container className="position-relative z-10" style={{ maxWidth: '1400px' }}>
        <Row className="align-items-center">
          
          {/* Left Column */}
          <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Section Label */}
              <div className="d-flex align-items-center mb-4">
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
                <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
                  OUR INVESTMENT APPROACH
                </span>
              </div>
              
              {/* Heading */}
              <h2 className="cormorant fw-bold mb-4" style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                color: '#1A1A1A',
                lineHeight: '1.2'
              }}>
                Industries That<br />
                Build Tomorrow
              </h2>
            </motion.div>
          </Col>

          {/* Right Column - Explanation */}
          <Col lg={7} className="ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inter"
              style={{ color: '#4A4A4A', fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              <p className="mb-4">
                Our sector-focused investment strategy is designed to identify businesses with robust fundamentals and an exceptional growth outlook. We deliberately target industries where our deep market insights and operational expertise can be immediately leveraged to drive performance.
              </p>
              <p className="mb-4">
                We go beyond passive capital injection. By emphasizing hands-on operational involvement and fostering strategic partnerships, we ensure that our portfolio companies are equipped to navigate market complexities and scale efficiently.
              </p>
              <p className="mb-0">
                This focused approach guarantees that every investment we make contributes to long-term value creation, transforming high-potential businesses into resilient, market-leading enterprises.
              </p>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default IndustriesApproach;
