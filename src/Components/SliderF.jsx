//Components
import { useState } from "react";
import { CCollapse, CCard, CCardBody, CButton  } from '@coreui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Button from './Button';

//Styles
import '@splidejs/react-splide/css';
import "../Styles/amenidades.css";
import "../Styles/galeryHome.css";

//Images
import foto1 from "../assets/odontologia-preventiva.webp";
import foto2 from "../assets/cirugia.webp";
import foto3 from "../assets/implantologia.webp";
import foto4 from "../assets/armonia.webp";
import foto5 from "../assets/endodoncia-1.webp";
import foto6 from "../assets/ortodoncia.webp";
import foto7 from "../assets/odontopediatria.webp";
import foto10 from "../assets/pathology.webp";
import foto12 from "../assets/laboratorio.webp";
import marcela from "../assets/marcela.png"
import rodolfo from "../assets/rodolfo.png";
import liliana from "../assets/liliana.webp";
import azul from "../assets/azul.png";
import valeria from "../assets/valeria.png";
import nora from "../assets/nora.png";
import edgar from "../assets/edgar.png";
import martha from "../assets/martha.png"
import alonso from "../assets/alejandro.webp";
import eduardo from "../assets/eduardo.png";
import emiliano from "../assets/emiliano.webp";


const SliderF = () => {
  let idRender = '1';
  //State for Modal
  const [isModal, setIsModal] = useState(false);
  const [infoMU, setInfoModal] = useState(0);
  const [slides, setSlides] = useState(2);
  //States for cards
  const [visibleA, setVisibleA] = useState(false);
  const [visibleB, setVisibleB] = useState(false);
  const [visibleC, setVisibleC] = useState(false);
  const [visibleD, setVisibleD] = useState(false);
  const [visibleE, setVisibleE] = useState(false);
  const [visibleF, setVisibleF] = useState(false);
  const [visibleG, setVisibleG] = useState(false);
  const [visibleH, setVisibleH] = useState(false);
  const [visibleI, setVisibleI] = useState(false);
  const [visibleJ, setVisibleJ] = useState(false);
  const [visibleK, setVisibleK] = useState(false);
  const [visibleL, setVisibleL] = useState(false);

  const slider = [
    {
      id: 1,
      infoSlider: [
        {
          id: 1,
          photo: marcela,
          name: 'G. Marcela Ramírez Macias',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 3239033</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialidad en Protesis bucal e Implantología <strong>Ced. Prof. 3873209</strong></li>
          <li>Profesor activo en Licenciatura F.O. UNAM</li>`,
          visible: visibleA,
          textV: `${visibleA ? "Ver menos" : "Ver más"} `
        },
        {
          id: 9,
          photo: rodolfo,
          name: 'Rodolfo Uribe Castillo',
          list: `<li>Universidad del Magdalena - Colombia</li>
          <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Ortodoncia y ortopedia maxilofacial</li>`,
          visible: visibleB,
          textV: `${visibleB ? "Ver menos" : "Ver más"} `
        },
        {
          id: 3,
          photo: valeria,
          name: 'Valeria A. Esparza Rodríguez',
          list: `<li>Universidad Autónoma de Sinaloa </li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
          <li>Técnico ceramista dental</li>`,
          visible: visibleC,
          textV: `${visibleC ? "Ver menos" : "Ver más"} `
        },
        {
          id: 11,
          photo: nora,
          name: 'Nora E. Castillo Pérez',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced.Prof.5258208</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad en ortodoncia <strong>Ced.Prof. 9627255</strong></li>`,
          visible: visibleD,
          textV: `${visibleD ? "Ver menos" : "Ver más"} `
        },
        {
          id: 4,
          photo: eduardo,
          name: 'Eduardo Llanos López',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista</li>
          <li><strong>Ced. Prof. 13356225</strong></li>`,
          visible: visibleE,
          textV: `${visibleE ? "Ver menos" : "Ver más"} `
        },
        {
          id: 2,
          photo: martha,
          name: 'Martha G. Islas García',
          list: `<li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
          <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
          <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
          <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>`,
          visible: visibleF,
          textV: `${visibleF ? "Ver menos" : "Ver más"} `
        },
        {
          id: 7,
          photo: azul,
          name: 'Azul M. González Gómez',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad de Endodoncia</li>`,
          visible: visibleG,
          textV: `${visibleG ? "Ver menos" : "Ver más"} `
        },
        {
          id: 10,
          photo: edgar,
          name: 'Edgar E. Rosas Chacón',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 08735069</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialidad en Odontopediatría <strong>Ced. Prof. 12245361</strong></li>
          <li>Centro de Estudios de Posgrado en Ortodoncia Valle de Anáhuac</li>
          <li>Especialidad en Ortodoncia y Ortopedia maxilofacial</li>
          <li>Profesor activo de Posgrado F.O. UNAM</li>`,
          visible: visibleH,
          textV: `${visibleH ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 2,
      infoSlider: [
        {
          id: 1,
          photo: marcela,
          name: 'G. Marcela Ramírez Macias',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 3239033</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialidad en Protesis bucal e Implantología <strong>Ced. Prof. 3873209</strong></li>
          <li>Profesor activo en Licenciatura F.O. UNAM</li>`,
          visible: visibleA,
          textV: `${visibleA ? "Ver menos" : "Ver más"} `
        },
        {
          id: 2,
          photo: martha,
          name: 'Martha G. Islas García',
          list: `<li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
          <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
          <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
          <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>`,
          visible: visibleF,
          textV: `${visibleF ? "Ver menos" : "Ver más"} `
        },
        {
          id: 3,
          photo: valeria,
          name: 'Valeria A. Esparza Rodríguez',
          list: `<li>Universidad Autónoma de Sinaloa </li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
          <li>Técnico ceramista dental</li>`,
          visible: visibleC,
          textV: `${visibleC ? "Ver menos" : "Ver más"} `
        },
        {
          id: 4,
          photo: eduardo,
          name: 'Eduardo Llanos López',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista</li>
          <li><strong>Ced. Prof. 13356225</strong></li>`,
          visible: visibleE,
          textV: `${visibleE ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 3,
      infoSlider: [
        {
          id: 1,
          photo: marcela,
          name: 'G. Marcela Ramírez Macias',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 3239033</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialidad en Protesis bucal e Implantología <strong>Ced. Prof. 3873209</strong></li>
          <li>Profesor activo en Licenciatura F.O. UNAM</li>`,
          visible: visibleA,
          textV: `${visibleA ? "Ver menos" : "Ver más"} `
        },
        {
          id: 5,
          photo: alonso,
          name: 'Alejandro Alonso Moctezuma',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 4833472</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad en Cirugía oral y Maxilofacial <strong>Ced. Prof. 7876057</strong></li>
          <li>Maestría en Ciencias <strong>Ced. Prof. 09698489</strong></li>
          <li>Doctorado en Ciencias <strong>Ced. Prof. 12901554</strong></li>
          <li>Profesor activo de Posgrado FO. UNAM</li>`,
          visible: visibleI,
          textV: `${visibleI ? "Ver menos" : "Ver más"} `
        },
        {
          id: 6,
          photo: emiliano,
          name: 'Emiliano Jurado Castañeda',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6257690</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialista en patología bucal <strong>Ced. Prof. 10590811</strong></li>
          <li>Maestría en ciencias medicas <strong>Ced. Prof. 11126175</strong></li>
          <li>Profesor activo de Posgrado Y Licenciatura F.O. UNAM</li>`,
          visible: visibleJ,
          textV: `${visibleJ ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 4,
      infoSlider: [
        {
          id: 7,
          photo: azul,
          name: 'Azul M. González Gómez',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad de Endodoncia</li>`,
          visible: visibleG,
          textV: `${visibleG ? "Ver menos" : "Ver más"} `
        },
        {
          id: 8,
          photo: liliana,
          name: 'Liliana A. Camacho Aparicio',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad de Endodoncia</li>`,
          visible: visibleK,
          textV: `${visibleK ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 5,
      infoSlider: [
        {
          id: 11,
          photo: nora,
          name: 'Nora E. Castillo Pérez',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced.Prof.5258208</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad en ortodoncia <strong>Ced.Prof. 9627255</strong></li>`,
          visible: visibleD,
          textV: `${visibleD ? "Ver menos" : "Ver más"} `
        },
        {
          id: 9,
          photo: rodolfo,
          name: 'Rodolfo Uribe Castillo',
          list: `<li>Universidad del Magdalena - Colombia</li>
          <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Ortodoncia y ortopedia maxilofacial</li>`,
          visible: visibleB,
          textV: `${visibleB ? "Ver menos" : "Ver más"} `
        }
    ]
    },
    {
      id: 10,
      infoSlider: [
        {
          id: 10,
          photo: edgar,
          name: 'Edgar E. Rosas Chacón',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 08735069</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialidad en Odontopediatría <strong>Ced. Prof. 12245361</strong></li>
          <li>Centro de Estudios de Posgrado en Ortodoncia Valle de Anáhuac</li>
          <li>Especialidad en Ortodoncia y Ortopedia maxilofacial</li>
          <li>Profesor activo de Posgrado F.O. UNAM</li>`,
          visible: visibleH,
          textV: `${visibleH ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 7,
      infoSlider: [
        {
          id: 5,
          photo: alonso,
          name: 'Alejandro Alonso Moctezuma',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 4833472</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad en Cirugía oral y Maxilofacial <strong>Ced. Prof. 7876057</strong></li>
          <li>Maestría en Ciencias <strong>Ced. Prof. 09698489</strong></li>
          <li>Doctorado en Ciencias <strong>Ced. Prof. 12901554</strong></li>
          <li>Profesor activo de Posgrado FO. UNAM</li>`,
          visible: visibleI,
          textV: `${visibleI ? "Ver menos" : "Ver más"} `
        },
        {
          id: 6,
          photo: emiliano,
          name: 'Emiliano Jurado Castañeda',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6257690</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialista en patología bucal <strong>Ced. Prof. 10590811</strong></li>
          <li>Maestría en ciencias medicas <strong>Ced. Prof. 11126175</strong></li>
          <li>Profesor activo de Posgrado Y Licenciatura F.O. UNAM</li>`,
          visible: visibleJ,
          textV: `${visibleJ ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 8,
      infoSlider: [
        {
          id: 6,
          photo: emiliano,
          name: 'Emiliano Jurado Castañeda',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6257690</strong></li>
          <li>División de estudios de posgrado UNAM </li>
          <li>Especialista en patología bucal <strong>Ced. Prof. 10590811</strong></li>
          <li>Maestría en ciencias medicas <strong>Ced. Prof. 11126175</strong></li>
          <li>Profesor activo de Posgrado Y Licenciatura F.O. UNAM</li>`,
          visible: visibleJ,
          textV: `${visibleJ ? "Ver menos" : "Ver más"} `
        },
    ]
    },
    {
      id: 9,
      infoSlider: [
        {
          id: 3,
          photo: valeria,
          name: 'Valeria A. Esparza Rodríguez',
          list: `<li>Universidad Autónoma de Sinaloa </li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
          <li>Técnico ceramista dental</li>`,
          visible: visibleC,
          textV: `${visibleC ? "Ver menos" : "Ver más"} `
        },
        {
          id: 4,
          photo: eduardo,
          name: 'Eduardo Llanos López',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista</li>
          <li><strong>Ced. Prof. 13356225</strong></li>`,
          visible: visibleE,
          textV: `${visibleE ? "Ver menos" : "Ver más"} `
        },
    ]
    },
  ]
  const infoModal = [
    {
      id: 1,
      title: "Odontología Preventiva",
      subtitle: "Conoce a nuestros especialistas",
      info: "La odontología preventiva es todo cuidado dental que ayuda a mantener una buena salud oral. Es una combinación de chequeos dentales regulares y el desarrollo de buenos hábitos, como el cepillado y el uso del hilo dental.",
    },
    {
      id: 2,
      title: "Rehabilitación Oral",
      subtitle: "Conoce a nuestro especialista",
      info: "Periodoncia es la rama de la odontología que se encarga de realizar los procedimientos para el acondicionamiento y restauración tanto en función cómo estética de los tejidos blandos de la boca para el proceso de colocación de un implante dental y son tratadas las enfermedad de la encía. El objetivo principal es evitar la pérdida de dientes y restaurar la salud bucal.",
    },
    {
      id: 3,
      title: "Implantología",
      subtitle: "Conoce a nuestro especialista",
      info: "La prótesis bucal es la rama de la odontología que se encarga de devolver la función, anatomía, fonación y estética alteradas como consecuencia de la perdida de uno o mas dientes mientras que la implantología se  encarga del reemplazo de dientes perdidos mediante la colocación quirúrgica de un implante.",
    },
    {
      id: 4,
      title: "Endodoncia",
      subtitle: "Conoce a nuestras especialistas",
      info: "Endodoncia es la rama de la odontología que comprende la etiología, prevención, diagnostico, y tratamiento de las alteraciones patológicas de la pulpa dental y sus repercusiones en la región periapical.",
    },

    {
      id: 5,
      title: "Ortodoncia",
      subtitle: "Conoce a nuestros especialistas",
      info: "La ortodoncia es el área de la odontología que previene y corrige la malposición de los dientes, el crecimiento de los maxilares y favorece la estética facial y dental.",
    },
    {
      id: 6,
      title: "Odontopediatría",
      subtitle: "Conoce a nuestro especialista",
      info: "Es la rama de la odontología encargada del manejo de la salud dental de los niños, etapa en la cual se puede prevenir y diagnosticar de forma temprana alguna patología o alteración dental, así como prevención de caries dentales, enfermedad periodontal y maloclusiones.",
    },
    {
      id: 7,
      title: "Cirugía Oral",
      subtitle: "Conoce a nuestro especialista",
      info: "Especialidad de la Odontología que ofrece a la población, alternativas de tratamiento médico y quirúrgico a diferentes problemas de salud, entre los que se encuentran los defectos congénitos como el labio y el paladar fisurados, las disarmonías del desarrollo facial, los traumatismos de la región oral y maxilofacial, las alteraciones de la articulación temporomandibular, los quistes y los tumores odontogénicos, las infecciones de origen dental; utilizando para su manejo  distintos tratamientos quirúrgicos como Cirugía Ortognática, la reducción y fijación de fracturas del esqueleto facial, el uso de distractores osteogénicos, la reconstrucción del esqueleto facial mediante la toma y colocación de injertos intra y extraorales, la regeneración tisular guiada, a colocación de implantes dentales y cigomáticos, etc.",
    },
    {
      id: 8,
      title: "Patología Bucal",
      subtitle: "Conoce a nuestro especialista",
      info: "Atendemos casos de condición, lesiones y enfermedades que se desarrollan en la región Bucal y Maxilofacial. Realizamos cirugía de biopsia incisionales y exisionales para el diagnóstico y tratamiento específico.",
    },
    {
      id: 9,
      title: "Laboratorio Dental",
      subtitle: "Conoce a nuestro especialista",
      info: "El laboratorista dental se dedica a la fabricación de prótesis dentales fijas o removibles, como coronas dentales, coronas sobre pilares de implantes, pilares de implantes, dentaduras totales o parciales, etc. a partir de un tratamiento especifico indicado por el odontólogo, con la finalidad de ayudar a devolver la función al paciente o bien corregir la estética dental de dicho paciente.",
    },
  ];

  const visibleInfo = (e) => {
    switch (e) {
      case 1:
        setVisibleA(!visibleA);
        break;
      case 2:
        setVisibleF(!visibleF);
        break;
      case 3:
        setVisibleC(!visibleC);
        break;
      case 4:
        setVisibleE(!visibleE);
        break;
      case 5:
        setVisibleI(!visibleI);
        break;
      case 6:
        setVisibleJ(!visibleJ);
        break;
      case 7:
        setVisibleG(!visibleG);
        break;
      case 8:
        setVisibleK(!visibleK);
        break;
      case 9:
        setVisibleB(!visibleB);
        break;
      case 10:
        setVisibleH(!visibleH);
        break;
      case 11:
        setVisibleD(!visibleD);
        break;
      case 12:
        setVisibleL(!visibleL);
        break;
      default:
        break;
    }
  }
  const InfoModal = () => {
      // console.log(infoMU)
      return (
        <>
          <h5>{infoModal[infoMU].title}</h5>
          <p>{infoModal[infoMU].info}</p>
          <p><span>{infoModal[infoMU].subtitle}</span></p>
        </>
      )
    }

  function openModal (e) {
    setIsModal(true);
    idRender = e.target.id;
    if (idRender == '6' || idRender == '8') {
      setSlides(1);
    } else {
      setSlides(2);
    }
    setInfoModal(idRender-1)
  }
  const closeModal = () => {
    setIsModal(false);
  } 


  return (
    <div className="amenidades">
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
      </div> 
      <div
        className={`modal-atractions ${isModal ? "popup" : ""} `}
        id="modal-atractions"
        
      >
        <div className="container-atractions" id="container-atractions">
          <button className='btn-close' onClick={() => closeModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
          <div className="container-information container-text-slider">
            <InfoModal info={infoMU}/>
            <Splide 
              className="mb-10"
              aria-label="Slider Dentistas"
              options={ {
                perPage: slides,
                gap: '1rem',
                width: '100%',
                breakpoints: { 768: { perPage: 1, } }
              } }
            >
              {
                slider[infoMU].infoSlider.map((info, j) => (
                  <SplideSlide key={j}>
                    <div className="item-amenidades">
                      <img src={info.photo} alt={`Foto de perfil de ${info.name}`} />
                      <h2>{info.name}</h2>
                      <CButton onClick={() => visibleInfo(info.id)}><span>{info.textV}</span></CButton>
                      <CCollapse visible={info.visible}>
                        <CCard className="mt-3">
                          <CCardBody>
                            <ul className="list-details" dangerouslySetInnerHTML={{__html: info.list}}>
                              
                            </ul>
                          </CCardBody>
                        </CCard>
                      </CCollapse>
                    </div>
                  </SplideSlide>
                ))
              }
            </Splide>
            <Button />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};  

export default SliderF;
