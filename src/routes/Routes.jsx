import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Index1 = lazy(() => import("../app/index-1/page"));
const Index2 = lazy(() => import("../app/index-2/page"));
const Index3 = lazy(() => import("../app/index-3/page"));
const Index4 = lazy(() => import("../app/index-4/page"));
const About = lazy(() => import("../app/(common)/about/page"));
const Contact = lazy(() => import("../app/(common)/contact/page"));
const Blog = lazy(() => import("../app/(common)/blog/page"));
const BlogLeft = lazy(() => import("../app/(common)/blog/left/page"));
const BlogRight = lazy(() => import("../app/(common)/blog/right/page"));
const BlogSingle = lazy(() => import("../app/(common)/blog/single/page"));
const ErrorPage = lazy(() => import("../app/(common)/pages/404/page"));
const Faq = lazy(() => import("../app/(common)/pages/faq/page"));
const Pricing = lazy(() => import("../app/(common)/pages/pricing/page"));
const Team = lazy(() => import("../app/(common)/pages/team/page"));
const Testimonial = lazy(() => import("../app/(common)/pages/testimonial/page"));
const ProjectLeft = lazy(() => import("../app/(common)/projects/left/page"));
const ProjectRight = lazy(() => import("../app/(common)/projects/right/page"));
const ProjectSingle = lazy(() => import("../app/(common)/projects/single/page"));
const Project = lazy(() => import("../app/(common)/projects/project/page"));
const Services = lazy(() => import("../app/(common)/services/page"));
const ServicesLeft = lazy(() => import("../app/(common)/services/left/page"));
const ServiceRight = lazy(() => import("../app/(common)/services/right/page"));
const ServiceSingle = lazy(() => import("../app/(common)/services/single/page"));
export const landingRoutes = [{
  path: "/",
  name: "index1",
  element: <Navigate to="/index-1" />
}, {
  path: "/index-1",
  name: "index1",
  element: <Index1 />
}, {
  path: "/index-2",
  name: "index2",
  element: <Index2 />
}, {
  path: "/index-3",
  name: "index3",
  element: <Index3 />
}, {
  path: "/index-4",
  name: "index4",
  element: <Index4 />
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
  path: "/blog/left",
  name: "blog-left",
  element: <BlogLeft />
}, {
  path: "/blog/right",
  name: "blog-right",
  element: <BlogRight />
}, {
  path: "/blog/single",
  name: "blog-single",
  element: <BlogSingle />
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
  path: "/projects/left",
  name: "project-left",
  element: <ProjectLeft />
}, {
  path: "/projects/right",
  name: "project-right",
  element: <ProjectRight />
}, {
  path: "/projects/single",
  name: "project-single",
  element: <ProjectSingle />
}, {
  path: "/services",
  name: "services",
  element: <Services />
}, {
  path: "/services/left",
  name: "services-left",
  element: <ServicesLeft />
}, {
  path: "/services/right",
  name: "service-right",
  element: <ServiceRight />
}, {
  path: "/services/single",
  name: "service-single",
  element: <ServiceSingle />
}];