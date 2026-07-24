import React from 'react';
import { Row, Col } from 'react-bootstrap';

const VisionMission = () => {
  return (
    <section className="position-relative" style={{ overflow: 'hidden' }}>
      <Row className="g-0">
        
        {/* Left Panel - Vision (Black) */}
        <Col md={6} className="d-flex align-items-center" 
             style={{ 
               backgroundColor: '#0A0A0A',
               backgroundImage: "url('/vision_bg_v2.png')",
               backgroundPosition: 'bottom center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               padding: '5rem 2rem',
               minHeight: '350px'
             }}>
             
          <div className="w-100" style={{ maxWidth: '450px', marginLeft: 'auto', marginRight: '10%' }}>
            <h5 className="cormorant fw-bold mb-3" style={{ color: '#C8A64E', fontSize: '1.4rem', letterSpacing: '1px' }}>
              OUR VISION
            </h5>
            <p className="inter m-0" style={{ color: '#E0E0E0', fontSize: '0.9rem', lineHeight: '1.8' }}>
              To become one of the Middle East's most trusted investment<br className="d-none d-lg-block" />
              and business development companies, creating enduring<br className="d-none d-lg-block" />
              value through strategic investments and transformative<br className="d-none d-lg-block" />
              business partnerships.
            </p>
          </div>
        </Col>

        {/* Right Panel - Mission (Cream) */}
        <Col md={6} className="d-flex align-items-center" 
             style={{ 
               backgroundColor: '#F5F0E7',
               backgroundImage: "url('/mission_bg_v2.png')",
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               padding: '5rem 2rem',
               minHeight: '350px'
             }}>
             
          <div className="w-100" style={{ maxWidth: '450px', marginRight: 'auto', marginLeft: '10%' }}>
            <h5 className="cormorant fw-bold mb-3" style={{ color: '#1A1A1A', fontSize: '1.4rem', letterSpacing: '1px' }}>
              OUR MISSION
            </h5>
            <p className="inter m-0" style={{ color: '#4A4A4A', fontSize: '0.9rem', lineHeight: '1.8' }}>
              To identify promising businesses, invest with purpose,<br className="d-none d-lg-block" />
              accelerate growth through operational excellence, and build<br className="d-none d-lg-block" />
              sustainable enterprises that contribute to the economic<br className="d-none d-lg-block" />
              development of the UAE and GCC.
            </p>
          </div>
        </Col>
        
      </Row>
    </section>
  );
};

export default VisionMission;
