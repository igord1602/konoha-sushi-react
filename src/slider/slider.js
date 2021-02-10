import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Switch, Route } from "react-router-dom";
import "./slide.css";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide7.jpg";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const Slider = () => (
  <Switch>
    <Route exact path="/">
      <SliderItem />
    </Route>
  </Switch>
);

const SliderItem = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 7000 }}
      navigation
      pagination={{ clickable: true, dynamicBullets: false }}
    >
      <SwiperSlide>
        <img src={slide1} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide6} alt="logo" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
