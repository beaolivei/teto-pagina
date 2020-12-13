import React from "react";
import Carousel from "react-elastic-carousel";

const Slider = ({ sliderItems }) => (
  <Carousel itemsToShow={1}>
    {sliderItems.map((i) => (
      <img src={i.image} />
    ))}
  </Carousel>
);

export default Slider;
