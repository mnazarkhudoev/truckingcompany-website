import { Suspense } from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";
import BackToTop from "./navbar/BackToTop";
import PlaceHolder from "./PlaceHolder";
const MainLayout = ({
  children
}) => {
  return <>
      <Suspense fallback={<PlaceHolder />}>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </Suspense>
    </>;
};
export default MainLayout;