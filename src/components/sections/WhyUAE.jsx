import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineUsers, HiOutlineOfficeBuilding, HiOutlineGlobe } from 'react-icons/hi';
import { IoDiamondOutline } from 'react-icons/io5';
import { BiCrown } from 'react-icons/bi';
import { BsCircle } from 'react-icons/bs';

const WhyUAE = () => {
  const advantages = [
    { 
      icon: <HiOutlineUsers size={46} strokeWidth={1} />, 
      text: "Strong Indian and South Asian customer base" 
    },
    { 
      icon: <IoDiamondOutline size={42} strokeWidth={15} />, 
      text: "High gold and jewellery purchasing culture" 
    },
    { 
      icon: <HiOutlineOfficeBuilding size={46} strokeWidth={1} />, 
      text: "Premium retail and mall infrastructure" 
    },
    { 
      icon: <BiCrown size={46} strokeWidth={0.5} />, 
      text: "GCC luxury consumer access" 
    },
    { 
      icon: (
        <div className="position-relative d-inline-flex flex-column align-items-center justify-content-end" style={{ height: '46px' }}>
          <IoDiamondOutline size={18} strokeWidth={25} style={{ marginBottom: '-8px', zIndex: 1, backgroundColor: '#06080A', padding: '0 2px' }} />
          <BsCircle size={30} strokeWidth={1} />
        </div>
      ), 
      text: "Wedding, gifting, and family jewellery demand" 
    },
    { 
      icon: <HiOutlineGlobe size={46} strokeWidth={1} />, 
      text: "Gateway for future GCC expansion" 
    }
  ];

  return (
    <section 
      id="why-uae" 
      className="section-padding position-relative" 
      style={{ 
        backgroundColor: '#06080A', 
        backgroundImage: 'linear-gradient(rgba(6, 8, 10, 0.75), rgba(6, 8, 10, 0.9)), url(/dubai-skyline-bg.png)', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1350px' }}>
        <Row className="align-items-center">
          
          {/* Left Column (Text) */}
          <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0 text-start">
            <h2 className="cormorant fw-bold mb-3" style={{ fontSize: '4.2rem', color: '#D4B46A', lineHeight: '1.1' }}>
              Why the UAE Market
            </h2>
            
            <h5 className="inter fw-bold mb-4" style={{ color: '#D4B46A', fontSize: '1.15rem', letterSpacing: '0.5px' }}>
              The Right Market. The Right Timing. The Right Brand.
            </h5>
            
            <p className="inter mb-4" style={{ color: '#E0E0E0', fontSize: '1.05rem', lineHeight: '1.7', opacity: 0.9 }}>
              The UAE is one of the world's most respected gold and jewellery destinations, supported by strong expatriate demand, luxury retail infrastructure, international tourism, and deep consumer trust in gold as a store of value.
            </p>
            
            <p className="inter mb-0" style={{ color: '#E0E0E0', fontSize: '1.05rem', lineHeight: '1.7', opacity: 0.9 }}>
              Talbar's UAE expansion is positioned around a powerful market opportunity: combining Indian jewellery heritage with the UAE's global luxury environment.
            </p>
          </Col>

          {/* Right Column (Grid) */}
          <Col lg={7} className="ps-lg-5">
            {/* Divider Header */}
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div style={{ flex: '1', height: '1px', backgroundColor: 'rgba(212, 180, 106, 0.25)' }}></div>
              <h6 className="inter text-uppercase tracking-widest px-4 mb-0 fw-bold" style={{ color: '#D4B46A', fontSize: '0.9rem', letterSpacing: '3px' }}>
                MARKET ADVANTAGES
              </h6>
              <div style={{ flex: '1', height: '1px', backgroundColor: 'rgba(212, 180, 106, 0.25)' }}></div>
            </div>

            {/* Grid Box */}
            <div 
              style={{ 
                border: '1px solid rgba(212, 180, 106, 0.25)', 
                borderRadius: '8px', 
                backgroundColor: 'rgba(6, 8, 10, 0.5)', 
                backdropFilter: 'blur(5px)' 
              }}
            >
              <Row className="g-0 text-center">
                {advantages.map((item, idx) => {
                  const isBottom = idx >= 3;
                  const isRightEdge = idx % 3 === 2;
                  
                  return (
                    <Col 
                      xs={12} md={4} 
                      key={idx} 
                      className="p-4 d-flex flex-column align-items-center justify-content-center grid-cell"
                      style={{ 
                        borderBottom: !isBottom ? '1px solid rgba(212, 180, 106, 0.25)' : 'none', 
                        borderRight: !isRightEdge ? '1px solid rgba(212, 180, 106, 0.25)' : 'none',
                        minHeight: '240px'
                      }}
                    >
                      <div className="mb-4" style={{ color: '#D4B46A' }}>
                        {item.icon}
                      </div>
                      <p className="inter mb-0" style={{ color: '#E0E0E0', fontSize: '1rem', lineHeight: '1.5', maxWidth: '85%' }}>
                        {item.text}
                      </p>
                    </Col>
                  );
                })}
              </Row>
            </div>
            
            {/* Custom CSS for mobile borders */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 767px) {
                #why-uae .grid-cell {
                  border-right: none !important;
                  border-bottom: 1px solid rgba(212, 180, 106, 0.25) !important;
                  min-height: 200px !important;
                }
                #why-uae .grid-cell:last-child {
                  border-bottom: none !important;
                }
              }
            `}} />
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default WhyUAE;
