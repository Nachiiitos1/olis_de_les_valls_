import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter,Route, Link } from 'react-router-dom';

function Header() {
  const [displayText, setDisplayText] = useState("ENVIAMENT GRATUÏT A PARTIR DE 145€ (NOMÉS PENINSULA)");
  const [showDropdown, setShowDropdown] = useState(false);
  
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
    <header id="main-header" className="transparent-header"> {/* Agregamos la clase transparent-header */}
      <div className="container">
        <h1>{displayText}</h1>
        <nav>
          <ul>
            <li>Botiga</li>
            <li onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              Nostre oli
              {showDropdown && (
                <ul className="dropdown-menu-column"> {/* Clase CSS para mostrar las opciones en columna */}
                  <li>l'oli</li>
                  <li>oliva arbequina</li>
                  <li>el nostre entorn</li>
                </ul>
              )}
            </li>
            <li>Activitats</li>
            <li>Receptes</li>
            <li>Arbequina</li>
            <li>Cooperativa</li>
            <li>Socis</li>
            <li>Noticies</li>
            <li><Link to="Contacte">Contacte</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} />
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '5px' }} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </header>
  );
}

export default Header;
