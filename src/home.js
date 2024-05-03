import React, { useState } from 'react';
import Header from './header'
//import videoSource from './Assets/Images/VideoOlivos.mp4'; 
import videoSource from './Assets/Images/VideoOlivos2.mp4'; 
import WhatsappButton from './components/whatsapp';
import image1 from './Assets/Images/aceite.png';
import receta1 from './Assets/Images/receta1.jpg'
import imagenvideo from './Assets/Images/iconosVideo.png'
import BotonDeslizante from './components/botondeslizante';
import Footer from './components/footer';
import './styles.css';

function Home() {
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredButtonIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredButtonIndex(null);
  };

  return (
    <div>
      <Header />
      <div className="videoBackground">
        <video autoPlay loop muted className="videoStyle">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="textOverlay">
          <h1 className="textStyle1 fade-in">olis mas</h1>
          <h1 className="textStyle2 fade-in">de les valls</h1>
        </div>
        <div className="imageOverlay">
          <img src={imagenvideo} alt="Icono de video" className="videoIcon" />
        </div>
      </div>

      <div className="subtitleStyle1">Los más vendidos</div>

      <div className="productContainer">
        <div className="productItem">
          <img src={image1} alt="Producto 1" className="productImage" />
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">32€</p>
          </div>
          <button
            className="buttonStyle"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <img src={image1} alt="Producto 1" className="productImage" />
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">6€</p>
          </div>
          <button
            className="buttonStyle"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <img src={image1} alt="Producto 1" className="productImage" />
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">10€</p>
          </div>
          <button
            className="buttonStyle"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
      </div>

      {/* Botón "Ver más" */}
      <div className="buttonContainer">
        <a href="/tienda" className="verMasButton">Ver más</a>
      </div>

      <div className="newsContainer">
        <div className="subtitleStyle2">Noticias y Recetas</div>
        <div className="newsItemsContainer">
          <div className="newsItem">
            <img src={receta1} alt="Noticia 1" className="newsImage" />
            <div>
              <p className="newsTextStyle1">Título de la noticia 1</p>
              <p className="newsTextStyle2">Descripción de la noticia 1</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
          <div className="newsItem">
            <img src={receta1} alt="Noticia 2" className="newsImage" />
            <div>
              <p className="newsTextStyle1">Título de la noticia 2</p>
              <p className="newsTextStyle2">Descripción de la noticia 2</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
          <div className="newsItem">
            <img src={receta1} alt="Noticia 3" className="newsImage" />
            <div>
              <p className="newsTextStyle1">Título de la noticia 3</p>
              <p className="newsTextStyle2">Descripción de la noticia 3</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
        </div>
      </div>
      <BotonDeslizante/>
      <WhatsappButton />
      <div>
        <br></br>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
