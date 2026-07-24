import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignatureCollections = () => {
  const collections = [
    {
      title: 'Gold Jewellery',
      desc: 'Timeless designs crafted\nin pure gold.',
      img: '/talbar-custom-gold.png'
    },
    {
      title: 'Diamond Collection',
      desc: 'Brilliance that celebrates\nevery moment.',
      img: '/talbar-jewelry.png'
    },
    {
      title: 'Bridal Jewellery',
      desc: 'For your most precious\ncelebrations.',
      img: '/talbar-model.png'
    },
    {
      title: 'Everyday Elegance',
      desc: 'Beautiful jewellery for\neveryday you.',
      img: '/industry_luxury.png'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#050709' }}>
      <Container style={{ maxWidth: '1400px' }} className="py-5">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-4">
          <h2 className="cormorant fw-medium text-uppercase" style={{ fontSize: '2.2rem', color: '#C8A64E', letterSpacing: '2px' }}>
            Signature Collections
          </h2>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <div style={{ width: '60px', height: '1px', backgroundColor: '#C8A64E' }}></div>
            <div style={{ width: '8px', height: '8px', border: '1px solid #C8A64E', transform: 'rotate(45deg)', margin: '0 15px' }}></div>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#C8A64E' }}></div>
          </div>
        </div>

        {/* Collections Grid */}
        <Row className="g-4">
          {collections.map((item, idx) => (
            <Col md={6} xl={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-100 d-flex flex-column rounded-3 overflow-hidden position-relative group"
                style={{
                  backgroundColor: '#0B0B0B',
                  border: '1px solid rgba(200, 166, 78, 0.3)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(200, 166, 78, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(200, 166, 78, 0.3)';
                }}
              >
                {/* Image Section */}
                <div style={{
                  height: '240px',
                  backgroundImage: `url('${item.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  borderBottom: '1px solid rgba(200, 166, 78, 0.1)'
                }}>
                  {/* Subtle dark overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                </div>

                {/* Content Section */}
                <div className="flex-grow-1 p-4 d-flex flex-column position-relative z-10">
                  <h4 className="cormorant fw-medium mb-3" style={{ color: '#E0E0E0', fontSize: '1.4rem' }}>
                    {item.title}
                  </h4>
                  
                  <p className="inter mb-4 flex-grow-1" style={{ color: '#999999', fontSize: '0.9rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                    {item.desc}
                  </p>

                  <div className="mt-auto d-flex justify-content-end">
                    <Link to="#" className="d-flex align-items-center justify-content-center rounded-circle" style={{ 
                      width: '36px',
                      height: '36px',
                      border: '1px solid #C8A64E',
                      color: '#C8A64E',
                      transition: 'background-color 0.3s, color 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C8A64E';
                      e.currentTarget.style.color = '#050709';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#C8A64E';
                    }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>

              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SignatureCollections;
