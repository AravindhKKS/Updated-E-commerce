import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import "./Slider.css";
import { sliderItem } from "../../Data";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : sliderItem.length - 1
      );
    } else {
      setCurrentSlide(
        currentSlide < sliderItem.length - 1 ? currentSlide + 1 : 0
      );
    }
  };

  return (
    <div className="Slider">
      <div className="SliderArrow left " onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      {sliderItem.map((item) => (
        <div
          className="sliderWrapper"
          key={item.id}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="sliderImage">
            <img src={item.img} alt="" />
          </div>
          <div className="slideTextContainer">
            <div className="sliderTitle">{item.title}</div>
            <div className="sliderDesc">{item.desc}</div>
            <button className="button">SHOP NOW</button>
          </div>
        </div>
      ))}
      <div className="SliderArrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
