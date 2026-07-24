import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhatWeDoServices = () => {
  const services = [
    {
      num: '01',
      title: 'Strategic\nInvestments',
      desc: 'Investing with conviction in businesses with strong potential and scalable models.',
      img: '/strategic-investments.png'
    },
    {
      num: '02',
      title: 'Growth\nCapital',
      desc: 'Providing growth capital to accelerate expansion, strengthen capabilities, and unlock value.',
      img: '/growth-capital.png'
    },
    {
      num: '03',
      title: 'Business\nAcquisitions',
      desc: 'Identifying and acquiring businesses that align with our strategy for long-term growth.',
      img: '/business-acquisitions.png'
    },
    {
      num: '04',
      title: 'Retail\nExpansion',
      desc: 'Driving retail excellence through strategic expansion and operational optimization.',
      img: '/retail-expansion.png'
    },
    {
      num: '05',
      title: 'Market Entry\nStrategy',
      desc: 'Helping businesses enter new markets with the right strategy, insights, and partnerships.',
      img: '/market-entry.png'
    },
    {
      num: '06',
      title: 'Distribution\nDevelopment',
      desc: 'Building efficient distribution networks that enhance reach, reliability, and profitability.',
      img: '/distribution-dev.png'
    },
    {
      num: '07',
      title: 'Brand\nScaling',
      desc: 'Strengthening brands and scaling their value through strategy, positioning, and reach.',
      img: '/brand-scaling.png'
    },
    {
      num: '08',
      title: 'Business\nTransformation',
      desc: 'Transforming businesses through operational excellence, technology, and governance.',
      img: '/business-transform.png'
    }
  ];

  return (
    <section className="section-padding position-relative" style={{ 
      backgroundColor: '#ffffff',
      backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop')", // UAE Businesses background
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Light Overlay for readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}></div>

      <Container style={{ maxWidth: '1400px' }} className="py-5 position-relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
            <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
              WHAT WE DO
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
          </div>
          <h2 className="cormorant fw-bold" style={{ fontSize: '3rem', color: '#1A1A1A' }}>
            Our Areas of Expertise
          </h2>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, idx) => (
            <Col md={6} xl={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-100 d-flex flex-column rounded-0 overflow-hidden position-relative group"
                style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Service Image Background (Top Half) */}
                <div style={{
                  height: '200px',
                  backgroundImage: `url('${service.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {/* Subtle overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                  
                  {/* Number floating on image */}
                  <div className="position-absolute cormorant fw-light" style={{
                    color: '#C8A64E',
                    bottom: '10px',
                    left: '20px',
                    fontSize: '2rem',
                    zIndex: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {service.num}
                  </div>
                </div>

                {/* Content (Bottom Half) */}
                <div className="flex-grow-1 p-4 d-flex flex-column bg-transparent position-relative z-10">
                  <h4 className="cormorant fw-bold mb-3 mt-1" style={{ color: '#ffffff', fontSize: '1.4rem', whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                    {service.title}
                  </h4>
                  
                  <p className="inter mb-4 flex-grow-1" style={{ color: '#888888', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {service.desc}
                  </p>

                  <Link to="#" className="inter fw-bold text-decoration-none d-inline-flex align-items-center mt-auto" style={{ 
                    color: '#C8A64E', 
                    fontSize: '0.85rem', 
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F9DE8B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C8A64E'}
                  >
                    Learn More
                    <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>

              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDoServices;
