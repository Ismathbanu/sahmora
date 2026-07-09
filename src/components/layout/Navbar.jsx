import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BootstrapNavbar 
      fixed="top" 
      expand="lg" 
      className={clsx(
        'transition-all duration-300 py-3', 
        scrolled ? 'bg-matte-black shadow-lg border-bottom border-gold' : 'bg-transparent'
      )}
      style={{
        borderBottomColor: scrolled ? 'rgba(200, 166, 78, 0.2)' : 'transparent',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        transition: 'all 0.4s ease'
      }}
    >
      <Container className="container-luxury">
        <BootstrapNavbar.Brand href="#home" className="text-white d-flex flex-column lh-1">
          <span className="cormorant fs-3 text-gold tracking-widest text-uppercase">Sahmora</span>
          <span className="inter text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>Investment LLC</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {['Vision', 'Talbar', 'Ecosystem', 'Partnership'].map((item, idx) => (
              <Nav.Link 
                key={idx} 
                href={`#${item.toLowerCase()}`} 
                className="text-white mx-3 inter text-uppercase"
                style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" className="btn-luxury px-4 py-2" style={{ fontSize: '0.8rem' }}>
              Partner With Us
            </a>
          </motion.div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
