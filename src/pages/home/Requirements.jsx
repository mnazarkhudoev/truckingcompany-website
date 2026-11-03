import { Link } from "react-router-dom";

const requirements = [
  {
    title: "Age",
    items: ["At least 21 years old for interstate driving", "At least 18 years old for intrastate driving"],
  },
  {
    title: "License and documents",
    items: [
      "Valid Class A Commercial Driver's License (CDL)",
      "Clean driving record for the past 3 years",
      "DOT medical certificate",
      "Valid Social Security number",
      "Proof of eligibility to work in the United States",
    ],
  },
  {
    title: "Experience",
    items: ["At least 2 years of verifiable OTR experience", "Clean employment history"],
  },
  {
    title: "Background and safety",
    items: [
      "Pass a pre-employment drug screening",
      "Submit to random drug and alcohol testing",
      "Clean criminal background check",
      "No more than 2 moving violations in the past 3 years",
      "No DUI or DWI convictions in the past 5 years",
    ],
  },
  {
    title: "Physical",
    items: [
      "Able to lift up to 50 pounds",
      "Able to sit for extended periods",
      "Good vision and hearing",
      "Pass a DOT physical examination",
    ],
  },
];

const Requirements = () => (
  <section id="requirements" className="section" aria-labelledby="requirements-title">
    <div className="container spec">
      <div className="spec__intro">
        <h2 id="requirements-title" className="section-title">
          Driver requirements
        </h2>
        <p className="lead">
          We hire experienced, safety-minded drivers who represent Iron Bull on every route. If this list
          describes you, the application takes about two minutes.
        </p>
        <Link to="/apply" className="btn btn--primary">
          Apply to drive
        </Link>
      </div>

      <dl className="spec__sheet">
        {requirements.map(group => (
          <div key={group.title} className="spec__row">
            <dt>{group.title}</dt>
            <dd>
              <ul>
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Requirements;
