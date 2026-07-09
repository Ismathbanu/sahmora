import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGlobe, FaChartLine, FaHandshake, FaBullseye, FaShoppingBag, FaShieldAlt, FaCrown } from 'react-icons/fa';

const WhyPartner = () => {
  const features = [
    { title: 'Market Access', desc: 'Direct entry into the lucrative GCC luxury\nretail and gold markets.', icon: <FaGlobe />, num: '01' },
    { title: 'Growth Capital', desc: 'Strategic deployment of funds for high-ROI\ninventory and expansion.', icon: <FaChartLine />, num: '02' },
    { title: 'Distribution', desc: 'Established network of prime retail\nlocations and vendor partnerships.', icon: <FaHandshake />, num: '03' },
    { title: 'Execution', desc: 'Proven management team with decades\nof experience in the region.', icon: <FaBullseye />, num: '04' },
    { title: 'Retail Infrastructure', desc: 'State-of-the-art boutiques designed for\npremium customer experiences.', icon: <FaShoppingBag />, num: '05' },
    { title: 'Brand Equity', desc: 'Leveraging the Sahmora ecosystem to\ndrive instant recognition and trust.', icon: <FaShieldAlt />, num: '06' }
  ];

  return (
    <section id="partnership" className="position-relative p-0" style={{ backgroundColor: '#fcfcfc' }}>
      
      {/* Top Dark Section */}
      <div className="position-relative text-center d-flex flex-column align-items-center justify-content-center" 
           style={{ 
             minHeight: '400px', 
             paddingTop: '5rem',
             paddingBottom: '8rem',
             backgroundImage: 'url("/partner_dark_bg.png")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             color: '#ffffff'
           }}>
        
        {/* Dark Overlay for better text readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(5,5,5,0.7)', zIndex: 1 }}></div>

        <div className="position-relative z-10 w-100 px-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
            <span className="inter text-uppercase fw-bold mx-3" style={{ fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--accent-luxury-gold)' }}>
              STRONGER TOGETHER
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
          </div>
          
          <h2 className="cormorant fw-bold mb-3" style={{ fontSize: '4rem' }}>
            Why Partner <span style={{ color: 'var(--accent-luxury-gold)' }}>With Us</span>
          </h2>
          
          <p className="inter mx-auto" style={{ fontSize: '1rem', maxWidth: '600px', lineHeight: '1.6', color: '#e0e0e0' }}>
            We combine market expertise, financial strength, and operational<br/>excellence to build lasting value for our partners.
          </p>

          <div className="mx-auto mt-4" style={{ 
            width: '8px', height: '8px', 
            backgroundColor: 'var(--accent-luxury-gold)', 
            transform: 'rotate(45deg)' 
          }}></div>
        </div>

        {/* SVG Curve overlapping bottom edge */}
        <div className="position-absolute bottom-0 start-0 w-100" style={{ zIndex: 2, transform: 'translateY(1px)' }}>
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
            <path d="M 0 10 L 0 0 Q 50 10 100 0 L 100 10 Z" fill="#f9f9f9" stroke="var(--accent-luxury-gold)" strokeWidth="0.2" />
          </svg>
        </div>
      </div>

      {/* Bottom Marble Section */}
      <div className="position-relative" style={{ 
        backgroundImage: 'url("/marble_light_bg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        paddingBottom: '6rem'
      }}>
        
        <Container style={{ marginTop: '-40px', position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
          
          <Row className="g-4">
            {features.map((feature, idx) => (
              <Col lg={4} md={6} key={idx}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-4 text-center position-relative h-100 d-flex flex-column align-items-center"
                  style={{ 
                    border: '1px solid rgba(200,166,78,0.2)', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    padding: '3.5rem 1.5rem 2rem'
                  }}
                >
                  {/* Watermark Number */}
                  <div className="position-absolute cormorant fw-bold" style={{ 
                    top: '15px', right: '25px', 
                    fontSize: '4.5rem', 
                    color: 'rgba(200,166,78,0.07)',
                    lineHeight: '1',
                    zIndex: 0
                  }}>
                    {feature.num}
                  </div>

                  {/* Overlapping Top Icon Wrapper */}
                  <div className="position-absolute rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                       style={{ 
                         width: '56px', height: '56px', 
                         backgroundColor: '#0a0a0a',
                         border: '2px solid rgba(200,166,78,0.3)',
                         top: '-28px',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         zIndex: 2
                       }}>
                    <div style={{ color: 'var(--accent-luxury-gold)', fontSize: '1.4rem' }}>
                      {feature.icon}
                    </div>
                  </div>

                  <div className="position-relative z-10">
                    <h4 className="cormorant fw-bold mb-2" style={{ fontSize: '1.4rem', color: '#1a1a1a' }}>{feature.title}</h4>
                    <div className="mx-auto mb-3" style={{ width: '25px', height: '2px', backgroundColor: 'var(--accent-luxury-gold)' }}></div>
                    <p className="inter" style={{ fontSize: '0.8rem', lineHeight: '1.6', color: '#666', whiteSpace: 'pre-line' }}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          
          {/* Bottom Footer Pill */}
          <div className="mt-5 pt-3">
            <div className="rounded-pill d-flex flex-column flex-lg-row align-items-center justify-content-between p-2 shadow" 
                 style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.05)' }}>
              
              <div className="d-flex align-items-center mb-3 mb-lg-0 w-100 ps-2">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-4" style={{ 
                  width: '65px', height: '65px', 
                  background: 'linear-gradient(135deg, rgba(220,186,98,1) 0%, rgba(180,146,58,1) 100%)',
                  boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)',
                  flexShrink: 0
                }}>
                  <FaCrown style={{ color: '#111', fontSize: '1.6rem' }} />
                </div>
                <h4 className="cormorant text-warm-white fw-bold mb-0 text-start" style={{ fontSize: '1.4rem', letterSpacing: '0.5px' }}>
                  Let's build a legacy of growth, trust & prosperity together.
                </h4>
              </div>
              
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02 }}
                className="rounded-pill text-decoration-none fw-bold d-inline-flex align-items-center justify-content-center text-nowrap"
                style={{ 
                  background: 'linear-gradient(90deg, #d4af37 0%, #aa8529 100%)',
                  color: '#111',
                  padding: '18px 30px',
                  fontSize: '0.8rem',
                  letterSpacing: '1px'
                }}
              >
                INITIATE PARTNERSHIP DISCUSSION <span className="ms-2 fs-5" style={{ lineHeight: 0 }}>→</span>
              </motion.a>
              
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
};

export default WhyPartner;
