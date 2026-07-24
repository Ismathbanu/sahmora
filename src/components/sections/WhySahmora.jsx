import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const features = [
  {
    title: "UAE Market Expertise",
    description: "Deep understanding of the local market dynamics, regulatory landscape, and consumer behavior.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: "Strategic Business Development",
    description: "End-to-end support in scaling operations, optimizing supply chains, and driving growth.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: "Strong Commercial Network",
    description: "Extensive relationships with key stakeholders, distributors, and retail partners across the GCC.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Long-Term Value Creation",
    description: "Committed to sustainable growth, brand equity building, and long-lasting partnerships.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
];

const WhySahmora = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(200, 166, 78, 0.1)' }}>
      <Container className="py-5">
        <div className="text-center mb-5">
          <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '2px' }}>
            WHY SAHMORA
          </h6>
          <h2 className="cormorant fw-bold mb-4" style={{ color: '#ffffff', fontSize: '2.5rem' }}>
            Your Strategic Growth Partner
          </h2>
        </div>
        
        <Row className="g-5">
          {features.map((feature, index) => (
            <Col key={index} md={6}>
              <motion.div 
                className="d-flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="me-4 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(200, 166, 78, 0.1)', border: '1px solid rgba(200, 166, 78, 0.3)' }}>
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="inter fw-bold mb-2" style={{ color: '#ffffff', fontSize: '1.2rem' }}>
                    {feature.title}
                  </h4>
                  <p className="inter" style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhySahmora;
