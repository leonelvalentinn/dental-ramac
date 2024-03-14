
import "../Styles/hero.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import Slider1 from "../assets/IMG_0145.webp";
import Slider2 from "../assets/IMG_8526.webp";
import Slider3 from "../assets/hero-4.webp";

import ButtonContact from "./ButtonContact";

const Hero = () => {
  return (
    <div className="slider" id="inicio">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop
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
          <img src={Slider1} className="img-slider" alt="Foto grupal del equipo Dental Ramac"/>
          <div className="container-text">
            <div className="text-slider">
              <p>El día más malgastado de todos es sin una sonrisa. <small>(Edward Estlin Cummings)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="img-slider" />
          <div className="container-text">
            <div className="text-slider">
              <p>Un día sin sonreír es un día perdido. <small>(Charlie Chaplin)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} className="img-slider" />
          <div className="container-text">
            <div className="text-slider">
              <p>Sonreír es definitivamente uno de los mejores y más bellos remedios. <small>(Paulo Coelho)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Slider4} className="img-slider" />
          <div className="container-text">
            <div className="text-slider">
              <p>La sonrisa es una curva que lo endereza todo. <small>(Phyllis Diller)</small></p>
              <ButtonContact />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
