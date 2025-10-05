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
  return <Offcanvas 
            placement="start" 
            show={show} 
            onHide={() => { closeAll(); handleClose(); }} 
            className="w-bg" 
            restoreFocus
            style={{ backgroundColor: '#000000' }}
          >
            <Offcanvas.Header>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <a href="#">
                        <img src={logo3} alt="Logo" />
                    </a>
                    <button
                        onClick={handleClose}
                        style={{
                            background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 3px 12px rgba(241, 45, 33, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 5px 15px rgba(241, 45, 33, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 3px 12px rgba(241, 45, 33, 0.3)';
                        }}
                    >
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {anyOpen && (
                    <div className="mb-3">
                        <button 
                            className="ca-offcanvas-toogle" 
                            onClick={() => closeAll()} 
                            aria-label="Back to main menu"
                            style={{
                                background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                                border: 'none',
                                borderRadius: '25px',
                                padding: '10px 20px',
                                color: '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 3px 12px rgba(241, 45, 33, 0.3)',
                                fontSize: '14px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 5px 15px rgba(241, 45, 33, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 3px 12px rgba(241, 45, 33, 0.3)';
                            }}
                        >
                            <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                            Back
                        </button>
                    </div>
                )}
                <div className="ca-offcanvas-menu-3 mb-40">
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '8px' }}>
                                <a 
                                    href="#top" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.scrollTo({ 
                                        top: 0, 
                                        behavior: 'smooth' 
                                      });
                                      handleClose();
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        background: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    Home
                                </a>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <a 
                                    href="#about" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const element = document.querySelector('#about');
                                      if (element) {
                                        element.scrollIntoView({ 
                                          behavior: 'smooth',
                                          block: 'start'
                                        });
                                      }
                                      handleClose();
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        background: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    About Us
                                </a>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <a 
                                    href="#requirements" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const element = document.querySelector('#requirements');
                                      if (element) {
                                        element.scrollIntoView({ 
                                          behavior: 'smooth',
                                          block: 'start'
                                        });
                                      }
                                      handleClose();
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        background: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    Requirements
                                </a>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <a 
                                    href="#bonuses" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const element = document.querySelector('#bonuses');
                                      if (element) {
                                        element.scrollIntoView({ 
                                          behavior: 'smooth',
                                          block: 'start'
                                        });
                                      }
                                      handleClose();
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        background: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    Bonuses
                                </a>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <a 
                                    href="#contact" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const element = document.querySelector('#contact');
                                      if (element) {
                                        element.scrollIntoView({ 
                                          behavior: 'smooth',
                                          block: 'start'
                                        });
                                      }
                                      handleClose();
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        background: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    Contact Us
                                </a>
                            </li>

                            <li style={{ marginBottom: '8px' }}>
                                <a 
                                    href="#bottom" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.scrollTo({ 
                                        top: document.body.scrollHeight, 
                                        behavior: 'smooth' 
                                      });
                                      handleClose();
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        background: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#ffffff';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    Quick Links
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="ca-offcanvas-contact mb-40">
                    <a 
                        href="#" 
                        className="ca-btn-primary-3 theme-bg-3 text-white br-50" 
                        onClick={handleClose}
                        style={{
                            background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                            border: 'none',
                            borderRadius: '25px',
                            padding: '12px 24px',
                            color: '#ffffff',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: '600',
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(241, 45, 33, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(241, 45, 33, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(241, 45, 33, 0.3)';
                        }}
                    >
                        Contact Us
                        <span style={{ transition: 'transform 0.3s ease' }}>
                            <FaAngleRight />
                        </span>
                    </a>
                </div>

                <div className="ca-offcanvas-contact-info mb-40">
                    <h3 className="ca-offcanvas-sm-title" style={{ color: '#f12d21', fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Contact Info</h3>

                    <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', background: 'rgba(241, 45, 33, 0.1)', border: '1px solid rgba(241, 45, 33, 0.2)' }}>
                        <div className="icon" style={{ 
                            background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)', 
                            borderRadius: '50%', 
                            width: '40px', 
                            height: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            color: '#ffffff'
                        }}>
                            <span>
                                <FaLocationDot />
                            </span>
                        </div>
                        <div className="ca-sm-single-item-4-content">
                            <h6 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600' }}>Our Address</h6>
                            <p style={{ margin: 0, color: '#ccc', fontSize: '13px' }}>
                                25 N CROW POINT RD LINCOLN, RI 02865
                            </p>
                        </div>
                    </div>

                    <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', background: 'rgba(241, 45, 33, 0.1)', border: '1px solid rgba(241, 45, 33, 0.2)' }}>
                        <div className="icon" style={{ 
                            background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)', 
                            borderRadius: '50%', 
                            width: '40px', 
                            height: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            color: '#ffffff'
                        }}>
                            <span>
                                <FaPhone />
                            </span>
                        </div>
                        <div className="ca-sm-single-item-4-content">
                            <h6 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600' }}>Call or Text</h6>
                            <p style={{ margin: 0 }}>
                                <a href="tel:+14015958647" style={{ color: '#f12d21', textDecoration: 'none', fontSize: '13px' }}>+1 401-595-8647</a>
                            </p>
                        </div>
                    </div>

                    <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', background: 'rgba(241, 45, 33, 0.1)', border: '1px solid rgba(241, 45, 33, 0.2)' }}>
                        <div className="icon" style={{ 
                            background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)', 
                            borderRadius: '50%', 
                            width: '40px', 
                            height: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            color: '#ffffff'
                        }}>
                            <span>
                                <FaEnvelope />
                            </span>
                        </div>
                        <div className="ca-sm-single-item-4-content">
                            <h6 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600' }}>Send Email</h6>
                            <p style={{ margin: 0 }}>
                                <a href="mailto:ib.trucking@yahoo.com" style={{ color: '#f12d21', textDecoration: 'none', fontSize: '13px' }}>ib.trucking@yahoo.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="ca-offcanvas-social mb-40">
                    <h3 className="ca-offcanvas-sm-title" style={{ color: '#f12d21', fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Follow Us</h3>
                    <div className="ca-footer-social ca-footer-social-3">
                        <ul style={{ display: 'flex', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li>
                                <a 
                                    href="#" 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 3px 12px rgba(241, 45, 33, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-3px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(241, 45, 33, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 3px 12px rgba(241, 45, 33, 0.3)';
                                    }}
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 3px 12px rgba(241, 45, 33, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-3px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(241, 45, 33, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 3px 12px rgba(241, 45, 33, 0.3)';
                                    }}
                                >
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 3px 12px rgba(241, 45, 33, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-3px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(241, 45, 33, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 3px 12px rgba(241, 45, 33, 0.3)';
                                    }}
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 3px 12px rgba(241, 45, 33, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-3px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(241, 45, 33, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 3px 12px rgba(241, 45, 33, 0.3)';
                                    }}
                                >
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