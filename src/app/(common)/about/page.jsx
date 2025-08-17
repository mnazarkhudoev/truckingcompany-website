import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import { Container } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa6";
import ChooseUs from "./session/ChooseUs";
import Commitment from "./session/Commitment";
import OurTeam from "./session/OurTeam";
import OurValues from "./session/OurValues";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const page = () => {
  return <>
            <PageMeta title="About Us" />
            <main>
                <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                        <img src={breadCrumb} alt="Breadcrumb Shape" />
                    </div>
                    <Container>
                        <div className="ca-breadcrumb-content text-center">
                            <h2 className="ca-breadcrumb-title fnw-600">About Us</h2>
                            <div className="it-breadcum-link">
                                <Link to="/index-1">Home</Link>
                                <span>
                                    <FaChevronRight size={20} className="mb-1" />
                                </span>
                                <Link className="active" to="">
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                <Commitment />
                <ChooseUs />
                <OurValues />
                <OurTeam />
            </main>
        </>;
};
export default page;