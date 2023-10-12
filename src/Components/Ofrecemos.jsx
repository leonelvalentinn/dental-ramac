import React from "react";
import Img1 from "../assets/slider-1.jpg";
import Img2 from "../assets/seguridad.jpg";
import Img3 from "../assets/financiamiento.jpg";
import ButtonContact from "../Components/ButtonContact";
import "../Styles/ofrecemos.css";

const Ofrecemos = () => {
  return (
    <div className="ofrecemos">
      <h2>¿Qué te ofrecemos?</h2>
      <div className="container-ofrecemos">
        <div className="item-ofrecemos">
          <img src={Img1} alt="" />

          <h2>Excelente Ubicación</h2>
          <p>
            Gracias a la ubicación geográfica de Regal Residences encontrarás
            distintos lugares para divertirte y relajarte con tus seres
            queridos, a unos cuántos minutos de distancia.
          </p>
          <ButtonContact />
        </div>
        <div className="item-ofrecemos">
          <img src={Img2} alt="" />

          <h2>Seguridad</h2>
          <p>Vive comodo y seguro con nosotros</p>
          <ul>
            <li>Fraccionamiento 100% cerrado</li>
            <li>Seguridad las 24 horas</li>
            <li>Acceso controlado con caseta de vigilancia las 24 horas</li>
          </ul>

          <ButtonContact />
        </div>
        <div className="item-ofrecemos">
          <img src={Img3} alt="" />

          <h2>Financiamiento</h2>
          <p>Contamos con los mejores planes de financiamiento. </p>
          <ul>
            <li>Sin aval</li>
            <li>Sin comprobar ingresos</li>
            <li>Sin revisión de buró de crédito</li>
          </ul>

          <ButtonContact />
        </div>
      </div>
    </div>
  );
};

export default Ofrecemos;
