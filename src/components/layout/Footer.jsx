import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <footer className="bg-matte-black text-warm-white pt-5 pb-4 border-top" style={{ borderTopColor: 'rgba(200, 166, 78, 0.3)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
      <Container className="container-luxury pt-4">
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="mb-4">
              <img 
                src="/SAHMORA logo.png" 
                alt="Sahmora Investment LLC" 
                style={{ height: '100px', objectFit: 'contain' }} 
              />
            </div>
            <p className="inter text-white-50 pe-lg-5" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              Driving luxury retail expansion and premium investments across the GCC and beyond.
            </p>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="cormorant text-gold mb-4">Company</h5>
            <ul className="list-unstyled inter" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2"><a href="#vision" className="text-white-50 text-decoration-none hover-gold">Vision 2030</a></li>
              <li className="mb-2"><a href="#ecosystem" className="text-white-50 text-decoration-none hover-gold">Our Ecosystem</a></li>
              <li className="mb-2"><a href="#talbar" className="text-white-50 text-decoration-none hover-gold">Talbar Launch</a></li>
              <li className="mb-2"><a href="#partnership" className="text-white-50 text-decoration-none hover-gold">Partnership</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="cormorant text-gold mb-4">Contact</h5>
            <ul className="list-unstyled inter text-white-50" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li className="mb-2">DIRC Complex, W5-E.5</li>
              <li className="mb-2">Dubai Investment Park 2</li>
              <li className="mb-2">Dubai, United Arab Emirates</li>
              <li className="mb-2 mt-3">+971 4 276 6331</li>
              <li className="mb-2">+971 4 880 5504</li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="cormorant text-gold mb-4">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-gold fs-5 opacity-75 hover-opacity-100 transition-all"><FaLinkedinIn /></a>
              <a href="#" className="text-gold fs-5 opacity-75 hover-opacity-100 transition-all"><FaTwitter /></a>
              <a href="#" className="text-gold fs-5 opacity-75 hover-opacity-100 transition-all"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-4 border-top" style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="inter text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} Sahmora Investment LLC. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="inter text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>
              Powered by <a href="https://dgbirdmedia.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none transition-all" style={{ color: '#C8A64E' }}>DGbird Media</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    {/* Scroll to Top Button */}
    <button 
      onClick={scrollToTop}
      className={`position-fixed bottom-0 end-0 m-4 rounded-circle border-0 d-flex align-items-center justify-content-center transition-all ${showScrollTop ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        width: '50px', height: '50px', 
        backgroundColor: '#C8A64E', color: '#000', 
        zIndex: 1000,
        pointerEvents: showScrollTop ? 'auto' : 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease'
      }}
    >
      <FaArrowUp size={20} />
    </button>
    </>
  );
};

export default Footer;
