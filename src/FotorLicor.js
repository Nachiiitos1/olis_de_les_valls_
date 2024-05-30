import React from "react";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faPinterest, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Fotolicor from "./Assets/Images/foto_licor_ndp_horitzontal-768x628.jpg";
import IconoVerde from "./Assets/Images/icono_verde.png";
import PokeBowl from "./Assets/Images/Poke_bowl.jpg"; 
import Torrades_de_primeravera from "./Assets/Images/Torrades_de_primeravera.jpg";
import Amanida from "./Assets/Images/amanida_tropical.jpg";
import "./FotoLicor.css";

const FotoLicor = () => {
  return (
    <div>
      <Header />
      <div className="image-container">
        <img src={Fotolicor} alt="Licor" className="licor-image" />
        <div className="text-overlay">
          La Cooperativa Arbequina estrena el seu propi licor d’oliva arbequina
        </div>
        <div className="center-box">
          29 ABR. 20024
        </div>
      </div>

      <div className="additional-text">
        La nostra cooperativa amplia la gamma de productes per tal de conquerir la sobretaula i els moments festius amb el nou licor d’oliva arbequina.

        <h1>Presentació a les Cassoles de Tros d'Arbeca</h1>

        Es presentarà en societat el pròxim dimecres 1 de maig a partir de les 12:30h al nostre stand a les Cassoles de Tros d’Arbeca, on se’n podrà fer un tastet gratuït.

        <h1>Gust sorprenent i apte per a tots els moments</h1>

        Aquest licor elaborat juntament amb la Cooperativa Tres Cadires, està pensat per ser gaudit en molts dels moments del dia. Al migdia fent un 
        vermut, a la sobretaula, de tardeig, o més entrada la nit, fent uns xarrups o fent una copa al pub.

        <p>Està elaborat a partir d’olives arbequines de secà dels socis de la cooperativa. Amb un procés de maceració de 21 dies amb aiguardent, s’ha 
        aromatitzat amb tocs a xocolata, un gust que no s’acostuma a relacionar amb aquest fruit. S’arrodoneix amb un toc cítric, herbaci i dolç.</p>
      </div>

      <div>
        <img src={Fotolicor} alt="Licor" className="image-licor"/>
      </div>

      <div className="centered-tex">
        <h1>Ampliant la gamma de productes</h1>
        Un cop consolidat el nostre producte estrella com és l’oli d’oliva Verge Extra, a la Cooperativa Arbequina estem a poc a poc ampliant la nostra 
        gamma de productes com és el cas de la xocolata negra amb oli d’oliva i aquest magnífic licor.
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

        <div className="maroon-rectangle">
          <div className="icon-text-container">
            <img src={IconoVerde} alt="Icono Verde" className="icono-verde" />
            <span className="icon-text">més receptes</span>
          </div>
        <div className="images-container">
        <div className="image-with-text">
          <img src={PokeBowl} alt="Poke Bowl" className="food-image" />
          <span className="food-text">Poke Bowl Mediterrani</span>
        </div>
        <div className="image-with-text">
          <img src={Torrades_de_primeravera} alt="Torrades primavera" className="food-image" />
          <span className="food-text">Toorades de primavera amb formatge camembert i maduixes</span>
        </div>
        <div className="image-with-text">
          <img src={Amanida} alt="Amanida" className="food-image" />
          <span className="food-text">Amanida Tropical de cirera, nou i mango amb maionesa de cirera</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FotoLicor;
