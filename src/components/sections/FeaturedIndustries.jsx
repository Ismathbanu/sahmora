import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HiOutlineSparkles, 
  HiOutlineShoppingCart, 
  HiOutlineShoppingBag, 
  HiOutlineTruck, 
  HiOutlineOfficeBuilding, 
  HiOutlineLightBulb 
} from 'react-icons/hi';

const FeaturedIndustries = () => {
  const industries = [
    {
      num: '01',
      title: 'Luxury & Jewellery',
      desc: 'Investing in premium retail brands and exceptional customer experiences.',
      focus: ['Premium Retail', 'Brand Expansion', 'Customer Experience'],
      icon: <HiOutlineSparkles size={32} />,
      img: 'https://images.unsplash.com/photo-1573408301145-b98c465448b1?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '02',
      title: 'FMCG',
      desc: 'Backing consumer-driven brands with strong distribution and operational efficiency.',
      focus: ['Distribution', 'Supply Chain', 'Market Penetration'],
      icon: <HiOutlineShoppingCart size={32} />,
      img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '03',
      title: 'Retail',
      desc: 'Building and scaling retail businesses through strategic locations and operational excellence.',
      focus: ['Retail Operations', 'Expansion Strategy', 'Consumer Experience'],
      icon: <HiOutlineShoppingBag size={32} />,
      img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '04',
      title: 'Distribution',
      desc: 'Strengthening supply chains and distribution networks.',
      focus: ['Warehousing', 'Distribution Network', 'Operational Efficiency'],
      icon: <HiOutlineTruck size={32} />,
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '05',
      title: 'Hospitality & HORECA',
      desc: 'Creating memorable hospitality experiences.',
      focus: ['Hospitality', 'Food Service', 'Guest Experience'],
      icon: <HiOutlineOfficeBuilding size={32} />,
      img: 'https://images.unsplash.com/photo-1542314831-c6a4d14d885c?q=80&w=800&auto=format&fit=crop'
    },
    {
      num: '06',
      title: 'Emerging Businesses',
      desc: 'Investing in innovative and technology-driven businesses.',
      focus: ['Innovation', 'Future Markets', 'High Growth Potential'],
      icon: <HiOutlineLightBulb size={32} />,
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <Container style={{ maxWidth: '1400px' }} className="py-5">
        
        {/* Header */}
        <div className="text-center mb-5 pb-4">
          <h2 className="cormorant fw-bold" style={{ fontSize: '3rem', color: '#1A1A1A' }}>
            Featured Industries
          </h2>
          <div className="d-flex justify-content-center mt-3">
            <div style={{ width: '60px', height: '2px', backgroundColor: '#C8A64E' }}></div>
          </div>
        </div>

        {/* Industries Grid */}
        <Row className="g-4 g-lg-5">
          {industries.map((ind, idx) => (
            <Col md={6} lg={4} key={idx}>
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
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image Section */}
                <div style={{
                  height: '240px',
                  backgroundImage: `url('${ind.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {/* Subtle dark overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                  
                  {/* Large Number Overlay */}
                  <div className="position-absolute cormorant fw-light" style={{
                    color: '#C8A64E',
                    bottom: '15px',
                    left: '25px',
                    fontSize: '2.5rem',
                    zIndex: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1'
                  }}>
                    {ind.num}
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="position-absolute" style={{
                    top: '20px',
                    right: '20px',
                    color: '#ffffff',
                    opacity: 0.9
                  }}>
                    {ind.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow-1 p-4 d-flex flex-column bg-transparent position-relative z-10">
                  <h4 className="cormorant fw-bold mb-3" style={{ color: '#ffffff', fontSize: '1.6rem' }}>
                    {ind.title}
                  </h4>
                  
                  <p className="inter mb-4" style={{ color: '#888888', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {ind.desc}
                  </p>

                  <div className="mb-4">
                    <p className="inter fw-bold text-uppercase mb-2" style={{ color: '#C8A64E', fontSize: '0.75rem', letterSpacing: '1px' }}>
                      Key Focus Areas:
                    </p>
                    <ul className="list-unstyled mb-0 inter" style={{ color: '#A0A0A0', fontSize: '0.9rem' }}>
                      {ind.focus.map((item, i) => (
                        <li key={i} className="mb-1 d-flex align-items-center">
                          <span style={{ color: '#C8A64E', marginRight: '8px' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="#" className="inter fw-bold text-decoration-none d-inline-flex align-items-center mt-auto" style={{ 
                    color: '#C8A64E', 
                    fontSize: '0.85rem', 
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#F9DE8B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C8A64E'}
                  >
                    Explore Sector
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

export default FeaturedIndustries;
