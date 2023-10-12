import React from "react";
import HeroAbout from "../Components/HeroAbout";
import AboutMe from "../Components/AboutMe";
import Ofrecemos from "../Components/Ofrecemos";
import Description from "../Components/Description";
import Amenidades from "../Components/Amenidades";

const Nosotros = () => {
  return (
    <div>
      <HeroAbout />
      <Amenidades />
      <AboutMe />
      <Ofrecemos />
      <Description />
    </div>
  );
};

export default Nosotros;
