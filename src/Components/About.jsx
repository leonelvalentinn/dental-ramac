import React from "react";
import ReactPlayer from "react-player";
import fondo from "../assets/hero-bg.jpg"

import "../Styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h2>¿Quiénes Somos?</h2>
      <div className="container-about">
        <div className="item-about">
          <h4>Conócenos</h4>
          <p>
            Somos una clínica dental com más de 20 años de experiencia. Nuestra misión es proporcionar a nuestros 
            pacientes atención dental de vanguardia, 
            utilizando tecnología de última generación y un equipo de profesionales altamente capacitados. 
            Siempre esforzándonos por mejorar tu salud bucal.

          </p>
        </div>
        <div className="item-about">
          {/*<ReactPlayer
            url={"https://vimeo.com/839896157?share=copy"}
            autoplay
            controls={true}
            loop
            width="100%"
            height="100%"
            className="react-player"
          />*/}
          <img src={fondo} alt="Fondo nosotros" />
        </div>
      </div>
    </div>
  );
};

export default About;
