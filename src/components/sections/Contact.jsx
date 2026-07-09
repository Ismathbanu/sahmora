import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-premium-white section-padding">
      <Container className="container-luxury">
        <Row className="g-5 align-items-center">
          <Col lg={5} className="pe-lg-5">
            <h2 className="cormorant display-4 text-matte-black fw-bold mb-4">Connect With Sahmora</h2>
            <p className="inter text-muted mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Explore investment opportunities, discuss strategic partnerships, or learn more about the Talbar Gold & Diamond UAE launch.
            </p>
            
            <div className="mb-4">
              <h6 className="inter text-dark fw-bold text-uppercase tracking-widest mb-2" style={{ fontSize: '0.8rem' }}>Corporate Headquarters</h6>
              <p className="inter text-muted mb-0">Dubai Design District<br/>PO Box 12345, Dubai, UAE</p>
            </div>
            
            <div className="mb-4">
              <h6 className="inter text-dark fw-bold text-uppercase tracking-widest mb-2" style={{ fontSize: '0.8rem' }}>Direct Inquiries</h6>
              <p className="inter text-muted mb-0">invest@sahmora.com<br/>+971 4 123 4567</p>
            </div>

            {/* Abstract Gold Illustration */}
            <div className="mt-5 pt-3">
               <svg viewBox="0 0 200 100" width="150" style={{ fill: 'none', stroke: 'var(--accent-luxury-gold)', strokeWidth: 1 }}>
                 <path d="M0,50 Q50,0 100,50 T200,50" />
                 <path d="M0,60 Q50,10 100,60 T200,60" opacity="0.5" />
                 <path d="M0,70 Q50,20 100,70 T200,70" opacity="0.2" />
               </svg>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="bg-white p-5 rounded-4 shadow-lg border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
              <h4 className="cormorant text-matte-black fw-bold mb-4">Inquiry Form</h4>
              <Form>
                <Row className="g-4 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="inter text-muted" style={{ fontSize: '0.8rem' }}>Full Name</Form.Label>
                      <Form.Control type="text" className="border-0 border-bottom rounded-0 bg-transparent px-0 py-2 shadow-none" placeholder="John Doe" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="inter text-muted" style={{ fontSize: '0.8rem' }}>Company / Organization</Form.Label>
                      <Form.Control type="text" className="border-0 border-bottom rounded-0 bg-transparent px-0 py-2 shadow-none" placeholder="Investment Corp" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="inter text-muted" style={{ fontSize: '0.8rem' }}>Email Address</Form.Label>
                      <Form.Control type="email" className="border-0 border-bottom rounded-0 bg-transparent px-0 py-2 shadow-none" placeholder="john@example.com" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="inter text-muted" style={{ fontSize: '0.8rem' }}>Phone Number</Form.Label>
                      <Form.Control type="tel" className="border-0 border-bottom rounded-0 bg-transparent px-0 py-2 shadow-none" placeholder="+971 50 123 4567" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="inter text-muted" style={{ fontSize: '0.8rem' }}>Message / Area of Interest</Form.Label>
                      <Form.Control as="textarea" rows={3} className="border-0 border-bottom rounded-0 bg-transparent px-0 py-2 shadow-none" placeholder="How can we partner with you?" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                    </Form.Group>
                  </Col>
                </Row>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button type="button" className="btn btn-dark w-100 py-3 rounded-pill inter text-uppercase tracking-widest fw-bold" style={{ backgroundColor: 'var(--theme-matte-black)', border: 'none', fontSize: '0.9rem' }}>
                    Submit Inquiry
                  </button>
                </motion.div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
