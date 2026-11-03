import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// React Router doesn't scroll on navigation: jump to the #section if the URL
// has one, otherwise start the new page at the top.
const useScrollOnNavigate = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);
};

const Layout = () => {
  useScrollOnNavigate();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
