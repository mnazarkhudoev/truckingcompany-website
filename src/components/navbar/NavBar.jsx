import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/img/logo/ca-logo3.1.png";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import { navItems } from "./data";
const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backToTop = useRef(null);
  const router = useNavigate();
  const toggleDropdown = index => {
    setOpenDropdown(prev => prev === index ? null : index);
  };
  const navigate = link => {
    router(link);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLinkClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      if (link === '#top') {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      } else if (link === '#bottom') {
        window.scrollTo({ 
          top: document.body.scrollHeight, 
          behavior: 'smooth' 
        });
      } else {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      setOpenDropdown(null);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (backToTop.current) {
        if (window.scrollY > 100) {
          backToTop.current.classList.add("scroll-header");
        } else {
          backToTop.current.classList.remove("scroll-header");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <header ref={backToTop} className="header-area-3 stiky">
      <div className="container-fluid header-3">
        <div className="d-flex d-lg-none justify-content-between align-items-center py-2">
          <div>
            <button
              type="button"
              className="ca-offcanvas-toogle"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #f12d21 0%, #ff6b6b 100%)',
                border: 'none',
                borderRadius: '12px',
                padding: '12px',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(241, 45, 33, 0.3)',
                position: 'relative',
                overflow: 'hidden'
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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="18" 
                viewBox="0 0 24 18"
                style={{ transition: 'all 0.3s ease' }}
              >
                <rect x="2" y="2" width="20" height="2" fill="currentColor" rx="1"></rect>
                <rect x="2" y="8" width="20" height="2" fill="currentColor" rx="1"></rect>
                <rect x="2" y="14" width="20" height="2" fill="currentColor" rx="1"></rect>
              </svg>
            </button>
          </div>
          <div className="ca-logo">
            <Link to="/index-1">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg col-md-6 col-6 order-2 order-lg-1 d-none d-lg-block">
            <div className="ca-logo text-lg-start">
              <Link to="/index-1">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 d-none d-lg-block order-lg-2">
            <div className="ca-main-menu-3">
              <nav className="ca-mobile-menu-active-3">
                <ul>
                  {navItems.map((item, index) => <li key={index}>
                      <Link style={{
                    display: "flex"
                  }} to={item.link} onClick={e => {
                    if (item.submenu) {
                      e.preventDefault();
                      toggleDropdown(index);
                    } else {
                      handleLinkClick(e, item.link);
                    }
                  }}>
                        {item.label}
                        {item.submenu && <span>
                            <FaAngleDown className="ms-1" />
                          </span>}
                      </Link>
                      {item.submenu && <ul className={`sub-menu ${openDropdown === index ? "active" : ""}`}>
                          {item.submenu.map((subItem, subIndex) => <li key={subIndex}>
                              <Link to={subItem.link} onClick={e => {
                        e.preventDefault();
                        navigate(subItem.link);
                      }}>
                                {subItem.label}
                              </Link>
                            </li>)}
                        </ul>}
                    </li>)}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-3 col-lg col-md-6 col-6 order-1 order-lg-3">
            <div className="ca-btn-header d-none d-lg-block text-end">
              <Link to="/apply" className="ca-btn-primary-3 theme-bg-3 text-white br-50">
                Become a driver{" "}
                <span>
                    <FaAngleRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu show={isMenuOpen} handleClose={() => setIsMenuOpen(false)} />
    </header>;
};
export default NavBar;