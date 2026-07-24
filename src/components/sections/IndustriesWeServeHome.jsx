import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industries = [
  { name: "Luxury & Jewellery", image: "/industry_luxury.png" },
  { name: "FMCG", image: "/industry_fmcg.png" },
  { name: "Retail", image: "/industry_retail.png" },
  { name: "Distribution", image: "/industry_distribution.png" },
  { name: "Hospitality & HORECA", image: "/industry_hospitality.png" },
  { name: "Emerging Businesses", image: "/industry_emerging.png" }
];

const IndustriesWeServeHome = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#F5F0E7', borderTop: '1px solid rgba(200, 166, 78, 0.1)' }}>
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '2px' }}>
              INDUSTRIES WE SERVE
            </h6>
            <h2 className="cormorant fw-bold m-0" style={{ color: '#000000', fontSize: '2.5rem' }}>
              Our Focus Sectors
            </h2>
          </div>
          <div className="d-none d-md-block">
            <Link to="/industries-we-serve" className="btn-luxury px-4 py-2 rounded-2 fw-bold d-inline-flex align-items-center justify-content-center shadow-sm" style={{ background: 'transparent', color: '#000000', border: '1px solid #C8A64E', fontSize: '0.85rem', letterSpacing: '1px', textDecoration: 'none' }}>
              View All Industries
            </Link>
          </div>
        </div>
        
        <Row className="g-4">
          {industries.map((industry, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <motion.div 
                className="position-relative h-100 overflow-hidden"
                style={{ 
                  borderRadius: '8px',
                  minHeight: '280px',
                  cursor: 'pointer'
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100" 
                  style={{ 
                    backgroundImage: `url('${industry.image}')`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    filter: 'grayscale(30%)',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(30%)';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100" 
                  style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
                    pointerEvents: 'none'
                  }}
                />
                
                {/* Content */}
                <div className="position-absolute bottom-0 start-0 w-100 p-4 pointer-events-none">
                  <h4 className="inter fw-bold m-0" style={{ color: '#ffffff', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {industry.name}
                  </h4>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IndustriesWeServeHome;
