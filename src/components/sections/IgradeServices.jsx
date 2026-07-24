import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HiOutlineShoppingCart, 
  HiOutlineOfficeBuilding, 
  HiOutlineTruck, 
  HiOutlineCube, 
  HiOutlineGlobeAlt 
} from 'react-icons/hi';
import { BiDish } from 'react-icons/bi';

const IgradeServices = () => {
  const services = [
    {
      title: 'FMCG Distribution',
      desc: 'Comprehensive distribution of quality FMCG products across diverse categories.',
      bullets: ['Leading Global Brands', 'Wide Product Range', 'Market Expertise'],
      icon: <HiOutlineShoppingCart size={28} />,
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' // Warehouse shelves
    },
    {
      title: 'HORECA Supply',
      desc: 'Specialized supply for hotels, restaurants, cafés and institutional kitchens.',
      bullets: ['Quality Assured', 'Bulk Supply', 'On-time Delivery'],
      icon: <BiDish size={28} />,
      img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop' // Chefs in kitchen
    },
    {
      title: 'Warehousing',
      desc: 'Modern warehousing facilities with advanced inventory management systems.',
      bullets: ['Secure Storage', 'Inventory Control', 'Temperature Management'],
      icon: <HiOutlineOfficeBuilding size={28} />,
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop' // Large warehouse
    },
    {
      title: 'Logistics',
      desc: 'Efficient logistics solutions ensuring smooth transportation and timely delivery.',
      bullets: ['Fleet Management', 'Route Optimization', 'Real-time Tracking'],
      icon: <HiOutlineTruck size={28} />,
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop' // Truck on highway
    },
    {
      title: 'Distribution',
      desc: 'Extensive distribution network ensuring products reach every business on time.',
      bullets: ['Wide Network', 'Rapid Distribution', 'Business Flexibility'],
      icon: <HiOutlineCube size={28} />,
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop' // Warehouse loading dock
    },
    {
      title: 'Supply Chain Management',
      desc: 'Integrated supply chain solutions to improve efficiency and drive growth.',
      bullets: ['Demand Planning', 'Process Optimization', 'End-to-End Visibility'],
      icon: <HiOutlineGlobeAlt size={28} />,
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' // Digital network / earth
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#050709' }}>
      <Container style={{ maxWidth: '1400px' }} className="py-5">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-4">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#B8860B' }}></div>
            <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '1rem', color: '#B8860B', letterSpacing: '3px' }}>
              OUR SERVICES
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#B8860B' }}></div>
          </div>
        </div>

        {/* Services Grid */}
        <Row className="g-4 g-lg-5">
          {services.map((item, idx) => (
            <Col md={6} lg={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-100 d-flex flex-column rounded-3 overflow-hidden position-relative group"
                style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(184, 134, 11, 0.15)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image Section */}
                <div style={{
                  height: '220px',
                  backgroundImage: `url('${item.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
                </div>

                {/* Content Section with Overlapping Icon */}
                <div className="flex-grow-1 p-4 d-flex flex-column bg-transparent position-relative z-10 pt-5">
                  
                  {/* Overlapping Icon */}
                  <div className="position-absolute d-flex align-items-center justify-content-center rounded-circle" style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#B8860B', // Golden background for icon
                    color: '#ffffff',
                    top: '-30px', // Pull it up over the image
                    left: '24px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    border: '3px solid #0a0a0a' // Dark border to separate from image
                  }}>
                    {item.icon}
                  </div>

                  <h4 className="cormorant fw-bold mb-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}>
                    {item.title}
                  </h4>
                  
                  <p className="inter mb-4" style={{ color: '#A0A0A0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>

                  <ul className="list-unstyled mb-4 inter d-flex flex-wrap gap-2" style={{ color: '#A0A0A0', fontSize: '0.8rem' }}>
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="d-flex align-items-center me-3 mb-2 w-100" style={{ flexBasis: 'calc(50% - 1rem)' }}>
                        <div style={{ width: '4px', height: '4px', backgroundColor: '#B8860B', borderRadius: '50%', marginRight: '8px' }}></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link to="#" className="inter fw-bold text-decoration-none d-inline-flex align-items-center" style={{ 
                      color: '#B8860B', 
                      fontSize: '0.85rem', 
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F9DE8B'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#B8860B'}
                    >
                      Learn More
                      <svg className="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IgradeServices;
