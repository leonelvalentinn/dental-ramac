import React from "react";
import { Link } from "react-router-dom";
import "../Styles/amenidades.css";
import area1 from "../assets/amenidad1.png";
import area2 from "../assets/doc-1.jpg";
import area3 from "../assets/doc-2.jpg";
import area4 from "../assets/doc-4.jpg";
import area5 from "../assets/doc-3.jpg";
import area6 from "../assets/amenidad6.png";

const Amenidades = () => {
  return (
    <div className="amenidades">
      <h2>Nuestro Equipo</h2>
      <div className="container-amenidades">
        <div className="item-amenidades">
          <img src={area2} alt="" />
          <h2>ESP. Marcela Ramírez Macias</h2>
        </div>
        <div className="item-amenidades">
          <img src={area3} alt="" />
          <h2> Dr. Miguel Ángel</h2>
        </div>
        <div className="item-amenidades">
          <img src={area4} alt="" />
          <h2>Dra. Juana Patricia Vélez</h2>
        </div>
        <div className="item-amenidades">
          <img src={area5} alt="" />
          <h2>Dr. Joan Kenedy Mayo</h2>
        </div>
        <div className="item-amenidades">
          <img src={area5} alt="" />
          <h2>Dr. Joan Kenedy Mayo</h2>
        </div>
        <div className="item-amenidades">
          <img src={area5} alt="" />
          <h2>Dr. Joan Kenedy Mayo</h2>
        </div>
        {/*<div className="item-amenidades">
          <img src={area6} alt="" />
          <h2>Dra. Silvia Pérez</h2>
        </div>
        <div className="item-amenidades">
          <img src={area1} alt="" />
          <h2>Dr. Omar Arenas</h2>
        </div>*/}
      </div>
      {/*<Link to="/amenidades">Ver más</Link>*/}
    </div>
  );
};

export default Amenidades;
