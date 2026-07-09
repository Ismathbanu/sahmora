import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineUsers, HiOutlineShoppingBag, HiOutlineGift, HiOutlineHeart } from 'react-icons/hi2';
import { IoDiamondOutline } from 'react-icons/io5';
import { FiLayers } from 'react-icons/fi';

const TalbarLaunch = () => {
  return (
    <section id="talbar" className="section-padding position-relative" style={{ backgroundColor: '#F8F6F0', color: '#111' }}>
      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1200px' }}>
        
        {/* Top Content Row */}
        <Row className="mb-5 pb-lg-5 align-items-center">
          
          {/* Left Column (Text) */}
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5 text-start">
            <h2 className="cormorant fw-bold mb-3 lh-sm" style={{ fontSize: '3.5rem', color: '#1A1A1A' }}>
              <span style={{ color: '#A27C37' }}>Talbar</span> UAE Launch
            </h2>
            
            <h5 className="inter fw-medium mb-4" style={{ color: '#A27C37', fontSize: '1.25rem', lineHeight: '1.4', maxWidth: '95%' }}>
              A Heritage Jewellery Brand Entering One of the World’s Most Influential Gold Markets
            </h5>
            
            <p className="inter mb-4" style={{ color: '#4A4A4A', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
              Talbar Gold & Diamond is an Indian jewellery brand based in Muttupettai, Thanjavur District, Tamil Nadu. The brand is now preparing for its UAE expansion with a strategic plan to open 5 premium outlets.
            </p>
            
            <p className="inter mb-5" style={{ color: '#4A4A4A', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify' }}>
              The UAE launch is designed to connect traditional Indian jewellery trust with the sophistication, purchasing power, and luxury retail culture of the Emirates.
            </p>

            {/* Launch Positioning Box with Cut Corners */}
            <div 
              className="text-center position-relative d-inline-block" 
              style={{ 
                backgroundColor: '#0B0B0B', 
                padding: '1.5rem 2.5rem',
                border: '1px solid #A27C37',
                clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)',
                width: '100%'
              }}
            >
              <h6 className="inter uppercase tracking-widest mb-2" style={{ color: '#A27C37', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '2px' }}>
                LAUNCH POSITIONING
              </h6>
              <h4 className="cormorant mb-0 fw-bold" style={{ color: '#A27C37', fontSize: '1.4rem', letterSpacing: '0.5px' }}>
                Heritage Trust. Modern Luxury. UAE Growth.
              </h4>
            </div>
          </Col>

          {/* Right Column (Image) */}
          <Col lg={6} className="text-center position-relative d-flex flex-column align-items-center justify-content-center">
            {/* Jewelry Image */}
            <img src="/talbar-jewelry.png" alt="Talbar Jewellery" className="img-fluid" style={{ maxHeight: '600px', objectFit: 'contain' }} />
          </Col>
          
        </Row>

        {/* Divider with Text */}
        <div className="d-flex align-items-center my-5">
          <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)' }}></div>
          <h6 className="inter uppercase px-4 mb-0 fw-bold text-center" style={{ color: '#1A1A1A', fontSize: '0.85rem', letterSpacing: '2.5px' }}>
            TARGET CUSTOMER SEGMENTS
          </h6>
          <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)' }}></div>
        </div>

        {/* Bottom Row (Segments) */}
        <Row className="g-0 text-center justify-content-center mt-4">
          {[
            { icon: <HiOutlineUsers size={42} strokeWidth={1} />, text: "Indian\nexpatriate\nfamilies" },
            { icon: <IoDiamondOutline size={42} strokeWidth={15} />, text: "GCC luxury\njewellery\ncustomers" },
            { icon: <HiOutlineHeart size={42} strokeWidth={1} />, text: "Wedding and\nbridal jewellery\nbuyers" },
            { icon: <HiOutlineShoppingBag size={42} strokeWidth={1} />, text: "Gold and diamond\nretail\ncustomers" },
            { icon: <HiOutlineGift size={42} strokeWidth={1} />, text: "Family wealth\nand gifting\nbuyers" },
            { icon: <FiLayers size={42} strokeWidth={1} />, text: "Long-term\ngold-focused\nconsumers" }
          ].map((item, idx) => (
            <Col xs={6} md={4} lg={2} key={idx} className={`px-2 py-3 ${idx !== 5 ? 'border-end-lg' : ''}`} style={{ borderColor: 'rgba(162, 124, 55, 0.3)' }}>
              <div className="mb-3 d-flex justify-content-center align-items-center mx-auto" style={{ height: '50px', color: '#A27C37' }}>
                {item.icon}
              </div>
              <p className="inter fw-medium mx-auto mb-0" style={{ color: '#1A1A1A', fontSize: '0.85rem', lineHeight: '1.5', whiteSpace: 'pre-line', maxWidth: '140px' }}>
                {item.text}
              </p>
            </Col>
          ))}
        </Row>
        
        {/* Custom CSS for border-end-lg */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 992px) {
            .border-end-lg {
              border-right: 1px solid rgba(162, 124, 55, 0.3) !important;
            }
          }
          @media (max-width: 991px) {
            .border-end-lg {
               border-right: none !important;
               border-bottom: 1px solid rgba(162, 124, 55, 0.3) !important;
            }
          }
        `}} />
      </Container>
    </section>
  );
};

export default TalbarLaunch;
