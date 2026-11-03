import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.webp";
import { company, navLinks } from "@/data/company";

const Footer = () => (
  <footer className="site-footer">
    <div className="tape" aria-hidden="true" />
    <div className="container site-footer__grid">
      <div className="site-footer__brand">
        <img src={logo} alt="" width="64" height="64" />
        <p>
          {company.legalName}, also known as {company.name}. Regional freight out of Lincoln, Rhode
          Island since {company.founded}.
        </p>
      </div>

      <nav aria-label="Footer">
        <h2 className="site-footer__heading">Site</h2>
        <ul>
          {navLinks.map(link => (
            <li key={link.hash}>
              <Link to={{ pathname: "/", hash: link.hash }}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/apply">Apply to drive</Link>
          </li>
        </ul>
      </nav>

      <div>
        <h2 className="site-footer__heading">Contact</h2>
        <address>
          {company.street}
          <br />
          {company.city}
          <br />
          <a href={company.phoneHref}>{company.phone}</a>
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </address>
      </div>
    </div>
    <div className="container site-footer__legal">
      <p>
        © {new Date().getFullYear()} {company.legalName} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
