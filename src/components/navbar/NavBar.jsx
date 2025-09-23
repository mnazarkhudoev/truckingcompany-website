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
              style={{ color: '#6c757d', borderColor: '#6c757d' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                <rect x="10" width="20" height="2" fill="currentColor"></rect>
                <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
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