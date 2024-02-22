import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CCollapse, CCard, CCardBody, CButton  } from '@coreui/react'
import "../Styles/amenidades.css";
import area1 from "../assets/amenidad1.png";
import area2 from "../assets/marcela.png";
import area3 from "../assets/eduardo.png";
import area4 from "../assets/edgar.png";
import area5 from "../assets/liliana.png";
import alejandro from "../assets/alejandro.png";
import emiliano from "../assets/emiliano.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Amenidades = () => {
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
  return (
    <div className="amenidades">
      <h2>Nuestro Equipo</h2>
      <div className="container-swiper">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
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
              <img src={area5} alt="" />
              <h2>Dr. Joan Kenedy Mayo</h2>
              <CButton onClick={() => setVisibleG(!visibleG)}>Ver más</CButton>
              <CCollapse visible={visibleG}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-amenidades">
              <img src={area5} alt="" />
              <h2>Dr. Joan Kenedy Mayo</h2>
              <CButton onClick={() => setVisibleH(!visibleH)}>Ver más</CButton>
              <CCollapse visible={visibleH}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-amenidades">
              <img src={area5} alt="" />
              <h2>Dr. Joan Kenedy Mayo</h2>
              <CButton onClick={() => setVisibleI(!visibleI)}>Ver más</CButton>
              <CCollapse visible={visibleI}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-amenidades">
              <img src={area5} alt="" />
              <h2>Dr. Joan Kenedy Mayo</h2>
              <CButton onClick={() => setVisibleJ(!visibleJ)}>Ver más</CButton>
              <CCollapse visible={visibleJ}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-amenidades">
              <img src={area5} alt="" />
              <h2>Dr. Joan Kenedy Mayo</h2>
              <CButton onClick={() => setVisibleK(!visibleK)}>Ver más</CButton>
              <CCollapse visible={visibleK}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-amenidades">
              <img src={area5} alt="" />
              <h2>Dr. Joan Kenedy Mayo</h2>
              <CButton onClick={() => setVisibleL(!visibleL)}>Ver más</CButton>
              <CCollapse visible={visibleL}>
                <CCard className="mt-3">
                  <CCardBody>
                    <ul className="list-details">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </SwiperSlide>
        </Swiper>
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
