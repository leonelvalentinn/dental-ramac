import React from "react";
import "../Styles/sliderf.css";
import f1 from "../assets/finan.png";
import f2 from "../assets/aval.png";
import f3 from "../assets/buro.png";

import f4 from "../assets/carta.png";

import f5 from "../assets/domicilio.png";

const SliderF = () => {
  return (
    <div className="slider-f">
      <h2>Nuestro financiamiento</h2>
      <div className="container-slider-f">
        <div className="item-slider-f">
          <img src={f1} alt="" />
          <h2>Hasta por 3 años</h2>
          <h2>12, 24 o 36 meses</h2>
        </div>
        <div className="item-slider-f">
          <img src={f2} alt="" />
          <h2>Sin aval</h2>
        </div>
        <div className="item-slider-f">
          <img src={f3} alt="" />
          <h2>Sin checar buró de credito</h2>
        </div>
        <div className="item-slider-f">
          <img src={f4} alt="" />
          <h2>Sin cartas de recomendación</h2>
        </div>
        <div className="item-slider-f">
          <img src={f5} alt="" />
          <h2>Sin comprobantes de domicilio</h2>
        </div>
      </div>
    </div>
  );
};

export default SliderF;
