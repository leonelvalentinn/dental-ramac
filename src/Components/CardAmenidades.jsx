import '../Styles/card-amenidades.css'
import promo1 from '../assets/promo-1.webp'
import { useState, useEffect } from 'react'

const CardAmenidades = () => {
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAYS = HOUR * 24
  const END_DATE = 1714869000000
  const date = new Date(END_DATE).getTime()

  const [days, setDays] = useState('0')
  const [hours, setHours] = useState('0')
  const [minutes, setMinutes] = useState('0')
  const [seconds, setSeconds] = useState('')
  const [hidePromo, setHidePromo] = useState(false)

  useEffect(() => {
    if (hidePromo === false) {
      const intervalCountdown = setInterval(() => {
        const now = new Date().getTime()
        const diff = date - now
        const dayText = Math.floor(diff / DAYS).toString()
        const hourText = Math.floor((diff % DAYS) / HOUR).toString()
        const minuteText = Math.floor((diff % HOUR) / MINUTE).toString()
        const secondText = Math.floor((diff % MINUTE) / SECOND).toString()
        setDays(dayText)
        setHours(hourText)
        setMinutes(minuteText)
        setSeconds(secondText)
        console.log(minuteText, minutes)
        if (minuteText === '0') {
          console.log('hola')
          setHidePromo(true)
        }
      }, SECOND)
      return () => clearInterval(intervalCountdown)
    }
  }, [hidePromo])
  return (
    <div className='card-amenidades'>
      <h2>Promociones exclusivas para ti</h2>
      <div className='container-card-amenidades'>
        <div className='item-promo'>
          <img src={promo1} alt='Promoción 1' />
          <a href='https://wa.me/525544754479?text=Buenas tardes, solicito información sobre la limpieza dental' className='btn-header-contacto'>Agenda tu cita</a>
        </div>
      </div>
      <div className='container-countdown' style={{ display: 'none' }}>
        <div className='item-countdown'>
          <span>{days}</span>
          <span>Días</span>
        </div>
        <div className='item-countdown'>
          <span>{hours}</span>
          <span>Horas</span>
        </div>
        <div className='item-countdown'>
          <span>{minutes}</span>
          <span>Minutos</span>
        </div>
        <div className='item-countdown'>
          <span>{seconds}</span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  )
}

export default CardAmenidades
