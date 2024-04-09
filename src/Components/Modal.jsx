import Button from './Button'
import promo from '../assets/promo-2.webp'
import '../Styles/hero.css'
import { WhatsApp } from './WhatsApp'
import { useState, useEffect } from 'react'
import { CountDown } from './CountDown'

export const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  const [showCountdown, setShowCountdown] = useState(<CountDown />)

  const countDown = () => {
    setShowModal(false)
    setShowCountdown('0')
  }

  useEffect(() => {
    console.log('hola')
    const timeoutId = setTimeout(() => {
      setShowModal(true)
      setShowCountdown(<CountDown />)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className={`modal ${showModal ? 'show-modal' : ''}`} onClick={() => countDown()}>
      <div className='overlay-content'>
        <h2>¡Últimos días!</h2>
        {showCountdown}
        <img src={promo} alt='promoción de paquete infantil' />
        <Button WhatsApp>
          <WhatsApp />
          Contacto
        </Button>
        <button onClick={() => countDown()}>Cerrar</button>
      </div>
    </div>
  )
}
