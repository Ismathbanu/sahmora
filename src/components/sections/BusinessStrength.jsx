import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLandmark, FaDollarSign, FaHandshake, FaShoppingCart, FaUsers, FaChartPie } from 'react-icons/fa';

const BusinessStrength = () => {
  const metrics = [
    { icon: <FaLandmark />, value: '15,000+', label: 'Warehouse Capacity', unit: 'Sq.Ft' },
    { icon: <FaDollarSign />, value: 'AED 1B', label: 'Annual Revenue Target', unit: 'By 2030' },
    { icon: <FaHandshake />, value: '500+', label: 'Vendor Network', unit: 'Global Partners' },
    { icon: <FaShoppingCart />, value: '10,000+', label: 'Product Range', unit: 'Across 20+ Categories' },
    { icon: <FaUsers />, value: '25,000+', label: 'Active Clients', unit: 'Across GCC' },
    { icon: <FaChartPie />, value: '15', label: 'Distribution Points', unit: 'Retail & B2B Network' }
  ];

  return (
    <section className="bg-premium-white section-padding position-relative" style={{ backgroundColor: '#fcfcfc', padding: '6rem 0' }}>
      
      {/* Background sketch on the left */}
      <div className="position-absolute bottom-0 start-0" style={{ width: '40%', opacity: 0.12, pointerEvents: 'none', zIndex: 0 }}>
        <img src="/warehouse-sketch.png" alt="Warehouse Sketch" className="img-fluid w-100" />
      </div>

      <Container fluid className="position-relative z-10" style={{ maxWidth: '1400px' }}>
        <Row className="align-items-center">
          
          {/* Left Column */}
          <Col xl={4} lg={5} className="mb-5 mb-lg-0 pe-lg-5" style={{ paddingLeft: '2rem' }}>
            <div className="mb-4">
              <span className="inter text-uppercase fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '1.5px', color: 'var(--accent-luxury-gold)' }}>OUR STRENGTH</span>
            </div>
            
            <h2 className="cormorant fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: '1.1', color: '#1a1a1a' }}>
              Operational<br/>Excellence
            </h2>
            
            <div style={{ width: '45px', height: '2px', backgroundColor: 'var(--accent-luxury-gold)', marginBottom: '1.5rem' }}></div>
            
            <p className="inter mb-4 pb-2" style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#666666', maxWidth: '400px' }}>
              Built on a foundation of robust infrastructure and efficient supply chains, Sahmora Investment LLC ensures scalable growth and consistent value creation.
            </p>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="d-inline-block">
              <a href="#capabilities" className="px-4 py-3 fw-bold d-inline-flex align-items-center text-decoration-none shadow-sm" style={{ 
                backgroundColor: '#ffffff', 
                color: 'var(--accent-luxury-gold)', 
                border: '1px solid rgba(200,166,78,0.5)',
                borderRadius: '6px',
                fontSize: '0.75rem',
                letterSpacing: '1px'
              }}>
                EXPLORE OUR CAPABILITIES <span className="ms-3 fs-5" style={{ lineHeight: 0 }}>→</span>
              </a>
            </motion.div>
          </Col>

          {/* Right Column Grid */}
          <Col xl={8} lg={7}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {metrics.map((metric, idx) => (
                <Col key={idx}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-4 text-start h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                    style={{ 
                      border: '1px solid rgba(0,0,0,0.04)', 
                      borderBottom: '4px solid var(--accent-luxury-gold)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                      padding: '2rem 1.5rem',
                      minHeight: '220px'
                    }}
                  >
                    <div>
                      {/* Circle Icon */}
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ 
                        width: '52px', 
                        height: '52px', 
                        background: 'linear-gradient(135deg, #ffffff 0%, #f6edd7 100%)',
                        boxShadow: '0 4px 12px rgba(200,166,78,0.15)',
                        border: '1px solid rgba(200,166,78,0.1)',
                        color: 'var(--accent-luxury-gold)',
                        fontSize: '1.3rem'
                      }}>
                        {metric.icon}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="cormorant fw-bold mb-2" style={{ fontSize: '1.9rem', color: '#1a1a1a', letterSpacing: '-0.5px' }}>{metric.value}</h3>
                      <p className="inter fw-bold mb-1" style={{ fontSize: '0.85rem', color: '#111' }}>{metric.label}</p>
                      <p className="inter mb-0" style={{ fontSize: '0.75rem', color: '#777' }}>{metric.unit}</p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BusinessStrength;
