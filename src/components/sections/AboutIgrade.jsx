import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { HiOutlineShoppingCart, HiOutlineCube } from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';

const AboutIgrade = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FAF8F3' }}>
      <Container style={{ maxWidth: '1400px' }}>
        <Row className="align-items-stretch">
          
          {/* Left Column - Image */}
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-100 position-relative overflow-hidden"
              style={{ minHeight: '500px', borderRadius: '4px' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop" 
                alt="Warehouse Interior" 
                className="w-100 h-100 position-absolute top-0 start-0"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </Col>

          {/* Right Column - Content */}
          <Col lg={6} className="ps-lg-5 d-flex flex-column justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-3">
                <span className="inter fw-bold text-uppercase" style={{ fontSize: '0.85rem', color: '#B8860B', letterSpacing: '2px' }}>
                  ABOUT IGRADE
                </span>
              </div>
              
              <h2 className="cormorant fw-bold mb-4" style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                color: '#1A1A1A',
                lineHeight: '1.2'
              }}>
                Distribution Excellence.<br />
                <span style={{ color: '#8B6508' }}>Delivered Every Day.</span>
              </h2>
              
              <p className="inter mb-5 pb-2" style={{ color: '#4A4A4A', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Igrade Goods LLC specializes in the distribution of FMCG and HORECA products, backed by a strong infrastructure, experienced team, and a commitment to service excellence.
              </p>

              {/* Features Row */}
              <Row className="g-4 mt-2 border-top pt-4" style={{ borderColor: 'rgba(184, 134, 11, 0.2) !important' }}>
                <Col sm={4}>
                  <div className="mb-3" style={{ color: '#B8860B' }}>
                    <HiOutlineShoppingCart size={36} />
                  </div>
                  <h6 className="inter fw-bold mb-2" style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>FMCG Distribution</h6>
                  <p className="inter mb-0" style={{ color: '#666666', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Wide range of fast-moving consumer goods from trusted global brands.
                  </p>
                </Col>
                <Col sm={4}>
                  <div className="mb-3" style={{ color: '#B8860B' }}>
                    <BiDish size={36} />
                  </div>
                  <h6 className="inter fw-bold mb-2" style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>HORECA Supply</h6>
                  <p className="inter mb-0" style={{ color: '#666666', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Dedicated supply solutions for hotels, restaurants, cafés and catering.
                  </p>
                </Col>
                <Col sm={4}>
                  <div className="mb-3" style={{ color: '#B8860B' }}>
                    <HiOutlineCube size={36} />
                  </div>
                  <h6 className="inter fw-bold mb-2" style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>Supply Chain Solutions</h6>
                  <p className="inter mb-0" style={{ color: '#666666', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    End-to-end supply chain management ensuring efficiency and reliability.
                  </p>
                </Col>
              </Row>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutIgrade;
