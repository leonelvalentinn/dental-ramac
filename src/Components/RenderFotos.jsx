import React from "react";
import "../Styles/render-fotos.css";
import Render1 from "../assets/render1.jpg";
import Render2 from "../assets/render2.jpg";
import Render3 from "../assets/render3.jpg";
import Render4 from "../assets/render4.jpg";
import Render5 from "../assets/render5.jpg";
import Render6 from "../assets/render6.jpg";
import Render7 from "../assets/render7.jpg";
import Render8 from "../assets/render8.jpg";
const RenderFotos = () => {
  return (
    <div className="render-fotos">
      <h2>Nuestro Desarrollo</h2>
      <p>Imagenes de render</p>
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
        <div className="item-render-fotos">
          <img src={Render7} alt="" />
        </div>
        <div className="item-render-fotos">
          <img src={Render8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RenderFotos;
