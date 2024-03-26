import "../Styles/botones.css"

const Button = ({ children, WhatsApp }) => {

  return (
    <a
      href="https://api.whatsapp.com/send?phone=525544754479"
      target="_blank"
      className={`button-contact ${WhatsApp ? "whatsapp" : ""}`}
      rel="noopener noreferrer"
    >
      {children ? children : "Contacto"}
    </a>
  );
} 

export default Button