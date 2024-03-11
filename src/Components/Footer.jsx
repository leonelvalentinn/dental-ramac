
import LogoFooter from "../assets/logo-2.png";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="item-footer">
          <div>
            <h3>Ubicación</h3>
            <p>
            Escocia 11, Parque San Andrés, Coyoacán, <br /> Ciudad de México, CDMX
            </p>
          </div>
          <div>
            <h3>Horario</h3>
            <p>
            Lunes a Viernes de 9:30 a 2:00pm y 3:30 a 7:00 pm <br />
            Sábados de 9:00 a 2:00 pm
            </p>
          </div>
        </div>
        <div className="item-footer">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.4924426267685!2d-99.14818509031076!3d19.34781874330969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd2d35a6713%3A0x1e1f230d9bd5da44!2sDental%20Ramac!5e0!3m2!1ses-419!2smx!4v1697240032987!5m2!1ses-419!2smx" 
          width="600" 
          height="450" 
          style={{ border: 0 }}
          allowfullscreen="" 
          loading="lazy" 
          >
        </iframe>
        </div>
      </div>
      <div className="footer-footer">
        <div className="sub-item-footer">
          <h2>Menu</h2>
          <div className="menu-footer">
            <Link to="/">Inicio</Link>
            <Link to="/">Nosotros</Link>
            <Link to="/">Servicios</Link>
            <Link to="/promociones">Promociones</Link>
          </div>
        </div>
        <div className="sub-item-footer">
          <img src={LogoFooter} alt="" className="logo-footer" />
        </div>
        <div className="sub-item-footer">
          <h2>Síguenos</h2>
          <div className="redes-footer">
            <a
              href="https://www.facebook.com/dentalramac?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/dental.ramac?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-finaly">
        <p>© 2023 Todos los derechos reservados Dental Ramac.</p>
        <p>Desarrollado por Agencia Dentarios </p>
      </div>
    </div>
  );
};

export default Footer;
