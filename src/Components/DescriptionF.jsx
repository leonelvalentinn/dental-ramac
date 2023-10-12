import React from "react";
import "../Styles/description-f.css";

const DescriptionF = () => {
  return (
    <div className="description">
      <h2 className="title-des">Que te ofrecemos</h2>
      <div className="container-description">
        <div className="item-description">
          <h2>Terrenos Residenciales en Tequesquitengo Morelos</h2>
          <h3>Con la mejor vista al lago</h3>
        </div>
        <div className="item-description">
          <p>
            En Regal Residences te brindamos un hogar donde la naturaleza y
            tranquilidad del lago son un pilar fundamental para ti y tu familia.
            Un desarrollo pensado para crear un sola comunidad con diferentes
            amenidades sin necesidad de salir del complejo. <br />
            Contamos con:
          </p>
          <ul className="list">
            <li>Servicios de agua y luz</li>
            <li>Amplio acceso y calles pavimentadas</li>
            <li>Seguridad las 24 horas</li>
            <li>Acceso controlado con caseta de vigilancia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionF;
