import React, { useState, useEffect } from 'react';
import './headertienda.css';
import logo from './Assets/Images/logofondo.png';
import { Link } from 'react-router-dom';

function HeaderTienda() {
  const [texts, setTexts] = useState(["ENVIAMENT GRATUÏT ", "ATENCIÓ AL CLIENT: 654091283 "]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [showHeader1, setShowHeader1] = useState(true);
  const [stickyHeader2, setStickyHeader2] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader1(false);
        setStickyHeader2(true);
      } else {
        setShowHeader1(true);
        setStickyHeader2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`header-tienda ${showHeader1 ? 'slide-down-tienda' : 'slide-up-tienda'}`}>
        <div className="centered-text-container-tienda">
          <div className={`centered-text-tienda ${fadeIn ? 'fade-in-tienda' : 'fade-out-tienda'}`}>
            <h1>{texts[currentIndex]}</h1>
          </div>
        </div>
      </header>
      <header className={`second-header-tienda ${stickyHeader2 ? 'sticky' : ''}`}>
        <div className="text-container-tienda">
          <div className='green-box'>
          <a href="/ruta-1" className="text-tienda">Texto 1</a>
          </div>
          <a href="/product2" className="text-tienda">Texto 2</a>
          <a href="/tienda" className="text-tienda">Tienda</a>
          <a href="/ruta-4" className="text-tienda">Texto 4</a>
          <Link to="/">
            <div className="image-container-tienda">
              <img src={logo} alt="Imagen" className="image-tienda" />
            </div>
          </Link>
          <a href="/ruta-5" className="text-tienda">Texto 5</a>
          <a href="/ruta-6" className="text-tienda">Texto 6</a>
          <a href="/ruta-7" className="text-tienda">Texto 7</a>
          <a href="/ruta-8" className="text-tienda">Texto 8</a>
        </div>
      </header>
    </div>
  );
}

export default HeaderTienda;
