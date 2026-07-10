import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHandshake, FaConciergeBell, FaAward, FaShieldAlt, FaStar } from 'react-icons/fa';
import { HiOutlineShieldCheck, HiOutlineShoppingCart, HiOutlineRefresh } from 'react-icons/hi';

const HorecaDivision = () => {
  const strengths = [
    { title: 'Reliable\nsupply capability', icon: <HiOutlineShieldCheck size={28} /> },
    { title: 'Wide\nproduct range', icon: <HiOutlineShoppingCart size={28} /> },
    { title: 'Strong vendor\nrelationships', icon: <FaHandshake size={28} /> },
    { title: 'Service\nconsistency', icon: <HiOutlineRefresh size={28} /> },
    { title: 'Hospitality\nmarket experience', icon: <FaConciergeBell size={28} /> },
    { title: 'Quality-focused\noperations', icon: <FaAward size={28} /> }
  ];

  return (
    <section id="horeca" className="position-relative" style={{ backgroundColor: '#050709', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Cream Section */}
      <div className="position-relative z-10 d-flex flex-column" style={{ backgroundColor: '#FAF8F3', flexGrow: 1, padding: '100px 0' }}>
        <Container className="container-luxury" style={{ maxWidth: '1250px' }}>

          {/* Header Area */}
          <div className="text-center mb-5">
            <h6 className="inter fw-bold tracking-widest mb-3 uppercase" style={{ color: '#A27C37', fontSize: '0.85rem', letterSpacing: '2px' }}>
              HORECA DIVISION
            </h6>

            <h2 className="cormorant fw-bold mb-4 lh-sm" style={{ fontSize: '3.5rem', color: '#1A1A1A' }}>
              Trusted Supply Partner for<br />
              <span style={{ color: '#A27C37' }}>Hospitality and Food Service</span>
            </h2>

            <p className="inter mx-auto" style={{ color: '#4A4A4A', fontSize: '1rem', lineHeight: '1.7', maxWidth: '650px' }}>
              Through Igrade Goods LLC, Sahmora's ecosystem supplies hotels, restaurants, cafés, catering companies, and institutional buyers across the UAE.
            </p>
          </div>

          {/* Horeca Strengths Divider */}
          <div className="d-flex align-items-center justify-content-center mb-5 mt-5">
            <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)', maxWidth: '400px' }}></div>
            <h6 className="inter uppercase px-4 mb-0 fw-bold text-center tracking-widest" style={{ color: '#1A1A1A', fontSize: '0.9rem', letterSpacing: '2px' }}>
              HORECA STRENGTHS
            </h6>
            <div className="flex-grow-1" style={{ height: '1px', background: 'rgba(162, 124, 55, 0.4)', maxWidth: '400px' }}></div>
          </div>

          {/* Strengths Row */}
          <div className="d-flex flex-wrap justify-content-center align-items-start position-relative mb-5 pb-4">
            {strengths.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center px-2 px-md-4" style={{ width: '150px' }}>
                  {/* Icon Circle */}
                  <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center position-relative"
                    style={{
                      width: '75px', height: '75px',
                      backgroundColor: '#FAF8F3',
                      border: '1px solid rgba(162, 124, 55, 0.4)',
                      boxShadow: '0 0 25px rgba(162, 124, 55, 0.15), inset 0 0 15px rgba(255,255,255,1)'
                    }}>
                    <div style={{ color: '#A27C37' }}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="inter fw-medium" style={{ color: '#1A1A1A', fontSize: '0.85rem', lineHeight: '1.4', whiteSpace: 'pre-line' }}>
                    {item.title}
                  </p>
                </div>

                {/* Vertical separator (except after last item) */}
                {idx < strengths.length - 1 && (
                  <div className="d-none d-lg-block mt-4" style={{
                    width: '1px',
                    height: '35px',
                    borderLeft: '2px dotted rgba(162, 124, 55, 0.5)'
                  }}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Positioning Statement Box */}
          <div className="mx-auto p-4 rounded-3 d-flex flex-column flex-md-row align-items-center align-items-md-start"
            style={{
              maxWidth: '850px',
              backgroundColor: '#F8F5EE',
              border: '1px solid rgba(162, 124, 55, 0.3)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>

            {/* Custom Shield & Laurel Icon */}
            <div className="me-md-5 mb-4 mb-md-0 position-relative flex-shrink-0 d-flex align-items-center justify-content-center mt-2" style={{ width: '70px', height: '70px' }}>
              {/* Fake laurel wreaths using border radius and rotation */}
              <div className="position-absolute w-100 h-100 rounded-circle" style={{ border: '2px dashed #A27C37', opacity: 0.6 }}></div>
              <FaShieldAlt size={45} color="#111" className="position-relative z-10" />
              <FaStar size={16} color="#A27C37" className="position-absolute top-50 start-50 translate-middle z-10" style={{ marginTop: '-2px' }} />
            </div>

            <div className="text-center text-md-start">
              <h6 className="inter fw-bold tracking-widest mb-2 uppercase" style={{ color: '#A27C37', fontSize: '0.85rem', letterSpacing: '1.5px' }}>
                POSITIONING STATEMENT
              </h6>
              <p className="inter mb-0 fw-medium" style={{ color: '#1A1A1A', fontSize: '0.95rem', lineHeight: '1.6' }}>
                The HORECA division reflects Sahmora's ability to serve demanding business customers with reliability, product depth, and operational discipline.
              </p>
            </div>
          </div>

        </Container>
      </div>

    </section>
  );
};

export default HorecaDivision;
