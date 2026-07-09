import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaGlobe, FaShieldAlt, FaChartPie, FaMoneyBillWave, FaLandmark, FaUsers } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const WhyUAE = () => {
  const sectionRef = useRef(null);

  const stats = [
    { icon: <FaGlobe />, title: 'Global Hub', val: '#1', desc: 'Gold trading center' },
    { icon: <FaShieldAlt />, title: 'Security', val: '0%', desc: 'Income tax rate' },
    { icon: <FaChartPie />, title: 'Growth', val: '6.5%', desc: 'Expected retail CAGR' },
    { icon: <FaMoneyBillWave />, title: 'Liquidity', val: 'High', desc: 'Market volume' },
    { icon: <FaLandmark />, title: 'Regulation', val: 'Strict', desc: 'Investor protection' },
    { icon: <FaUsers />, title: 'Tourism', val: '20M+', desc: 'Annual visitors' },
  ];

  return (
    <section className="bg-premium-white section-padding" ref={sectionRef}>
      <Container className="container-luxury">
        <Row className="align-items-center">
          <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0 order-2 order-lg-1">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)', marginRight: '15px' }}></div>
              <span className="inter text-gold text-uppercase tracking-widest fw-bold" style={{ fontSize: '0.85rem' }}>WHY UAE?</span>
            </div>
            
            <h2 className="cormorant display-4 text-matte-black fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              The Perfect Launchpad<br/>for Premium Growth
            </h2>
            
            <p className="inter text-muted mb-5" style={{ fontSize: '1rem', lineHeight: '1.8', maxWidth: '95%' }}>
              The United Arab Emirates is the undisputed capital of luxury retail and gold trade. With unrivalled infrastructure, zero tax on personal income, and a booming tourism sector, it is the perfect launchpad for Sahmora's premium portfolio.
            </p>
            
            <Row className="g-0 mt-4">
              {stats.map((stat, idx) => (
                <Col md={4} sm={6} key={idx} className={`p-4 text-center ${idx < 3 ? 'border-bottom' : ''} ${idx % 3 !== 2 ? 'border-end' : ''}`} style={{ borderColor: 'rgba(0,0,0,0.08) !important' }}>
                  <motion.div whileHover={{ y: -5 }}>
                    <div className="text-gold fs-3 mb-2 opacity-75">{stat.icon}</div>
                    <h3 className="inter text-matte-black fw-bold mb-0" style={{ fontSize: '1.2rem' }}>{stat.val}</h3>
                    <h6 className="inter text-dark fw-bold mb-1" style={{ fontSize: '0.85rem' }}>{stat.title}</h6>
                    <p className="inter text-muted mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{stat.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6} className="order-1 order-lg-2 position-relative mb-5 mb-lg-0 text-center">
            {/* Beautiful Graphic Image on the Right */}
            <motion.img 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src="/why-uae-graphic.png" 
              alt="UAE Premium Growth" 
              className="img-fluid w-100"
              style={{ maxHeight: '600px', objectFit: 'contain' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUAE;
