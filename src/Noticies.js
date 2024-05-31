// Noticies.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import './noticies.css';
import fotoLicor from './Assets/Images/foto_licor_ndp_horitzontal-768x628.jpg';
import Assamblea from './Assets/Images/assamblea_olis.jpg';
import Brics from './Assets/Images/brics_aceite.jpg';
import Aceite from './Assets/Images/aceite_vs_coronavirus.jpg';
import Destruyendo from './Assets/Images/aceite_destruyendo_celulas_cancerígenas.jpg';
import Hombre from './Assets/Images/hombre_pisando_cesped.jpg';
import Coperativa from './Assets/Images/la_transformacion_de_la_coperativa.jpg';
import Produccio from './Assets/Images/produccio.jpg';
import Microfono from './Assets/Images/microfono.jpg';
import TractorImage from './Assets/Images/tractor_ametlles-768x460.jpg';  // Importa la imagen con un alias
import Imagen_3 from './Assets/Images/imagen_3.png';
import Aceite_virgen from './Assets/Images/oli_aceite_virgen.jpg';

function Noticies() {
    const photos = [
        { 
            url: fotoLicor, 
            text: 'La Cooperativa Arbequina estrena su propio licor de aceituna Arbequina',
            description: 'La nostra cooperativa amplia la gamma de productes per tal de conquerir la sobretaula i els moments festius amb el nou licor d’oliva arbequina...',
            link: "/FotoLicor"  // Asegúrate de que el enlace sea correcto
        },

        { 
            url: TractorImage, 
            text: 'Ajuda per les instal·lacions de producció i emmagatzematge d’ametlla',
            description: 'La Generalitat ens ha ajudat en el projecte del trasllat i modernització de les instal·lacions de producció i emmagatzematge d’ametlla de la cooperativa...',
            link: "/Tractor"  // Asegúrate de que el enlace sea correcto
        },
        
        {
            url: Imagen_3,
            text: 'L’engany dels supermercats amb l’oli d’oliva',
            description: 'Alguns supermercats intenten enganyar els consumidors venent productes de qualitat inferior com si fossin oli Verge Extra...'
            
        },

        {   
            url: Brics, 
            text: 'És l’oli d’oliva Verge Extra un producte car? En absolut',
            description: 'L’oli d’oliva Verge Extra no és un producte car. Si ho comparem amb altres productes és… fins i tot barat!...'
        },

        {   
            url: Hombre, 
            text: 'Confia en el nostre oli de qualitat en situacions d’alerta alimentària.',
            description: 'Des d’aquí volem transmetre als consumidors la confiança en el nostre producte, i garantir que els nostres olis compleixen amb tots els requisits de qualitat i seguretat alimentària...'
        },

        {   
            url: Assamblea, 
            text: 'Photo Assamblea General Ordinària d’Arbequina i Secció de Crèdit SCCL',
            description: 'Convocatòria de l’assamblea general ordinària de la Cooperativa Arbequina, Dia 29 de novembre a partir de les 19:30h...',

        },

        {   
            url: Microfono, 
            text: 'Jornada tècnica Agrària 26-N',
            description: 'Ponència Tècnica Agrària sobre la importància del regadiu i les noves oportunitats de conreu...'

        },

        {   
            url: Produccio, 
            text: 'La producció d’oli d’oliva caurà gairebé un 50% a la nova collita',
            description: 'La Cooperativa Arbequina preveu que la producció d’oli d’oliva d’enguany sigui una de les més baixes dels últims anys...'
        },

        {   
            url: Aceite_virgen, 
            text: 'L’oli d’oliva Verge Extra, la solució per la falta d’oli de gira-sol',
            description: 'L’oli d’oliva Verge Extra és la millor solució per a substituir la falta de subministrament d’oli de gira-sol pel conflicte a Ucraïna...' 
        },

        {   
            url: Destruyendo, 
            text: 'L’oli d’oliva Verge Extra, el superaliment que t’ajuda a destruïr cèl·lules cancerígenes.',
            description: 'El aceite de oliva Virgen Extra es uno de los principales alimentos para prevenir todo tipos de cáncer y muchas otras enfermedades... '

        },

        {   
            url: Coperativa, 
            text: 'La transformació de la Cooperativa Arbequina en plena pandèmia',
            description: 'La Cooperativa Arbequina aposta per un canvi en la seva imatge corporativa, creant una nova marca i redissenyant la seva visió estratègica encarant-la cap a la transformació digital...' 
        },

        {   
            url: Aceite, 
            text: 'OLI D’OLIVA VS CORONAVIRUS',
            description: 'L’oli d’oliva verge extra potencia el sistema immunològic enfront de el coronavirus. Els experts adverteixen que aquests dies de confinació, la mala alimentació i la falta d’activitat física, pot danyar la salut de moltes persones que ja presenten patologies prèvies Per això, diferents investigadors fan una crida a la població...'
        },
    ];

    return (
        <>
            <Header />
         
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                        {photo.link ? (
                            <Link to={photo.link}>
                                <img src={photo.url} alt={photo.text} />
                            </Link>
                        ) : (
                            <img src={photo.url} alt={photo.text} />
                        )}
                        
                        <p className="photo-text">{photo.text}</p>
                        <p className="description-text">{photo.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Noticies;
