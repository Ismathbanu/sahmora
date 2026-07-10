import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegGem, FaHandshake, FaCubes, FaCog } from 'react-icons/fa';
import { HiOutlineGlobeAlt, HiOutlineShoppingBag, HiOutlineTrendingUp, HiOutlineUserGroup } from 'react-icons/hi';

const WhyPartner = () => {
  const strengths = [
    { title: 'UAE market\nknowledge', icon: <HiOutlineGlobeAlt size={34} /> },
    { title: 'Existing distribution\necosystem', icon: <FaCubes size={34} /> },
    { title: 'Strong vendor\nrelationships', icon: <FaHandshake size={34} /> },
    { title: 'Retail and\nHORECA experience', icon: <HiOutlineShoppingBag size={34} /> },
    { title: 'Luxury market\nexpansion focus', icon: <FaRegGem size={34} /> },
    { title: 'Operational\nexecution capability', icon: <FaCog size={34} /> },
    { title: 'Regional growth\nmindset', icon: <HiOutlineTrendingUp size={34} /> },
    { title: 'Long-term\nbrand-building approach', icon: <HiOutlineUserGroup size={34} /> }
  ];

  return (
    <section id="partnership" className="section-padding" style={{ backgroundColor: '#FAF8F3', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container className="container-luxury" style={{ maxWidth: '1400px' }}>

        {/* Top Header Section (Centered) */}
        <div className="text-center mb-5 pb-4">
          <h6 className="inter fw-bold tracking-widest mb-3 uppercase" style={{ color: '#A27C37', fontSize: '0.85rem', letterSpacing: '2px' }}>
            WHY PARTNER WITH SAHMORA
          </h6>

          <h2 className="cormorant fw-bold mb-4 mx-auto" style={{ fontSize: '3.5rem', color: '#1A1A1A', lineHeight: '1.2', maxWidth: '900px' }}>
            A Strategic Partner for Brands,<br />
            Investors, and <span style={{ color: '#A27C37' }}>Growth-Ready Businesses</span>
          </h2>

          {/* Divider */}
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#A27C37' }}></div>
            <div className="mx-2" style={{ width: '6px', height: '6px', backgroundColor: '#A27C37', transform: 'rotate(45deg)' }}></div>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#A27C37' }}></div>
          </div>

          <p className="inter mx-auto" style={{ color: '#4A4A4A', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '700px' }}>
            Sahmora Investment LLC brings together capital vision, UAE market understanding, operational experience, and growth-focused leadership.
          </p>
        </div>

        {/* 8-Item Horizontal Grid */}
        <div className="d-flex flex-wrap justify-content-center align-items-stretch mb-5 pb-4 px-2">
          {strengths.map((item, idx) => (
            <div key={idx} className="text-center position-relative mb-4" style={{ flex: '0 0 auto', width: '12.5%', minWidth: '140px' }}>

              {/* Icon */}
              <div className="mb-3 d-flex align-items-center justify-content-center mx-auto rounded-circle position-relative" style={{ width: '80px', height: '80px' }}>
                <div style={{ color: '#A27C37' }}>
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <p className="inter fw-medium px-2" style={{ color: '#1A1A1A', fontSize: '0.8rem', lineHeight: '1.4', whiteSpace: 'pre-line' }}>
                {item.title}
              </p>

              {/* Vertical Separator for desktop */}
              {idx < strengths.length - 1 && (
                <div className="d-none d-lg-block position-absolute" style={{
                  right: 0,
                  top: '20px',
                  bottom: '20px',
                  width: '1px',
                  backgroundColor: 'rgba(162, 124, 55, 0.3)'
                }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Premium Statement Box */}
        <div className="mx-auto rounded-3 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center"
          style={{
            maxWidth: '1000px',
            backgroundColor: '#050709',
            boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
          }}>

          {/* Custom Geometric Premium Icon */}
          <div className="me-md-5 mb-4 mb-md-0 flex-shrink-0">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="#C8A64E" strokeWidth="1" strokeLinejoin="round" />
              <path d="M12 5L13.5 10.5L19 12L13.5 13.5L12 19L10.5 13.5L5 12L10.5 10.5L12 5Z" stroke="#C8A64E" strokeWidth="1" strokeLinejoin="round" opacity="0.6" />
              <path d="M12 8L12.5 11.5L16 12L12.5 12.5L12 16L11.5 12.5L8 12L11.5 11.5L12 8Z" stroke="#C8A64E" strokeWidth="1" strokeLinejoin="round" opacity="0.3" />
            </svg>
          </div>

          {/* Divider Line in Box */}
          <div className="d-none d-md-block h-100 me-5" style={{ width: '1px', minHeight: '60px', backgroundColor: 'rgba(200, 166, 78, 0.3)' }}></div>

          <div className="text-center text-md-start">
            {/* <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#C8A64E', fontSize: '0.85rem', letterSpacing: '2px' }}>
              PREMIUM STATEMENT
            </h6> */}
            <p className="inter mb-0 fw-medium" style={{ color: '#E0E0E0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Sahmora is positioned for partners who want more than investment —<br className="d-none d-md-block" />
              they want market access, business discipline, and a platform for regional growth.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default WhyPartner;
