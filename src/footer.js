import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2 style={{ color: 'white' }}>Links</h2>
          <ul>
            <li  style={{ color: '#c6d420' }}>Receptes</li>
            <li style={{ color: '#c6d420' }}><Link to="/productes" style={{ color: '#c6d420' }}>Productes</Link></li>
            <li  style={{ color: '#c6d420' }}>Historia</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: 'white' }}>NewsLetter</h2>
          <p  style={{ color: '#c6d420' }}>Vols conèixer totes les nostres novetats?</p>
          <p  style={{ color: '#c6d420' }}>Subscriu-te a la nostre Newsletter.</p>
        </div>
        <div className="footer-section contact">
          <h2 style={{ color: 'white' }}>Contacte</h2>
          <p  style={{ color: '#c6d420' }}><i className="fa fa-phone"></i> Teléfono: +34 635 78 96 15</p>
          <p  style={{ color: '#c6d420' }}><i className="fa fa-envelope"></i> Correo: info@olisDeLesValls.com</p>
          <p  style={{ color: '#c6d420' }}><i className="fa fa-map-marker"></i> Dirección: Prat Educacio </p>
        </div>
      </div>
      <div className="info">
        Informació
        <li><Link to="/avis" style={{ color: '#c6d420' }}>Avís legal</Link></li>
        <li><Link to="/politicac" style={{ color: '#c6d420' }}>Política de cookies</Link></li>
        <li><Link to="/politicap" style={{ color: '#c6d420' }}>Política de privacitat</Link></li>
        <li><Link to="/condicions" style={{ color: '#c6d420' }}>Condicions de compra i devolucions</Link></li>
        <li><Link to="/dret" style={{ color: '#c6d420' }}>Dret de desistiment</Link></li>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Olis mas les valls. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;


