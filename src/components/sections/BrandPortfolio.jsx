import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { BsTag } from 'react-icons/bs';

const BrandPortfolio = () => {
  const internationalBrands = [
    {
      name: "Sakthi Masala",
      country: "India",
      desc: "Trusted Indian spices and food products.",
      img: "/product-spices.png"
    },
    {
      name: "Grendora Coffee",
      country: "Poland",
      desc: "European coffee brand positioned for cafés, hospitality, and retail.",
      img: "/product-coffee.png"
    },
    {
      name: "Sunstar Juice",
      country: "Iran",
      desc: "Beverage brand serving retail and food service demand.",
      img: "/product-juice.png"
    }
  ];

  const proprietaryBrands = [
    {
      name: "Gremora",
      type: "SAUCE",
      country: "Proprietary",
      desc: "Sauces, salad dressings, ketchup, and food service-ready products.",
      img: "/product-sauces.png"
    },
    {
      name: "Briola",
      type: "OLIVE OIL",
      country: "Proprietary",
      desc: "Premium olive oil for hospitality, retail, and food service customers.",
      img: "/product-olive-oil.png"
    }
  ];

  return (
    <section id="portfolio" className="section-padding position-relative" style={{ backgroundColor: '#060A10', minHeight: '100vh', overflow: 'hidden' }}>

      {/* Background World Map Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 pointer-events-none" style={{
        backgroundImage: 'url(/golden-map-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        opacity: 0.35
      }}></div>

      <Container className="container-luxury position-relative z-10" style={{ maxWidth: '1400px' }}>


        {/* Top Section */}
        <Row className="mb-5 pb-4">
          <Col lg={8} className="mb-4">
            {/* Kicker */}
            <div className="d-flex align-items-center mb-4">
              <span className="inter text-uppercase fw-bold" style={{ color: '#C8A64E', fontSize: '0.8rem', letterSpacing: '2px' }}>
                BRAND & DISTRIBUTION PORTFOLIO
              </span>
              <div className="ms-3 d-flex align-items-center">
                <div style={{ width: '4px', height: '4px', backgroundColor: '#C8A64E', transform: 'rotate(45deg)' }}></div>
                <div style={{ width: '60px', height: '1px', backgroundColor: '#C8A64E' }}></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="cormorant fw-bold mb-4" style={{ fontSize: '3.8rem', lineHeight: '1.1' }}>
              <span className="text-white">A Diversified</span><br />
              <span style={{ color: '#C8A64E' }}>Business Ecosystem</span>
            </h2>

            {/* Paragraph */}
            <p className="inter" style={{ color: '#A0AAB5', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '700px' }}>
              Sahmora's current business ecosystem includes international distribution brands, proprietary food brands, and a strong HORECA supply division.
            </p>
          </Col>
        </Row>

        {/* Bottom Section - Cards */}
        <Row className="g-4">

          {/* International Brand Portfolio */}
          <Col lg={7}>
            <div className="h-100 rounded-4 p-4 p-md-5" style={{ backgroundColor: '#090D14', border: '1px solid rgba(255,255,255,0.05)' }}>

              {/* Card Header */}
              <div className="d-flex align-items-center mb-5">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(200, 166, 78, 0.1)', border: '1px solid rgba(200, 166, 78, 0.3)' }}>
                  <HiOutlineGlobeAlt size={22} color="#C8A64E" />
                </div>
                <h3 className="cormorant fw-bold mb-0 text-white" style={{ fontSize: '2rem' }}>
                  International Brand Portfolio
                </h3>
              </div>

              {/* Products Grid */}
              <Row className="g-3">
                {internationalBrands.map((brand, idx) => (
                  <Col md={4} key={idx}>
                    <div className="h-100 rounded-3 p-3 d-flex flex-column" style={{ backgroundColor: '#0B101A', border: '1px solid rgba(255,255,255,0.03)' }}>

                      {/* Fake Logo Text Overlay */}
                      <div className="text-center mb-3 pt-2">
                        <span className="cormorant fw-bold text-uppercase" style={{ color: '#FFF', fontSize: '1.2rem', letterSpacing: '1px' }}>{brand.name.split(' ')[0]}</span><br />
                        <span className="inter fw-bold text-uppercase" style={{ color: '#888', fontSize: '0.6rem', letterSpacing: '2px' }}>{brand.name.split(' ')[1] || 'BRAND'}</span>
                      </div>

                      <div className="mb-4 rounded-3 overflow-hidden position-relative" style={{ height: '160px', backgroundColor: '#060A10' }}>
                        <img src={brand.img} alt={brand.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                        {/* Gradient fade at bottom of image */}
                        <div className="position-absolute bottom-0 start-0 w-100 h-50 pointer-events-none" style={{ background: 'linear-gradient(to top, #0B101A, transparent)' }}></div>
                      </div>

                      <div className="mt-auto">
                        <h5 className="inter fw-semibold mb-1" style={{ color: '#C8A64E', fontSize: '1.05rem' }}>{brand.name}</h5>
                        <p className="inter mb-3" style={{ color: '#FFFFFF', fontSize: '0.85rem' }}>{brand.country}</p>
                        <p className="inter mb-0" style={{ color: '#7E8B99', fontSize: '0.85rem', lineHeight: '1.5' }}>{brand.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

            </div>
          </Col>

          {/* Proprietary Brands */}
          <Col lg={5}>
            <div className="h-100 rounded-4 p-4 p-md-5" style={{ backgroundColor: '#090D14', border: '1px solid rgba(255,255,255,0.05)' }}>

              {/* Card Header */}
              <div className="d-flex align-items-center mb-5">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(200, 166, 78, 0.1)', border: '1px solid rgba(200, 166, 78, 0.3)' }}>
                  <BsTag size={20} color="#C8A64E" />
                </div>
                <h3 className="cormorant fw-bold mb-0 text-white" style={{ fontSize: '2rem' }}>
                  Proprietary Brands
                </h3>
              </div>

              {/* Products Grid */}
              <Row className="g-3">
                {proprietaryBrands.map((brand, idx) => (
                  <Col sm={6} key={idx}>
                    <div className="h-100 rounded-3 p-3 d-flex flex-column" style={{ backgroundColor: '#0B101A', border: '1px solid rgba(255,255,255,0.03)' }}>

                      {/* Fake Logo Text Overlay */}
                      <div className="text-center mb-3 pt-2">
                        <span className="cormorant fw-bold text-uppercase" style={{ color: '#FFF', fontSize: '1.2rem', letterSpacing: '2px' }}>{brand.name}</span><br />
                        <span className="inter fw-bold text-uppercase" style={{ color: '#888', fontSize: '0.6rem', letterSpacing: '2px' }}>{brand.type}</span>
                      </div>

                      <div className="mb-4 rounded-3 overflow-hidden position-relative" style={{ height: '160px', backgroundColor: '#060A10' }}>
                        <img src={brand.img} alt={brand.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                        {/* Gradient fade at bottom of image */}
                        <div className="position-absolute bottom-0 start-0 w-100 h-50 pointer-events-none" style={{ background: 'linear-gradient(to top, #0B101A, transparent)' }}></div>
                      </div>

                      <div className="mt-auto">
                        <h5 className="inter fw-semibold mb-2" style={{ color: '#C8A64E', fontSize: '1.05rem' }}>{brand.name}</h5>
                        <p className="inter mb-0" style={{ color: '#7E8B99', fontSize: '0.85rem', lineHeight: '1.5' }}>{brand.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default BrandPortfolio;
