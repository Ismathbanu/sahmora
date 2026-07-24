import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaRegLightbulb, FaRegChartBar } from 'react-icons/fa';
import { HiOutlineShieldCheck, HiOutlineCog, HiOutlineGlobe } from 'react-icons/hi';

const CoreValues = () => {
  const values = [
    {
      title: 'Integrity',
      desc: 'Upholding the highest standards of transparency, honesty, and ethical business practices in every partnership and investment.',
      icon: <HiOutlineShieldCheck size={40} />
    },
    {
      title: 'Strategic Thinking',
      desc: 'Approaching every opportunity with deep market insight, foresight, and a focus on creating sustainable competitive advantages.',
      icon: <FaRegChartBar size={40} />
    },
    {
      title: 'Innovation',
      desc: 'Fostering a culture of continuous improvement, embracing new technologies and modern operational models to drive growth.',
      icon: <FaRegLightbulb size={40} />
    },
    {
      title: 'Operational Excellence',
      desc: 'Executing strategies with precision, optimizing processes, and delivering measurable results across all our ventures.',
      icon: <HiOutlineCog size={40} />
    },
    {
      title: 'Long-Term Partnerships',
      desc: 'Building enduring relationships based on mutual trust, shared goals, and collaborative value creation.',
      icon: <FaRegHandshake size={40} />
    },
    {
      title: 'Sustainable Growth',
      desc: 'Investing in enterprises and models that promise scalable, lasting economic value for the UAE and the wider region.',
      icon: <HiOutlineGlobe size={40} />
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F5F0E7' }}>
      <Container style={{ maxWidth: '1400px' }} className="py-5">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-3">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
            <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
              OUR CORE VALUES
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
          </div>
          <h2 className="cormorant fw-bold" style={{ fontSize: '3rem', color: '#1A1A1A' }}>
            Principles That Drive Us
          </h2>
        </div>

        {/* Values Grid */}
        <Row className="g-4">
          {values.map((value, idx) => (
            <Col md={6} lg={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-100 p-4 p-lg-5 text-center bg-white rounded-3"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid rgba(200, 166, 78, 0.15)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(200, 166, 78, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
                }}
              >
                {/* Gold Outline Icon */}
                <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{
                  width: '80px',
                  height: '80px',
                  border: '1.5px solid #C8A64E',
                  color: '#C8A64E',
                  backgroundColor: 'transparent'
                }}>
                  {value.icon}
                </div>
                
                <h4 className="cormorant fw-bold mb-3" style={{ color: '#1A1A1A', fontSize: '1.5rem' }}>
                  {value.title}
                </h4>
                
                <p className="inter mb-0" style={{ color: '#5A5A5A', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {value.desc}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
        
      </Container>
    </section>
  );
};

export default CoreValues;
