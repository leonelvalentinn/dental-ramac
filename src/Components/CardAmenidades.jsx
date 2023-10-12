import React, { useState } from "react";
import "../Styles/card-amenidades.css";
import Close from "../assets/cerca.png";

const CardAmenidades = () => {
  const infoAmenidades = [
    {
      id: 1,
      title: "Sala de usos multiples",
      info: " La sala de usos múltiples es un espacio informal pensado para que los usuarios puedan conversar, relajarse, leer o utilizar las computadoras. Recuerda que en Regal Residences pensamos en tu comodidad y bienestar.",
    },
    {
      id: 2,
      title: "Pista de Jogging",
      info: " Por que nos gusta consertirte, construimos para ti una pista de jogging pensada para hacer tus actividades al aire libre y cuides de tu salud, sin salir de nuestro complejo. Haz ejercicio dentro de nuestras instalaciones, todo esta pensado en ti y tu familia.",
    },
    {
      id: 3,
      title: "Áreas verdes",
      info: "Espacios donde podrás relajarte, meditar, pasear o simplemente darte un espacio contigo mismo.Imagina dar un paseo por nuestras áreas verdes y darte cuenta que fue una gran desicion confiar en Regal Residences.",
    },
    {
      id: 4,
      title: "Alberca ",
      info: "Siempre una de las atracciones en un lugar de clase , será tener alberca, nuestra  piscina construida con materiales de calidad y acabado que incite a pasar un momento agradable y placentero.",
    },

    {
      id: 5,
      title: "Juegos infantiles",
      info: "Tus pequeños tendran un lugar donde divertirse y que mejor que un lugar de fácil acceso , tranquilo y sobre todo seguro. Que mejor regalo que ver a tus niños felices.Esto te lo da Regal Residences.",
    },
    {
      id: 6,
      title: "Área para mascotas",
      info: " Tambien tomamos en cuenta a nuestros amigos de cuatro patas, ellos tambien merecen ser consentidos y ser tratados de la mejor manera, por eso construimos un lugar especial para ellos, donde podras estar con ellos sin problema alguno. Nuestra área para mascotas esta equipado para que tus mascotas retocen de felicidad.",
    },
    {
      id: 7,
      title: "Jacuzzi",
      info: " Si de momento especial y de completa relajación se habla, hay lugares que se nos vienen rapido a la mente , uno de ellos es el jacuzzi, en donde puedes conectar contigo mismo, mientras el agua burbujeante te da un sublime masaje. ¡Dejate consentir por nosotros!.",
    },
    {
      id: 8,
      title: "Chapoteadero",
      info: "Construido para personas que aun no saben nadar o que apenas van empezando y mejor aun para tus niños, que les gusta divertirse con el agua , ya que pensamos en tu seguridad y la de tus pequeñines.",
    },
    {
      id: 9,
      title: "Regaderas",
      info: " Regaderas de la mayor calidad y durabilidad, para que te duches despues de darte un chapuzon en la alberca o simplemente darte un baño por esos dias tan calurosos. Nuestras amenidades son de gran calidad y estilo.",
    },
    {
      id: 10,
      title: "Baños",
      info: "  Nuestros baños cuentan con la mayor tecnología hidrosanitaria,   con materiales de ultima generación y con acabados finos. Todo diseñado para darte una experiencia y confianza agradable a simple vista.",
    },
    {
      id: 11,
      title: "Resturante Bar",
      info: "Nuestro restaurante bar, esta equipado con todo lo necesario para que deleitemos tu paladar con nuestra comida regional o platillos del menu. Tambien fue diseñado con los mejores materiales y acabados de lujo y con ello poder crear ese momento unico. Ven con tu familia o amigos y vive la experiencia Regal Residences.",
    },
    {
      id: 12,
      title: "Vestidores",
      info: "Contamos con vestidores con excelente higiene, que hacen que te sientas tranquilo y muy seguro al estar ahi.En Regal Residences todo esta diseñado por personas altamente capacitadas y asi poder entregarte el mejor servicio e instalaciones que hallas visto. ",
    },
    {
      id: 13,
      title: "Palapas",
      info: " Las palapas tenían mucha similitud con los hogares indígenas que le daban vida al territorio mexicano en la época precolonial, pero con materiales que permitían que el aire fluyera completamente, por ese motivo se adaptaron muy bien a México, sobre todo a las costas. Y ahora las adaptamos para ti en nuestro complejo.",
    },
    {
      id: 14,
      title: "Estacionamiento",
      info: "No podia faltar una de las amenidades que es muy requerida en estos tiempos, para todas aquellas personas que cuentan con carro o que la familia los visita y no tiene donde dejar su coche.Y no te preocupes Regal cuenta con seguridad las 24 horas para que estes tranquilo.",
    },
  ];
  const [isAmenidad, setIsAmenidad] = useState(false);

  const handleAmenidad = (e) => {
    setIsAmenidad(!isAmenidad);

    let evento = e.target.id;
    modalAmenidad(evento);
  };

  const modalAmenidad = (evento) => {
    let container = document.getElementById("container-modal-amenidades");
    container.innerHTML = "";
    infoAmenidades
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        container.innerHTML += `
        <h2 id="title-amenidad">${texto.title}<h2/>
        <p id="texto-amenidad">${texto.info}<p/>
        <a
            href="https://api.whatsapp.com/send?phone=525630220591"
            target="_blank"
            className="button-amenidad"
            id="button-amenidad"
          >
            Contacto
          </a>
        `;
      });
  };
  return (
    <div className="card-amenidades">
      <h2>Amenidades de las cuales podras disfrutar con nosotros</h2>
      <p className="text-desc">
        Pon el cursor sobre la imagen para ver más información
      </p>
      <div className="container-card-amenidades">
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Sala de usos multiples</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Sala de usos multiples</h2>
                <p>
                  La sala de usos múltiples es un espacio informal pensado para
                  que los usuarios puedan conversar, relajarse, leer o utilizar
                  las computadoras. Recuerda que en Regal Residences pensamos en
                  tu comodidad y bienestar.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="1"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Pista de jogging</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Pista de jogging</h2>
                <p>
                  Por que nos gusta consertirte, construimos para ti una pista
                  de jogging pensada para hacer tus actividades al aire libre y
                  cuides de tu salud, sin salir de nuestro complejo. Haz
                  ejercicio dentro de nuestras instalaciones, todo esta pensado
                  en ti y tu familia.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="2"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Áreas verdes</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Áreas verdes</h2>
                <p>
                  Espacios donde podrás relajarte, meditar, pasear o simplemente
                  darte un espacio contigo mismo. Imagina dar un paseo por
                  nuestras áreas verdes y darte cuenta que fue una gran desicion
                  confiar en Regal Residences.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="3"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Alberca </h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Alberca </h2>
                <p>
                  Siempre una de las atracciones en un lugar de clase , será
                  tener alberca, nuestra piscina construida con materiales de
                  calidad y acabado que incite a pasar un momento agradable y
                  placentero.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="4"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Juegos infantiles</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Juegos infantiles</h2>
                <p>
                  Tus pequeños tendran un lugar donde divertirse y que mejor que
                  un lugar de fácil acceso , tranquilo y sobre todo seguro. Que
                  mejor regalo que ver a tus niños felices. Esto te lo da Regal
                  Residences.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="5"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Área para mascotas</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Área para mascotas</h2>
                <p>
                  Tambien tomamos en cuenta a nuestros amigos de cuatro patas,
                  ellos tambien merecen ser consentidos y ser tratados de la
                  mejor manera, por eso construimos un lugar especial para
                  ellos, donde podras estar con ellos sin problema alguno.
                  Nuestra área para mascotas esta equipado para que tus mascotas
                  retocen de felicidad.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="6"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Jacuzzi</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Jacuzzi</h2>
                <p>
                  Si de momento especial y de completa relajación se habla, hay
                  lugares que se nos vienen rapido a la mente , uno de ellos es
                  el jacuzzi, en donde puedes conectar contigo mismo, mientras
                  el agua burbujeante te da un sublime masaje. ¡Dejate consentir
                  por nosotros!.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="7"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Chapoteadero</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Chapoteadero</h2>
                <p>
                  Construido para personas que aun no saben nadar o que apenas
                  van empezando y mejor aun para tus niños, que les gusta
                  divertirse con el agua , ya que pensamos en tu seguridad y la
                  de tus pequeñines.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="8"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Regaderas</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Regaderas</h2>
                <p>
                  Regaderas de la mayor calidad y durabilidad, para que te
                  duches despues de darte un chapuzon en la alberca o
                  simplemente darte un baño por esos dias tan calurosos.
                  Nuestras amenidades son de gran calidad y estilo.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="9"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>

        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Baños</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Baños</h2>
                <p>
                  Nuestros baños cuentan con la mayor tecnología hidrosanitaria,
                  con materiales de ultima generación y con acabados finos. Todo
                  diseñado para darte una experiencia y confianza agradable a
                  simple vista.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="10"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Restaurante Bar</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Restaurante Bar</h2>
                <p>
                  Nuestro restaurante bar, esta equipado con todo lo necesario
                  para que deleitemos tu paladar con nuestra comida regional o
                  platillos del menu. Tambien fue diseñado con los mejores
                  materiales y acabados de lujo y con ello poder crear ese
                  momento unico. Ven con tu familia o amigos y vive la
                  experiencia Regal Residences.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="11"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Vestidores</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Vestidores</h2>
                <p>
                  Contamos con vestidores con excelente higiene, que hacen que
                  te sientas tranquilo y muy seguro al estar ahi.En Regal
                  Residences todo esta diseñado por personas altamente
                  capacitadas y asi poder entregarte el mejor servicio e
                  instalaciones que hallas visto.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="12"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Palapas</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Palapas</h2>
                <p>
                  Las palapas tenían mucha similitud con los hogares indígenas
                  que le daban vida al territorio mexicano en la época
                  precolonial, pero con materiales que permitían que el aire
                  fluyera completamente, por ese motivo se adaptaron muy bien a
                  México, sobre todo a las costas. Y ahora las adaptamos para ti
                  en nuestro complejo.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="13"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Estacionamiento</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Estacionamiento</h2>
                <p>
                  No podia faltar una de las amenidades que es muy requerida en
                  estos tiempos, para todas aquellas personas que cuentan con
                  carro o que la familia los visita y no tiene donde dejar su
                  coche. Y no te preocupes Regal cuenta con seguridad las 24
                  horas para que estes tranquilo.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="14"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
      </div>
      <div
        className={`modal-amenidades ${isAmenidad ? "amenidades-open" : ""}`}
        id="modal-amenidades"
        onClick={() => setIsAmenidad(!isAmenidad)}
      >
        <img
          src={Close}
          alt=""
          className="close"
          onClick={() => setIsAmenidad(false)}
        />
        <div
          className="container-modal-amenidades"
          id="container-modal-amenidades"
        ></div>
      </div>
    </div>
  );
};

export default CardAmenidades;
