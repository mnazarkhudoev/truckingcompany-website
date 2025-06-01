;
import v_play from "@/assets/img/service/v-play.png";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
const VideoPlaySection = () => {
  const counterItems = [{
    id: 1,
    value: 65,
    label: "Air Freight"
  }, {
    id: 2,
    value: 49,
    label: "Land Freight"
  }, {
    id: 3,
    value: 51,
    label: "Shipping Service"
  }];
  const [counterValues, setCounterValues] = useState([0, 0, 0]);
  useEffect(() => {
    const incrementCounters = () => {
      counterItems.forEach((item, index) => {
        const interval = setInterval(() => {
          setCounterValues(prevValues => {
            const newValues = [...prevValues];
            if (newValues[index] < item.value) {
              newValues[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newValues;
          });
        }, 10);
      });
    };
    incrementCounters();
  }, []);
  return <section className="video-play-section">
      <div className="container">
        <div className="ca-video-img br-7 p-relative z-index-1">
          <img className="w-100" src={v_play} alt="Video Background" />

          <a href="https://www.youtube.com/watch?v=HkYGxh1XUGQ" className="video-play-button popup-video">
            <span>
              <FaPlay size={24} />
            </span>
          </a>

          <div className="ca-counter-3 p-absolute">
            {counterItems.map((item, index) => <div key={item.id} className="ca-counter-area-3">
                <h3 className="ca-counter-title text-white fnw-700 pb-12">
                  <span className="counter">{counterValues[index]}</span>%
                </h3>
                <p>{item.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default VideoPlaySection;