import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header1() {
  const [displayText, setDisplayText] = useState("Enviament Gratuït a partir de 145€ (nomes peninsula)");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (prevText === "Enviament Gratuït a partir de 145€ (nomes peninsula)") {
          return "Atencio al client +34 973 160 000";
        } else {
          return "Enviament Gratuït a partir de 145€ (nomes peninsula)";
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
    <header id="second-header" className="second-header">
      <div className="container">
        <nav>
          <ul>
            <li><a href="/botiga">Botiga</a></li>
            <li><a href="/nostre-oli">Nostre oli</a></li>
            <li><a href="/activitats">Activitats</a></li>
            <li><a href="/receptes">Receptes</a></li>
            <li><a href="/arbequina">Arbequina</a></li>
            <li><a href="/cooperativa">Cooperativa</a></li>
            <li><a href="/socis">Socis</a></li>
            <li><a href="/noticies">Noticies</a></li>
            <li><a href="/contacte">Contacte</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header1, Header2 };
