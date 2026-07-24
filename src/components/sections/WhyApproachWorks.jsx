import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  HiOutlineBriefcase, 
  HiOutlineGlobeAlt, 
  HiOutlineAdjustments, 
  HiOutlineUserGroup 
} from 'react-icons/hi';

const WhyApproachWorks = () => {
  const features = [
    {
      title: 'Business Expertise',
      desc: 'Deep industry knowledge and strategic understanding across multiple sectors including retail, luxury, and FMCG.',
      icon: <HiOutlineBriefcase size={34} />
    },
    {
      title: 'Commercial Network',
      desc: 'Extensive regional and global business relationships that provide our partners with unparalleled market access.',
      icon: <HiOutlineGlobeAlt size={34} />
    },
    {
      title: 'Operational Excellence',
      desc: 'Hands-on operational involvement, ensuring strategies are flawlessly executed and scalable frameworks are implemented.',
      icon: <HiOutlineAdjustments size={34} />
    },
    {
      title: 'Long-Term Partnership',
      desc: 'Committed to growing alongside our partners, sharing risks, and building enduring, sustainable enterprise value.',
      icon: <HiOutlineUserGroup size={34} />
    }
  ];

  return (
    <section className="section-padding position-relative overflow-hidden" style={{ 
      backgroundColor: '#050709',
      backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')", // Global network nodes
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#ffffff'
    }}>
      {/* Dark Overlay for text readability */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        backgroundColor: 'rgba(0,0,0,0.85)',
        zIndex: 1
      }}></div>

      <Container className="position-relative z-10" style={{ maxWidth: '1400px' }} py-5>
        <Row className="align-items-center">
          
          {/* Left Column - Content */}
          <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Section Label */}
              <div className="d-flex align-items-center mb-4">
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
                <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
                  WHY OUR APPROACH WORKS
                </span>
              </div>

              {/* Heading */}
              <h2 className="cormorant fw-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ffffff', lineHeight: '1.2' }}>
                Experience.<br />
                Insight.<br />
                <span style={{ color: '#C8A64E' }}>Execution.</span>
              </h2>

              {/* Description */}
              <p className="inter" style={{ color: '#E0E0E0', fontSize: '1.1rem', lineHeight: '1.8' }}>
                At Sahmora, we do not view investments as mere financial transactions. We view them as strategic partnerships. Our philosophy is grounded in the belief that capital must be paired with operational expertise and market insight to truly unlock value. We bring a founder's mentality to every partnership, working collaboratively to overcome challenges and seize opportunities.
              </p>
            </motion.div>
          </Col>

          {/* Right Column - Features Grid */}
          <Col lg={7}>
            <Row className="g-4">
              {features.map((feature, idx) => (
                <Col md={6} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="h-100 p-4 rounded-4"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(200, 166, 78, 0.2)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(200,166,78,0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-3" style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(200, 166, 78, 0.1)',
                      color: '#C8A64E',
                      border: '1px solid rgba(200, 166, 78, 0.3)'
                    }}>
                      {feature.icon}
                    </div>
                    <h4 className="cormorant fw-bold mb-3" style={{ color: '#ffffff', fontSize: '1.3rem' }}>
                      {feature.title}
                    </h4>
                    <p className="inter mb-0" style={{ color: '#C0C0C0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default WhyApproachWorks;
