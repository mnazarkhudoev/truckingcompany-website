import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={6} className="mb-20">
          <Form.Control 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
          />
        </Col>
        <Col lg={6} className="mb-20">
          <Form.Control 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
          />
        </Col>
        <Col lg={12} className="mb-20">
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </Col>
        <Col lg={12} className="mb-20">
          <Form.Control 
            as="textarea" 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </Col>
      </Row>
      
      <div className="ca-radion-btn">
        <input 
          type="radio" 
          id="saveinfo" 
          name="fav_language" 
          value="saveinfo" 
        />
        <label htmlFor="saveinfo">
          Save the information's in this browser for next time use
        </label>
      </div>

      <div className="ca-blg-sen-btn text-start">
        <button 
          type="submit" 
          className="ca-btn-primary-3 theme-bg-3 text-white br-50"
        >
          {" "}
          Submit Now{" "}
          <span>
            <FaAngleRight style={{ fontSize: "30px" }} />
          </span>
        </button>
      </div>
    </Form>
  );
};

export default ContactForm;