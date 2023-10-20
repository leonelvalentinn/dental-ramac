import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-2.png";
import "../Styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNabvar = () => {
    setIsNavbar(!isNavbar);
  };

  const navbarBackground = () => {
    if (window.scrollY > 80) {
      setIsNavbar(true);
    } else {
      setIsNavbar(false);
    }
  };
  window.addEventListener("scroll", navbarBackground);

  return (
    <div className={`navbar ${isNavbar ? "back" : ""}`} id="navbar">
      <div className="container-navbar">
        <div className="logo-container">
          <img src={Logo} alt="" className="logo" />
        </div>

        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <div className={`menu-top ${isOpen ? "aparecer" : ""}`}>
            <i
              className="fa-solid fa-xmark close"
              onClick={() => setIsOpen(!isOpen)}
            ></i>
            <Link to="/" onClick={() => handleClick(!isOpen)}>
              Inicio
            </Link>
            <Link to="/" onClick={() => handleClick(!isOpen)}>
              Nosotros
            </Link>
            <Link to="/" onClick={() => handleClick(!isOpen)}>
              Servicios
            </Link>
            <Link to="/promociones" onClick={() => handleClick(!isOpen)}>
              Promociones
            </Link>
          </div>
          <div className={`menu-middle ${isOpen ? "left" : ""}`}>
            <h2>Contáctanos</h2>
            <div className="menu-middle-submenu">
              <a
                href="https://api.whatsapp.com/send?phone=525544754479"
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp"></i>
                <p>Información</p>
              </a>
              <a href="tel:5554041962" target="_blank">
                <i className="fa-solid fa-phone"></i>
                <p>5554041962</p>
              </a>
            </div>
          </div>
          <div className={`menu-down ${isOpen ? "up" : ""}`} id="menu-down">
            <h2>Síguenos</h2>
            <div className="redes-menu-down">
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
        </nav>
        <nav className="navbar-descktop">
          <div className="container-descktop">
            <div className="nav-link">
              <Link to="/" onClick={() => setIsNavbar(!isNavbar)}>
                Inicio
              </Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <Link to="/">Nosotros</Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <Link to="/">Servicios</Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <Link to="/promociones">Promociones</Link>
            </div>
            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <a href="tel:5554041962" className="btn-header-contacto">
                5554041962
              </a>
            </div>
          </div>
        </nav>
        <div className="menu-bar" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
