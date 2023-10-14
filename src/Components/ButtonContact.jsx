import React from "react";
import "../Styles/button-contact.css";

function ButtonContact() {
  return (
    <div className="container-button">
      <a
        href="https://api.whatsapp.com/send?phone=525544754479"
        target="_blank"
        className="button-contact"
      >
        Contáctanos
      </a>
    </div>
  );
}

export default ButtonContact;
