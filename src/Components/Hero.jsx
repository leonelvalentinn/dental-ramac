import '../Styles/hero.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

// import required modules
import { Autoplay, EffectFade } from 'swiper'
import Slider1 from '../assets/slider-compu-1.jpg'
import Slider2 from '../assets/slider-compu-2.jpg'
import Slider3 from '../assets/slider-compu-3.webp'

import Slider4 from '../assets/slider-phone-1.jpg'
import Slider5 from '../assets/slider-phone-2.jpg'
import Slider6 from '../assets/slider-phone-3.webp'
import Slider7 from '../assets/slider-phone-4.jpg'

import ButtonContact from './ButtonContact'

const Hero = () => {
  return (
    <div className='slider' id='inicio'>
      <Swiper
        spaceBetween={30}
        effect='fade'
        loop
        navigation
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, EffectFade]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='container-item'>
            <div className='item-slider'>
              <img
                src={Slider2}
                className='img-slider'
                alt='Foto grupal del equipo Dental Ramac'
              />
              <img src={Slider4} className='img-slider phone' />
              <div className='container-text'>
                <div className='text-slider'>
                  <p>
                    El día más malgastado de todos es sin una sonrisa.{' '}
                    <small>(Edward Estlin Cummings)</small>
                  </p>
                  <ButtonContact />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container-item'>
            <div className='item-slider'>
              <img src={Slider1} className='img-slider' />
              <img src={Slider5} className='img-slider phone' />
              <div className='container-text'>
                <div className='text-slider'>
                  <p>
                    Un día sin sonreír es un día perdido.{' '}
                    <small>(Charlie Chaplin)</small>
                  </p>
                  <ButtonContact />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container-item'>
            <div className='item-slider'>
              <img src={Slider3} className='img-slider' />
              <img src={Slider6} className='img-slider phone' />
              <div className='container-text'>
                <div className='text-slider'>
                  <p>
                    Sonreír es definitivamente uno de los mejores y más bellos
                    remedios. <small>(Paulo Coelho)</small>
                  </p>
                  <ButtonContact />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container-item'>
            <div className='item-slider'>
              <img src={Slider7} className='img-slider phone' />
              <div className='container-text'>
                <div className='text-slider'>
                  <p>
                    Sonreír es definitivamente uno de los mejores y más bellos
                    remedios. <small>(Paulo Coelho)</small>
                  </p>
                  <ButtonContact />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
