import React from "react";
import ReactPlayer from "react-player";

import "../Styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h2>¿Quienes Somos?</h2>
      <div className="container-about">
        <div className="item-about">
          <h4>Conócenos</h4>
          <p>
            Somos un desarrollo que ofrece terrenos residenciales con espacios
            diseñados para los gustos más exigentes y las amenidades necesarias
            para que tengas una vida cómoda y placentera junto a tus seres
            queridos y con una increíble vista al lago de Tequesquitengo
            Morelos. Diseño, confort y exclusividad caracterizan nuestro
            desarrollo.
          </p>
        </div>
        <div className="item-about player-wrapper">
          <ReactPlayer
            url={"https://vimeo.com/839896157?share=copy"}
            autoplay
            controls={true}
            loop
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
