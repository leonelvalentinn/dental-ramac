
import "../Styles/render-fotos.css";
import Render1 from "../assets/IMG_0112.webp";
import Render6 from "../assets/sucursal.webp";
import Render5 from "../assets/station-1.webp";
import Render4 from "../assets/station-2.webp";
import Render3 from "../assets/station-3.webp";
import Render2 from "../assets/IMG_0119.webp";

const RenderFotos = () => {
  return (
    <div className="render-fotos">
      <h2>Nuestras Instalaciones</h2>
      {/*<p>Imágenes de render</p>*/}
      <div className="container-render-fotos">
        <div className="item-render-fotos">
          <img src={Render1} alt="Fachada Dental Ramac" decoding="async" loading="lazy"/>
        </div>
        <div className="item-render-fotos">
          <img src={Render2} alt="Sala de espera" decoding="async" loading="lazy"/>
        </div>
        <div className="item-render-fotos">
          <img src={Render3} alt="Sala de espera" decoding="async" loading="lazy"/>
        </div>
        <div className="item-render-fotos">
          <img src={Render4} alt="Consultorio de la Dra. Nora" decoding="async" loading="lazy"/>
        </div>
        <div className="item-render-fotos">
          <img src={Render5} alt="Vista general de las estaciones de servicio" decoding="async" loading="lazy"/>
        </div>
        <div className="item-render-fotos">
          <img src={Render6} alt="Estación de servicios" decoding="async" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default RenderFotos;
