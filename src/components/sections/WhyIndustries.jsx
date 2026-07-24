import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  HiOutlineTrendingUp, 
  HiOutlineBadgeCheck, 
  HiOutlineShieldCheck, 
  HiOutlineLightBulb, 
  HiOutlineCollection,
  HiOutlineSparkles
} from 'react-icons/hi';

const WhyIndustries = () => {
  const reasons = [
    {
      title: 'Growing\nDemand',
      icon: <HiOutlineTrendingUp size={32} />
    },
    {
      title: 'Market\nLeadership',
      icon: <HiOutlineBadgeCheck size={32} />
    },
    {
      title: 'Operational\nStrength',
      icon: <HiOutlineShieldCheck size={32} />
    },
    {
      title: 'Innovation',
      icon: <HiOutlineLightBulb size={32} />
    },
    {
      title: 'Scalable Business\nModels',
      icon: <HiOutlineCollection size={32} />
    },
    {
      title: 'Long-Term Value\nCreation',
      icon: <HiOutlineSparkles size={32} />
    }
  ];

  return (
    <section className="section-padding position-relative overflow-hidden" style={{ 
      backgroundColor: '#050400', // Very dark gold/black
      backgroundImage: "url('/uae-glowing-map.png')", // Dark theme Dubai business network
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Dark golden gradient overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        background: 'linear-gradient(90deg, rgba(10,8,0,1) 0%, rgba(15,10,0,0.9) 40%, rgba(200,166,78,0.2) 100%)',
        zIndex: 1
      }}></div>

      <Container className="position-relative z-10" style={{ maxWidth: '1200px' }}>
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
            <span className="inter fw-bold mx-3 text-uppercase" style={{ fontSize: '0.85rem', color: '#C8A64E', letterSpacing: '2px' }}>
              WHY THESE INDUSTRIES?
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A64E' }}></div>
          </div>
          <h2 className="cormorant fw-bold" style={{ fontSize: '3rem', color: '#ffffff' }}>
            Strategic Focus
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="position-relative mt-5 pt-3 w-100">
          
          {/* Dashed Gold Line (Hidden on small screens where it wraps) */}
          <div className="position-absolute d-none d-lg-block" style={{
            top: '45px', // Center of the 90px circles
            left: '5%',
            right: '5%',
            height: '0',
            borderTop: '1px dashed rgba(200, 166, 78, 0.5)',
            zIndex: 1
          }}></div>

          <div className="d-flex flex-row flex-nowrap overflow-auto justify-content-lg-between pb-4 custom-scrollbar" style={{ gap: '2rem' }}>
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="d-flex flex-column align-items-center position-relative z-10 flex-shrink-0 mx-auto mx-lg-0"
                style={{ width: '150px' }}
              >
                {/* Circle Icon */}
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{
                  width: '90px',
                  height: '90px',
                  border: '1px solid rgba(200, 166, 78, 0.6)',
                  backgroundColor: '#0a0a0a',
                  color: '#C8A64E',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(200, 166, 78, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(200, 166, 78, 0.6)';
                }}
                >
                  {reason.icon}
                </div>
                
                {/* Title */}
                <h5 className="inter fw-medium text-center m-0" style={{ 
                  color: '#ffffff', 
                  fontSize: '0.95rem',
                  lineHeight: '1.4',
                  whiteSpace: 'pre-line'
                }}>
                  {reason.title}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(200, 166, 78, 0.3);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(200, 166, 78, 0.6);
          }
        `}</style>
      </Container>
    </section>
  );
};

export default WhyIndustries;
