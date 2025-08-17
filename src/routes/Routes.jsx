import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Index1 = lazy(() => import("../app/index-1/page"));
const About = lazy(() => import("../app/(common)/about/page"));
const Contact = lazy(() => import("../app/(common)/contact/page"));
const Blog = lazy(() => import("../app/(common)/blog/page"));
const ErrorPage = lazy(() => import("../app/(common)/pages/404/page"));
const Faq = lazy(() => import("../app/(common)/pages/faq/page"));
const Pricing = lazy(() => import("../app/(common)/pages/pricing/page"));
const Team = lazy(() => import("../app/(common)/pages/team/page"));
const Testimonial = lazy(() => import("../app/(common)/pages/testimonial/page"));
const Project = lazy(() => import("../app/(common)/projects/project/page"));
const Services = lazy(() => import("../app/(common)/services/page"));
const ServiceSingle = lazy(() => import("../app/(common)/services/single/page"));
const Apply = lazy(() => import("../app/(common)/apply/page"));

export const landingRoutes = [{
  path: "/",
  name: "index1",
  element: <Navigate to="/index-1" />
}, {
  path: "/index-1",
  name: "index1",
  element: <Index1 />
}];

export const pageRoutes = [{
  path: "/about",
  name: "about",
  element: <About />
}, {
  path: "/contact",
  name: "contact",
  element: <Contact />
}, {
  path: "/blog",
  name: "blog",
  element: <Blog />
}, {
  path: "pages/404",
  name: "404",
  element: <ErrorPage />
}, {
  path: "pages/faq",
  name: "faq",
  element: <Faq />
}, {
  path: "pages/pricing",
  name: "pricing",
  element: <Pricing />
}, {
  path: "pages/team",
  name: "team",
  element: <Team />
}, {
  path: "pages/testimonial",
  name: "testimonial",
  element: <Testimonial />
}, {
  path: "/projects/project",
  name: "project",
  element: <Project />
}, {
  path: "/services",
  name: "services",
  element: <Services />
}, {
  path: "/services/single",
  name: "service-single",
  element: <ServiceSingle />
}, {
  path: "/apply",
  name: "apply",
  element: <Apply />
}];