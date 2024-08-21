import '../Styles/card-amenidades.css'
import promo3 from '../assets/promo-agosto.webp'

const CardAmenidades = () => {
  return (
    <div className='card-amenidades'>
      <h2>Promociones exclusivas para ti</h2>
      <div className='container-card-amenidades'>
        <div className='item-promo'>
          <img src={promo3} alt='Promoción 3' />
          <a
            href='https://wa.me/525544754479?text=Buenas tardes, solicito información sobre la limpieza dental'
            className='btn-header-contacto'
          >
            Agenda tu cita
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardAmenidades
