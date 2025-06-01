import React, { useState } from "react";
import logo3 from "@/assets/img/logo/ca-logo3.1.png";
import { Collapse } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaAngleDown, FaAngleRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MobileMenu = ({
  show,
  handleClose
}) => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  return <Offcanvas placement="end" show={show} onHide={handleClose} className="w-bg">
            <Offcanvas.Header closeButton>
                <a href="#">
                    <img src={logo3} alt="Logo" />
                </a>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <div className="ca-offcanvas-menu-3 mb-40">
                    <nav>
                        <ul>
                            <li>
                                <a href="#" onClick={() => setHomeOpen(!homeOpen)}>
                                    Home
                                </a>
                                <button className="ca-menu-close2" onClick={() => setHomeOpen(!homeOpen)}>
                                    {homeOpen ? <FaAngleDown /> : <FaAngleRight />}
                                </button>
                                <Collapse in={homeOpen}>
                                    <ul>
                                        <li>
                                            <Link to="/index-1">Home 01</Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li>
                                <Link to="/about">About Us</Link>
                            </li>

                            <li>
                                <a href="#" onClick={() => setServiceOpen(!serviceOpen)}>
                                    Service
                                </a>
                                <button className="ca-menu-close2" onClick={() => setServiceOpen(!serviceOpen)}>
                                    {serviceOpen ? <FaAngleDown /> : <FaAngleRight />}
                                </button>
                                <Collapse in={serviceOpen}>
                                    <ul>
                                        <li>
                                            <Link to="/services">Service</Link>
                                        </li>
                                        <li>
                                            <Link to="/services/left">Service Left</Link>
                                        </li>
                                        <li>
                                            <Link to="/services/right">Service Right</Link>
                                        </li>
                                        <li>
                                            <Link to="/services/single">Service Single</Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li>
                                <a href="#" onClick={() => setPagesOpen(!pagesOpen)}>
                                    Pages
                                </a>
                                <button className="ca-menu-close2" onClick={() => setPagesOpen(!pagesOpen)}>
                                    {pagesOpen ? <FaAngleDown /> : <FaAngleRight />}
                                </button>
                                <Collapse in={pagesOpen}>
                                    <ul>
                                        <li>
                                            <Link to="/pages/team">Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/testimonial">Testimonial</Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/faq">Faq</Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/pricing">Pricing Plan</Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/pages/404">404</Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li>
                                <a href="#" onClick={() => setProjectOpen(!projectOpen)}>
                                    Project
                                </a>
                                <button className="ca-menu-close2" onClick={() => setProjectOpen(!projectOpen)}>
                                    {projectOpen ? <FaAngleDown /> : <FaAngleRight />}
                                </button>
                                <Collapse in={projectOpen}>
                                    <ul>
                                        <li>
                                            <Link to="/projects">Project</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/left">Project Left</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/right">Project Right</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects/single">Project Single</Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="ca-offcanvas-contact mb-40">
                    <a href="#" className="ca-btn-primary-3 theme-bg-3 text-white br-50">
                        Get A Quote{" "}
                        <span>
                            <FaAngleRight />
                        </span>
                    </a>
                </div>

                <div className="ca-offcanvas-contact-info mb-40">
                    <h3 className="ca-offcanvas-sm-title">Contact Info</h3>

                    <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                        <div className="icon">
                            <span>
                                <FaLocationDot />
                            </span>
                        </div>
                        <div className="ca-sm-single-item-4-content">
                            <p>
                                <a href="#">
                                    55 Street, 2nd block, 3rd Floor Melbourne, Australia
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                        <div className="icon">
                            <span>
                                <FaPhone />
                            </span>
                        </div>
                        <div className="ca-sm-single-item-4-content">
                            <p>
                                <a href="tel:+0221234568806">+022 (123) 456 88 06</a>
                            </p>
                        </div>
                    </div>

                    <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                        <div className="icon">
                            <span>
                                <FaEnvelope />
                            </span>
                        </div>
                        <div className="ca-sm-single-item-4-content">
                            <p>
                                <a href="mailto:infocargon@gmail.com">infocargon@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="ca-offcanvas-social mb-40">
                    <h3 className="ca-offcanvas-sm-title">Follow Us</h3>
                    <div className="ca-footer-social ca-footer-social-3">
                        <ul>
                            <li>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaXTwitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>;
};
export default MobileMenu;