import { useRef } from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import volvo from "@/assets/images/volvo-vnl.webp";
import { company } from "@/data/company";
import { useHighway } from "./highway/useHighway";

const facts = [
  { label: "Established", value: company.founded },
  { label: "Dispatch", value: "24/7" },
  { label: "Driver pay", value: "Weekly" },
  { label: "Home base", value: "Lincoln, RI" },
];

const Hero = () => {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const truckRef = useRef(null);
  useHighway(stageRef, canvasRef, truckRef);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__stage" ref={stageRef}>
        <canvas className="hero__scene" ref={canvasRef} aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="hero__title">
              <span>Professionalism</span> <span>in every</span> <span>delivery.</span>
            </h1>
            <p className="hero__lead">
              {company.legalName} has hauled regional freight out of Lincoln, Rhode Island since {company.founded}.
              We're hiring experienced CDL-A drivers, with weekly pay and 24/7 dispatch behind every load.
            </p>
            <div className="hero__actions">
              <Link to="/apply" className="btn btn--primary">
                Apply to drive
              </Link>
              <a href={company.phoneHref} className="btn btn--ghost">
                <FaPhone aria-hidden="true" />
                Call {company.phone}
              </a>
            </div>
          </div>

          <div className="hero__truck" ref={truckRef}>
            <div className="hero__truck-body">
              <img src={volvo} alt="Red Volvo VNL semi-truck with a chrome bull bar pulling a refrigerated trailer" width="800" height="500" fetchPriority="high" />
            </div>
          </div>
        </div>
      </div>

      <div className="tape" aria-hidden="true" />

      <div className="container">
        <dl className="facts">
          {facts.map(fact => (
            <div key={fact.label} className="facts__item">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
