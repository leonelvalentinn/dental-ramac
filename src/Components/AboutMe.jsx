import React from "react";
import "../Styles/about-me.css";
import team from "../assets/team.jpg";

import ButtonContact from "./ButtonContact";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>Nosotros</h2>
      <div className="container-about-me">
        <div className="item-about-me">
          <img src={team} alt="" />
        </div>
        <div className="item-about-me">
          <h3>
            Somos un grupo de inversión con proyectos de alto rendimiento y
            excelentes ubicaciones en Tequesquitengo Morelos.
          </h3>
          <p>
            Somos un grupo de expertos capacitados en ofrecer proyectos de
            inversión que ayuden a las personas y a las empresas a crecer y
            formar un patrimonio rentable para el futuro. Nuestros proyectos
            incluyen lotes de inversión, terrenos y desarrollos de alta
            plusvalía en las zonas de mayor crecimiento económico y con acceso a
            carreteras federales de la zona.
          </p>
        </div>
      </div>
      <ButtonContact />
    </div>
  );
};

export default AboutMe;
