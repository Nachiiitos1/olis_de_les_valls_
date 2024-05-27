import React, { useState, useEffect } from 'react';
import './header.css';
import logo from './Assets/Images/logofondo.png'
import { Link } from 'react-router-dom';
import './Noticies';

function Header() {
  const [texts, setTexts] = useState(["ENVIAMENT GRATUÏT ", "ATENCIÓ AL CLIENT: 654091283 "]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeIn(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div>
      <header className="header">
        <div className="centered-text-container">
          <div className={`centered-text ${fadeIn ? 'fade-in' : 'fade-out'}`}>
            <h1>{texts[currentIndex]}</h1>
          </div>
        </div>
      </header>
      <header className="second-header">
        <div className="text-container">
          <a href="/ruta-1" className="text">Texto 1</a>
          <a href="/ruta-2" className="text">Texto 2</a>
          <a href="/tienda" className="text">Tienda</a>
          <a href="/ruta-4" className="text">Texto 4</a>
          <Link to="/">
            <div className="image-container">
              <img src={logo} alt="Imagen" className="image" />
            </div>
          </Link>
          <a href="/ruta-5" className="text">Texto 5</a>
          <a href="/ruta-6" className="text">Texto 6</a>
          <a href="/Noticies" className="text">Notícies</a>
          <a href="/Contacte" className="text">Contacto</a>
        </div>

      </header>
    </div>
  );
}

export default Header;
