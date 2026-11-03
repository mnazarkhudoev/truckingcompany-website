import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const NotFound = () => (
  <>
    <PageMeta title="Page not found" />
    <section className="page-head not-found">
      <div className="container">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="page-head__title">Wrong exit</h1>
        <p className="lead">This page doesn't exist. The link may be old or mistyped.</p>
        <div className="hero__actions">
          <Link to="/" className="btn btn--primary">
            Go to the homepage
          </Link>
          <Link to="/apply" className="btn btn--ghost">
            Apply to drive
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
