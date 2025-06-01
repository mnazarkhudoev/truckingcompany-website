;
import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";
const BackToTop = () => {
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const backToTop = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (backToTop.current) {
        if (window.scrollY > 200) {
          backToTop.current.classList.add("d-flex");
        } else {
          backToTop.current.classList.remove("d-flex");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Button ref={backToTop} variant="dark" className="back-to-top-btn justify-content-center align-items-center" id="topBtn3" onClick={topFunction}>
        <FaArrowUp />
    </Button>;
};
export default BackToTop;