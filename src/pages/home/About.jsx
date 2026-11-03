import { FaCheck, FaClock, FaShieldHalved, FaTruck } from "react-icons/fa6";
import depot from "@/assets/images/truck-depot.webp";
import { company } from "@/data/company";

const commitments = [
  {
    icon: FaTruck,
    title: "Reliable transportation",
    text: "Dependable freight service across regional routes, with a modern fleet kept in top shape.",
  },
  {
    icon: FaShieldHalved,
    title: "Safety first",
    text: "Rigorous driver training, regular vehicle maintenance, and a strong safety and compliance program.",
  },
  {
    icon: FaClock,
    title: "On-time delivery",
    text: "Your freight is your business. We work to hit every scheduled pickup and delivery time.",
  },
];

const reasons = [
  "Over 10 years of experience in the trucking industry",
  "Professional, certified drivers",
  "Modern fleet with advanced safety features",
  "24/7 dispatch support and tracking",
  "Competitive rates and flexible scheduling",
  "Full insurance coverage",
];

const About = () => (
  <section id="about" className="section section--shoulder" aria-labelledby="about-title">
    <div className="container">
      <div className="split">
        <div className="split__text">
          <h2 id="about-title" className="section-title">
            A small carrier with big ambitions
          </h2>
          <div className="prose">
            <p>
              Established in {company.founded}, {company.legalName} (also known as {company.name} Inc.) has a
              long-standing presence in the transportation industry. Today the company is under new
              management, led by two partners with complementary strengths: one with extensive corporate
              finance and private equity experience, the other with deep, hands-on trucking expertise, from
              driver to fleet owner.
            </p>
            <p>
              Behind the leadership, our team is committed to safety, compliance, and outstanding service.
              With 24/7 dispatch support, every load is handled with professionalism and care. Over the
              years we've built multi-year relationships with leading freight brokers, a reflection of the
              trust and reliability we bring to every partnership.
            </p>
            <p>
              Our focus is sustainable, healthy growth: expanding our operations with prudence and without
              excessive leverage.
            </p>
          </div>
        </div>

        <figure className="split__media framed">
          <img src={depot} alt="Red semi-truck loaded with freight at a distribution warehouse" width="940" height="640" loading="lazy" />
        </figure>
      </div>

      <div className="about-detail">
        <ul className="commitments">
          {commitments.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon className="commitments__icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>

        <div className="reasons">
          <h3>Why shippers and brokers choose us</h3>
          <ul className="checklist">
            {reasons.map(reason => (
              <li key={reason}>
                <FaCheck aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
