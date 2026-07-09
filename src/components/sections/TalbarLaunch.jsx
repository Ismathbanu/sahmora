import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGem, FaRing, FaHandshake, FaChartLine } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TalbarLaunch = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.feature-card');
    
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  const features = [
    { icon: <FaGem />, title: 'Luxury', desc: 'Uncompromising quality and design.' },
    { icon: <FaRing />, title: 'Wedding', desc: 'Premium bridal collections.' },
    { icon: <FaHandshake />, title: 'Families', desc: 'Generational wealth preservation.' },
    { icon: <FaChartLine />, title: 'Investment', desc: 'Secure asset allocation.' },
  ];

  return (
    <section id="talbar" className="bg-charcoal-black section-padding text-warm-white" ref={sectionRef}>
      <Container className="container-luxury">
        <Row className="align-items-center mb-5 pb-4">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="position-relative p-3" style={{ border: '1px solid rgba(200, 166, 78, 0.2)', borderRadius: '18px' }}>
              <div 
                className="w-100 rounded" 
                style={{ 
                  height: '600px', 
                  background: 'url("/talbar-model.png") center/cover',
                }}
              ></div>
              <div className="position-absolute bottom-0 end-0 p-4 bg-matte-black m-3 rounded shadow-lg border" style={{ borderColor: 'rgba(200, 166, 78, 0.3)' }}>
                <h5 className="cormorant text-gold mb-1">Talbar Gold & Diamond</h5>
                <p className="inter text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>Exclusive UAE Collection</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="ps-lg-5">
            <h2 className="cormorant display-5 fw-bold mb-4">Redefining Luxury Retail in the Middle East</h2>
            <p className="inter text-white-50 mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The UAE launch of Talbar represents a strategic milestone in Sahmora's expansion. We are bringing world-class craftsmanship, certified purity, and a tailored investment approach to the heart of Dubai.
            </p>
            <p className="inter text-white-50 mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Designed for the discerning investor and the connoisseur of fine jewelry, Talbar bridges the gap between aesthetic brilliance and tangible financial security.
            </p>
            
            <Row className="g-4">
              {features.map((item, idx) => (
                <Col sm={6} key={idx}>
                  <div className="feature-card d-flex align-items-center p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="text-gold fs-3 me-3">
                      {item.icon}
                    </div>
                    <div>
                      <h6 className="cormorant fw-bold mb-1">{item.title}</h6>
                      <p className="inter text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>{item.desc}</p>
                    </div>
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

export default TalbarLaunch;
