import Hero from "../Components/Hero";
import About from "../Components/About";
import GaleryHome from "../Components/GaleryHome";
import VideoGround from "../Components/VideoGround";
import Amenidades from "../Components/Amenidades";
import RenderFotos from "../Components/RenderFotos";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div id="inicio">
      <Navbar />
      <Hero />
      <About />
      <Amenidades />
      <RenderFotos />
      <GaleryHome />
      <VideoGround />
    </div>
  );
};

export default Home;
