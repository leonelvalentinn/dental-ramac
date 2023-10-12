import React from "react";
import Plano from "../assets/about.jpg";
import "../Styles/description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="container-description">
        <div className="item-description">
          <p>
            <span>Regal Residences se ubica</span> en la zona norte del Lago de
            Tequesquitengo en el circuito Circunvalación que rodea la costa,
            frente al Hotel Teques Inn. Tequesquitengo se encuentra a 70 minutos
            de la Ciudad de México, 2 horas desde la Puebla, Puebla, 90 minutos
            desde Chilpancingo, Guerrero y 2:30 horas desde Toluca, Estado de
            México.
          </p>
        </div>
        <div className="item-description">
          <img src={Plano} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
