import { useEffect, useState } from "react";
import { FaBars, FaPhone, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.webp";
import { company, navLinks } from "@/data/company";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = e => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="brand" aria-label={`${company.name} home`}>
          <img src={logo} alt="" width="44" height="44" />
          <span className="brand__name">
            Iron Bull <span>Trucking</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          {navLinks.map(link => (
            <Link key={link.hash} to={{ pathname: "/", hash: link.hash }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href={company.phoneHref}>
            <FaPhone aria-hidden="true" />
            {company.phone}
          </a>
          <Link to="/apply" className="btn btn--primary btn--sm">
            Apply to drive
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={menuOpen} inert={!menuOpen}>
        <nav aria-label="Mobile">
          {navLinks.map(link => (
            <Link key={link.hash} to={{ pathname: "/", hash: link.hash }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <Link to="/apply" className="btn btn--primary">
            Apply to drive
          </Link>
          <a className="btn btn--ghost" href={company.phoneHref}>
            <FaPhone aria-hidden="true" />
            Call {company.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
