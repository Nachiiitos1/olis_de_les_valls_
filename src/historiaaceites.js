import React from 'react';
import './historiaaceites.css';
import exampleImage from './fotos/campo.jpg';
import imagen2 from './fotos/campo2.jpg';
import actu from './fotos/actua.jpg';

function historiaaceites() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Historia</h1>
      </div>
      <div className="content-container">
        <div className="comienzo-humilde">
          <h2 className="highlight-title">Un Comienzo Humilde</h2>
          <div className="text-image-container">
            <p className="text-content">
              Nuestra historia comenzó en una pequeña planta de producción, con recursos limitados pero con una visión clara. Desde el primer día, nos propusimos crear aceites que no solo fueran superiores en calidad, sino que también respetaran el medio ambiente y apoyaran a nuestras comunidades locales.
              En los soleados campos del Mediterráneo, donde los olivos bailan con la brisa marina y los girasoles saludan al sol con su resplandor dorado, nació nuestra empresa de aceites. Inspirados por la riqueza natural y la tradición centenaria de la producción de aceites, nos embarcamos en una aventura para ofrecer lo mejor de la tierra a su mesa.
            </p>
            <img src={exampleImage} alt="Un Comienzo Humilde" className="right-image" />
          </div>
        </div>
        <div className="best-moment">
          <h2 className="best-moment-title">El Mejor Momento en Nuestra Historia</h2>
          <div className="text-image-container">
            <p className="best-moment-text-content">
              Nuestro mejor momento llegó cuando nuestros aceites recibieron el reconocimiento internacional en el prestigioso concurso de calidad de aceite de oliva. Fue un momento de orgullo y validación para todo nuestro equipo, demostrando que nuestro compromiso con la excelencia y la pasión por lo natural no pasaba desapercibido. Este hito no solo nos impulsó hacia adelante en nuestro camino, sino que también fortaleció nuestra determinación de seguir innovando y superando expectativas en cada gota de nuestros productos.
            </p>
            <img src={imagen2} alt="El Mejor Momento" className="right-image" />
          </div>
        </div>
        <div className="actualidad">
          <h2 className="highlight-title">Actualidad</h2>
          <div className="text-image-container">
            <p className="text-content">
              En la actualidad, nuestra empresa se ha consolidado como líder en el mercado de aceites, ofreciendo una gama de productos que incluyen aceite de oliva virgen extra, aceite de oliva virgen y aceite de girasol. Con instalaciones de producción de última generación y un equipo dedicado de expertos, seguimos comprometidos con la calidad y la sostenibilidad.
              Nuestros aceites de oliva virgen extra y virgen se obtienen de los mejores olivos del Mediterráneo, garantizando un sabor y una calidad inigualables. Hemos implementado prácticas agrícolas sostenibles y métodos de extracción respetuosos con el medio ambiente para asegurarnos de que cada botella de aceite no solo cumpla con los más altos estándares de calidad, sino que también contribuya a la preservación de nuestro entorno natural.
            </p>
            <img src={actu} alt="Actualidad" className="right-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default historiaaceites;
