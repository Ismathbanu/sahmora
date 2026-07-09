import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { IoDiamondOutline, IoWatchOutline } from 'react-icons/io5';
import { TbBottle } from 'react-icons/tb';
import { AiOutlineGold } from 'react-icons/ai';
import { GiAstrolabe } from 'react-icons/gi';

const SahmoraEcosystem = () => {
  const brands = [
    { 
      name: 'Talbar', 
      desc: 'PREMIUM JEWELLERY', 
      icon: <IoDiamondOutline strokeWidth="1.5" /> 
    },
    { 
      name: 'Igrade', 
      desc: 'LUXURY WATCHES', 
      icon: <IoWatchOutline strokeWidth="1.5" /> 
    },
    { 
      name: 'Gremora', 
      desc: 'PREMIUM BEVERAGES', 
      icon: <TbBottle strokeWidth="1.5" /> 
    },
    { 
      name: 'Sunstar', 
      desc: 'BULLION TRADING', 
      icon: <AiOutlineGold /> 
    },
    { 
      name: 'Sakthi', 
      desc: 'TRADITIONAL GOLD', 
      icon: <GiAstrolabe /> 
    },
    { 
      name: 'Gemdora', 
      desc: 'DIAMOND COLLECTION', 
      icon: <IoDiamondOutline strokeWidth="1.5" /> 
    },
  ];

  return (
    <section id="ecosystem" className="section-padding position-relative overflow-hidden" style={{ backgroundColor: '#0B0B0B', color: '#fff' }}>
      {/* Background radial glow */}
      <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-25" style={{
        background: 'radial-gradient(circle, rgba(200, 166, 78, 0.05) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      <Container className="container-luxury position-relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-5 pb-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
            <span className="inter text-gold text-uppercase tracking-widest fw-bold mx-3" style={{ fontSize: '0.85rem' }}>
              THE SAHMORA ECOSYSTEM
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
          </div>
          <h2 className="cormorant display-4 fw-bold mb-3">
            A Diversified Portfolio of Premium Brands
          </h2>
          <p className="inter text-white-50 mx-auto" style={{ maxWidth: '650px', fontSize: '1rem', lineHeight: '1.6' }}>
            A diversified portfolio of premium brands, each dominating its niche and contributing to a unified luxury empire.
          </p>
        </div>

        {/* Cards Row Container */}
        <div className="position-relative my-5 py-3">
          {/* Horizontal Connecting Gold Line */}
          <div className="position-absolute top-50 start-0 w-100 translate-middle-y d-none d-lg-block" style={{ 
            height: '1px', 
            background: 'linear-gradient(90deg, rgba(200,166,78,0) 0%, rgba(200,166,78,0.5) 20%, rgba(200,166,78,0.5) 80%, rgba(200,166,78,0) 100%)', 
            zIndex: 1 
          }}></div>

          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4 position-relative" style={{ zIndex: 2 }}>
            {brands.map((brand, idx) => (
              <Col key={idx}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="text-center p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                  style={{ 
                    backgroundColor: 'rgba(17, 17, 17, 0.85)', 
                    border: '1px solid rgba(200, 166, 78, 0.25)', 
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                    minHeight: '230px'
                  }}
                >
                  <div>
                    {/* Icon */}
                    <div className="text-gold fs-2 mb-4">{brand.icon}</div>
                    
                    {/* Brand Name */}
                    <h3 className="cormorant fw-bold mb-2" style={{ fontSize: '1.6rem', letterSpacing: '0.5px' }}>
                      {brand.name}
                    </h3>
                  </div>

                  <div>
                    {/* Subtext Category */}
                    <p className="inter text-gold mb-3 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '500' }}>
                      {brand.desc}
                    </p>
                    
                    {/* Tiny Gold Line Accent at Bottom */}
                    <div className="mx-auto" style={{ width: '25px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
                  </div>

                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-5">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="d-inline-block">
            <a href="#portfolio" className="btn-luxury px-5 py-3 rounded-pill fw-bold d-inline-flex align-items-center" style={{ 
              backgroundColor: 'transparent', 
              color: '#ffffff', 
              border: '1px solid var(--accent-luxury-gold)', 
              fontSize: '0.85rem',
              boxShadow: '0 4px 20px rgba(200, 166, 78, 0.1)'
            }}>
              EXPLORE THE ECOSYSTEM <span className="ms-2" style={{ color: 'var(--accent-luxury-gold)' }}>→</span>
            </a>
          </motion.div>
        </div>

      </Container>
    </section>
  );
};

export default SahmoraEcosystem;
