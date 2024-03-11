import { useState } from "react";
import { Link } from "react-scroll";
import Scroll from 'react-scroll';
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo-2.png";
import "../Styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  
  const goToHomeAndScroll = async () => {

    await navigate('/promociones');
    await scroller.scrollTo('inicio', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0
    });
  };

  const handleNavbar = () => {
    setIsNavbar(!isNavbar);
  };
  if (!handleNavbar) {
    console.log('')
  }
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
        <Link 
          to="inicio"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menu-link"
        >
          <img src={Logo} alt="" className="logo" />
        </Link>
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
            <Link 
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="menu-link"
              onClick={() => handleClick(!isOpen)}
            >
              Nosotros
            </Link>
            <Link 
              to="servicios"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="menu-link"
              onClick={() => handleClick(!isOpen)}
            >
              Servicios
            </Link>
            <a 
              onClick={() => goToHomeAndScroll()}
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
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <p>Información</p>
              </a>
              <a href="tel:5544754479" target="_blank" rel="noopener noreferrer">
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
        </nav>
        <nav className="navbar-descktop">
          <div className="container-descktop">
            <div className="nav-link">
            <Link 
              to="inicio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="menu-link"
              
            >
                Inicio
              </Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
            <Link 
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="menu-link"
              
            >Nosotros</Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
            <Link 
              to="servicios"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="menu-link"
              
            >Servicios</Link>
            </div>
            <div className="nav-link">
              <a onClick={() => goToHomeAndScroll() }

              
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

export default Navbar;
