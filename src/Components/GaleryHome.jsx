import React, { useState } from "react";
import "../Styles/galeryHome.css";
import foto1 from "../assets/odontologia-preventiva.jpg";
import foto2 from "../assets/cirugia-bucal.jpg";
import foto3 from "../assets/implantologia.jpg";
import foto4 from "../assets/rehabilitacion.jpg";
import foto5 from "../assets/endodoncia.jpg";
import foto6 from "../assets/ortodoncia.jpg";
import foto7 from "../assets/odontopediatria.jpg";
import foto8 from "../assets/consulta-1.jpg";
import foto9 from "../assets/consulta.jpeg";
import foto10 from "../assets/patologia-bucal.jpg";
import foto12 from "../assets/laboratorio.png";
import foto13 from "../assets/rectangulo-ninos.jpg";

import lab from "../assets/IMG_0236.jpg";
import imp from "../assets/IMG_0212.jpg";
import endo from "../assets/IMG_0205.jpg";
import orto from "../assets/ortodoncia-1.jpg"
import cir from "../assets/IMG_0184.jpg";
import pato from "../assets/pato.webp";
import ButtonContact from "../Components/ButtonContact";

const GaleryHome = () => {
  const infoModal = [
    {
      id: 1,
      img: pato,
      title: "Odontología Preventiva",
      info: "La odontología preventiva es todo cuidado dental que ayuda a mantener una buena salud oral. Es una combinación de chequeos dentales regulares y el desarrollo de buenos hábitos, como el cepillado y el uso del hilo dental.",
    },
    {
      id: 2,
      img: foto1,
      title: "Rehabilitación Oral",
      info: "La rehabilitación oral es un campo de la odontología que se especializa en la restauración inmediata de los dientes con el fin de recuperar la funcionalidad y la armonía estética.",
    },
    {
      id: 3,
      img: imp,
      title: "Implantología",
      info: "Es una disciplina odontológica que se dedica al reemplazo de dientes perdidos mediante la colocación quirúrgica de un implante dental en el maxilar o la mandíbula. A día de hoy se considera una de las técnicas más eficaces de rehabilitación dental.",
    },
    {
      id: 4,
      img: endo,
      title: "Endodoncia",
      info: "Es un tratamiento para dientes infectados o descompuestos gravemente cuya causa parte del nervio del diente.",
    },

    {
      id: 5,
      img: orto,
      title: "Ortodoncia",
      info: "Es una especialidad odontológica que estudia, previene y corrige las alteraciones del desarrollo, las formas de las arcadas dentarias y la posición de los maxilares, con el fin de restablecer el equilibrio morfológico y funcional de la boca y de la cara, mejorando también la estética facial.",
    },
    {
      id: 6,
      img: foto7,
      title: "Odontopediatría",
      info: "Es la especialidad odontológica que proporciona cuidados terapéuticos y preventivos referentes a la salud bucodental de bebés y niños hasta la edad adolescente, incluyendo aquellos que requieran de necesidades especiales.",
    },
    {
      id: 7,
      img: cir,
      title: "Cirugía Bucal",
      info: "Hace referencia a cualquier procedimiento quirúrgico en la boca y la mandíbula o alrededor de estas, generalmente hecho por un especialista dental capacitado para realizar ciertos tipos de cirugías orales.",
    },
    {
      id: 8,
      img: pato,
      title: "Patología Bucal",
      info: "Es el área de la odontología y la disciplina de la patología que se ocupa del origen, la identificación y la solución de las enfermedades orales que atentan a la boca y los dientes.",
    },
    {
      id: 9,
      img: lab,
      title: "Laboratorio Dental",
      info: "Contamos con laboratorio dental en nuestra clinica, esto hace que tu tratamiento sea más rápido y eficiente.",
    },
    {
      id: 10,
      img: foto9,
      title: "Disfruta de la rica comida de la zona",
      info: "Como todo México tenemos la fortuna de tener una gran variedad de sabores , en tequesquitengo no es la excepción, ven y disfruta de toda la variedad de platillos.",
    },
    {
      id: 11,
      img: foto9,
      title: " Conocer la zona arqueológica de Xochicalco",
      info: "La zona arqueológica de Xochicalco ha sido declarada como Patrimonio de la Humanidad por la UNESCO, está ubicada a tan sólo 33 minutos de Tequesquitengo, en el estado de Morelos. En este lugar podrás ver el museo que con múltiples exposiciones relata la cultura que creó esta ciudad precolombina, entre sus construcciones están el juego de pelota y el observatorio astronómico.",
    },
    {
      id: 12,
      img: foto9,
      title: "Ir al pueblo mágico de Tepoztlán ",
      info: "Tepoztlán es una de las ciudades coloniales más atractivas de México. Está situada en un valle de montaña a 50 minutos de Tequequitengo. Esta región tiene volcanes cercanos, ríos y cascadas. Pero también muestra una mezcla de la época colonial y nuestra cultura indígena. Entre los sitios turísticos de esta ciudad se encuentran el Museo del ex Convento Dominico de La Natividad, la pirámide de la cima de la montaña, el mercado de artesanos que se instala todos los fines de semana y una multitud de sitios históricos y paisajes fuera de este mundo. ",
    },
  ];

  const [isModal, setIsModal] = useState(false);

  const openModal = (e) => {
    setIsModal(!isModal);

    let evento = e.target.id;
    modalOpen(evento);
  };

  const modalOpen = (evento) => {
    let atraction = document.getElementById("container-atractions");
    atraction.innerHTML = "";
    infoModal
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        atraction.innerHTML += `
        <img src=${texto.img} alt=""/>
        <h2 id="title-modal">${texto.title}<h2/>
        <p id="texto-modal">${texto.info}<p/>
        <a
            href="https://api.whatsapp.com/send?phone=525544754479"
            target="_blank"
            className="button-contact"
          >
            Contacto
          </a>
        `;
      });
  };

  return (
    <div className="galery" id="servicios">
      <h2> Servicios y Especialidades</h2>
      <div className="container-galery">
        <div className="item-galery">
          <h3>Odontología Preventiva</h3>
          <img src={foto1} alt="" />
          <button className="btn-mas" id="1" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Rehabilitación Oral</h3>
          <img src={foto4} alt="" />
          <button className="btn-mas" id="2" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Implantología </h3>
          <img src={foto3} alt="" />
          <button className="btn-mas" id="3" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Cirugía Bucal</h3>
          <img src={foto2} alt="" />
          <button className="btn-mas" id="7" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Endodoncia </h3>
          <img src={foto5} alt="" />
          <button className="btn-mas" id="4" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Ortodoncia </h3>
          <img src={foto6} alt="" />
          <button className="btn-mas" id="5" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Odontopediatría </h3>
          <img src={foto7} alt="" />
          <button className="btn-mas" id="6" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <h3>Patología Bucal</h3>
          <img src={foto10} alt="" />
          <button className="btn-mas" id="8" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Laboratorio Dental</h3>
          <img src={foto12} alt="" />
          <button className="btn-mas" id="9" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        {/*<div className="item-galery">
        <h3>Odontología Preventiva</h3>
          <img src={foto12} alt="" />
          <button className="btn-mas" id="10" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
        <h3>Odontología Preventiva</h3>
          <img src={foto9} alt="" />
          <button className="btn-mas" id="11" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <h3>Odontología Preventiva</h3>
          <img src={foto10} alt="" />
          <button className="btn-mas" id="12" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>*/}
      </div> 
      <div
        className={`modal-atractions ${isModal ? "popup" : ""} `}
        id="modal-atractions"
        onClick={() => setIsModal(!isModal)}
      >
        <div className="container-atractions" id="container-atractions"></div>
      </div>
    </div>
  );
};

export default GaleryHome;
