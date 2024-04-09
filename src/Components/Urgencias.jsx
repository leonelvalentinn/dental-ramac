import Button from '../Components/Button'
import '../Styles/urgencia.css'
import { WhatsApp } from './WhatsApp'

export const Urgencias = () => {
  return (
    <section className='container-urgencia'>
      <article>
        <h3>¿Tienes una Urgencia Dental?</h3>
        <p>¡Contáctanos y agenda una cita al momento!</p>
        <Button WhatsApp>
          <WhatsApp />
          Mándanos un mensaje
        </Button>
      </article>
    </section>
  )
}
