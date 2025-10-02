import { Container, Row, Col } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import requirementsImage from "@/assets/img/about/ca-about-4.1.png"; // Using existing truck image

const Requirements = () => {
  const requirements = [
    {
      title: "Age Requirements",
      items: [
        "Must be at least 21 years old for interstate driving",
        "Must be at least 18 years old for intrastate driving"
      ]
    },
    {
      title: "License & Documentation",
      items: [
        "Valid Commercial Driver's License (CDL) Class A",
        "Clean driving record for the past 3 years",
        "DOT Medical Certificate",
        "Valid Social Security Number",
        "Proof of eligibility to work in the United States"
      ]
    },
    {
      title: "Experience",
      items: [
        "Minimum 2 years of verifiable OTR experience",
       
        "Clean employment history"
      ]
    },
    {
      title: "Background & Safety",
      items: [
        "Pass pre-employment drug screening",
        "Submit to random drug and alcohol testing",
        "Clean criminal background check",
        "No more than 2 moving violations in the past 3 years",
        "No DUI/DWI convictions in the past 5 years"
      ]
    },
    {
      title: "Physical Requirements",
      items: [
        "Ability to lift up to 50 pounds",
        "Ability to sit for extended periods",
        "Good vision and hearing",
        "Pass DOT physical examination"
      ]
    }
  ];

  return (
    <section id="requirements" className="ca-requirements-section theme-black-bg-3 pt-100 pb-70" style={{margin: 0, backgroundColor: '#000000'}}>
      <Container>
        <div className="ca-requirements-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Join Our Team
          </h5>
          <h2 className="ca-section-title theme-color-3 fnw-600 pt-16">
            Driver Requirements & Qualifications
          </h2>
          <p className="pt-16 text-white">
            We maintain high standards to ensure safety and professionalism.
            <br />
            Review our requirements below to see if you qualify to join our team.
          </p>
        </div>

        <Row className="align-items-center mb-60">
          <Col lg={6} md={12}>
            <div className="ca-requirements-image mb-30">
              <img src={requirementsImage} alt="Driver Requirements" className="img-fluid br-7" />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="ca-requirements-intro">
              <h3 className="text-white mb-20 fnw-600">Professional Standards</h3>
              <p className="text-white mb-20">
                Our commitment to excellence starts with hiring qualified, professional drivers who meet our strict standards for safety, experience, and reliability.
              </p>
              <p className="text-white">
                Every member of our team represents Iron Bull Trucking's dedication to quality service and safe transportation.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row>
          {requirements.map((section, index) => (
            <Col key={index} xl={4} lg={4} md={6} sm={12} className="mb-30" data-aos="fade-up" data-aos-duration={800 + (index * 200)}>
              <div className="ca-requirements-item br-7 h-100">
                <div className="ca-requirements-content">
                  <h4 className="ca-requirements-title text-white fnw-600 mb-15">{section.title}</h4>
                  <ul className="ca-requirements-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-8 d-flex align-items-start">
                        <FaCircleCheck className="theme-color-3 me-2 mt-1 flex-shrink-0" />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Requirements;
