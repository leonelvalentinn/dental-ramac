import React, { useState } from "react";
import "../Styles/galeryHome.css";
import foto1 from "../assets/slider-1.jpg";
import foto2 from "../assets/galery3.jpg";
import foto3 from "../assets/galery4.jpg";
import foto4 from "../assets/zapata.jpg";
import foto5 from "../assets/jirafa.jpg";
import foto6 from "../assets/kayac.jpg";
import foto7 from "../assets/grutas.jpg";
import foto8 from "../assets/parachute.jpg";
import foto9 from "../assets/zona.jpg";
import foto10 from "../assets/tepoztlan.jpg";
import foto12 from "../assets/comida.jpg";
import foto13 from "../assets/img3.jpg";
import ButtonContact from "../Components/ButtonContact";

const GaleryHome = () => {
  const infoModal = [
    {
      id: 1,
      title: "Lago de Tequesquitengo",
      info: "Ven y disfruta del hermoso lago de tequesquitengo con sus 5km de largo por 3km de ancho, tambien aprovecha de todas las actividades que puedes hacer en el lago.",
    },
    {
      id: 2,
      title: "Aprovechar los diversos clubes de playa",
      info: "En la zona existen diversos clubes de playa, con bares, restaurantes, piscinas, áreas para tomar el sol con cómodos camastros y servicio de toallas, si vienes a alguno de ellos, también podrás realizar deportes tanto dentro, como fuera del lago. En estos espacios se aprovecha al máximo el día y cuentan con actividades variadas para que cada quién disfrute de lo que más le gusta sin salir de las instalaciones del club elegido.",
    },
    {
      id: 3,
      title: "Pasear por los jardines de México",
      info: "Este bello lugar queda en Morelos a 5 minutos de Tequesquitengo y se trata del Parque de jardines florales más grande del mundo. Contiene 9 jardines temáticos, además de, el Jardín ConSentidos, un área educativa y de esparcimiento especialmente dedicada para los pequeños, un Centro de Convenciones, un Centro de Exposiciones, un Centro de Eventos Sociales “Bamboo” (donde se pueden realizar bodas y otros eventos) y el Foro al aire libre: “Spectare”.",
    },
    {
      id: 4,
      title: "Realizar la ruta de Zapata",
      info: "Si disfrutas de la Historia, la Ruta de Zapata es un interesante recorrido que comienza a sólo 30 minutos de Tequesquitengo con una visita la Casa Museo de Emiliano Zapata en Anenecuilco y recorre los principales sitios por los que pasó Emiliano Zapata. Este recorrido incluye los lugares donde nació, luchó y murió. También verás el Museo de la Revolución ubicado en Tlaltizapán y la Hacienda de Chinameca, en donde Zapata murió asesinado a traición por el Coronel Guajardo en 1919 y Cuautla, en donde descansan los restos de este caudillo.",
    },

    {
      id: 5,
      title: "Ver y hasta tocar los animales en el Zoofari",
      info: "El Zoofari que queda a 15 minutos de Tequesquitengo, cuenta con más de 1200 animales de 150 especies diferentes que se pueden ver, tocar y hasta alimentar en algunos casos. Funciona todo el año y también es una experiencia educativa ya que cada uno de los animales que viven aquí tiene su hábitat recreado. Si estás cerca, no pierdas la oportunidad de hacer el Zoofari.",
    },
    {
      id: 6,
      title: "Atreverte con los rápidos del rio Amacuzac",
      info: "Este rio queda aproximadamente a 25 minutos de Tequesquitengo y sus aguas se encuentran bordeadas por las paredes de un enorme cañón, que tiene muchísima flora y fauna. El río se divide en la parte alta y la baja, cada una con diferentes intensidades de corrientes, empezando en aguas más o menos tranquilas y hasta llegar a los imponentes rápidos. Si te gustan las emociones fuertes esta es otra aventura que puedes disfrutar cuando visites esta zona. ",
    },
    {
      id: 7,
      title: "Visitar las grutas de Cacahuamilpa",
      info: "Las Grutas de Cacahuamilpa se encuentran a 30 minutos desde Tequesquitengo, aunque parte de ellas se encuentran dentro de Morelos, en realidad son consideradas un destino turístico del estado de Guerrero.  Son pasajes con formaciones rocosas de estalactitas y estalagmitas en donde se pueden apreciar interesantes figuras que con la iluminación dan apariencias humanas, animales y de objetos que parecen haber sido moldeados por manos humanas. Este es un recorrido fantástico que vale la pena completar con amigos o familiares.",
    },
    {
      id: 8,
      title: "Volar en globo aerostático, ultraligeros o avionetas",
      info: " Sobrevolar este lugar a bordo de un globo aerostático, es una aventura muy emocionante en la que pueden participar un máximo de 6 pasajeros y te permitirá admirar este lugar desde los cielos. También puedes hacerlo en los vuelos en ultraligero y avionetas para admirar la belleza de Tequesquitengo a 600 metros de altura con todas las medidas de seguridad y guías acompañantes capacitados.",
    },
    {
      id: 9,
      title: " Saltar con ShyDive",
      info: "Si te gusta el paracaidismo, en SkyDive podrás hacer tu salto “Tandem” (con el apoyo de un instructor calificado). No te preocupes, recibirás la capacitación adecuada para realizar tu salto, contarás con instructores altamente capacitados y certificados, así como con aeronaves y equipo de alta calidad. ",
    },
    {
      id: 10,
      title: "Disfruta de la rica comida de la zona",
      info: "Como todo México tenemos la fortuna de tener una gran variedad de sabores , en tequesquitengo no es la excepción, ven y disfruta de toda la variedad de platillos.",
    },
    {
      id: 11,
      title: " Conocer la zona arqueológica de Xochicalco",
      info: "La zona arqueológica de Xochicalco ha sido declarada como Patrimonio de la Humanidad por la UNESCO, está ubicada a tan sólo 33 minutos de Tequesquitengo, en el estado de Morelos. En este lugar podrás ver el museo que con múltiples exposiciones relata la cultura que creó esta ciudad precolombina, entre sus construcciones están el juego de pelota y el observatorio astronómico.",
    },
    {
      id: 12,
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
        <h2 id="title-modal">${texto.title}<h2/>
        <p id="texto-modal">${texto.info}<p/>
        <a
            href="https://api.whatsapp.com/send?phone=525630220591"
            target="_blank"
            className="button-contact"
          >
            Contacto
          </a>
        `;
      });
  };

  return (
    <div className="galery">
      <h2>Atracciones y Lugares de interes</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={foto1} alt="" />
          <button className="btn-mas" id="1" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto2} alt="" />
          <button className="btn-mas" id="2" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto3} alt="" />
          <button className="btn-mas" id="3" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto4} alt="" />
          <button className="btn-mas" id="4" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto5} alt="" />
          <button className="btn-mas" id="5" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto6} alt="" />
          <button className="btn-mas" id="6" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto7} alt="" />
          <button className="btn-mas" id="7" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto13} alt="" />
          <button className="btn-mas" id="8" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto8} alt="" />
          <button className="btn-mas" id="9" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto12} alt="" />
          <button className="btn-mas" id="10" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto9} alt="" />
          <button className="btn-mas" id="11" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <img src={foto10} alt="" />
          <button className="btn-mas" id="12" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
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
