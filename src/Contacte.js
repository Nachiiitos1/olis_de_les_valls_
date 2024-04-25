import React from 'react';
import Header from './header';
import imagen from './icono_verde.png';
import './Contacte.css'; // Importa el archivo CSS
import MapComponent from './MapComponent';

function Contacte() {
  return (
    <div>
      <Header />
      <main className="contact-content">
        <div className="contact-container">
          <div className="contact-content-wrapper">
            <div className="contact-image-wrapper">
              <img src={imagen} alt="Descripción de la imagen" className="contact-image" />
            </div>
            <div className="contact-text-wrapper">
              <div className="contact-text">
                <h1>Contacte</h1>
                <p>Arbequina i Secció de Crèdit SCCL</p>
              </div>
            </div>
            <div className="contact-map-wrapper">
              {/* <MapComponent /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}



export default Contacte;
