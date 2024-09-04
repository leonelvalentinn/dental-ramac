// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import { CCollapse, CCard, CCardBody, CButton  } from '@coreui/react'
import "../Styles/amenidades.css";
import area2 from "../assets/marcela.png";
import area3 from "../assets/eduardo.png";
import area4 from "../assets/edgar.png";
import area5 from "../assets/liliana.png";
import emiliano from "../assets/emiliano.png";
import nora from "../assets/nora.png";
import rodolfo from "../assets/rodolfo.png";
import azul from "../assets/azul.png";
import leon from "../assets/leon.png";
import valeria from "../assets/valeria.png";
import martha from "../assets/martha.png"
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "../Styles/galeryHome.css";
import foto1 from "../assets/odontologia-preventiva.webp";
import foto2 from "../assets/cirugia.webp";
import foto3 from "../assets/implantologia.webp";
import foto4 from "../assets/armonia.webp";
import foto5 from "../assets/endodoncia-1.webp";
import foto6 from "../assets/ortodoncia.webp";
import foto7 from "../assets/odontopediatria.webp";
import foto10 from "../assets/pathology.webp";
import foto12 from "../assets/laboratorio.webp";

/*breakpoints={{768: {slidesPerView:3}}}*/

const Amenidades = () => {
  // const specialists = [];

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
  const [isModal, setIsModal] = useState(false);
  const [visibleSwiper1, setSwiper1] = useState(false);
  const [visibleSwiper2, setSwiper2] = useState(false);
  const [visibleSwiper3, setSwiper3] = useState(false);
  const [visibleSwiper4, setSwiper4] = useState(false);
  const [visibleSwiper5, setSwiper5] = useState(false);
  const [visibleSwiper6, setSwiper6] = useState(false);
  const [visibleSwiper7, setSwiper7] = useState(false);
  const [visibleSwiper8, setSwiper8] = useState(false);
  const [visibleSwiper9, setSwiper9] = useState(false);
  const [visibleSwiper10, setSwiper10] = useState(false);
  const [visibleSwiper11, setSwiper11] = useState(false);
  const [visibleSwiper12, setSwiper12] = useState(false);
  const swiper = useSwiper();

  const openModal = (e) => {
    setIsModal(true)

    let evento = e.target.id;
    modalOpen(evento);
  };

  const closeModal = () => {
    setIsModal(false);
    setSwiper1(false);
    setSwiper2(false);
    setSwiper3(false);
    setSwiper4(false);
    setSwiper5(false);
    setSwiper6(false);
    setSwiper7(false);
    setSwiper8(false);
    setSwiper9(false);
    setSwiper10(false);
    setSwiper11(false);
    setSwiper12(false);
    console.log('hola');
  }

  const modalOpen = (evento) => {
    console.log(evento)
    switch (evento) {
      case '1':
        setSwiper1(true);
        setSwiper2(true);
        setSwiper3(true);
        setSwiper7(true);
        setSwiper8(true);
        setSwiper9(true);
        setSwiper11(true);
        setSwiper12(true);
        console.log('hola');
        break;
      case '2':
        
        break;
      case '3':
        
        break;
      case '4':
        
        break;
      case '5':
        
        break;
      case '6':
        
        break;
      case '7':
        
        break;
      case '8':
        
        break;
      case '9':
        
        break;
      case '10':
        
        break;
      case '11':
        
        break;
      case '12':
        
        break;
      default:
        break;
    }
  }

  console.log(swiper);
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
          <div className="container-swiper">
            <Swiper    
              modules={Navigation}          
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{768: {slidesPerView:2}}}
              loop
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide className={`hideSwiper ${visibleSwiper1 ? "showSwiper" : ""} `} aria-hidden="true">
                <div className="item-amenidades">
                  <img src={area2} alt="" />
                  <h2>G. Marcela Ramírez Macias</h2>
                  <CButton onClick={() => setVisibleA(!visibleA)}>Ver más</CButton>
                  <CCollapse visible={visibleA}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 3239033</strong></li>
                          <li>División de estudios de posgrado UNAM </li>
                          <li>Especialidad en Protesis bucal e Implantología <strong>Ced. Prof. 3873209</strong></li>
                          <li>Profesor activo en Licenciatura F.O. UNAM</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper2 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={area3} alt="" />
                  <h2>Eduardo Llanos López</h2>
                  <CButton onClick={() => setVisibleB(!visibleB)}>Ver más</CButton>
                  <CCollapse visible={visibleB}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista</li>
                          <li><strong>Ced. Prof. 13356225</strong></li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper3 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={area4} alt="" />
                  <h2>Edgar E. Rosas Chacón</h2>
                  <CButton onClick={() => setVisibleC(!visibleC)}>Ver más</CButton>
                  <CCollapse visible={visibleC}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 08735069</strong></li>
                          <li>División de estudios de posgrado UNAM </li>
                          <li>Especialidad en Odontopediatría <strong>Ced. Prof. 12245361</strong></li>
                          <li>Centro de Estudios de Posgrado en Ortodoncia Valle de Anáhuac</li>
                          <li>Especialidad en Ortodoncia y Ortopedia maxilofacial</li>
                          <li>Profesor activo de Posgrado F.O. UNAM</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper4 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={area5} alt="" />
                  <h2>Liliana A. Camacho Aparicio</h2>
                  <CButton onClick={() => setVisibleD(!visibleD)}>Ver más</CButton>
                  <CCollapse visible={visibleD}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6345243</strong></li>
                          <li>División de estudios de posgrado UNAM </li>
                          <li>Especialidad en Endodoncia <strong>Ced. Prof. 09641210</strong></li>
                          <li>Maestría en Ciencias <strong>Ced. Prof. 12703822</strong></li>
                          <li>Profesor activo de Posgrado F.O. UNAM</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper6 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={emiliano} alt="" />
                  <h2>Emiliano Jurado Castañeda</h2>
                  <CButton onClick={() => setVisibleF(!visibleF)}>Ver más</CButton>
                  <CCollapse visible={visibleF}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 6257690</strong></li>
                          <li>División de estudios de posgrado UNAM </li>
                          <li>Especialista en patología bucal <strong>Ced.Prof.10590811</strong></li>
                          <li>Maestría en ciencias medicas <strong>Ced. Prof. 11126175</strong></li>
                          <li>Profesor activo de Posgrado Y Licenciatura F.O. UNAM</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper7 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={nora} alt="Dra. Nora" />
                  <h2>Nora E. Castillo Pérez</h2>
                  <CButton onClick={() => setVisibleG(!visibleG)}>Ver más</CButton>
                  <CCollapse visible={visibleG}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista <strong>Ced.Prof.5258208</strong></li>
                          <li>División de estudios de posgrado UNAM</li>
                          <li>Especialidad en ortodoncia <strong>Ced.Prof. 9627255</strong></li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper8 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={rodolfo} alt="Rodolfo" />
                  <h2>Rodolfo Uribe Castillo</h2>
                  <CButton onClick={() => setVisibleH(!visibleH)}>Ver más</CButton>
                  <CCollapse visible={visibleH}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Universidad del Magdalena - Colombia</li>
                          <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
                          <li>División de estudios de posgrado UNAM</li>
                          <li>Ortodoncia y ortopedia maxilofacial</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper9 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={azul} alt="Dra. Azul" />
                  <h2>Azul M. González Gómez</h2>
                  <CButton onClick={() => setVisibleI(!visibleI)}>Ver más</CButton>
                  <CCollapse visible={visibleI}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de odontología UNAM</li>
                          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
                          <li>División de estudios de posgrado UNAM</li>
                          <li>Especialidad de Endodoncia</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper10 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={leon} alt="León" />
                  <h2>León E. Moreno Villada</h2>
                  <CButton onClick={() => setVisibleJ(!visibleJ)}>Ver más</CButton>
                  <CCollapse visible={visibleJ}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>CETIS 57 Ignacio Allende </li>
                          <li>Laboratorista dental</li>
                          <li><strong>Ced. Prof. 8624711</strong></li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper11 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={valeria} alt="Dra. Valeria" />
                  <h2>Valeria A. Esparza Rodríguez</h2>
                  <CButton onClick={() => setVisibleK(!visibleK)}>Ver más</CButton>
                  <CCollapse visible={visibleK}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Universidad Autónoma de Sinaloa </li>
                          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
                          <li>Técnico ceramista dental</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`hideSwiper ${visibleSwiper12 ? "showSwiper" : ""} `}>
                <div className="item-amenidades">
                  <img src={martha} alt="Dra. Martha" />
                  <h2>Martha G. Islas García</h2>
                  <CButton onClick={() => setVisibleL(!visibleL)}>Ver más</CButton>
                  <CCollapse visible={visibleL}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <ul className="list-details">
                          <li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
                          <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
                          <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
                          <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>
                        </ul>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Amenidades;
