import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCoinStack, BiTrendingUp, BiFile, BiPieChartAlt2, BiLockAlt } from 'react-icons/bi';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { FaShieldAlt, FaCheck } from 'react-icons/fa';

const GoldInvestment = () => {
  const highlights = [
    { icon: <BiCoinStack size={32} strokeWidth={0.5} />, title: "Minimum\nInvestment", value: "AED 50,000" },
    { icon: <BiTrendingUp size={32} strokeWidth={0.5} />, title: "Potential\nReturns", value: "Up to 16%*" },
    { icon: <HiOutlineShieldCheck size={32} strokeWidth={1} />, title: "Capital\nStructure", value: "90% of capital\ninvested in gold" },
    { icon: <BiFile size={32} strokeWidth={0.5} />, title: "Governance", value: "Transparent\nauditing\nprocess" },
    { icon: <BiPieChartAlt2 size={32} strokeWidth={0.5} />, title: "Return\nModel", value: "Profit-linked\nreturns" },
    { icon: <BiLockAlt size={32} strokeWidth={0.5} />, title: "Liquidity\nSupport", value: "Easy exit\noption" }
  ];

  return (
    <section id="investment" className="section-padding position-relative" style={{ backgroundColor: '#FAF8F3', overflow: 'hidden' }}>
      
      {/* Large Desktop Background Image */}
      <div className="position-absolute end-0 top-0 d-none d-lg-block z-0" style={{ width: '60%', height: '65%', pointerEvents: 'none' }}>
         <div className="w-100 h-100" style={{ 
              backgroundImage: 'url(/talbar-custom-gold.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)'
         }}></div>
         {/* Bottom fade to seamlessly blend into background color */}
         <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '30%', background: 'linear-gradient(to top, #FAF8F3 0%, transparent 100%)' }}></div>
      </div>

      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1250px' }}>
        
        {/* Top Content Row */}
        <Row className="mb-5 align-items-center position-relative">
          {/* Left Column (Text) */}
          <Col lg={6} className="mb-5 mb-lg-0 text-start z-10 py-lg-5">
            <h2 className="cormorant fw-bold mb-3 lh-sm" style={{ fontSize: '3.5rem', color: '#1A1A1A' }}>
              Gold-Backed<br />Investment Opportunity
            </h2>
            
            <h5 className="inter fw-bold mb-4" style={{ color: '#A27C37', fontSize: '1.15rem' }}>
              Invest in Enduring Value
            </h5>
            
            <p className="inter" style={{ color: '#4A4A4A', fontSize: '1rem', lineHeight: '1.7', maxWidth: '95%' }}>
              Gold has preserved wealth through wars, inflation, currency pressure, and market uncertainty. Talbar Gold & Diamond is built around this enduring trust, combining gold-backed value with retail growth potential.
            </p>
          </Col>

          {/* Mobile Image Fallback */}
          <Col xs={12} className="d-lg-none mt-4 z-10">
             <img 
                src="/talbar-custom-gold.png" 
                alt="Talbar Custom Gold Bar" 
                className="img-fluid rounded shadow-sm" 
             />
          </Col>
        </Row>

        {/* Divider with Text */}
        <div className="d-flex align-items-center my-5 position-relative z-10">
          <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)' }}></div>
          <h6 className="inter uppercase px-4 mb-0 fw-bold text-center tracking-widest" style={{ color: '#1A1A1A', fontSize: '0.85rem', letterSpacing: '2px' }}>
            INVESTMENT HIGHLIGHTS
          </h6>
          <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)' }}></div>
        </div>

        {/* Highlight Cards Row */}
        <Row className="g-3 justify-content-center mb-4 position-relative z-10">
          {highlights.map((item, idx) => (
            <Col lg={2} md={4} xs={6} key={idx} className="mb-2">
              <div 
                className="bg-white h-100 d-flex flex-column align-items-center text-center p-3 rounded" 
                style={{ 
                  border: '1px solid rgba(162, 124, 55, 0.2)', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="mb-3" style={{ color: '#A27C37' }}>
                  {item.icon}
                </div>
                <h6 className="inter fw-bold mb-3" style={{ color: '#1A1A1A', fontSize: '0.85rem', lineHeight: '1.4', whiteSpace: 'pre-line' }}>
                  {item.title}
                </h6>
                <div className="mt-auto">
                  <span className="inter fw-bold" style={{ color: '#1A1A1A', fontSize: '1rem', lineHeight: '1.3', display: 'block', whiteSpace: 'pre-line' }}>
                    {item.value}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bottom Info Boxes */}
        <Row className="g-3 position-relative z-10">
          <Col lg={6}>
            <div className="p-4 d-flex align-items-center rounded h-100" style={{ backgroundColor: '#F8F5EE', border: '1px solid rgba(162, 124, 55, 0.2)' }}>
              <div className="me-4 position-relative d-inline-block">
                <FaShieldAlt size={45} color="#1A1A1A" />
                <FaCheck size={18} color="#A27C37" className="position-absolute top-50 start-50 translate-middle" style={{ marginTop: '-4px' }} />
              </div>
              <p className="inter mb-0" style={{ color: '#4A4A4A', fontSize: '0.85rem', lineHeight: '1.6' }}>
                Invest with confidence through a gold-backed opportunity focused on stability, transparency, retail expansion, and long-term brand value.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-4 rounded h-100 d-flex align-items-center" style={{ backgroundColor: '#F8F5EE', border: '1px solid rgba(162, 124, 55, 0.2)' }}>
              <p className="inter mb-0" style={{ color: '#4A4A4A', fontSize: '0.85rem', lineHeight: '1.6' }}>
                <span className="fw-bold me-1" style={{ color: '#A27C37' }}>Disclaimer:</span> 
                Terms and conditions apply. Returns are subject to business performance and are not guaranteed unless expressly stated in the approved investment agreement.
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default GoldInvestment;
