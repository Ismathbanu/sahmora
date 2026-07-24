import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <Container style={{ maxWidth: '1400px' }} className="py-5">
        <Row className="align-items-center">
          
          {/* Left Column - Content */}
          <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
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
                  OUR STORY
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="cormorant fw-bold mb-4" style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                color: '#1A1A1A',
                lineHeight: '1.2'
              }}>
                A Vision Built on Trust.<br />
                A Legacy Built on Growth.
              </h2>

              {/* Description */}
              <div className="inter" style={{ color: '#4A4A4A', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <p className="mb-4">
                  Sahmora Investment LLC is more than an investment company. We are a strategic growth partner dedicated to creating long-term value through intelligent investments and hands-on business development.
                </p>
                <p className="mb-4">
                  We go beyond funding. We work alongside entrepreneurs and business owners by providing strategic direction, operational expertise, market access, infrastructure, and scalable growth frameworks.
                </p>
                <p className="mb-0">
                  Every venture we support is built on transparency, governance, innovation, and sustainable expansion.
                </p>
              </div>
            </motion.div>
          </Col>

          {/* Right Column - Image with Gold Frame */}
          <Col lg={6} className="ps-lg-5 mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-100px" }}
              className="position-relative"
            >
              {/* Gold Frame Background */}
              <div className="position-absolute" style={{
                top: '5%',
                right: '-5%',
                width: '100%',
                height: '100%',
                border: '2px solid #C8A64E',
                zIndex: 0
              }}></div>
              
              {/* Image */}
              <div className="position-relative z-10">
                <img 
                  src="/dubai_skyline_golden_hour.png" 
                  alt="Dubai Skyline Golden Hour" 
                  className="img-fluid"
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    aspectRatio: '16/10' // Updated to match the wider aspect ratio in the screenshot
                  }}
                />
              </div>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
