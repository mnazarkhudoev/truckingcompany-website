import { Container, Row, Col } from "react-bootstrap";
import { FaDollarSign, FaUsers, FaTrophy, FaCalendarWeek } from "react-icons/fa6";

const Bonuses = () => {
  const bonuses = [
    {
      icon: <FaDollarSign className="theme-color-3" />,
      title: "Safety Bonus",
      description: "Earn additional compensation for maintaining excellent safety records and following all safety protocols during your routes."
    },
    {
      icon: <FaUsers className="theme-color-3" />,
      title: "Referral Bonuses",
      description: "Get rewarded for bringing quality drivers to our team. Earn bonuses for each successful referral who joins Iron Bull Trucking."
    },
    {
      icon: <FaTrophy className="theme-color-3" />,
      title: "Performance Bonus",
      description: "Outstanding performance is recognized and rewarded. Exceed expectations and earn performance-based bonuses."
    },
    {
      icon: <FaCalendarWeek className="theme-color-3" />,
      title: "Paid Weekly",
      description: "Consistent and reliable weekly pay schedule ensures you get paid on time, every time, without delays."
    }
  ];

  return (
    <section id="bonuses" className="ca-bonuses-section theme-black-bg-3 pt-100 pb-70" style={{margin: 0, backgroundColor: '#000000'}}>
      <Container>
        <div className="ca-bonuses-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Driver Benefits
          </h5>
          <h2 className="ca-section-title theme-color-3 fnw-600 pt-16">
            Bonuses & Compensation
          </h2>
          <p className="pt-16 text-white">
            We believe in rewarding our drivers for their hard work and dedication.
            <br />
            Discover the additional benefits and bonuses available to our team members.
          </p>
        </div>
        
        <Row>
          {bonuses.map((bonus, index) => (
            <Col key={index} xl={3} lg={6} md={6} sm={12} className="mb-30" data-aos="fade-up" data-aos-duration={800 + (index * 200)}>
              <div className="ca-bonuses-item br-7 h-100">
                <div className="ca-bonuses-content text-center">
                  <div className="ca-bonuses-icon mb-20">
                    {bonus.icon}
                  </div>
                  <h4 className="ca-bonuses-title text-white fnw-600 mb-15">{bonus.title}</h4>
                  <p className="text-white">{bonus.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-50">
          <Col xl={12} className="text-center">
            <div className="ca-bonuses-cta">
              <h3 className="text-white mb-20 fnw-600">Ready to Start Earning?</h3>
              <p className="text-white mb-30">
                Join Iron Bull Trucking today and start taking advantage of our comprehensive 
                bonus program and competitive compensation package.
              </p>
              <a href="#requirements" className="ca-btn-primary-3 theme-bg-3 text-white br-50" onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#requirements');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}>
                View Requirements
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bonuses;
