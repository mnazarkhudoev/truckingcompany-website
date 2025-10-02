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
  const [pagesOpen, setPagesOpen] = useState(false);
  const anyOpen = pagesOpen;
  const closeAll = () => { setPagesOpen(false); };
  return <Offcanvas placement="start" show={show} onHide={() => { closeAll(); handleClose(); }} className="w-bg" restoreFocus>
            <Offcanvas.Header closeButton>
                <a href="#">
                    <img src={logo3} alt="Logo" />
                </a>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {anyOpen && (
                    <div className="mb-3">
                        <button className="ca-offcanvas-toogle" onClick={() => closeAll()} aria-label="Back to main menu">
                            ← Back
                        </button>
                    </div>
                )}
                <div className="ca-offcanvas-menu-3 mb-40">
                    <nav>
                        <ul>
                            <li>
                                <a href="#top" onClick={(e) => {
                                  e.preventDefault();
                                  window.scrollTo({ 
                                    top: 0, 
                                    behavior: 'smooth' 
                                  });
                                  handleClose();
                                }}>Home</a>
                            </li>

                            <li>
                                <a href="#about" onClick={(e) => {
                                  e.preventDefault();
                                  const element = document.querySelector('#about');
                                  if (element) {
                                    element.scrollIntoView({ 
                                      behavior: 'smooth',
                                      block: 'start'
                                    });
                                  }
                                  handleClose();
                                }}>About Us</a>
                            </li>

                            <li>
                                <a href="#requirements" onClick={(e) => {
                                  e.preventDefault();
                                  const element = document.querySelector('#requirements');
                                  if (element) {
                                    element.scrollIntoView({ 
                                      behavior: 'smooth',
                                      block: 'start'
                                    });
                                  }
                                  handleClose();
                                }}>Requirements</a>
                            </li>

                            <li>
                                <a href="#bonuses" onClick={(e) => {
                                  e.preventDefault();
                                  const element = document.querySelector('#bonuses');
                                  if (element) {
                                    element.scrollIntoView({ 
                                      behavior: 'smooth',
                                      block: 'start'
                                    });
                                  }
                                  handleClose();
                                }}>Bonuses</a>
                            </li>

                            <li>
                                <a href="#contact" onClick={(e) => {
                                  e.preventDefault();
                                  const element = document.querySelector('#contact');
                                  if (element) {
                                    element.scrollIntoView({ 
                                      behavior: 'smooth',
                                      block: 'start'
                                    });
                                  }
                                  handleClose();
                                }}>Contact Us</a>
                            </li>

                            <li>
                                <a href="#bottom" onClick={(e) => {
                                  e.preventDefault();
                                  window.scrollTo({ 
                                    top: document.body.scrollHeight, 
                                    behavior: 'smooth' 
                                  });
                                  handleClose();
                                }}>Quick Links</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="ca-offcanvas-contact mb-40">
                    <a href="#" className="ca-btn-primary-3 theme-bg-3 text-white br-50" onClick={handleClose}>
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