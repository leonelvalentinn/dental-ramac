
import Whats from "../assets/whats.png";
import "../Styles/botones.css";

const Botones = () => {
  return (
    <div className="botones">
      <a
        href="https://api.whatsapp.com/send?phone=525544754479"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mensaje por WhatsApp"
      >
        <img src={Whats} alt="Logotipo de WhatsApp" />
      </a>
    </div>
  );
};

export default Botones;
