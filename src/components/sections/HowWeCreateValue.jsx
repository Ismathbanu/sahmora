import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: "Identify Opportunities", icon: "search" },
  { id: 2, title: "Evaluate Potential", icon: "bar-chart-2" },
  { id: 3, title: "Strategic Investment", icon: "dollar-sign" },
  { id: 4, title: "Business Transformation", icon: "settings" },
  { id: 5, title: "Scale Operations", icon: "trending-up" },
  { id: 6, title: "Lead Markets", icon: "award" }
];

const getIcon = (name) => {
  switch(name) {
    case 'search': return <><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></>;
    case 'bar-chart-2': return <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></>;
    case 'dollar-sign': return <><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></>;
    case 'settings': return <><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></>;
    case 'trending-up': return <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></>;
    case 'award': return <><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></>;
    default: return <circle cx="12" cy="12" r="10"></circle>;
  }
};

const HowWeCreateValue = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#000000', overflow: 'hidden' }}>
      <Container className="py-5">
        <div className="text-center mb-5">
          <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '2px' }}>
            HOW WE CREATE VALUE
          </h6>
          <h2 className="cormorant fw-bold" style={{ color: '#ffffff', fontSize: '2.5rem' }}>
            Our Proven Approach
          </h2>
        </div>
        
        <div className="position-relative mt-5 pt-3">
          {/* Horizontal Line connecting the steps (visible on larger screens) */}
          <div className="d-none d-lg-block position-absolute" style={{ top: '40px', left: '8%', right: '8%', height: '1px', backgroundColor: 'rgba(200, 166, 78, 0.3)', zIndex: 0 }}></div>
          
          <Row className="g-4 text-center justify-content-center">
            {steps.map((step, index) => (
              <Col key={step.id} xs={6} md={4} lg={2} className="position-relative">
                <motion.div 
                  className="d-flex flex-column align-items-center position-relative"
                  style={{ zIndex: 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div 
                    className="mb-4 d-flex justify-content-center align-items-center fw-bold" 
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '50%', 
                      backgroundColor: '#050709', 
                      border: '2px solid #C8A64E',
                      color: '#C8A64E',
                      boxShadow: '0 0 20px rgba(200, 166, 78, 0.15)'
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {getIcon(step.icon)}
                    </svg>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-center mb-2" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: '#C8A64E', fontSize: '0.75rem', fontWeight: 'bold' }}>
                    {step.id}
                  </div>
                  
                  <h5 className="inter fw-medium px-2" style={{ color: '#ffffff', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {step.title}
                  </h5>
                </motion.div>
                
                {/* Mobile/Tablet Arrow */}
                {index < steps.length - 1 && (
                  <div className="d-lg-none my-3 text-center w-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HowWeCreateValue;
