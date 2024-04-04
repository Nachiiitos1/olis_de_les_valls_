// home.js

import React from 'react';
import Header from './header';
import videoSource from './Assets/Images/VideoOlivos.mp4'; // Ruta a tu archivo de video

function Home() {
  return (
    <div>
      <Header />
      <div style={videoBackgroundStyle}>
        <video autoPlay loop muted style={videoStyle}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={textOverlayStyle}>
          <h1 style={textStyle}></h1>
        </div>
      </div>
      {/* Tu contenido aquí */}
    </div>
  );
}

const videoBackgroundStyle = {
  position: 'relative',
  width: '100%',
  minHeight: 'calc(100vh - 100px)', // Ajusta el valor según la altura de tu header
};

const videoStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const textOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  width: '100%',
};

const textStyle = {
  color: 'white',
  fontSize: '3rem',
  // Estilos adicionales según sea necesario
};

export default Home;