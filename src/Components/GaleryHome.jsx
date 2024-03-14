import { useState } from "react";
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Styles/galeryHome.css";
// Import Swiper styles
import 'swiper/css';
import foto1 from "../assets/odontologia-preventiva.webp";
import foto2 from "../assets/cirugia.webp";
import foto3 from "../assets/implantologia.webp";
import foto4 from "../assets/armonia.webp";
import foto5 from "../assets/endodoncia-1.webp";
import foto6 from "../assets/ortodoncia.webp";
import foto7 from "../assets/odontopediatria.webp";
import foto10 from "../assets/pathology.webp";
import foto12 from "../assets/laboratorio.webp";
import endo from "../assets/endodoncia-1.webp";
import orto from "../assets/ortodoncia-1.jpg"
import pato from "../assets/pato.webp";

import marcela from "../assets/marcela.webp";
import eduardo from "../assets/eduardo.webp";
import edgar from "../assets/edgar.webp";
import liliana from "../assets/liliana.webp";
import alejandro from "../assets/alejandro.webp";
import emiliano from "../assets/emiliano.webp";
import nora from "../assets/nora.webp";
import rodolfo from "../assets/rodolfo.webp";
import azul from "../assets/azul.webp";
import valeria from "../assets/valeria.webp";
import martha from "../assets/martha.webp"

