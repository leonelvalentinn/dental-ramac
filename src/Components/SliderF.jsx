// Components
import { useState } from 'react'
import { Splide } from '@splidejs/react-splide'
import Button from './Button'

// Styles
import '@splidejs/react-splide/css'
import '../Styles/amenidades.css'
import '../Styles/galeryHome.css'

// Images
import foto1 from '../assets/odontologia-preventiva.webp'
import foto2 from '../assets/cirugia.webp'
import foto3 from '../assets/implantologia.webp'
import foto4 from '../assets/rehabilitacion-oral.webp'
import foto5 from '../assets/endodoncia.webp'
import foto6 from '../assets/ortodoncia.webp'
import foto7 from '../assets/odontopediatria.webp'
import foto10 from '../assets/pathology.webp'
import foto12 from '../assets/laboratorio.webp'
import foto13 from '../assets/periodoncia.webp'
import marcela from '../assets/marcela.png'
import rodolfo from '../assets/rodolfo.png'
import liliana from '../assets/liliana.webp'
import azul from '../assets/azul.png'
import valeria from '../assets/valeria.png'
import nora from '../assets/nora.png'
import edgar from '../assets/edgar.png'
import martha from '../assets/martha.png'
import alonso from '../assets/alejandro.webp'
import eduardo from '../assets/eduardo.png'
import emiliano from '../assets/emiliano.webp'
import { CardSlider } from './CardSlider'

