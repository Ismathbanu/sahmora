import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLandmark, FaMapMarkedAlt, FaChartLine, FaCrown } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Vision2030 = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.vision-card');
    
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  const milestones = [
    { 
      year: '2024', 
      title: 'FOUNDATION\nESTABLISHED', 
      icon: <FaLandmark />,
      outlets: '1 Outlet',
      gold: '15 Kg Gold Sold',
      revenue: 'AED 7.5M Revenue'
    },
    { 
      year: '2026', 
      title: 'UAE EXPANSION\nBEGINS', 
      icon: <FaMapMarkedAlt />,
      outlets: '2 Outlets',
      gold: '42 Kg Gold Sold',
      revenue: 'AED 21M Revenue'
    },
    { 
      year: '2028', 
      title: 'REGIONAL GROWTH\nPHASE', 
      icon: <FaChartLine />,
      outlets: '8 Outlets',
      gold: '800 Kg Gold Sold',
      revenue: 'AED 400M Revenue'
    },
    { 
      year: '2030', 
      title: 'MARKET LEADERSHIP\nVISION', 
      icon: <FaCrown />,
      outlets: '14 Outlets',
      gold: '1,400 Kg Gold Sold',
      revenue: 'AED 700M Revenue'
    },
  ];

  return (
    <section id="vision" className="position-relative overflow-hidden section-padding" style={{ backgroundColor: '#050505', color: '#fff' }} ref={sectionRef}>
      {/* Background Particles/Stars simulation */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(200, 166, 78, 0.05) 0%, transparent 80%)',
        zIndex: 0
      }}></div>

      <Container className="container-luxury position-relative pt-4 pb-5" style={{ zIndex: 10 }}>
        {/* Top Headings */}
        <div className="text-center mb-5 pb-3">
          <h2 className="cormorant text-gold text-uppercase fw-bold mb-2" style={{ fontSize: '2.2rem', letterSpacing: '1px' }}>
            VISION 2030: BUILDING A AED 700 MILLION JEWELLERY GROWTH STORY
          </h2>
          <p className="inter text-white-50" style={{ fontSize: '1rem' }}>
            From a trusted Indian jewellery foundation to a premium multi-outlet retail expansion across the UAE and beyond.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="position-relative mt-5 pt-3 mb-5">
          {/* Continuous Horizontal Gold Line */}
          <div className="position-absolute top-50 start-0 w-100 translate-middle-y d-none d-lg-block" style={{ height: '2px', background: 'linear-gradient(90deg, rgba(200,166,78,0) 0%, rgba(200,166,78,1) 50%, rgba(200,166,78,0) 100%)', boxShadow: '0 0 10px rgba(200,166,78,0.8)', zIndex: 1 }}></div>

          <Row className="g-4 position-relative" style={{ zIndex: 2 }}>
            {milestones.map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="vision-card text-center h-100 position-relative p-4 rounded-4" style={{ 
                  backgroundColor: 'rgba(10, 10, 10, 0.8)', 
                  border: '1px solid rgba(200,166,78,0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                  {/* Top Section */}
                  <div className="mb-4" style={{ minHeight: '110px' }}>
                    <div className="text-gold fs-4 mb-2">{item.icon}</div>
                    <h3 className="cormorant text-gold fw-bold mb-1" style={{ fontSize: '1.5rem' }}>{item.year}</h3>
                    <p className="inter text-gold fw-bold mb-0 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px', whiteSpace: 'pre-line' }}>{item.title}</p>
                  </div>
                  
                  {/* The Glowing Pin / Dot (aligned with horizontal line) */}
                  <div className="my-3 d-flex justify-content-center position-relative">
                    <div className="rounded-circle bg-white" style={{ 
                      width: '12px', height: '12px', 
                      boxShadow: '0 0 15px 5px rgba(255,255,255,0.4), 0 0 5px 2px rgba(200,166,78,0.8)',
                      position: 'relative',
                      zIndex: 3
                    }}>
                      <div className="position-absolute top-100 start-50 translate-middle-x bg-white" style={{ width: '2px', height: '15px', opacity: 0.5 }}></div>
                    </div>
                  </div>

                  {/* Bottom Stats Section */}
                  <div className="mt-4 pt-2">
                    <p className="inter text-white-50 mb-1" style={{ fontSize: '0.85rem' }}>{item.outlets}</p>
                    <p className="inter text-white-50 mb-1" style={{ fontSize: '0.85rem' }}>{item.gold}</p>
                    <p className="inter text-white-50 mb-0" style={{ fontSize: '0.85rem' }}>{item.revenue}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-5 pt-4">
          <p className="inter text-white-50 mx-auto" style={{ fontSize: '0.9rem', maxWidth: '800px', lineHeight: '1.6' }}>
            Talbar's 2030 vision is to establish a trusted gold and diamond retail network serving Indian expatriates, GCC families, luxury jewellery buyers, wedding customers, and long-term gold-focused consumers.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Vision2030;
