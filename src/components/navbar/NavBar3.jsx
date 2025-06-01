;
import React, { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import logo from "@/assets/img/logo/ca-logo1.1.png";
import { navItems } from "./data";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import { useNavigate } from "react-router-dom";
const NavBar3 = () => {
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
  return <header ref={backToTop} className="ca-header-area ca-header-1 stiky pt-16 pb-16">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg col-md-6 col-6">
            <div className="ca-logo">
              <Link to="/index-3">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 d-none d-lg-block">
            <div className="ca-main-menu">
              <nav className="ca-mobile-menu-active">
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
                            <FaAngleDown size={12} className="ms-1" />
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
          <div className="col-xl-2 col-lg col-md-6 col-6">
            <div className="ca-btn-header d-none d-lg-block text-end">
              <Link to="/contact" className="ca-btn-primary theme-bg-1 text-white br-50">
                Get A Quote
                <span>
                  <FaAngleRight />
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
export default NavBar3;