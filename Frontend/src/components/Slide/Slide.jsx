import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={4} arrowsScroll={4}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
