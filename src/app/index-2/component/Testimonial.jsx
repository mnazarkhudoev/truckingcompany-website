import quoteIcon from "@/assets/img/icon/ca-test-2-qu.svg";
import { useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { default as testimonialImage1, default as testimonialImage2, default as testimonialImage3, default as testimonialImage4, default as testimonialImage5 } from "@/assets/img/testimonial/testimonial-2.1.png";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
const testimonialsData = [{
  image: testimonialImage1,
  quote: "“Our clients' satisfaction is the cornerstone of our success. We take immense pride in the positive feedback we receive from businesses across various industries.”",
  name: "Sunil Narine",
  designation: "Happy Client"
}, {
  image: testimonialImage2,
  quote: "“Our clients' satisfaction is the cornerstone of our success. We take immense pride in the positive feedback we receive from businesses across various industries.”",
  name: "Jane Doe",
  designation: "Satisfied Customer"
}, {
  image: testimonialImage3,
  quote: "“Our clients' satisfaction is the cornerstone of our success. We take immense pride in the positive feedback we receive from businesses across various industries.”",
  name: "Robert Smith",
  designation: "Client"
}, {
  image: testimonialImage4,
  quote: "“Our clients' satisfaction is the cornerstone of our success. We take immense pride in the positive feedback we receive from businesses across various industries.”",
  name: "Alice Johnson",
  designation: "Loyal Client"
}, {
  image: testimonialImage5,
  quote: "“Our clients' satisfaction is the cornerstone of our success. We take immense pride in the positive feedback we receive from businesses across various industries.”",
  name: "Michael Brown",
  designation: "Valued Customer"
}];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    beforeChange: (_current, next) => {
      setActiveIndex(next);
    },
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return <section className="ca-testimonial2 theme-black-bg-2 pt-100 pb-70">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="ca-testimonial-content ca-sec-content-2 mb-60 aos-init aos-animate" data-aos="fade-right" data-aos-duration="800">
              <h5 className="ca-section-subtitle subtitle-bg-5 text-white p-relative theme-color-2">
                Our Testimonial
              </h5>
              <h2 className="ca-about-title text-white fnw-600 pt-16 ca-text-cap">
                Testimonials from Our
                <br /> Valued Customers
              </h2>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ca-about-desc mb-60 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
              <p className="text-white">
                Our clients satisfaction is the cornerstone of our success at
                Cargon
                <br /> We take immense pride in the positive feedback we receive
                from
                <br /> businesses worldwide who rely on our expertise for their.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Slider ref={sliderRef} {...settings} className="ca-testimonials d-flex flex-wrap">
              {testimonialsData.map((testimonial, index) => <div key={index} className={`ca-testimonial-2 col-12 col-md-6 col-lg-4 slick-slide ${activeIndex === index ? "slick-current slick-active slick-center" : ""}`}>
                  <div className={`ca-testimonial-card ${activeIndex === index ? "slick-slide slick-current slick-active slick-center" : ""}`}>
                    <div className="ca-test-2-icon">
                      <span>
                        <img src={quoteIcon} alt="Quote" />
                      </span>
                    </div>
                    <div className="ca-test-2-rating">
                      <div className="ca-ratings d-flex gap-1 items-center justify-content-center">
                        {[...Array(5)].map((_, starIndex) => <span key={starIndex}>
                            <FaStar size={18} />
                          </span>)}
                      </div>
                      <div className="ca-rating-num">
                        <h4 className="ca-rating-title-2">
                          (5) <span>Rating</span>
                        </h4>
                      </div>
                    </div>
                    <div className="ca-test-2-content">
                      <p>{testimonial.quote}</p>
                    </div>
                    <div className="ca-test-2-user">
                      <div className="ca-test-2-user-img">
                        <span>
                          <img src={testimonial.image} alt={testimonial.name} />
                        </span>
                      </div>
                      <div className="ca-test-2-user-name">
                        <h4 className="test-2-title">{testimonial.name}</h4>
                        <span>{testimonial.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </Slider>
          </Col>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <button onClick={previous} className="bg-transparent border-0 text-white me-3">
              <FaArrowLeft />
            </button>
            <button onClick={next} className="bg-transparent border-0 text-white">
              <FaArrowRight />
            </button>
          </div>
        </Row>
      </Container>
    </section>;
};
export default Testimonials;