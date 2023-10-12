import React from "react";
import LogoFooter from "../assets/logo-2.png";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="item-footer">
          <p>
            ¿Buscas un lugar para tu hogar? ¡Tenemos justo lo que necesitas!
          </p>
        </div>
        <div className="item-footer">
          <h2>Contáctanos</h2>
          <form action="">
            <div className="input-container">
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Apellido" />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Correo electronico" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Teléfono o Celular" />
            </div>
            <div className="input-container">
              <select name="metraje" id="lang">
                <option value="200mts">200 metros</option>
                <option value="275mts">275 metros</option>
                <option value="300mts">300 metros</option>
                <option value="325mts">325 metros</option>
                <option value="350mts">350 metros</option>
                <option value="400mts">400 metros</option>
                <option value="800mts">800 metros</option>
              </select>
            </div>
            <div className="input-container">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input-container submit">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="footer-footer">
        <div className="sub-item-footer">
          <h2>Menu</h2>
          <div className="menu-footer">
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/desarrollo">Desarrollo</Link>
            <Link to="/financiamiento">Financiamiento</Link>
          </div>
        </div>
        <div className="sub-item-footer">
          <img src={LogoFooter} alt="" className="logo-footer" />
        </div>
        <div className="sub-item-footer">
          <h2>Síguenos</h2>
          <div className="redes-footer">
            <a
              href="https://www.facebook.com/Regal.ResidencesMX"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/regal.residencesmx?igshid=ZDc4ODBmNjlmNQ=="
              target="_blank"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-finaly">
        <p>© 2023 Todos los derechos reservados Regal Residences.</p>
        <p>Desarrollado por Agencia Inspiración </p>
      </div>
    </div>
  );
};

export default Footer;
