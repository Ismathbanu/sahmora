import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const highlights = [
  {
    line1: "STRATEGIC",
    line2: "INVESTMENTS",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
      </svg>
    )
  },
  {
    line1: "BUSINESS",
    line2: "GROWTH",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
        <rect x="2" y="16" width="3" height="6" />
        <rect x="7" y="12" width="3" height="10" />
        <rect x="12" y="8" width="3" height="14" />
      </svg>
    )
  },
  {
    line1: "MARKET",
    line2: "EXPANSION",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <line x1="2" y1="16" x2="22" y2="16" />
      </svg>
    )
  },
  {
    line1: "BUSINESS",
    line2: "TRANSFORMATION",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.34-9.57l-4.5 4.5" />
      </svg>
    )
  }
];

const BusinessHighlights = () => {
  return (
    <section className="py-4" style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(200, 166, 78, 0.1)', borderBottom: '1px solid rgba(200, 166, 78, 0.1)' }}>
      <Container fluid className="px-lg-5">
        <div className="text-center mb-4">
          <h3 className="inter text-uppercase fw-bold" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '4px' }}>
            Building Sustainable Businesses Across The UAE & GCC
          </h3>
        </div>
        
        <Row className="justify-content-center align-items-center g-3 g-md-0">
          {highlights.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3} className="position-relative">
              <motion.div 
                className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start ps-lg-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="me-3 d-flex justify-content-center align-items-center">
                  {item.icon}
                </div>
                <div className="text-start">
                  <div className="inter fw-bold lh-1" style={{ color: '#ffffff', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    {item.line1}
                  </div>
                  <div className="inter fw-bold lh-1 mt-1" style={{ color: '#ffffff', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    {item.line2}
                  </div>
                </div>
              </motion.div>
              
              {/* Vertical Divider (visible only on large screens) */}
              {index < highlights.length - 1 && (
                <div 
                  className="d-none d-lg-block position-absolute end-0 top-50 translate-middle-y" 
                  style={{ width: '1px', height: '35px', backgroundColor: 'rgba(200, 166, 78, 0.3)' }}
                />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BusinessHighlights;
