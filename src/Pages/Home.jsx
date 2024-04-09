import Hero from '../Components/Hero'
import About from '../Components/About'
import VideoGround from '../Components/VideoGround'
import RenderFotos from '../Components/RenderFotos'
import Navbar from '../Components/Navbar'
import SliderF from '../Components/SliderF'
import { Urgencias } from '../Components/Urgencias'
import { Modal } from '../Components/Modal'
// import Amenidades from '../Components/Amenidades'
// import GalleryHome from '../Components/GalleryHome'

const Home = () => {
  return (
    <div id='inicio'>
      <Navbar />
      <Hero />
      <About />
      <RenderFotos />
      <Urgencias />
      <SliderF />
      {/* <GalleryHome /> */}
      {/* <Amenidades />  */}
      <VideoGround />
      <Modal />
    </div>
  )
}

export default Home
