import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-matte-black text-warm-white pt-5 pb-4 border-top" style={{ borderTopColor: 'rgba(200, 166, 78, 0.3)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
      <Container className="container-luxury pt-4">
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="d-flex flex-column lh-1 mb-4">
              <span className="cormorant fs-2 text-gold tracking-widest text-uppercase">Sahmora</span>
              <span className="inter text-uppercase mt-2 text-white-50" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>Investment LLC</span>
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
              <li className="mb-2">Dubai Design District</li>
              <li className="mb-2">Dubai, United Arab Emirates</li>
              <li className="mb-2">info@sahmora.com</li>
              <li className="mb-2">+971 4 123 4567</li>
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
          <Col className="text-center">
            <p className="inter text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} Sahmora Investment LLC. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
