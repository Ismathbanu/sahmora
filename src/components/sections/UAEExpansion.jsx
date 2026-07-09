import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const UAEExpansion = () => {
  const locations = [
    { 
      id: '01',
      name: 'Gold Souk,\nDeira', 
      type: 'Flagship Store', 
      status: 'Active',
      img: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=400&auto=format&fit=crop'
    },
    { 
      id: '02',
      name: 'Dubai Mall', 
      type: 'Premium\nBoutique', 
      status: '2025',
      img: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=400&auto=format&fit=crop'
    },
    { 
      id: '03',
      name: 'Abu Dhabi\nMall', 
      type: 'Retail Outlet', 
      status: '2025',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop'
    },
    { 
      id: '04',
      name: 'Sharjah City\nCentre', 
      type: 'Retail Outlet', 
      status: '2026',
      img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=400&auto=format&fit=crop'
    },
    { 
      id: '05',
      name: 'Al Ain', 
      type: 'Distribution\nHub', 
      status: '2026',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-warm-white section-padding overflow-hidden position-relative" style={{ backgroundColor: '#FCFBF8' }}>
      {/* Background elegant swoosh lines */}
      <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-25" style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(200, 166, 78, 0.1) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      <Container className="container-luxury position-relative z-10">
        <Row className="align-items-center">
          
          {/* Left Side: Header & CTA */}
          <Col lg={3} className="mb-5 mb-lg-0 pe-lg-4">
            <div className="mb-4">
              <span className="inter text-gold text-uppercase tracking-widest fw-bold" style={{ fontSize: '0.8rem' }}>EXPANSION ROADMAP</span>
              <div className="d-flex align-items-center mt-2">
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
                <div className="rounded-circle bg-gold ms-1" style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
              </div>
            </div>

            <h2 className="cormorant display-4 fw-bold mb-4" style={{ lineHeight: '1.1', color: '#132238' }}>
              Strategic Retail <br/>
              <span style={{ color: 'var(--accent-luxury-gold)' }}>Expansion</span>
            </h2>
            
            <p className="inter text-muted mb-5" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              We are establishing a formidable presence across the UAE's most prestigious retail destinations. Our carefully curated roadmap ensures maximum visibility and market penetration.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact" className="btn-luxury px-4 py-3 rounded-pill fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#0f172a', color: '#ffffff', border: 'none', fontSize: '0.85rem' }}>
                JOIN THE EXPANSION <span className="ms-2" style={{ color: 'var(--accent-luxury-gold)' }}>→</span>
              </a>
            </motion.div>
          </Col>

          {/* Right Side: Timeline cards */}
          <Col lg={9} className="position-relative">
            
            {/* Horizontal connecting line across the numbers */}
            <div className="position-absolute d-none d-lg-block" style={{ 
              top: '30px', 
              left: '8%', 
              width: '84%', 
              height: '1px', 
              backgroundColor: 'rgba(200, 166, 78, 0.4)', 
              zIndex: 1 
            }}></div>

            <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 position-relative z-10">
              {locations.map((loc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white p-4 rounded-4 text-center d-flex flex-column align-items-center flex-fill" 
                  style={{ 
                    border: '1px solid rgba(200, 166, 78, 0.15)', 
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                    minWidth: '160px'
                  }}
                >
                  {/* Step Number with horizontal connector background */}
                  <div className="d-flex align-items-center justify-content-center mb-3 w-100 position-relative">
                    <span className="cormorant fw-bold text-gold bg-white px-3" style={{ fontSize: '2rem', zIndex: 2, color: 'var(--accent-luxury-gold)' }}>
                      {loc.id}
                    </span>
                  </div>

                  {/* Circular Image with Gold Border */}
                  <div className="rounded-circle overflow-hidden mb-4 p-1" style={{ 
                    width: '110px', 
                    height: '110px', 
                    border: '2px solid var(--accent-luxury-gold)',
                    boxShadow: '0 8px 20px rgba(200, 166, 78, 0.2)'
                  }}>
                    <div className="w-100 h-100 rounded-circle" style={{ 
                      background: `url("${loc.img}") center/cover`,
                    }}></div>
                  </div>

                  {/* Location Details */}
                  <h5 className="cormorant fw-bold mb-2 text-dark-navy" style={{ fontSize: '1.2rem', minHeight: '50px', whiteSpace: 'pre-line', color: '#132238' }}>
                    {loc.name}
                  </h5>
                  
                  <p className="inter text-gold mb-4 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px', minHeight: '35px', whiteSpace: 'pre-line', color: 'var(--accent-luxury-gold)', fontWeight: '600' }}>
                    {loc.type}
                  </p>

                  {/* Status Badges */}
                  <span className="badge px-3 py-2 rounded-pill inter fw-medium" style={{ 
                    fontSize: '0.75rem', 
                    color: '#886d31', 
                    background: 'linear-gradient(90deg, rgba(245, 230, 180, 0.4) 0%, rgba(230, 205, 130, 0.4) 100%)',
                    border: '1px solid rgba(200, 166, 78, 0.3)'
                  }}>
                    {loc.status}
                  </span>

                </motion.div>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default UAEExpansion;
