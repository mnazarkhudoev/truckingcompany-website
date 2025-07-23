import logo3 from "@/assets/img/logo/ca-logo3.1.png";
import footerShape3 from "@/assets/img/shape/ca-footer-shape3.1.png";
import footer_Shape3_1 from "@/assets/img/shape/cta-shape-3.1.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const footerData = {
  description: "Our global reach, combined with local expertise, ensures that your goods are transported safely, on time.",
  socialLinks: [
    { icon: <FaInstagram style={{ color: "#E1306C" }} />, url: "#" },  // Instagram
    { icon: <FaFacebookF style={{ color: "#1877F2" }} />, url: "#" },   // Facebook
    { icon: <FaLinkedinIn style={{ color: "#0077B5" }} />, url: "#" },   // LinkedIn
    { icon: <FaXTwitter style={{ color: "#1DA1F2" }} />, url: "#" }      // Twitter
  ],
  quickLinks: [
    { text: "Home", url: "/index-1" },
    { text: "Service", url: "/services" },
    { text: "About Us", url: "/about" },
    { text: "Latest News", url: "/blog" },
    { text: "Contact Us", url: "/contact" }
  ],
  otherLinks: [
    { text: "Maintenance", url: "#" },
    { text: "Our Team", url: "#" },
    { text: "Reviews & Awards", url: "#" },
    { text: "Personal", url: "#" },
    { text: "Certifications", url: "#" }
  ],
  subscriptionText: "Subscribe us & receive our latest news & articles",
  copyrightText: "Copyright © 2025 Iron Bull. All Rights Reserved",
  legalLinks: [
    { text: "Terms & Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" }
  ]
};

const Footer = () => {
  return (
    <footer
      className="theme-bg-3"
      style={{ backgroundColor: "#000", color: "#FFC107" }} // Black background, yellow text for headings and links
    >
      <div className="ca-ft-shape p-absolute ft-shape-2">
        <img src={footerShape3} alt="" />
      </div>
      <div className="ca-cta-area p-relative z-index-1">
        <div className="container">
          <div className="ca-cta-shape3 p-absolute d-none d-lg-block">
            <img src={footer_Shape3_1} alt="" />
          </div>
          <Row className="align-items-center">
            <Col lg={6} className="mb-30">
              <div className="ca-cta-content">
                <h2
                  className="ca-section-title cta-title-1 fnw-700"
                  style={{ color: "#f12d21" }} // Yellow title
                >
                  Join Us Today And let Us Help You To Grow Your Business.
                </h2>
              </div>
            </Col>
            <Col lg={6} className="mb-30">
              <div className="ca-btn-cta-3 text-end">
                <Link
                  to="/contact"
                  className="ca-btn-primary-3 w-bg"
                  style={{
                    backgroundColor: "#000", // Button black background
                    color: "#f12d21", // Yellow text
                    textDecoration: "none"
                  }}
                >
                  Get Started{" "}
                  <span>
                    <FaAngleRight size={18} />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="b-bottom pt-48"></div>
        </div>
      </div>
      <div className="ca-footer-area">
        <Container>
          <div className="ca-ft-area w-bg" style={{ backgroundColor: "#000", color: "#FFC107" }}>
            <Row>
              <Col xl={4} md={6} className="mb-30">
                <div className="ca-footer widget-1">
                  <div className="ca-ft-logo">
                    <Link to="/index-1">
                      <img src={logo3} alt="" />
                    </Link>
                  </div>
                  <div className="ca-ft-content ca-ft-content-3 mb-24">
                    <p className="pt-16" style={{ color: "#fff" }}>
                      {footerData.description}
                    </p>
                  </div>
                  <div className="ca-footer-social ca-footer-social-3">
                    <ul>
                      {footerData.socialLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.url}>
                            {link.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xl md={6} className="mb-30">
                <div className="ca-footer widget-2">
                  <h4 className="ca-title fnw-700 pb-24" style={{ color: "#f12d21" }}>
                    Quick Links
                  </h4>
                  <div className="ca-footer-menu ca-footer-menu-3">
                    <ul>
                      {footerData.quickLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.url} style={{ color: "#f12d21" }}>
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xl md={6} className="mb-30">
                <div className="ca-footer widget-3">
                  <h4 className="ca-title fnw-700 pb-24" style={{ color: "#f12d21" }}>
                    Other Links
                  </h4>
                  <div className="ca-footer-menu ca-footer-menu-3">
                    <ul>
                      {footerData.otherLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.url} style={{ color: "#f12d21" }}>
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xl={4} md={6} className="mb-30">
                <div className="ca-footer widget-4">
                  <h4 className="ca-title fnw-700 pb-24" style={{ color: "#f12d21" }}>
                    Subscribe
                  </h4>
                  <div className="ca-ft-content">
                    <p className="pb-32" style={{ color: "#fff" }}>
                      {footerData.subscriptionText}
                    </p>
                  </div>
                  <div className="ca-footer-email-sub ca-footer-email-sub-3">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Email Address.."
                        style={{
                          backgroundColor: "#333",
                          borderColor: "#FFC107",
                          color: "#E8D8D0" // The input text remains yellow; placeholder will be white via the CSS rule
                        }}
                      />
                    </form>
                    <button
                      className="ca-btn-primary ca-btn-primary-3 br-50"
                      type="submit"
                      value="submit"
                      style={{
                        backgroundColor: "#000",
                        color: "#f12d21",
                        border: "1px solid rgb(243, 237, 237)"
                      }}
                    >
                      Subscribe Now{" "}
                      <span>
                        <FaAngleRight size={18} />
                      </span>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div className="copy-right-border border-1" style={{ borderColor: "#E8D8D0" }}></div>
              </Col>
              <div className="col-lg-6">
                <p className="copry-right-text pt-24" style={{ color: "#fff" }}>
                  {footerData.copyrightText}
                </p>
              </div>
              <Col lg={6}>
                <div className="copy-right-menu pt-24">
                  <ul>
                    {footerData.legalLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url} style={{ color: "#f12d21" }}>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;