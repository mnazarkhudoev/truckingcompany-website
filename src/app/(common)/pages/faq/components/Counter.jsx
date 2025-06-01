import ReactCountUp from "react-countup";
const Counter = () => {
  return <h3 className="ca-counter-title fnw-700 pb-16">
            <span className="counter">
                <ReactCountUp start={2} end={28} duration={2} separator=" "></ReactCountUp>
            </span>
            +
        </h3>;
};
export default Counter;