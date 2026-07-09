import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStore, FaChartLine, FaFlag, FaHandshake, FaGlobe, FaGem, FaStar, FaCrown } from 'react-icons/fa';
import { AiOutlineGold } from 'react-icons/ai';

const Vision2050 = () => {
  const timeline = [
    { year: '2024', title: 'Strengthening\nthe Foundation', icon: <FaFlag /> },
    { year: '2027', title: 'Expanding\nOur Presence', icon: <FaStore /> },
    { year: '2030', title: 'Building Trust\n& Loyalty', icon: <FaHandshake /> },
    { year: '2035', title: 'Growing Across\nthe Region', icon: <FaGlobe /> },
    { year: '2040', title: 'Becoming a Global\nJewellery Brand', icon: <FaGem /> },
    { year: '2045', title: 'Strengthening\nOur Legacy', icon: <FaStar /> },
    { year: '2050', title: 'Achieving AED 3.75 Billion\nRevenue Vision', icon: <FaCrown /> }
  ];

  return (
    <section id="vision" className="section-padding" style={{ backgroundColor: '#ffffff', color: '#111', padding: '6rem 0' }}>
      <Container className="container-luxury" style={{ maxWidth: '1400px' }}>
        
        {/* Top Section */}
        <Row className="align-items-center mb-5 pb-5 border-bottom justify-content-between" style={{ borderColor: 'rgba(200,166,78,0.2) !important' }}>
          
          {/* Left Column */}
          <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
            {/* Kicker */}
            <div className="d-flex align-items-center mb-4">
              <div className="me-2" style={{ width: '30px', height: '30px', backgroundColor: '#C8A64E', maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z\'/%3E%3C/svg%3E")', WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z\'/%3E%3C/svg%3E")' }}></div>
              <span className="inter fw-bold tracking-widest uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '3px' }}>
                VISION 2050 LEGACY
              </span>
            </div>
            
            <h2 className="cormorant fw-bold mb-2 lh-sm" style={{ fontSize: '4.5rem', color: '#2C3034' }}>
              The Journey to<br/>
              <span style={{ color: '#C8A64E' }}>AED 3.75 Billion</span>
            </h2>
            
            <div className="my-4" style={{ width: '100%', height: '1px', backgroundColor: 'rgba(200, 166, 78, 0.4)' }}></div>
            
            <p className="cormorant fst-italic mb-5" style={{ fontSize: '1.8rem', color: '#4A4A4A' }}>
              From one boutique to a global jewellery legacy.
            </p>

            {/* Stats Row */}
            <div className="d-flex flex-wrap justify-content-between">
              
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex justify-content-center me-3" style={{ color: '#C8A64E', fontSize: '2.5rem' }}>
                  <FaStore />
                </div>
                <div>
                  <div className="cormorant fw-bold" style={{ color: '#C8A64E', fontSize: '2.2rem', lineHeight: '1' }}>75</div>
                  <div className="inter text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Luxury<br/>Boutiques</div>
                </div>
              </div>

              <div className="d-none d-md-block" style={{ width: '1px', backgroundColor: 'rgba(200, 166, 78, 0.3)' }}></div>

              <div className="d-flex align-items-center mb-3">
                <div className="d-flex justify-content-center me-3" style={{ color: '#C8A64E', fontSize: '2.5rem' }}>
                  <AiOutlineGold />
                </div>
                <div>
                  <div className="cormorant fw-bold" style={{ color: '#C8A64E', fontSize: '2.2rem', lineHeight: '1' }}>7,500</div>
                  <div className="inter text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Kg Gold<br/>Sold Annually</div>
                </div>
              </div>

              <div className="d-none d-md-block" style={{ width: '1px', backgroundColor: 'rgba(200, 166, 78, 0.3)' }}></div>

              <div className="d-flex align-items-center mb-3">
                <div className="d-flex justify-content-center me-3" style={{ color: '#C8A64E', fontSize: '2.5rem' }}>
                  <FaChartLine />
                </div>
                <div>
                  <div className="cormorant fw-bold" style={{ color: '#C8A64E', fontSize: '1.5rem', lineHeight: '1' }}>AED 3.75</div>
                  <div className="inter text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Billion<br/>Revenue Vision</div>
                </div>
              </div>

            </div>
          </Col>

          {/* Right Column: Seal Image */}
          <Col lg={5} className="d-flex justify-content-end position-relative">
            <div className="position-relative" style={{ width: '450px', height: '450px' }}>
              <img src="/vision-seal.png" alt="Vision Seal" className="w-100 h-100" style={{ objectFit: 'contain' }} />
              
              {/* Overlay Text inside the seal */}
              <div className="position-absolute top-50 start-50 translate-middle text-center w-100" style={{ marginTop: '10px' }}>
                <div className="cormorant fw-bold" style={{ color: '#2C3034', fontSize: '1.5rem', letterSpacing: '1px' }}>AED</div>
                <div className="cormorant fw-bold my-1" style={{ color: '#2C3034', fontSize: '4.8rem', lineHeight: '0.8', transform: 'scale(1.1)' }}>3.75</div>
                <div className="inter fw-bold mt-3 mb-1 uppercase" style={{ color: '#2C3034', fontSize: '1.2rem', letterSpacing: '2px' }}>BILLION</div>
                <div className="inter fw-medium uppercase" style={{ color: '#A27C37', fontSize: '0.85rem', letterSpacing: '1.5px' }}>REVENUE VISION</div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <div style={{ width: '15px', height: '1px', backgroundColor: '#A27C37' }}></div>
                  <div className="mx-1" style={{ width: '4px', height: '4px', backgroundColor: '#A27C37', transform: 'rotate(45deg)' }}></div>
                  <div style={{ width: '15px', height: '1px', backgroundColor: '#A27C37' }}></div>
                </div>
              </div>
            </div>
          </Col>

        </Row>

        {/* Timeline Section */}
        <div className="pt-4">

          {/* Timeline Content */}
          <div className="d-flex flex-column flex-md-row justify-content-between mt-md-4 px-3 px-md-0">
            {timeline.map((item, idx) => (
              <div key={idx} className="text-center d-flex flex-column align-items-center mb-4 mb-md-0" style={{ flex: '1 1 0', padding: '0 5px' }}>
                
                {/* Icon in Circle */}
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px', backgroundColor: '#FDFBF7', border: '1px solid rgba(200, 166, 78, 0.3)' }}>
                  <div style={{ color: '#C8A64E', fontSize: '1.2rem' }}>
                    {item.icon}
                  </div>
                </div>
                
                <h4 className="cormorant fw-bold mb-1" style={{ color: '#C8A64E', fontSize: '1.6rem' }}>{item.year}</h4>
                <p className="inter text-dark" style={{ fontSize: '0.8rem', lineHeight: '1.4', whiteSpace: 'pre-line' }}>{item.title}</p>
                
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Legacy Kicker */}
        <div className="d-flex align-items-center justify-content-center mt-5 pt-4">
          <div className="d-none d-md-block border rounded-pill" style={{ width: '40px', height: '20px', borderTopColor: 'transparent !important', borderBottomColor: '#C8A64E !important', borderLeftColor: 'transparent !important', borderRightColor: 'transparent !important', transform: 'rotate(180deg)' }}></div>
          <div className="d-none d-md-block" style={{ width: '60px', height: '1px', backgroundColor: 'rgba(200, 166, 78, 0.5)', marginRight: '20px' }}></div>
          
          <h5 className="cormorant fw-bold text-center mb-0 uppercase" style={{ color: '#111', fontSize: '1.4rem', letterSpacing: '2px', lineHeight: '1.4' }}>
            <span style={{ color: '#C8A64E' }}>TALBAR</span> — BUILDING A LEGACY<br/>
            OF GOLD, TRUST & PROSPERITY.
          </h5>
          
          <div className="d-none d-md-block" style={{ width: '60px', height: '1px', backgroundColor: 'rgba(200, 166, 78, 0.5)', marginLeft: '20px' }}></div>
          <div className="d-none d-md-block border rounded-pill" style={{ width: '40px', height: '20px', borderTopColor: '#C8A64E !important', borderBottomColor: 'transparent !important', borderLeftColor: 'transparent !important', borderRightColor: 'transparent !important' }}></div>
        </div>

      </Container>
    </section>
  );
};

export default Vision2050;
