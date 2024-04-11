import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header1() {
  const [displayText, setDisplayText] = useState("ENVIAMENT GRATUÏT A PARTIR DE 145€ (NOMÉS PENINSULA)");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (prevText === "ENVIAMENT GRATUÏT A PARTIR DE 145€ (NOMÉS PENINSULA)") {
          return "ATENCIO AL CLIENT +34 973 160 000";
        } else {
          return "ENVIAMENT GRATUÏT A PARTIR DE 145€ (NOMÉS PENINSULA)";
        }
      });
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []); // Se ejecuta solo una vez al montar el componente

  
  return (
    <header id="main-header">
      <div className="container">
        <h1>{displayText}</h1>
      </div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} />
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '5px' }} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </header>
  );
}

function Header2() {
  return (
    <header id="second-header" className="sticky-header">
      <div className="container">
        <nav>
          <ul>
            <li>Botiga</li>
            <li>Nostre oli</li>
            <li>Activitats</li>
            <li>Receptes</li>
            <li>Arbequina</li>
            <li>Cooperativa</li>
            <li>Socis</li>
            <li>Noticies</li>
            <li>Contacte</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export { Header1, Header2 };
