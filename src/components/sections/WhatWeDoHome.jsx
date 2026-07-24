import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const services = [
  { line1: "Strategic", line2: "Investments", icon: "bar-chart-up" },
  { line1: "Growth", line2: "Capital", icon: "coins" },
  { line1: "Business", line2: "Acquisitions", icon: "puzzle" },
  { line1: "Retail", line2: "Expansion", icon: "shopping-bag" },
  { line1: "Market Entry", line2: "Strategy", icon: "globe" },
  { line1: "Distribution", line2: "Development", icon: "truck" },
  { line1: "Brand", line2: "Scaling", icon: "diamond" },
  { line1: "Business", line2: "Transformation", icon: "refresh" }
];

const getIcon = (name) => {
  switch(name) {
    case 'bar-chart-up': return <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><polyline points="2 12 7 7 12 12 22 2"></polyline><polyline points="16 2 22 2 22 8"></polyline></>;
    case 'coins': return <><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v3c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 8v3c0 1.7 3.6 3 8 3s8-1.3 8-3V8"></path><path d="M4 11v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3"></path><path d="M4 14v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3"></path></>;
    case 'puzzle': return <><path d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4Z"></path></>;
    case 'shopping-bag': return <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></>;
    case 'globe': return <><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></>;
    case 'truck': return <><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></>;
    case 'diamond': return <><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></>;
    case 'refresh': return <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline><circle cx="12" cy="12" r="1"></circle></>;
    default: return <circle cx="12" cy="12" r="10"></circle>;
  }
};

const WhatWeDoHome = () => {
  return (
    <section 
      className="py-5 position-relative" 
      style={{ 
        backgroundColor: '#050709', 
        borderTop: '1px solid rgba(200, 166, 78, 0.1)',
        backgroundImage: "url('/what_we_do_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ backgroundColor: 'rgba(5, 7, 9, 0.85)' }}
      />
      
      <Container className="py-5 position-relative z-1">
        <div className="text-center mb-5">
          <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '2px' }}>
            WHAT WE DO
          </h6>
          <h2 className="cormorant fw-bold mb-4" style={{ color: '#ffffff', fontSize: '2.5rem' }}>
            Our Core Expertise
          </h2>
        </div>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <motion.div 
                className="p-4 h-100 d-flex flex-row align-items-center text-start"
                style={{ 
                  backgroundColor: '#0A0C0E', 
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
                whileHover={{ 
                  y: -5, 
                  borderColor: 'rgba(200, 166, 78, 0.4)',
                  boxShadow: '0 10px 30px rgba(200,166,78,0.1)' 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="me-3 flex-shrink-0 d-flex justify-content-center align-items-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A64E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {getIcon(service.icon)}
                  </svg>
                </div>
                <div>
                  <div className="inter fw-bold lh-sm" style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                    {service.line1}
                  </div>
                  <div className="inter fw-bold lh-sm" style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                    {service.line2}
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

export default WhatWeDoHome;
