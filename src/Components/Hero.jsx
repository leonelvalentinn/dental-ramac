import React, { useRef, useState } from "react";
import "../Styles/hero.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import Slider1 from "../assets/IMG_0124.jpg";
import Slider2 from "../assets/IMG_0176.jpg";
import Slider3 from "../assets/IMG_0221.jpg";
import Slider4 from "../assets/IMG_0237.jpg";
import Slider5 from "../assets/IMG_0115.jpg";
import Slider6 from "../assets/IMG_0176-m.jpg";
import Slider7 from "../assets/IMG_0237.jpg";
import Slider8 from "../assets/IMG_0221.jpg";

import ButtonContact from "./ButtonContact";

const Hero = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} className="img-slider" />
          <img src={Slider5} alt="" className="img-movil" />
          <div className="container-text">
            <div className="text-slider">
              <p>El día más malgastado de todos es sin una sonrisa. <small>(Edward Estlin Cummings)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="img-slider" />
          <img src={Slider6} alt="" className="img-movil" />
          <div className="container-text">
            <div className="text-slider">
              <p>Un día sin sonreír es un día perdido. <small>(Charlie Chaplin)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} className="img-slider" />
          <img src={Slider7} alt="" className="img-movil" />
          <div className="container-text">
            <div className="text-slider">
              <p>Sonreír es definitivamente uno de los mejores y más bellos remedios. <small>(Paulo Coelho)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider4} className="img-slider" />
          <img src={Slider8} alt="" className="img-movil" />
          <div className="container-text">
            <div className="text-slider">
              <p>La sonrisa es una curva que lo endereza todo. <small>(Phyllis Diller)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
