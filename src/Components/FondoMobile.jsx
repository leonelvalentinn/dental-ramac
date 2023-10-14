import React from "react";
import fondo from "../assets/render3.jpg";
import "../Styles/fondo.css";
import "../Styles/video.css";
import Video from "../assets/background-mobile.mp4";
import ButtonContact from "./ButtonContact";

const FondoMobile = () => {
  return (

    <div className="container-video">
      <video
        src={Video}
        className="video-escritorio"
        autoPlay
        loop
        muted
      ></video>

      <div className="video-text">
        <div className="container-video-text">
          <h2>¡No lo pienses más!</h2>
          <p>
            El mejor momento para visitar el dentista es cuando no te duele nada.
          </p>

          <ButtonContact />
        </div>
      </div>
    </div>
  
  );
};

export default FondoMobile;
