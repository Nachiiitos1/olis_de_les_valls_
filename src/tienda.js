import React, { useState, useEffect } from 'react';
import Header from './headertienda';
import Image1 from './Assets/Images/aceite.png'; // Importa las imágenes para el slider
import Image2 from './Assets/Images/aceite2.png';
import Image3 from './Assets/Images/aceite3.png';
import './styles.css'; // Agrega tus estilos CSS si es necesario

function Slider() {
  const images = [Image1, Image2, Image3]; // Array de imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div>
      <Header />
      <div className="">
        
      </div>
    </div>
  );
}

export default Slider;