const SliderF = () => {
  let idRender = '1'
  // State for Modal
  const [isModal, setIsModal] = useState(false)
  const [infoMU, setInfoModal] = useState(0)
  const [slides, setSlides] = useState(2)

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
        },
        {
          id: 9,
          photo: rodolfo,
          name: 'Rodolfo Uribe Castillo',
          list: `<li>Universidad del Magdalena - Colombia</li>
          <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Ortodoncia y ortopedia maxilofacial</li>`,
        },
        {
          id: 3,
          photo: valeria,
          name: 'Valeria A. Esparza Rodríguez',
          list: `<li>Universidad Autónoma de Sinaloa </li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
          <li>Técnico ceramista dental</li>`,
        },
        {
          id: 11,
          photo: nora,
          name: 'Nora E. Castillo Pérez',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced.Prof.5258208</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad en ortodoncia <strong>Ced.Prof. 9627255</strong></li>`,
        },
        {
          id: 4,
          photo: eduardo,
          name: 'Eduardo Llanos López',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista</li>
          <li><strong>Ced. Prof. 13356225</strong></li>`,
        },
        {
          id: 2,
          photo: martha,
          name: 'Martha G. Islas García',
          list: `<li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
          <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
          <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
          <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>`,
        },
        {
          id: 7,
          photo: azul,
          name: 'Azul M. González Gómez',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad de Endodoncia</li>`,
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
        }
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
        },
        {
          id: 2,
          photo: martha,
          name: 'Martha G. Islas García',
          list: `<li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
          <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
          <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
          <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>`,
        },
        {
          id: 3,
          photo: valeria,
          name: 'Valeria A. Esparza Rodríguez',
          list: `<li>Universidad Autónoma de Sinaloa </li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof. 11343631</strong></li>
          <li>Técnico ceramista dental</li>`,
        },
        {
          id: 4,
          photo: eduardo,
          name: 'Eduardo Llanos López',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista</li>
          <li><strong>Ced. Prof. 13356225</strong></li>`,
        }
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
        }
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
        },
        {
          id: 8,
          photo: liliana,
          name: 'Liliana A. Camacho Aparicio',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista <strong>Ced. Prof.10440497</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Especialidad de Endodoncia</li>`,
        }
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
        },
        {
          id: 9,
          photo: rodolfo,
          name: 'Rodolfo Uribe Castillo',
          list: `<li>Universidad del Magdalena - Colombia</li>
          <li>Odontólogo <strong>Ced. Prof. 1.082.985.066</strong></li>
          <li>División de estudios de posgrado UNAM</li>
          <li>Ortodoncia y ortopedia maxilofacial</li>`,
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
        }
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
        }
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
        }
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
        },
        {
          id: 4,
          photo: eduardo,
          name: 'Eduardo Llanos López',
          list: `<li>Facultad de odontología UNAM</li>
          <li>Lic. en Cirujano Dentista</li>
          <li><strong>Ced. Prof. 13356225</strong></li>`,
        }
      ]
    },
    {
      id: 11,
      infoSlider: [
        {
          id: 2,
          photo: martha,
          name: 'Martha G. Islas García',
          list: `<li>Facultad de Estudios Superiores Zaragoza. UNAM.</li>
          <li>Licenciatura en Cirujana Dentista. <strong>Ced. Prof. 6991412</strong></li>
          <li>Diplomado de Actualización Profesional en el Manejo de Tejidos Periimplantarios en Cirugía Bucal y Periodontal.</li>
          <li>Diplomado de Actualización Profesional en Terapia Periodontal</li>`,
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
        }
      ]
    }
  ]
  const infoModal = [
    {
      id: 1,
      img: foto1,
      title: 'Odontología Preventiva',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Esta área busca anticiparse a la aparición de dolor o molestias que puedan afectar los dientes, encías o tejidos de soporte como, por ejemplo, infecciones de encías, pérdida de piezas dentales, sensibilidad, caries y otras. Garantizando de este modo una salud bucal a largo plazo.'
    },
    {
      id: 2,
      img: foto4,
      title: 'Rehabilitación Oral',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Se encarga de la restauración bucal, devolviendo la función, estética y armonía oral reponiendo las piezas dentales perdidas, fracturadas o desgastadas. Mediante prótesis dentales, coronas, carillas, resinas, buscando siempre una buena oclusión, función y salud.'
    },
    {
      id: 3,
      img: foto3,
      title: 'Implantología',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Área especializada en reponer los órganos dentales ausentes mediante el uso de implantes dentales, permitiendo al paciente continuar su vida con todos sus dientes garantizando una mejor salud bucal, masticación y estética sin desgastar dientes vecinos. '
    },
    {
      id: 4,
      img: foto5,
      title: 'Endodoncia',
      subtitle: 'Conoce a nuestras especialistas',
      info: 'Especialidad encargada de diagnosticar, reparar, prevenir y tratar las enfermedades de los nervios y vasos sanguíneos en los conductos dentales, desinflamándolos para que no generen dolor y puedan durar por mas tiempo los dientes en boca.'
    },
    {
      id: 5,
      img: foto6,
      title: 'Ortodoncia',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Especialidad Odontológica encargada de prevenir, corregir, tratar la posición dental y de los maxilares con fines estéticos y funcionales.'
    },
    {
      id: 6,
      img: foto7,
      title: 'Odontopediatría',
      subtitle: 'Conoce a nuestro especialista',
      info: 'Especialidad odontológica encargada de tratar a la población infantil y con necesidades especiales para enseñar, prevenir y tratar alguna patología dental o de los maxilares que pueda afectar el desarrollo, crecimiento, salud y estética de los niños en el futuro.'
    },
    {
      id: 7,
      img: foto2,
      title: 'Cirugía Oral',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Especialidad odontológica encargada de evaluar, diagnosticar y realizar procedimientos quirúrgicos dentales, maxilares y faciales, tales como extracciones de muelas del juicio, dientes supernumerarios, incluidos y quistes.'
    },
    {
      id: 8,
      img: foto10,
      title: 'Patología Bucal',
      subtitle: 'Conoce a nuestro especialista',
      info: 'Especialidad Odontológica que evalúa, diagnostica y trata lesiones y enfermedades de los órganos dentarios, tejidos blandos, maxilar y mandíbula y su relación con problemas y enfermedades sistémicas, mediante biopsias y cirugías.'
    },
    {
      id: 9,
      img: foto12,
      title: 'CAD-CAM',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Diseño asistido por computadora de ultima tecnológica digital que cuenta con escáner intraoral, extraoral, fresadora de zirconia e impresiones 3D que facilitan y mejorar la precisión y calidad de nuestros tratamientos.'
    },
    {
      id: 10,
      img: foto13,
      title: 'Periodoncia',
      subtitle: 'Conoce a nuestros especialistas',
      info: 'Especialidad encargada del estudio y tratamiento de los tejidos de soporte dentales tales como: encías, ligamento periodontal, hueso alveolar y cemento radicular. Los cuales se ven afectados en enfermedades como gingivitis y periodontitis, que son la principal causa de perdida de dientes. '
    }
  ]

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
    setIsModal(true)
    idRender = e.target.id
    if (idRender === '6' || idRender === '8') {
      setSlides(1)
    } else {
      setSlides(2)
    }
    setInfoModal(idRender - 1)
  }
  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <div className='amenidades'>
      <div className='galery' id='servicios'>
        <h2>Servicios y Especialidades</h2>
        <div className='container-galery'>
          {
            infoModal.map((item) => (
              <div className='item-galery' key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.img} alt={item.title} />
                <button className='btn-mas' id={item.id} onClick={(e) => openModal(e)}>
                  Ver más
                </button>
              </div>
            ))
          }
        </div>
        <div
          className={`modal-atractions ${isModal ? 'popup' : ''} `}
          id='modal-atractions'
        >
          <div className='container-atractions' id='container-atractions'>
            <button className='btn-close' onClick={() => closeModal()}>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-x-circle' viewBox='0 0 16 16'>
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
              </svg>
            </button>
            <div className='container-information container-text-slider'>
              <InfoModal info={infoMU} />
              <Splide
                className='mb-10'
                aria-label='Slider Dentistas'
                options={{
                  perPage: slides,
                  gap: '1rem',
                  width: '100%',
                  breakpoints: { 768: { perPage: 1 } }
                }}
              >
                {
                  slider[infoMU].infoSlider.map((info, j) => (
                    <CardSlider
                      key={j}
                      photo={info.photo}
                      name={info.name}
                      list={info.list}
                    />
                  ))
                }
              </Splide>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderF
