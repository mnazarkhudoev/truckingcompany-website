import { Container, Row, Col } from "react-bootstrap";
import { FaCircleCheck, FaTruck, FaShield, FaClock } from "react-icons/fa6";
import aboutImage from "@/assets/img/about/ca-about1.1.png"; // Using existing about image

const AboutUs = () => {
  const features = [
    {
      icon: <FaTruck className="theme-color-3" />,
      title: "Reliable Transportation",
      description: "We provide dependable freight transportation services across regional routes with our modern fleet of trucks."
    },
    {
      icon: <FaShield className="theme-color-3" />,
      title: "Safety First",
      description: "Our commitment to safety is unwavering, with rigorous training programs and regular vehicle maintenance."
    },
    {
      icon: <FaClock className="theme-color-3" />,
      title: "On-Time Delivery",
      description: "We understand the importance of timely deliveries and work hard to meet all scheduled pickup and delivery times."
    }
  ];

  const values = [
    "Over 10 years of experience in the trucking industry",
    "Professional and certified drivers",
    "Modern fleet with advanced safety features",
    "24/7 customer support and tracking",
    "Competitive rates and flexible scheduling",
    "Full insurance coverage for peace of mind"
  ];

  return (
    <section id="about" className="ca-about-section theme-black-bg-3 pt-100 pb-70" style={{margin: 0, backgroundColor: '#000000'}}>
      <Container>
        <div className="ca-about-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            About Iron Bull Trucking
          </h5>
          <h2 className="ca-section-title theme-color-3 fnw-600 pt-16">
            Your Trusted Transportation Partner
          </h2>
          <p className="pt-16 text-white">
            We are a growing trucking company dedicated to providing reliable, safe, and efficient
            <br />
            transportation services for businesses across the region.
          </p>
        </div>

        <Row className="align-items-center mb-60">
          <Col lg={6} md={12}>
            <div className="ca-about-image mb-30">
              <img src={aboutImage} alt="About Iron Bull Trucking" className="img-fluid br-7" />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="ca-about-intro">
              <h3 className="text-white mb-20 fnw-600">Our Story</h3>
              <p className="text-white mb-20">
                Iron Bull Trucking was founded with a simple mission: to provide exceptional transportation 
                services while maintaining the highest standards of safety and professionalism. We understand 
                that your cargo is your business, and we treat it with the care and attention it deserves.
              </p>
              <p className="text-white mb-30">
                Our team of experienced drivers and logistics professionals work around the clock to ensure 
                your freight arrives safely and on time, every time.
              </p>
              
              <h4 className="text-white mb-20 fnw-600">Why Choose Us?</h4>
              <ul className="ca-about-list">
                {values.map((value, index) => (
                  <li key={index} className="mb-10 d-flex align-items-start">
                    <FaCircleCheck className="theme-color-3 me-2 mt-1 flex-shrink-0" />
                    <span className="text-white">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        
        <Row>
          {features.map((feature, index) => (
            <Col key={index} xl={4} lg={4} md={6} sm={12} className="mb-30" data-aos="fade-up" data-aos-duration={800 + (index * 200)}>
              <div className="ca-about-item br-7 h-100">
                <div className="ca-about-content text-center">
                  <div className="ca-about-icon mb-20">
                    {feature.icon}
                  </div>
                  <h4 className="ca-about-title text-white fnw-600 mb-15">{feature.title}</h4>
                  <p className="text-white">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
