import React from "react";
import HeroAmenidades from "../Components/HeroAmenidades";
import CardAmenidades from "../Components/CardAmenidades";
import VideoGround from "../Components/VideoGround";  
import NavBarPro from "../Components/NavBarPro";

const AmenidadesHome = () => {
  return (
    <div id="inicio">
      <NavBarPro />
      <HeroAmenidades />
      <CardAmenidades />
      <VideoGround />
    </div>
  );
};

export default AmenidadesHome;
