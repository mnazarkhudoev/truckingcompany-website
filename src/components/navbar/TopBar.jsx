import icon1 from "@/assets/img/icon/ca-icon-1.1.svg";
import icon2 from "@/assets/img/icon/ca-icon-1.2.svg";
import icon3 from "@/assets/img/icon/ca-icon-1.3.svg";
import icon4 from "@/assets/img/icon/ca-icon-1.4.svg";
import { Link } from "react-router-dom";
const TopBar = () => {
  return <div className="ca-header-top theme-bg-1 d-none d-xl-block pt-16 pb-16">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="ca-header-top-content d-flex">
              <div className="ca-header-top-icon">
                <span className="mr-8">
                  <img src={icon1} alt="" />
                </span>
              </div>
              <div className="ca-header-top-text">
                <Link to="mailto:ib.trucking@yahoo.com" className="ca-top-title text-white">
                  ib.trucking@yahoo.com
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="ca-header-top-content d-flex ml-80">
              <div className="ca-header-top-icon">
                <span className="mr-8">
                  <img src={icon2} alt="" />
                </span>
              </div>
              <div className="ca-header-top-text">
                <Link to="" className="ca-top-title text-white">
                  25 N Crow Point Rd Lincoln, RI 02865
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ca-header-top-content d-flex ml-80">
              <div className="ca-header-top-icon">
                <span className="mr-8">
                  <img src={icon3} alt="" />
                </span>
              </div>
              <div className="ca-header-top-text">
                <Link to="" className="ca-top-title text-white">
                  Tuesday - Saturday 8:00 Am - 5:00 Pm{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="ca-header-top-content d-flex justify-content-end">
              <div className="ca-header-top-icon">
                <span className="mr-8">
                  <img src={icon4} alt="" />
                </span>
              </div>
              <div className="ca-header-top-text">
                <Link to="tel:+14015958647" className="ca-top-title text-white">
                  Call Now: +1 401-595-8647
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TopBar;