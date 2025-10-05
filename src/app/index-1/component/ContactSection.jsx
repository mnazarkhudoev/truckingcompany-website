;
import location from "@/assets/img/icon/ca-location3.1.svg";
import phone from "@/assets/img/icon/ca-location3.2.svg";
import email from "@/assets/img/icon/ca-location3.3.svg";
import { useState } from "react";
import { Col, Container, Form, FormControl, FormSelect, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });
  const contactInfo = {
    address: "25 N CROW POINT RD LINCOLN, RI 02865",
    email: "ib.trucking@yahoo.com",
    phone: "+14015958647"
  };
  const serviceOptions = [{
    value: "1",
    label: "Service 01"
  }, {
    value: "2",
    label: "Service 02"
  }, {
    value: "3",
    label: "Service 03"
  }, {
    value: "4",
    label: "Service 04"
  }];
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return <section id="contact" className="contact-3-area theme-black-bg-3 pt-100 pb-70" style={{margin: 0, backgroundColor: '#000000'}}>
            <Container>
                <div className="ca-contact-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                    <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                        Get In Touch
                    </h5>
                    <h2 className="ca-section-title theme-color-3 fnw-600 pt-16">
                        Contact Iron Bull Trucking
                    </h2>
                    <p className="pt-16 text-white">
                        Ready to partner with Iron Bull Trucking? Contact us today to discuss
                        <br />
                        your transportation needs and get a customized quote.
                    </p>
                </div>
                <Row className="align-items-center">
                    <Col xl={6} className="mb-30">
                        <div className="ca-contact-from ca-contact-from-3" style={{backgroundColor: '#141414', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                            <div className="ca-contact-content-3">
                                <h4 className="ca-contact-title-2 text-white fnw-600">
                                    Send Us A Message
                                </h4>
                                <p className="pt-16 pb-24 text-white">
                                    Ready to get started? Fill out the form below and we'll get back to you 
                                    within 24 hours to discuss your transportation needs.
                                </p>
                            </div>
                            <Form>
                                <Row>
                                    <Col md={6} className="mb-20">
                                        <FormControl type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
                                    </Col>
                                    <Col md={6} className="mb-20">
                                        <FormControl type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
                                    </Col>
                                    <Col md={6} className="mb-20">
                                        <FormControl type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                    </Col>
                                    <Col md={6} className="mb-20">
                                        <FormControl type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                                    </Col>
                                    <Col md={12} className="mb-20">
                                        <FormSelect name="serviceType" value={formData.serviceType} onChange={handleChange}>
                                            <option value="">Service Type</option>
                                            {serviceOptions.map(option => <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>)}
                                        </FormSelect>
                                    </Col>
                                    <Col md={12} className="mb-20">
                                        <FormControl as="textarea" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                                    </Col>
                                    <div className="submit-btn">
                                        <div className="submit-btn">
                                            <button className="ca-btn-primary-3 theme-bg-3 text-white br-50" type="button" value="submit">
                                                Send Message
                                                <span>
                                                    <i>
                                                        <FaAngleRight size={18} />
                                                    </i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col xl={6} className="mb-30">
                        <div className="ca-form-loca-3" style={{backgroundColor: '#141414', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                            <h3 className="text-white mb-20 fnw-600">Contact Information</h3>
                            <div className="ca-location-3 mb-20">
                                <div className="ca-location-icbox" style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                                    <div className="ca-location-icbox-img">
                                        <span>
                                            <img src={location} alt="Location Icon" style={{filter: 'brightness(0) invert(1)', width: '24px', height: '24px'}} />
                                        </span>
                                    </div>
                                    <div className="ca-location-icbox-text">
                                        <h4 className="ca-title fnw-600 text-white pb-12">
                                            Our Address
                                        </h4>
                                        <p className="text-white" style={{margin: 0}}>
                                            {contactInfo.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ca-location-3 mb-20">
                                <div className="ca-location-icbox" style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                                    <div className="ca-location-icbox-img">
                                        <span>
                                            <img src={phone} alt="Phone Icon" style={{filter: 'brightness(0) invert(1)', width: '24px', height: '24px'}} />
                                        </span>
                                    </div>
                                    <div className="ca-location-icbox-text">
                                        <h4 className="ca-title fnw-600 text-white pb-12">
                                            Call or Text
                                        </h4>
                                        <Link to={`tel:${contactInfo.phone}`} style={{color: '#f12d21', textDecoration: 'none'}}>
                                            {contactInfo.phone}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ca-location-3 mb-20">
                                <div className="ca-location-icbox" style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                                    <div className="ca-location-icbox-img">
                                        <span>
                                            <img src={email} alt="Email Icon" style={{filter: 'brightness(0) invert(1)', width: '24px', height: '24px'}} />
                                        </span>
                                    </div>
                                    <div className="ca-location-icbox-text">
                                        <h4 className="ca-title fnw-600 text-white pb-12">
                                            Send Email
                                        </h4>
                                        <Link to={`mailto:${contactInfo.email}`} style={{color: '#f12d21', textDecoration: 'none'}}>
                                            {contactInfo.email}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default ContactSection;