import React, { useState, useEffect } from 'react';
import './header.css';
import logo from './Assets/Images/logofondo.png';
import { Link } from 'react-router-dom';

function Header({ toggleCart }) {
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
        <div className="second-header">
          <div className="text-container">
            <div className='green-box'>
            <Link to="/tienda" className="text">Tienda</Link>
            </div>
            <Link to="/NuestrosAceites" className="text">EMPTY</Link>
            <Link to="/Historia" className="text">EMPTY</Link>
            <Link to="/" className="image-container">
              <img src={logo} alt="Imagen" className="image" />
            </Link>
            <Link to="/Recetas" className="text">EMPTY</Link>
            <Link to="/Noticies" className="text">EMPTY</Link>
            <Link to="/Contacte" className="text">EMPTY</Link>
          </div>
        </div>
      </header>
      <div className="content">
        {/* Espacio para el contenido de la página debajo del primer header */}
      </div>
    </div>
  );
}

export default Header;
