import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  HiOutlineShieldCheck, 
  HiOutlineClock, 
  HiOutlineGlobeAlt, 
  HiOutlineThumbUp, 
  HiOutlineUserGroup, 
  HiOutlineHand
} from 'react-icons/hi';
import { FaRegHandshake } from 'react-icons/fa';

const WhyChooseIgrade = () => {
  const reasons = [
    {
      title: 'Reliable Supply',
      desc: 'Consistent supply you can depend on.',
      icon: <HiOutlineShieldCheck size={40} />
    },
    {
      title: 'Timely Delivery',
      desc: 'On-time delivery every time.',
      icon: <HiOutlineClock size={40} />
    },
    {
      title: 'Wide Network',
      desc: 'Extensive distribution network.',
      icon: <HiOutlineGlobeAlt size={40} />
    },
    {
      title: 'Quality Assured',
      desc: 'Commitment to quality and safety.',
      icon: <HiOutlineThumbUp size={40} />
    },
    {
      title: 'Experienced Team',
      desc: 'Skilled professionals at your service.',
      icon: <HiOutlineUserGroup size={40} />
    },
    {
      title: 'Strong Partnerships',
      desc: 'Building long-term business relationships.',
      icon: <FaRegHandshake size={40} />
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#0B0D10' }}>
      <Container fluid style={{ maxWidth: '1600px' }} className="py-5">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-5">
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: '60px', height: '1px', backgroundColor: '#B8860B' }}></div>
            <span className="cormorant fw-bold mx-4 text-uppercase" style={{ fontSize: '1.5rem', color: '#ffffff', letterSpacing: '2px' }}>
              WHY CHOOSE IGRADE?
            </span>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#B8860B' }}></div>
          </div>
        </div>

        {/* Reasons Grid */}
        <Row className="g-4 justify-content-center text-center">
          {reasons.map((item, idx) => (
            <Col xs={6} md={4} lg={2} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="d-flex flex-column align-items-center"
              >
                {/* Icon */}
                <div className="mb-4" style={{ color: '#B8860B' }}>
                  {item.icon}
                </div>
                
                {/* Title */}
                <h5 className="cormorant fw-bold mb-3" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
                  {item.title}
                </h5>
                
                {/* Description */}
                <p className="inter mb-0" style={{ color: '#999999', fontSize: '0.85rem', lineHeight: '1.5', maxWidth: '200px' }}>
                  {item.desc}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseIgrade;
