import Hero from '../Components/Hero'
import About from '../Components/About'
import VideoGround from '../Components/VideoGround'
import Office from '../Components/Office'
import Navbar from '../Components/Navbar'
import SliderF from '../Components/SliderF'
import { Urgencias } from '../Components/Urgencias'
// import Amenidades from '../Components/Amenidades'
// import GalleryHome from '../Components/GalleryHome'

const Home = () => {
  return (
    <div id='inicio'>
      <Navbar />
      <Hero />
      <About />
      <Office />
      <Urgencias />
      <SliderF />
      {/* <GalleryHome /> */}
      {/* <Amenidades />  */}
      <VideoGround />
    </div>
  )
}

export default Home
