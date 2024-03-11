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
import alejandro from "../assets/alejandro.png";
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
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';


const Amenidades = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <div className="amenidades">
      <h2>Nuestro Equipo</h2>
      <div className="container-swiper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          loop
          breakpoints={{768: {slidesPerView:3}}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className={`${isOpen ? "none" : ""}`}>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
            <div className="item-amenidades">
              <img src={alejandro} alt="" />
              <h2>Alejandro Alonso Moctezuma</h2>
              <CButton onClick={() => setVisibleE(!visibleE)}>Ver más</CButton>
              <CCollapse visible={visibleE}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li>Facultad de odontología UNAM</li>
                      <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 4833472</strong></li>
                      <li>División de estudios de posgrado UNAM</li>
                      <li>Especialidad en Cirugía oral y Maxilofacial <strong>Ced. Prof. 7876057</strong></li>
                      <li>Maestría en Ciencias <strong>Ced. Prof. 09698489</strong></li>
                      <li>Doctorado en Ciencias <strong>Ced. Prof. 12901554</strong></li>
                      <li>Profesor activo de Posgrado FO. UNAM</li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
          <SwiperSlide>
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
        <a className="icon-arrow review-swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='CurrentColor'><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg></a>
        <a className="icon-arrow review-swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='CurrentColor'><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg></a>
      </div>
      <div className="container-amenidades">
        {/*<div className="item-amenidades">
          <img src={area6} alt="" />
          <h2>Dra. Silvia Pérez</h2>
        </div>
        <div className="item-amenidades">
          <img src={area1} alt="" />
          <h2>Dr. Omar Arenas</h2>
        </div>*/}
      </div>
      {/*<Link to="/amenidades">Ver más</Link>*/}
    </div>
  );
};

export default Amenidades;
