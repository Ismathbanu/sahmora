import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showVenture, setShowVenture] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = { fontSize: '0.85rem', letterSpacing: '1px' };

  return (
    <BootstrapNavbar 
      fixed="top" 
      expand="lg" 
      className={clsx(
        'transition-all duration-300 py-3', 
        scrolled ? 'shadow-lg border-bottom border-gold' : ''
      )}
      style={{
        backgroundColor: '#000000',
        borderBottomColor: scrolled ? 'rgba(200, 166, 78, 0.2)' : 'transparent',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        transition: 'all 0.4s ease'
      }}
    >
      <Container className="container-luxury">
        <BootstrapNavbar.Brand 
          as={Link}
          to="/"
          className="d-flex align-items-center"
        >
          <img 
            src="/SAHMORA logo.png" 
            alt="Sahmora Investment LLC" 
            style={{ height: '95px', objectFit: 'contain' }} 
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center">
            <Nav.Link as={Link} to="/" className={clsx("mx-2 inter text-uppercase", location.pathname === '/' ? 'text-gold' : 'text-white')} style={navLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className={clsx("mx-2 inter text-uppercase", location.pathname === '/about-us' ? 'text-gold' : 'text-white')} style={navLinkStyle}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/what-we-do" className={clsx("mx-2 inter text-uppercase", location.pathname === '/what-we-do' ? 'text-gold' : 'text-white')} style={navLinkStyle}>
              What We Do
            </Nav.Link>
            <Nav.Link as={Link} to="/industries-we-serve" className={clsx("mx-2 inter text-uppercase", location.pathname === '/industries-we-serve' ? 'text-gold' : 'text-white')} style={navLinkStyle}>
              Industries We Serve
            </Nav.Link>
            
            <NavDropdown 
              title={<span className={clsx("inter text-uppercase", location.pathname.includes('/ventures') ? 'text-gold' : 'text-white')} style={navLinkStyle}>Our Venture</span>} 
              id="ventures-dropdown" 
              className="mx-2"
              menuVariant="dark"
              show={showVenture}
              onMouseEnter={() => setShowVenture(true)}
              onMouseLeave={() => setShowVenture(false)}
            >
              <NavDropdown.Item as={Link} to="/ventures/talbar" className="inter text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                Talbar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ventures/igrade" className="inter text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                Igrade Goods LLC
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3 mt-lg-0">
            <Link to="/contact-us" className="btn-luxury px-4 py-2" style={{ fontSize: '0.8rem', textDecoration: 'none', display: 'inline-block' }}>
              Contact Us
            </Link>
          </motion.div>
        </BootstrapNavbar.Collapse>
      </Container>
      <style>{`
        .navbar-dark .navbar-nav .nav-link {
          color: white;
        }
        .text-gold {
          color: #C8A64E !important;
        }
        .dropdown-menu-dark {
          background-color: #050709;
          border: 1px solid rgba(200, 166, 78, 0.2);
        }
        .dropdown-menu-dark .dropdown-item:hover {
          background-color: rgba(200, 166, 78, 0.1);
          color: #C8A64E;
        }
      `}</style>
    </BootstrapNavbar>
  );
};

export default Navbar;
