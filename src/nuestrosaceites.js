import React from 'react';
import './nuestrosaceites.css';
import origenImage from './fotos/LOGO FONDO TRANSPARENTE.png'; 
import perfilImage from './fotos/fotor-ai-20240314164156.jpg';
import perfilImage1 from './fotos/fotor-ai-20240314163840.jpg'; 

function nuestrosaceites() {
  return (
    <div className="nuestrosaceites">
      <div className="top-image-container">
        <img src={perfilImage1} alt="Imagen de arriba" className="top-image" />
        <h1 className="title">Nuestros aceites</h1>
      </div>
      <div className="columns-container">
        <div className="column left-column">
          <h2 className="text-color">Perfil</h2>
          <p className="profile-text">
            Oli sense defectes evidents (total acord entre tastadors). El perfil positiu correspon a un oli de bona qualitat.
          </p>
          <p className="profile-text">
            Perfil de fruitat verd mig, amb tocs madurs. En boca és picant, dolç, amb un amarg evident i una astringència clara en boca.
          </p>
          <img src={perfilImage} alt="Imagen de perfil" className="profile-image" /> 
          <p className="profile-text">
            Aromes secundàries de tipus vegetal, amb connotacions clares d’herba tallada i plantes d’horta o ametlló, així com tocs clars d’ametlla, que li defineixen la dolçor en boca, i tocs de poma característics dels olis d’Arbequina. El conjunt resulta intens en boca i complex i ric en aromes.
          </p>
        </div>
        <div className="column center-column">
          <h2 className="text-color">Origen</h2>
          <p>
            Nuestros aceites provienen de los mejores olivares situados en regiones con una larga tradición olivarera. Los olivares se encuentran en suelos ricos y fértiles, y el clima mediterráneo contribuye a la producción de aceitunas de la más alta calidad.
          </p>
          <p>
            La combinación de técnicas tradicionales y tecnología moderna en el cultivo y la producción nos permite obtener aceites que mantienen todas sus propiedades organolépticas. Además, respetamos el medio ambiente y promovemos la sostenibilidad en cada etapa del proceso.
          </p>
          <p>
            Cada botella de nuestro aceite es un reflejo del esfuerzo y dedicación de los agricultores que trabajan con esmero para brindar un producto excepcional.
          </p>
          <img src={origenImage} alt="Imagen de origen" /> 
        </div>
        <div className="column right-column">
          <h2 className="text-color">Premios</h2>
          <p className="profile-text">
            Arbequina ha fet de l’Oli Verge Extra la seva bandera i ha procurat sempre donar el millor producte, això s’ha reconegut amb diferents premis i accèssits.
          </p>
          <ul className="awards-list">
            <li><strong>3r Premi Feria Montoro 1998</strong></li>
            <li><strong>Accèssit Romànic Essència 1999-2000</strong></li>
            <li><strong>1r Premi Romànic Essència 2001-2002</strong></li>
            <li><strong>1r Premi Oli Verge Extra Afruitat Madur Fira de l’Oli de Les Borges Blanques 2009</strong></li>
            <li><strong>1r Premi Oli Verge Extra Afruitat Verd Dolç Fira de l’Oli de Les Borges Blanques 2013</strong></li>
            <li><strong>1r Premi Oli Verge Extra Afruitat Verd Dolç Fira de l’Oli de Les Borges Blanques 2014</strong></li>
            <li><strong>Accèssit Oli Verge Extra Afruitat Verd Dolç Fira de l’Oli de Les Borges Blanques 2014</strong></li>
            <li><strong>Accèssit Romànic Essència 2015 a 2016</strong></li>
            <li><strong>1r Premi Oli Verge Extra Afruitat Verd Dolç Fira de las Borges Blanques 2016</strong></li>
            <li><strong>Accèssit Oli Verge Extra Afruitat Verd Dolç Fira de l’Oli de Les Borges Blanques 2018</strong></li>
            <li><strong>Premio a la Cultura de l’Oli Fira de l’Oli de Les Borges Blanques 2019</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default nuestrosaceites;