import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const OurApproach = () => {
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
          
          {/* Left Column - Quote */}
          <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Heading */}
              <h3 className="inter fw-bold text-uppercase mb-3" style={{ fontSize: '1rem', color: '#1A1A1A', letterSpacing: '2px' }}>
                Our Approach
              </h3>
              
              {/* Gold Divider */}
              <div style={{ width: '50px', height: '2px', backgroundColor: '#C8A64E', marginBottom: '2.5rem' }}></div>

              {/* Quote */}
              <h2 className="cormorant fst-italic" style={{ 
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', 
                color: '#A27C37',
                lineHeight: '1.3'
              }}>
                "Every investment is backed by strategy, operational involvement, and long-term partnership."
              </h2>
            </motion.div>
          </Col>

          {/* Right Column - Explanation */}
          <Col lg={6} className="ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inter"
              style={{ color: '#4A4A4A', fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              <p className="mb-4">
                At Sahmora, we believe that true value creation requires more than just financial capital. Our investment philosophy is deeply rooted in active collaboration and operational excellence.
              </p>
              <p className="mb-0">
                We align ourselves with ambitious entrepreneurs and established businesses to identify untrapped potential. By deploying our extensive commercial network, regional insights, and proven growth frameworks, we transform promising ventures into market-leading enterprises built for sustainable, long-term success.
              </p>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default OurApproach;
