import React from "react";
import { Link } from "react-router-dom";
import "../Styles/amenidades.css";
import area1 from "../assets/amenidad1.png";
import area2 from "../assets/amenidad2.png";
import area3 from "../assets/amenidad3.png";
import area4 from "../assets/amenidad4.png";
import area5 from "../assets/amenidad5.png";
import area6 from "../assets/amenidad6.png";

const Amenidades = () => {
  return (
    <div className="amenidades">
      <h2>Amenidades</h2>
      <div className="container-amenidades">
        <div className="item-amenidades">
          <img src={area2} alt="" />
          <h2>Pista de jogging</h2>
        </div>
        <div className="item-amenidades">
          <img src={area3} alt="" />
          <h2> Alberca</h2>
        </div>
        <div className="item-amenidades">
          <img src={area4} alt="" />
          <h2>Áreas verdes</h2>
        </div>
        <div className="item-amenidades">
          <img src={area5} alt="" />
          <h2>Juegos infantiles</h2>
        </div>
        <div className="item-amenidades">
          <img src={area6} alt="" />
          <h2>Área para mascotas</h2>
        </div>
        <div className="item-amenidades">
          <img src={area1} alt="" />
          <h2>Restaurante bar</h2>
        </div>
      </div>
      <Link to="/amenidades">Ver más</Link>
    </div>
  );
};

export default Amenidades;
