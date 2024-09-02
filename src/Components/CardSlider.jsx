import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react'
import { SplideSlide } from '@splidejs/react-splide'
import { useState } from 'react'

export const CardSlider = ({ photo, name, list }) => {
  const [visible, setVisible] = useState(false)

  return (
    <SplideSlide>
      <div className='item-amenidades'>
        <img src={photo} alt={`Foto de perfil de ${name}`} />
        <h2>{name}</h2>
        <CButton onClick={() => setVisible(!visible)}><span>{visible ? 'Ver menos' : 'Ver más'}</span></CButton>
        <CCollapse visible={visible}>
          <CCard className='mt-3'>
            <CCardBody>
              <ul className='list-details' dangerouslySetInnerHTML={{ __html: list }} />
            </CCardBody>
          </CCard>
        </CCollapse>
      </div>
    </SplideSlide>
  )
}
