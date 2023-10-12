import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import GaleryHome from "../Components/GaleryHome";
import VideoGround from "../Components/VideoGround";
import FondoMobile from "../Components/FondoMobile";
import Amenidades from "../Components/Amenidades";
import RenderFotos from "../Components/RenderFotos";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Amenidades />
      <RenderFotos />
      <GaleryHome />
      <FondoMobile />
      <VideoGround />
    </div>
  );
};

export default Home;
