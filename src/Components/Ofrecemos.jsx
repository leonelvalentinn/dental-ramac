
import ButtonContact from "../Components/ButtonContact";
import "../Styles/ofrecemos.css";

const Ofrecemos = () => {
  return (
    <div className="ofrecemos">
      <h2>¿Qué te ofrecemos?</h2>
      <div className="container-ofrecemos">
        <div className="item-ofrecemos">
          <img src='' alt="" />

          <h2>Excelente Ubicación</h2>
          <p>
            Gracias a la ubicación geográfica de Regal Residences encontrarás
            distintos lugares para divertirte y relajarte con tus seres
            queridos, a unos cuántos minutos de distancia.
          </p>
          <ButtonContact />
        </div>
        <div className="item-ofrecemos">
          <img src='' alt="" />

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
          <img src='' alt="" />

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
