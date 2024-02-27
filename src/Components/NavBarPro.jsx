import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Scroll from 'react-scroll';


import Logo from "../assets/logo-2.png";
import "../Styles/navbar.css";

const NavBarPro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  
  const goToServicesAndScroll = async () => {
    await navigate('/');
    await scroller.scrollTo('servicios', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -90
    });
  };

  const goToHomeAndScroll = async () => {
    await navigate('/');
    await scroller.scrollTo('inicio', {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: 0
    });
  };

    const goToAboutAndScroll = async () => {
    await navigate('/');
    await scroller.scrollTo('about', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -80
    });
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
            <a 
              onClick={() => goToHomeAndScroll() }
            >
              Inicio
            </a>
            <a 
              onClick={() => goToAboutAndScroll()}
            >
              Nosotros
            </a>
            <a 
              
              onClick={() => goToServicesAndScroll() }
            >
              Servicios
            </a>
            <a 
            href="#/promociones"
              onClick={() => handleClick(!isOpen)}
            >
              Promociones
            </a>
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
              <a href="tel:5544754479" target="_blank">
                <i className="fa-solid fa-phone"></i>
                <p>5544754479</p>
              </a>
            </div>
          </div>
          <div className={`menu-down ${isOpen ? "up" : ""}`} id="menu-down">
            <h2>Síguenos</h2>
            <div className="redes-menu-down">
              <a
                href="https://www.facebook.com/dentalramac?locale=es_LA"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/dental.ramac?igshid=NTc4MTIwNjQ2YQ=="
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
            <a 
              onClick={() => goToHomeAndScroll() }
            >
              Inicio
            </a>
            </div>

            <div className="nav-link">
            <a 
              onClick={() => goToAboutAndScroll()}
            >
              Nosotros
            </a>
            </div>

            <div className="nav-link">
            <a 
              
              onClick={() => goToServicesAndScroll() }
            >
              Servicios
            </a>
            </div>
            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <a href="#/promociones"

              
            >Promociones</a>
            </div>
            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <a href="tel:5544754479" className="btn-header-contacto">
                5544754479
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

export default NavBarPro;
