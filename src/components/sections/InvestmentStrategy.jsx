import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaSearch, FaCubes, FaCity, FaGem } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const InvestmentStrategy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const steps = sectionRef.current.querySelectorAll('.strategy-step');
    
    gsap.fromTo(steps,
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  const strategies = [
    {
      num: '01',
      title: 'Identify Strong Brands',
      desc: 'Select brands with proven demand, cultural relevance,\nproduct strength, and scalable market potential.',
      icon: <FaSearch />
    },
    {
      num: '02',
      title: 'Invest Capital & Infrastructure',
      desc: 'Deploy growth funding, operational setup, vendor access,\nwarehousing, retail development, and management systems.',
      icon: <FaCubes />
    },
    {
      num: '03',
      title: 'Expand Across the UAE',
      desc: 'Use market knowledge, business networks, customer insights,\nand location strategy to accelerate regional growth.',
      icon: <FaCity />
    },
    {
      num: '04',
      title: 'Build Long-Term Brand Value',
      desc: 'Focus on sustainable enterprise value, not short-term trading.',
      icon: <FaGem />
    }
  ];

  return (
    <section id="strategy" className="section-padding position-relative overflow-hidden" ref={sectionRef} style={{ backgroundColor: '#0B0C10', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Glow Overlay */}
      <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, rgba(200,166,78,0.03) 0%, transparent 60%)',
        zIndex: 0
      }}></div>

      <Container className="position-relative z-10 py-5" style={{ maxWidth: '1400px' }}>
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-2">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: '30px', height: '1px', backgroundColor: '#C8A64E' }}></div>
            <span className="inter text-uppercase fw-bold mx-3" style={{ fontSize: '0.8rem', color: '#C8A64E', letterSpacing: '2px' }}>
              INVESTMENT STRATEGY
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#C8A64E' }}></div>
          </div>
          <h2 className="cormorant mb-4" style={{ fontSize: '3.2rem', color: '#ffffff', fontWeight: '500' }}>
            How Sahmora Builds <span style={{ color: '#C8A64E' }}>Scalable Value</span>
          </h2>
        </div>

        <Row className="align-items-center justify-content-between">
          
          {/* Left Column - Timeline */}
          <Col lg={7} xl={6} className="position-relative pe-lg-4">
            
            {/* Vertical Line */}
            <div className="position-absolute" style={{
              top: '30px', bottom: '30px', left: '44px',
              width: '1px', backgroundColor: 'rgba(200, 166, 78, 0.4)',
              zIndex: 1
            }}></div>

            {strategies.map((strategy, idx) => (
              <div key={idx} className="strategy-step d-flex align-items-stretch mb-4 position-relative z-10">
                
                {/* Icon Circle */}
                <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{
                  width: '65px', height: '65px',
                  backgroundColor: '#0B0C10',
                  border: '2px solid #C8A64E',
                  boxShadow: '0 0 15px rgba(200,166,78,0.1)',
                  zIndex: 2,
                  marginTop: '15px'
                }}>
                  <div style={{ color: '#C8A64E', fontSize: '1.4rem' }}>
                    {strategy.icon}
                  </div>
                </div>

                {/* Horizontal Connector Line */}
                <div className="flex-shrink-0" style={{
                  width: '25px', height: '1px',
                  backgroundColor: 'rgba(200, 166, 78, 0.3)',
                  marginTop: '47px'
                }}></div>
                
                {/* Content Card */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex-grow-1 p-4 rounded-4 d-flex"
                  style={{
                    border: '1px solid rgba(255,255,255,0.05)',
                    backgroundColor: 'rgba(25, 25, 25, 0.6)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  {/* Number */}
                  <div className="inter fw-medium flex-shrink-0 me-4" style={{ color: '#C8A64E', fontSize: '1.1rem', marginTop: '2px' }}>
                    {strategy.num}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h4 className="cormorant fw-bold mb-2" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
                      {strategy.title}
                    </h4>
                    <p className="inter mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#a0a0a0', whiteSpace: 'pre-line' }}>
                      {strategy.desc}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </Col>

          {/* Right Column - Graphic */}
          <Col lg={5} xl={5} className="mt-5 mt-lg-0 d-none d-md-block text-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img 
                src="/investment_strategy_graphic.png" 
                alt="Investment Strategy Growth" 
                className="img-fluid"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(200,166,78,0.15))',
                  maxWidth: '120%',
                  marginLeft: '-10%'
                }}
              />
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default InvestmentStrategy;
