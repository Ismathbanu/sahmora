import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBullseye, FaWallet, FaShieldAlt, FaChartLine, FaFileAlt, FaLock } from 'react-icons/fa';

const GoldInvestment = () => {
  return (
    <section id="investment" className="bg-deep-black section-padding text-warm-white position-relative" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-mamba.png")', backgroundBlendMode: 'overlay' }}>
      <Container className="container-luxury position-relative z-10">
        <Row className="align-items-center">
          
          {/* Left Column: Text and Gold Bar */}
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-luxury-gold)', marginRight: '15px' }}></div>
            </div>
            <h2 className="cormorant display-4 fw-bold mb-4" style={{ lineHeight: '1.2' }}>The Golden Standard</h2>
            <p className="inter text-white-50 mb-5" style={{ fontSize: '1.1rem', maxWidth: '90%', lineHeight: '1.7' }}>
              A structured, secure, and highly liquid investment opportunity backed by physical gold assets and prime retail expansion.
            </p>
            
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src="/gold-bar.png" 
              alt="Physical Gold Asset" 
              className="img-fluid w-100"
              style={{ maxWidth: '450px', objectFit: 'contain' }}
            />
          </Col>

          {/* Right Column: Infographic */}
          <Col lg={7} className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '600px' }}>
            
            {/* SVG Connecting Lines */}
            <svg className="position-absolute w-100 h-100 top-0 start-0 z-0" style={{ opacity: 0.3 }}>
               <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="var(--accent-luxury-gold)" strokeWidth="1" strokeDasharray="5,5" />
               <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="var(--accent-luxury-gold)" strokeWidth="1" strokeDasharray="5,5" />
               <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="var(--accent-luxury-gold)" strokeWidth="1" strokeDasharray="5,5" />
               <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="var(--accent-luxury-gold)" strokeWidth="1" strokeDasharray="5,5" />
               <line x1="50%" y1="50%" x2="35%" y2="85%" stroke="var(--accent-luxury-gold)" strokeWidth="1" strokeDasharray="5,5" />
               <line x1="50%" y1="50%" x2="65%" y2="85%" stroke="var(--accent-luxury-gold)" strokeWidth="1" strokeDasharray="5,5" />
            </svg>

            {/* Center Core */}
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="bg-matte-black rounded-circle d-flex flex-column align-items-center justify-content-center position-relative z-10" style={{ width: '180px', height: '180px', border: '1px solid rgba(200, 166, 78, 0.5)', boxShadow: '0 0 40px rgba(200, 166, 78, 0.15)' }}>
                {/* Inner glowing ring */}
                <div className="position-absolute w-100 h-100 rounded-circle" style={{ border: '2px solid rgba(200, 166, 78, 0.8)', padding: '5px', boxSizing: 'border-box' }}></div>
                
                <span className="inter text-white-50 text-uppercase tracking-widest mb-1" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>Gold<br/>Allocation</span>
                <span className="cormorant text-gold display-4 fw-bold lh-1 mt-2">90%</span>
              </div>
            </div>

            {/* Cards arranged around the center */}
            {/* Top Left */}
            <motion.div whileHover={{ scale: 1.05 }} className="position-absolute" style={{ top: '15%', left: '10%', width: '220px' }}>
              <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(200,166,78,0.3)', backdropFilter: 'blur(5px)' }}>
                <div className="text-gold fs-3 me-3"><FaBullseye /></div>
                <div>
                  <h6 className="inter text-gold fw-bold mb-1" style={{ fontSize: '0.9rem' }}>16% Targeted ROI</h6>
                  <p className="inter text-white-50 mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Profit-focused returns</p>
                </div>
              </div>
            </motion.div>

            {/* Top Right */}
            <motion.div whileHover={{ scale: 1.05 }} className="position-absolute" style={{ top: '15%', right: '10%', width: '220px' }}>
              <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(200,166,78,0.3)', backdropFilter: 'blur(5px)' }}>
                <div className="text-gold fs-3 me-3"><FaWallet /></div>
                <div>
                  <h6 className="inter text-gold fw-bold mb-1" style={{ fontSize: '0.9rem' }}>AED 50K Min.</h6>
                  <p className="inter text-white-50 mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Accessible entry point</p>
                </div>
              </div>
            </motion.div>

            {/* Middle Left */}
            <motion.div whileHover={{ scale: 1.05 }} className="position-absolute" style={{ top: '45%', left: '0%', width: '220px' }}>
              <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(200,166,78,0.3)', backdropFilter: 'blur(5px)' }}>
                <div className="text-gold fs-3 me-3"><FaShieldAlt /></div>
                <div>
                  <h6 className="inter text-gold fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Easy Exit</h6>
                  <p className="inter text-white-50 mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Guaranteed Liquidity</p>
                </div>
              </div>
            </motion.div>

            {/* Middle Right */}
            <motion.div whileHover={{ scale: 1.05 }} className="position-absolute" style={{ top: '45%', right: '0%', width: '220px' }}>
              <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(200,166,78,0.3)', backdropFilter: 'blur(5px)' }}>
                <div className="text-gold fs-3 me-3"><FaChartLine /></div>
                <div>
                  <h6 className="inter text-gold fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Profit-Linked</h6>
                  <p className="inter text-white-50 mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Performance-driven</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left */}
            <motion.div whileHover={{ scale: 1.05 }} className="position-absolute" style={{ bottom: '10%', left: '20%', width: '220px' }}>
              <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(200,166,78,0.3)', backdropFilter: 'blur(5px)' }}>
                <div className="text-gold fs-3 me-3"><FaFileAlt /></div>
                <div>
                  <h6 className="inter text-gold fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Transparent</h6>
                  <p className="inter text-white-50 mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Regular auditing</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div whileHover={{ scale: 1.05 }} className="position-absolute" style={{ bottom: '10%', right: '20%', width: '220px' }}>
              <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(200,166,78,0.3)', backdropFilter: 'blur(5px)' }}>
                <div className="text-gold fs-3 me-3"><FaLock /></div>
                <div>
                  <h6 className="inter text-gold fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Secure & Tangible</h6>
                  <p className="inter text-white-50 mb-0" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>Backed by physical gold</p>
                </div>
              </div>
            </motion.div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GoldInvestment;