const GaleryHome = () => {
  const infoModal = [
    {
      id: 1,
      name: "Rodolfo Uribe Castillo",
      photo: rodolfo,
      details: `<li>Universidad del Magdalena - Colombia</li>
      <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
      <li>División de estudios de posgrado UNAM</li>
      <li>Ortodoncia y ortopedia maxilofacial</li>`,
      specialist: `<div className="item-amenidades">
      <img src=${azul} alt="Foto de perfil de Azul" />
      <h2>Azul M. González Gómez</h2>
      <ul className="list-details">
        <li>Facultad de odontología UNAM</li>
        <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 10440497</strong></li>
        <li>División de estudios de posgrado UNAM</li>
        <li>Especialidad de Endodoncia</li>
      </ul>
    </div>`,
      img: pato,
      title: "Odontología Preventiva",
      subtitle: "Conoce a nuestro especialista",
      info: "La odontología preventiva es todo cuidado dental que ayuda a mantener una buena salud oral. Es una combinación de chequeos dentales regulares y el desarrollo de buenos hábitos, como el cepillado y el uso del hilo dental.",
    },
    {
      id: 2,
      name: "Martha G. Islas García",
      photo: martha,
      details: `<li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
      <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
      <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
      <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>`,
      specialist: ``,
      img: foto1,
      title: "Rehabilitación Oral",
      subtitle: "Conoce a nuestro especialista",
      info: "Periodoncia es la rama de la odontología que se encarga de realizar los procedimientos para el acondicionamiento y restauración tanto en función cómo estética de los tejidos blandos de la boca para el proceso de colocación de un implante dental y son tratadas las enfermedad de la encía. El objetivo principal es evitar la pérdida de dientes y restaurar la salud bucal.",
    },
    {
      id: 3,
      name: "G. Marcela Ramírez Macias",
      photo: marcela,
      details: `<li>Facultad de odontología UNAM</li>
        <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 3239033</strong></li>
        <li>División de estudios de posgrado UNAM </li>
        <li>Especialidad en Protesis bucal e Implantología <strong>Ced. Prof. 3873209</strong></li>
        <li>Profesor activo en Licenciatura F.O. UNAM</li>`,
      specialist: `<div className="item-amenidades">
      <img src=${valeria} alt="Dra. Valeria" />
      <h2>Valeria A. Esparza Rodríguez</h2>
        <ul className="list-details">
          <li>Universidad Autónoma de Sinaloa </li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
          <li>Técnico ceramista dental</li>
        </ul>
      </div>`,
      img: "",
      title: "Implantología",
      subtitle: "Conoce a nuestro especialista",
      info: "La prótesis bucal es la rama de la odontología que se encarga de devolver la función, anatomía, fonación y estética alteradas como consecuencia de la perdida de uno o mas dientes mientras que la implantología se  encarga del reemplazo de dientes perdidos mediante la colocación quirúrgica de un implante.",
    },
    {
      id: 4,
      name: "Liliana A. Camacho Aparicio",
      photo: liliana,
      specialist: `<div className="item-amenidades">
        <img src=${azul} alt="Foto de perfil de Azul" />
        <h2>Azul M. González Gómez</h2>
        <ul className="list-details">
          <li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad de Endodoncia</li>
        </ul>
      </div>`,
      details: `<li>Facultad de odontología UNAM</li>
      <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6345243</strong></li>
      <li>División de estudios de posgrado UNAM </li>
      <li>Especialidad en Endodoncia <strong>Ced. Prof. 09641210</strong></li>
      <li>Maestría en Ciencias <strong>Ced. Prof. 12703822</strong></li>
      <li>Profesor activo de Posgrado F.O. UNAM</li>`,
      img: endo,
      title: "Endodoncia",
      subtitle: "Conoce a nuestras especialistas",
      info: "Endodoncia es la rama de la odontología que comprende la etiología, prevención, diagnostico, y tratamiento de las alteraciones patológicas de la pulpa dental y sus repercusiones en la región periapical.",
    },

    {
      id: 5,
      name: "Nora E. Castillo Pérez",
      photo: nora,
      specialist: `<div className="item-amenidades">
      <img src=${rodolfo} alt="Foto de perfil de Azul" />
      <h2>Rodolfo Uribe Castillo</h2>
            <ul className="list-details">
              <li>Universidad del Magdalena - Colombia</li>
              <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
              <li>División de estudios de posgrado UNAM</li>
              <li>Ortodoncia y ortopedia maxilofacial</li>
            </ul>
    </div>`,
      details: `<li>Facultad de odontología UNAM</li>
      <li>Lic. en Cirujano Dentista <strong>Ced.Prof.5258208</strong></li>
      <li>División de estudios de posgrado UNAM</li>
      <li>Especialidad en ortodoncia <strong>Ced.Prof. 9627255</strong></li>`,
      img: orto,
      title: "Ortodoncia",
      subtitle: "Conoce a nuestros especialistas",
      info: "La ortodoncia es el área de la odontología que previene y corrige la malposición de los dientes, el crecimiento de los maxilares y favorece la estética facial y dental.",
    },
    {
      id: 6,
      name: "Edgar E. Rosas Chacón",
      photo: edgar,
      specialist: ``,
      details: `<li>Facultad de odontología UNAM</li>
        <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 08735069</strong></li>
        <li>División de estudios de posgrado UNAM </li>
        <li>Especialidad en Odontopediatría <strong>Ced. Prof. 12245361</strong></li>
        <li>Centro de Estudios de Posgrado en Ortodoncia Valle de Anáhuac</li>
        <li>Especialidad en Ortodoncia y Ortopedia maxilofacial</li>
        <li>Profesor activo de Posgrado F.O. UNAM</li>`,
      img: foto7,
      title: "Odontopediatría",
      subtitle: "Conoce a nuestro especialista",
      info: "Es la rama de la odontología encargada del manejo de la salud dental de los niños, etapa en la cual se puede prevenir y diagnosticar de forma temprana alguna patología o alteración dental, así como prevención de caries dentales, enfermedad periodontal y maloclusiones.",
    },
    {
      id: 7,
      name: "Alejandro Alonso Moctezuma",
      photo: alejandro,
      details: `<li>Facultad de odontología UNAM</li>
      <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 4833472</strong></li>
      <li>División de estudios de posgrado UNAM</li>
      <li>Especialidad en Cirugía oral y Maxilofacial <strong>Ced. Prof. 7876057</strong></li>
      <li>Maestría en Ciencias <strong>Ced. Prof. 09698489</strong></li>
      <li>Doctorado en Ciencias <strong>Ced. Prof. 12901554</strong></li>
      <li>Profesor activo de Posgrado FO. UNAM</li>`,
      specialist: ``,
      img: "",
      title: "Cirugía Oral",
      subtitle: "Conoce a nuestro especialista",
      info: "Especialidad de la Odontología que ofrece a la población, alternativas de tratamiento médico y quirúrgico a diferentes problemas de salud, entre los que se encuentran los defectos congénitos como el labio y el paladar fisurados, las disarmonías del desarrollo facial, los traumatismos de la región oral y maxilofacial, las alteraciones de la articulación temporomandibular, los quistes y los tumores odontogénicos, las infecciones de origen dental; utilizando para su manejo  distintos tratamientos quirúrgicos como Cirugía Ortognática, la reducción y fijación de fracturas del esqueleto facial, el uso de distractores osteogénicos, la reconstrucción del esqueleto facial mediante la toma y colocación de injertos intra y extraorales, la regeneración tisular guiada, a colocación de implantes dentales y cigomáticos, etc.",
    },
    {
      id: 8,
      name: "Emiliano Jurado Castañeda",
      photo: emiliano,
      details: `<li>Facultad de odontología UNAM</li>
      <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6257690</strong></li>
      <li>División de estudios de posgrado UNAM </li>
      <li>Especialista en patología bucal <strong>Ced. Prof. 10590811</strong></li>
      <li>Maestría en ciencias medicas <strong>Ced. Prof. 11126175</strong></li>
      <li>Profesor activo de Posgrado Y Licenciatura F.O. UNAM</li>`,
      img: pato,
      specialist: ``,
      title: "Patología Bucal",
      subtitle: "Conoce a nuestro especialista",
      info: "Atendemos casos de condición, lesiones y enfermedades que se desarrollan en la región Bucal y Maxilofacial. Realizamos cirugía de biopsia incisionales y exisionales para el diagnóstico y tratamiento específico.",
    },
    {
      id: 9,
      name: "Eduardo Llanos López",
      photo: eduardo,
      details: `<li>Facultad de odontología UNAM</li>
      <li>Lic. en Cirujano Dentista</li>
      <li><strong>Ced. Prof. 13356225</strong></li>`,
      specialist: ``,
      img: "",
      title: "Laboratorio Dental",
      subtitle: "Conoce a nuestro especialista",
      info: "El laboratorista dental se dedica a la fabricación de prótesis dentales fijas o removibles, como coronas dentales, coronas sobre pilares de implantes, pilares de implantes, dentaduras totales o parciales, etc. a partir de un tratamiento especifico indicado por el odontólogo, con la finalidad de ayudar a devolver la función al paciente o bien corregir la estética dental de dicho paciente.",
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
    atraction.innerHTML = '';
    infoModal
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        let HTMLinsert = `
        <h2 id="title-modal">${texto.title}<h2/>
        <p id="texto-modal">${texto.info}<p/>
        <h2>${texto.subtitle}</h2>
        <div>
          <div className="item-amenidades">
            <img src=${texto.photo} alt="" />
            <h2>${texto.name}</h2>
            <ul className="list-details">
              ${texto.details}
            </ul>
          </div>
          ${texto.specialist}
        </div>
        <a
            href="https://api.whatsapp.com/send?phone=525544754479"
            target="_blank"
            className="button-contact"
          >
            Contacto
          </a>
        `;
        atraction.insertAdjacentHTML('afterbegin', HTMLinsert);
        HTMLinsert = "";
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
        <h3>Cirugía Oral</h3>
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
        <div className="container-atractions" id="container-atractions">

        </div>
      </div>
    </div>
  );
};

export default GaleryHome;
