import '../Styles/card-amenidades.css'
import promo2 from '../assets/promo-2.webp'
import promo1 from '../assets/promo-1.webp'
import promo3 from '../assets/RAMAC.webp'

const CardAmenidades = () => {
  return (
    <div className='card-amenidades'>
      <h2>Promociones exclusivas para ti</h2>
      <div className='container-card-amenidades'>
        <div className='item-promo'>
          <img src={promo3} alt='Promoción paquete infantil' />
          <a href='https://wa.me/525544754479?text=Buenas tardes, solicito información sobre la promoción del paquete infantil' className='btn-header-contacto'>Agenda tu cita</a>
        </div>
        <div className='item-promo'>
          <img src={promo1} alt='Promoción 1' />
          <a href='https://wa.me/525544754479?text=Buenas tardes, solicito información sobre la limpieza dental' className='btn-header-contacto'>Agenda tu cita</a>
        </div>
        <div className='item-promo'>
          <img src={promo2} alt='Promoción 1' />
          <a href='https://wa.me/525544754479?text=Buenas tardes, solicito información sobre la promoción de resinas' className='btn-header-contacto'>Agenda tu cita</a>
        </div>
      </div>
    </div>
  )
}

export default CardAmenidades
