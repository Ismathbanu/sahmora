import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaHandshake, FaRegFileAlt, FaUser, FaEnvelope, FaPhoneAlt, FaBuilding, FaRegCommentDots, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding position-relative" style={{ backgroundColor: '#050709', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Background Subtle Gold Swooshes */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 pointer-events-none" style={{ opacity: 0.15 }}>
        <svg viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M-100,800 C300,700 400,200 800,-100" stroke="#C8A64E" strokeWidth="1" />
          <path d="M-100,750 C250,650 350,150 750,-100" stroke="#C8A64E" strokeWidth="0.5" />
          <path d="M-100,700 C200,600 300,100 700,-100" stroke="#C8A64E" strokeWidth="0.2" />

          <path d="M600,900 C1000,700 1100,300 1500,0" stroke="#C8A64E" strokeWidth="1" />
          <path d="M650,900 C1050,650 1150,250 1550,-50" stroke="#C8A64E" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1300px' }}>
        <Row className="align-items-center">

          {/* Left Column (Content & Address) */}
          <Col lg={5} className="pe-lg-5 mb-5 mb-lg-0">
            {/* Kicker */}
            {/* <h6 className="inter fw-bold tracking-widest mb-3 uppercase" style={{ color: '#D29C44', fontSize: '0.85rem', letterSpacing: '2px' }}>
              FINAL CALL TO ACTION
            </h6> */}

            {/* Heading */}
            <h2 className="cormorant fw-bold mb-4 lh-sm" style={{ fontSize: '3.5rem', color: '#FFFFFF' }}>
              Let's Build the Next<br />
              <span style={{ color: '#D29C44' }}>Growth Story</span>
            </h2>

            {/* Divider */}
            <div className="d-flex align-items-center mb-4">
              <div style={{ width: '40px', height: '1px', backgroundColor: '#D29C44' }}></div>
              <div className="mx-2" style={{ width: '6px', height: '6px', backgroundColor: '#D29C44', transform: 'rotate(45deg)' }}></div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#D29C44' }}></div>
            </div>

            {/* Paragraph */}
            <p className="inter mb-5" style={{ color: '#A0AAB5', fontSize: '1rem', lineHeight: '1.7', maxWidth: '400px' }}>
              Partner with Sahmora Investment LLC to scale high-potential brands across the UAE and GCC.
            </p>

            {/* Address Details */}
            <div className="mb-5">
              <h5 className="cormorant fw-bold mb-2" style={{ color: '#D29C44', fontSize: '1.4rem' }}>Sahmora Investments LLC</h5>
              <p className="inter mb-1" style={{ color: '#E0E0E0', fontSize: '0.95rem' }}>DIRC Complex, W5-E.5</p>
              <p className="inter mb-1" style={{ color: '#E0E0E0', fontSize: '0.95rem' }}>Dubai Investment Park 2</p>
              <p className="inter mb-4" style={{ color: '#E0E0E0', fontSize: '0.95rem' }}>Dubai, United Arab Emirates</p>
              <p className="inter mb-1 fw-medium" style={{ color: '#FFFFFF', fontSize: '0.95rem' }}><span style={{ color: '#A0AAB5', fontWeight: '400' }}>Landline:</span> +971 4 276 6331</p>
              <p className="inter mb-0 fw-medium" style={{ color: '#FFFFFF', fontSize: '0.95rem' }}><span style={{ color: '#A0AAB5', fontWeight: '400' }}>Landline:</span> +971 4 880 5504</p>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn rounded-2 d-flex align-items-center justify-content-center inter fw-bold uppercase"
                style={{ backgroundColor: '#D29C44', color: '#111', padding: '14px 24px', border: 'none', fontSize: '0.8rem', letterSpacing: '1px' }}>
                <FaHandshake className="me-2 fs-5" /> PARTNER WITH US
              </button>
              <button className="btn rounded-2 d-flex align-items-center justify-content-center inter fw-bold uppercase text-start"
                style={{ backgroundColor: 'transparent', color: '#D29C44', padding: '12px 24px', border: '1px solid rgba(210, 156, 68, 0.4)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                <FaRegFileAlt className="me-3 fs-4" /> <span style={{ lineHeight: '1.2' }}>REQUEST INVESTMENT<br />DETAILS</span>
              </button>
            </div>
          </Col>

          {/* Middle Divider */}
          <Col lg={1} className="d-none d-lg-flex justify-content-center h-100">
            <div style={{ width: '1px', height: '400px', backgroundColor: 'rgba(210, 156, 68, 0.2)' }}></div>
          </Col>

          {/* Right Column (Form) */}
          <Col lg={6}>
            <Form>
              <Row className="g-3 mb-4">
                <Col md={6}>
                  <div className="position-relative">
                    <FaUser className="position-absolute" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0AAB5' }} />
                    <Form.Control type="text" placeholder="Name" className="bg-transparent text-white shadow-none inter form-control-luxury"
                      style={{ border: '1px solid rgba(210, 156, 68, 0.3)', borderRadius: '6px', padding: '14px 15px 14px 45px', backgroundColor: '#0A0D12' }} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="position-relative">
                    <FaEnvelope className="position-absolute" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0AAB5' }} />
                    <Form.Control type="email" placeholder="Email" className="bg-transparent text-white shadow-none inter form-control-luxury"
                      style={{ border: '1px solid rgba(210, 156, 68, 0.3)', borderRadius: '6px', padding: '14px 15px 14px 45px', backgroundColor: '#0A0D12' }} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="position-relative">
                    <FaPhoneAlt className="position-absolute" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0AAB5' }} />
                    <Form.Control type="tel" placeholder="Phone" className="bg-transparent text-white shadow-none inter form-control-luxury"
                      style={{ border: '1px solid rgba(210, 156, 68, 0.3)', borderRadius: '6px', padding: '14px 15px 14px 45px', backgroundColor: '#0A0D12' }} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="position-relative">
                    <FaBuilding className="position-absolute" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0AAB5' }} />
                    <Form.Control type="text" placeholder="Company" className="bg-transparent text-white shadow-none inter form-control-luxury"
                      style={{ border: '1px solid rgba(210, 156, 68, 0.3)', borderRadius: '6px', padding: '14px 15px 14px 45px', backgroundColor: '#0A0D12' }} />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="position-relative">
                    <FaRegCommentDots className="position-absolute" style={{ left: '16px', top: '16px', color: '#A0AAB5' }} />
                    <Form.Control as="textarea" rows={5} placeholder="Message" className="bg-transparent text-white shadow-none inter form-control-luxury"
                      style={{ border: '1px solid rgba(210, 156, 68, 0.3)', borderRadius: '6px', padding: '14px 15px 14px 45px', backgroundColor: '#0A0D12' }} />
                  </div>
                </Col>
              </Row>

              {/* Submit Button */}
              <button type="button" className="btn w-100 rounded-2 d-flex align-items-center justify-content-center inter fw-bold uppercase"
                style={{ backgroundColor: '#D29C44', color: '#FFF', padding: '16px', border: 'none', letterSpacing: '2px', fontSize: '0.9rem' }}>
                SUBMIT MESSAGE <FaPaperPlane className="ms-2" />
              </button>
            </Form>

            {/* Custom CSS for focus states since we can't easily inline pseudoclasses */}
            <style>
              {`
                .form-control-luxury::placeholder {
                  color: #A0AAB5 !important;
                  opacity: 1;
                }
                .form-control-luxury:focus {
                  border-color: #D29C44 !important;
                  box-shadow: 0 0 0 0.25rem rgba(210, 156, 68, 0.15) !important;
                  background-color: #0A0D12 !important;
                  color: #FFF !important;
                }
              `}
            </style>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;
