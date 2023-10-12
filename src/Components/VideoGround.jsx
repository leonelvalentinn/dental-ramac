import React from "react";
import "../Styles/video.css";
import Video from "../assets/background.mp4";
import ButtonContact from "./ButtonContact";

const VideoGround = () => {
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
          <h2>¡Vive tus sueños en Tequesquitengo!</h2>
          <p>
            Construye tu futuro en un lugar exclusivo, conoce Regal Residences
          </p>

          <ButtonContact />
        </div>
      </div>
    </div>
  );
};

export default VideoGround;
