import '../Styles/botones.css'

// eslint-disable-next-line react/prop-types
const Button = ({ children, WhatsApp }) => {
  const Text = () => {
    if (children) {
      return children
    } else {
      return 'Contacto'
    }
  }
  return (
    <a
      href='https://api.whatsapp.com/send?phone=525544754479'
      target='_blank'
      className={`button-contact ${WhatsApp ? 'whatsapp' : ''}`}
      rel='noopener noreferrer'
    >
      {Text()}
    </a>
  )
}

export default Button
