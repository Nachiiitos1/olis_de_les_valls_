import React, { useState, useEffect } from 'react';
import './botondeslizante.css'; // Importa el archivo CSS para estilos personalizados

function BotonDeslizante() {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setMostrarBoton(true);
    } else {
      setMostrarBoton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    mostrarBoton && (
      <div className="botonDeslizanteContainer">
        <button className="botonDeslizante" onClick={scrollToTop}>
          <span className="flecha">&#9650;</span>
        </button>
      </div>
    )
  );
}

export default BotonDeslizante;