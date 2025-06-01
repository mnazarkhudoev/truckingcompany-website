;
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/img/logo/ca-logo2.1.png";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import { navItems } from "./data";
const NavBarStyled2 = () => {
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
  return <header ref={backToTop} className="header-2 stiky">
      <div className="container ca-header-bg-2">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 col-6">
            <div className="ca-logo">
              <Link to="/index-2">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="ca-main-menu-2">
              <nav className="ca-mobile-menu-active-2">
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
                            <FaAngleDown className="ms-1" size={12} />
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
          <div className="col-lg-3 col-md-6 col-6">
            <div className="ca-btn-header text-end d-none d-lg-block">
              <Link to="/contact" className="ca-btn-primary-22">
                Get A Free Quote
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
            <div className="ca-header-action-item d-lg-none text-end">
              <button type="button" className="ca-offcanvas-toogle" onClick={() => setIsMenuOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                  <rect x="10" width="20" height="2" fill="currentColor"></rect>
                  <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                  <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
    </header>;
};
export default NavBarStyled2;