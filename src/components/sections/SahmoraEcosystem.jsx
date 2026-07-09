import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt, FaCheck, FaRegCalendarAlt, FaWarehouse, FaUsers, FaBox, FaCity, FaCoins } from 'react-icons/fa';

const SahmoraEcosystem = () => {
  const credentials = [
    { icon: <FaRegCalendarAlt size={32} />, topText: 'Established in', bottomText: '2014', bottomIsBig: true },
    { icon: <FaCoins size={32} />, topText: 'AED 40 million', bottomText: 'current turnover', topIsBig: true },
    { icon: <FaWarehouse size={32} />, topText: '10,000 sq. ft.', bottomText: 'warehouse facility', topIsBig: true },
    { icon: <FaUsers size={32} />, topText: '600+', bottomText: 'vendor network', topIsBig: true },
    { icon: <FaBox size={32} />, topText: '2,000+', bottomText: 'product portfolio', topIsBig: true },
    { icon: <FaCity size={32} />, topText: '200+', bottomText: 'HORECA clients', topIsBig: true },
  ];

  return (
    <section id="ecosystem" className="section-padding position-relative" style={{ backgroundColor: '#FAF8F3', overflow: 'hidden' }}>
      
      {/* Background Image Overlay on the Right */}
      <div className="position-absolute end-0 top-0 h-100 d-none d-lg-block z-0" style={{ width: '40%', pointerEvents: 'none' }}>
        <div className="w-100 h-100" style={{ 
            backgroundImage: 'url(/warehouse-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            maskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%)',
            opacity: 0.85
        }}></div>
      </div>

      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1350px' }}>
        <Row className="align-items-center">
          
          {/* Left Column (Text & Statement) */}
          <Col lg={5} className="mb-5 mb-lg-0 text-start">
            
            {/* Kicker */}
            <h6 className="inter fw-bold tracking-widest mb-3 uppercase" style={{ color: '#A27C37', fontSize: '0.85rem', letterSpacing: '2px' }}>
              CURRENT INVESTMENT STRENGTH
            </h6>
            
            {/* Main Heading */}
            <h2 className="cormorant fw-bold mb-4 lh-sm" style={{ fontSize: '3rem', color: '#1A1A1A' }}>
              Igrade Goods LLC —<br />
              Proven UAE Execution Capability
            </h2>
            
            {/* Divider */}
            <div className="mb-4" style={{ width: '60px', height: '1px', backgroundColor: '#A27C37' }}></div>
            
            {/* Paragraph */}
            <p className="inter mb-5" style={{ color: '#4A4A4A', fontSize: '1rem', lineHeight: '1.7', maxWidth: '95%' }}>
              Sahmora's investment strength is supported by the operational experience associated with Igrade Goods LLC, an established Dubai-based FMCG and HORECA distribution business operating since 2014.
            </p>

            {/* Credibility Statement Box */}
            <div className="p-4 rounded-4" style={{ backgroundColor: '#F8F5EE', border: '1px solid rgba(162, 124, 55, 0.3)' }}>
              <div className="d-flex align-items-start">
                {/* Shield Icon */}
                <div className="me-4 position-relative flex-shrink-0 mt-1">
                  <FaShieldAlt size={45} color="#1A1A1A" />
                  <FaCheck size={18} color="#A27C37" className="position-absolute top-50 start-50 translate-middle" style={{ marginTop: '-4px' }} />
                </div>
                
                {/* Statement Text */}
                <div>
                  <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#A27C37', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    CREDIBILITY STATEMENT
                  </h6>
                  <p className="inter mb-0" style={{ color: '#4A4A4A', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Igrade Goods LLC demonstrates Sahmora's ability to manage vendor networks, distribution channels, warehousing, product supply, client relationships, and UAE market operations at scale.
                  </p>
                </div>
              </div>
            </div>

          </Col>

          {/* Right Column (Credentials Grid) */}
          <Col lg={7} className="ps-lg-5">
            
            {/* Header / Divider */}
            <div className="d-flex align-items-center mb-5 position-relative z-10">
              <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)' }}></div>
              <h6 className="inter uppercase px-4 mb-0 fw-bold text-center tracking-widest" style={{ color: '#A27C37', fontSize: '0.9rem', letterSpacing: '2px' }}>
                KEY BUSINESS CREDENTIALS
              </h6>
              <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)' }}></div>
            </div>

            {/* Grid */}
            <Row className="g-3 position-relative z-10">
              {credentials.map((item, idx) => (
                <Col md={4} xs={6} key={idx} className="mb-2">
                  <div 
                    className="bg-white h-100 d-flex flex-column align-items-center text-center p-4 rounded-3" 
                    style={{ 
                      border: '1px solid rgba(162, 124, 55, 0.2)', 
                      boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="mb-3" style={{ color: '#9B7433' }}>
                      {item.icon}
                    </div>
                    
                    {item.bottomIsBig ? (
                      <>
                        <p className="inter mb-1" style={{ color: '#4A4A4A', fontSize: '0.85rem' }}>{item.topText}</p>
                        <h4 className="cormorant fw-bold mb-0" style={{ color: '#1A1A1A', fontSize: '1.8rem', lineHeight: '1.2' }}>{item.bottomText}</h4>
                      </>
                    ) : (
                      <>
                        <h4 className="cormorant fw-bold mb-2" style={{ color: '#1A1A1A', fontSize: '1.5rem', lineHeight: '1.2' }}>{item.topText}</h4>
                        <p className="inter mb-0" style={{ color: '#4A4A4A', fontSize: '0.85rem', lineHeight: '1.2' }}>{item.bottomText}</p>
                      </>
                    )}
                  </div>
                </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SahmoraEcosystem;
