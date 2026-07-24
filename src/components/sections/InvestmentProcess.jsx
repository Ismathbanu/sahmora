import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  HiOutlineSearch, 
  HiOutlineClipboardList, 
  HiOutlineCurrencyDollar, 
  HiOutlineCog, 
  HiOutlineMap, 
  HiOutlineTrendingUp 
} from 'react-icons/hi';

const InvestmentProcess = () => {
  const stages = [
    {
      num: '01',
      title: 'Identify Opportunities',
      desc: 'Research markets and identify businesses with strong potential.',
      icon: <HiOutlineSearch size={40} />
    },
    {
      num: '02',
      title: 'Evaluate Potential',
      desc: 'Conduct in-depth business evaluation and strategic due diligence.',
      icon: <HiOutlineClipboardList size={40} />
    },
    {
      num: '03',
      title: 'Strategic Investment',
      desc: 'Invest with a long-term value creation roadmap and structured capital.',
      icon: <HiOutlineCurrencyDollar size={40} />
    },
    {
      num: '04',
      title: 'Business Transformation',
      desc: 'Enhance operations, governance, and organizational capabilities.',
      icon: <HiOutlineCog size={40} />
    },
    {
      num: '05',
      title: 'Market Expansion',
      desc: 'Support geographical expansion and commercial profitability.',
      icon: <HiOutlineMap size={40} />
    },
    {
      num: '06',
      title: 'Long-Term Growth',
      desc: 'Build enduring businesses with lasting enterprise value.',
      icon: <HiOutlineTrendingUp size={40} />
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FAF8F3' }}>
      <Container style={{ maxWidth: '1400px' }} className="py-5">
        
        {/* Header */}
        <div className="text-center mb-5 pb-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
            <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
              OUR INVESTMENT PROCESS
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
          </div>
          <h2 className="cormorant fw-bold" style={{ fontSize: '3rem', color: '#1A1A1A' }}>
            Structured for Success
          </h2>
        </div>

        {/* Process Grid */}
        <Row className="g-4 g-lg-5">
          {stages.map((stage, idx) => (
            <Col md={6} lg={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-100 p-4 p-xl-5 bg-white rounded-4 position-relative"
                style={{
                  border: '1px solid rgba(200, 166, 78, 0.1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}
              >
                {/* Large Background Number */}
                <div className="position-absolute cormorant fw-bold" style={{
                  top: '10px',
                  right: '20px',
                  fontSize: '5rem',
                  color: 'rgba(200, 166, 78, 0.08)',
                  lineHeight: '1',
                  zIndex: 0,
                  userSelect: 'none'
                }}>
                  {stage.num}
                </div>

                <div className="position-relative z-10">
                  {/* Icon */}
                  <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#FAF8F3',
                    color: '#C8A64E',
                    border: '1px solid rgba(200, 166, 78, 0.3)'
                  }}>
                    {stage.icon}
                  </div>
                  
                  {/* Content */}
                  <h4 className="cormorant fw-bold mb-3" style={{ color: '#1A1A1A', fontSize: '1.4rem' }}>
                    <span style={{ color: '#C8A64E', marginRight: '8px' }}>{stage.num}.</span>
                    {stage.title}
                  </h4>
                  <p className="inter mb-0" style={{ color: '#5A5A5A', fontSize: '1rem', lineHeight: '1.6' }}>
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        
      </Container>
    </section>
  );
};

export default InvestmentProcess;
