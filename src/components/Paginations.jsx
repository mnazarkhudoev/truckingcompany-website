import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Paginations = () => {
  return <div className="row">
      <div className="col-12 m-auto">
        <div className="theme-pagination text-center">
          <ul>
            <li>
              <Link to="#">
                  <FaChevronLeft />
              </Link>
            </li>
            <li>
              <Link className="active" to="">
                01
              </Link>
            </li>
            <li>
              <Link to="#">02</Link>
            </li>
            <li>...</li>
            <li>
              <Link to="#">12</Link>
            </li>
            <li>
              <Link to="#">
                  <FaAngleRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};
export default Paginations;