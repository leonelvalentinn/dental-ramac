import React from "react";
import "../Styles/render-fotos.css";
import Render1 from "../assets/IMG_0112.jpg";
import Render2 from "../assets/IMG_0176.jpg";
import Render3 from "../assets/IMG_0119.jpg";
import Render4 from "../assets/IMG_0124.jpg";
import Render5 from "../assets/IMG_0141.jpg";
import Render6 from "../assets/IMG_0177.jpg";
import Render7 from "../assets/render7.jpg";
import Render8 from "../assets/render8.jpg";
const RenderFotos = () => {
  return (
    <div className="render-fotos">
      <h2>Nuestras Instalaciones</h2>
      {/*<p>Imágenes de render</p>*/}
      <div className="container-render-fotos">
        <div className="item-render-fotos">
          <img src={Render1} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render2} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render3} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render4} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render5} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render6} alt="" />
        </div>
        {/*<div className="item-render-fotos">
          <img src={Render7} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render8} alt="" />
        </div>*/}
      </div>
    </div>
  );
};

export default RenderFotos;
