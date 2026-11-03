import { FaCalendarWeek, FaShieldHalved, FaTrophy, FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: FaCalendarWeek,
    title: "Paid weekly",
    text: "A consistent weekly pay schedule, so you get paid on time, every time.",
  },
  {
    icon: FaShieldHalved,
    title: "Safety bonus",
    text: "Extra pay for keeping an excellent safety record and following safety protocols on every route.",
  },
  {
    icon: FaTrophy,
    title: "Performance bonus",
    text: "Outstanding work gets recognized. Exceed expectations and earn performance-based bonuses.",
  },
  {
    icon: FaUserPlus,
    title: "Referral bonus",
    text: "Know a good driver? Earn a bonus for every referral who joins Iron Bull Trucking.",
  },
];

const Pay = () => (
  <section id="pay" className="section section--shoulder" aria-labelledby="pay-title">
    <div className="container">
      <div className="section-head">
        <h2 id="pay-title" className="section-title">
          Pay and bonuses
        </h2>
        <p className="lead">We reward drivers for hard work and safe miles, on top of competitive compensation.</p>
      </div>

      <ul className="benefits">
        {benefits.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <span className="benefits__icon">
              <Icon aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>

      <div className="cta-band">
        <div className="tape" aria-hidden="true" />
        <div className="cta-band__body">
          <div>
            <h2 className="cta-band__title">Ready to roll?</h2>
            <p>Send your details and we'll call you back. It takes about two minutes.</p>
          </div>
          <Link to="/apply" className="btn btn--primary">
            Apply to drive
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Pay;
