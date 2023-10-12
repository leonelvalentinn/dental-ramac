import React from "react";
import "../Styles/financiamiento.css";
import HeroFinanciamiento from "../Components/HeroFinanciamiento";
import SliderF from "../Components/SliderF";
import DescriptionF from "../Components/DescriptionF";

const Financiamiento = () => {
  return (
    <div>
      <HeroFinanciamiento />
      <SliderF />
      <DescriptionF />
    </div>
  );
};

export default Financiamiento;
