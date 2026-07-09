import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineLocationMarker, HiOutlineUsers, HiOutlineOfficeBuilding, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaRing } from 'react-icons/fa';
import { BiTrendingUp } from 'react-icons/bi';

const UAEExpansion = () => {
  const strategyItems = [
    { icon: <HiOutlineLocationMarker size={24} strokeWidth={1.5} />, text: "High-footfall jewellery retail locations" },
    { icon: <HiOutlineUsers size={24} strokeWidth={1.5} />, text: "Indian community-focused catchment areas" },
    { icon: <HiOutlineOfficeBuilding size={24} strokeWidth={1.5} />, text: "Premium mall and high-street opportunities" },
    { icon: <FaRing size={22} />, text: "Wedding and family customer markets" },
    { icon: <HiOutlineGlobeAlt size={24} strokeWidth={1.5} />, text: "Tourist and GCC customer access" },
    { icon: <BiTrendingUp size={24} />, text: "Future scalability into wider GCC markets" }
  ];

  return (
    <section id="roadmap" className="section-padding position-relative" style={{ backgroundColor: '#050709', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Center glowing map */}
      <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 d-none d-lg-block z-0" style={{ pointerEvents: 'none' }}>
        <div className="w-100 h-100" style={{
          backgroundImage: 'linear-gradient(rgba(5, 7, 9, 0.65), rgba(5, 7, 9, 0.65)), url(/uae-glowing-map.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          transform: 'scale(0.95)'
        }}></div>
      </div>

      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1350px' }}>
        <Row className="align-items-center">
          
          {/* Left Column */}
          <Col lg={4} className="mb-5 mb-lg-0 text-start">
            <h2 className="cormorant fw-bold mb-4" style={{ fontSize: '3.5rem', color: '#D4C5A9', lineHeight: '1.15' }}>
              UAE 5-Outlet<br />Expansion Plan
            </h2>
            <h5 className="inter fw-bold mb-4" style={{ color: '#C0A062', fontSize: '1.2rem', lineHeight: '1.5' }}>
              Five Premium Outlets.<br />One Scalable UAE Retail Platform.
            </h5>
            <p className="inter" style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.8' }}>
              Talbar's first UAE phase is focused on establishing 5 strategically located outlets that build brand visibility, customer trust, sales performance, and operational scale.
            </p>
          </Col>

          {/* Spacer for the map in the middle */}
          <Col lg={3} className="d-none d-lg-block"></Col>

          {/* Right Column */}
          <Col lg={5}>
            
            {/* OUTLET STRATEGY LIST */}
            <div className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <h6 className="inter fw-bold tracking-widest mb-0 uppercase pe-3" style={{ color: '#D4C5A9', fontSize: '0.95rem', letterSpacing: '2px' }}>
                  OUTLET STRATEGY
                </h6>
                <div className="flex-grow-1" style={{ height: '1px', backgroundColor: 'rgba(212, 197, 169, 0.2)' }}></div>
              </div>
              
              <div className="d-flex flex-column">
                {strategyItems.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center py-3" style={{ borderBottom: '1px solid rgba(212, 197, 169, 0.15)' }}>
                    <div className="me-4 d-flex justify-content-center" style={{ color: '#D4C5A9', width: '30px' }}>
                      {item.icon}
                    </div>
                    <span className="inter" style={{ color: '#E2E8F0', fontSize: '0.95rem' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* STRATEGIC OBJECTIVE BOX */}
            <div className="p-4 rounded-3 text-center" style={{ border: '1px solid rgba(212, 197, 169, 0.4)', backgroundColor: 'rgba(5, 7, 9, 0.6)', backdropFilter: 'blur(10px)' }}>
              <h6 className="inter fw-bold tracking-widest mb-3 uppercase" style={{ color: '#D4C5A9', fontSize: '0.85rem', letterSpacing: '2px' }}>
                STRATEGIC OBJECTIVE
              </h6>
              <p className="cormorant fw-bold mb-0" style={{ color: '#D4C5A9', fontSize: '1.4rem', lineHeight: '1.4' }}>
                To build Talbar as a trusted, recognisable, and scalable gold and diamond jewellery brand in the UAE.
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UAEExpansion;
