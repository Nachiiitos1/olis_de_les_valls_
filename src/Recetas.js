// Recetas.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import './recetas.css';
import iconoVerde from './Assets/Images/icono_verde.png';
import Pokebowl from './Assets/Images/Poke_bowl.jpg';
import Torrades from './Assets/Images/Torrades_de_primeravera.jpg';
import Amanida from './Assets/Images/amanida_tropical.jpg';
import pesols from './Assets/Images/pesols.jpg';
import Croisant from './Assets/Images/mini_croisants.jpg';
import Entrecot from './Assets/Images/entrecot.jpg';
import Provolone from './Assets/Images/provolone.jpg';
import Pollastre from './Assets/Images/pollastre.jpg';
import Burritos from './Assets/Images/Burrito.jpg';
import Trufa from './Assets/Images/Trufa.jpg';
import Arroz from './Assets/Images/Arroz_y_pluma.jpg';
import Moniato from './Assets/Images/Moniato.jpg';
import Footer from './components/footer'

function Recetas() {  // Asegúrate de que el nombre del componente sea Recetas
    const photos = [
        { 
            url: Pokebowl, 
            text: 'Poke Bowl Mediterrani',
            description: 'Benvinguts a aquesta transformació d’un plat típic de Hawaii, el Poke Bowl Mediterrani! En ell trobaràs la mateixa fórmula però amb aliments de la nostra terra. Esteu preparats?',
        },
        { 
            url: Torrades, 
            text: 'Torrades de primavera amb formatge camembert i maduixes.',
            description: 'Gaudeix d’aquestes exquisides torrades de primavera amb formatge camembert i maduixes. Una combinació irresistible de sabors frescos i cremosos en cada mossegada. Perfectes per a qualsevol ocasió!',
        },
        {
            url: Amanida,
            text: 'Amanida tropical de cirera, nou i mango amb maionesa de cirera.',
            description: 'Gaudeix de la nostra amanida tropical de cirera, nou i mànec amb maionesa de cirera! Una explosió de sabors tropicals amb cireres sucoses, mango madur i nous cruixents.'
        },
        {   
            url: pesols, 
            text: 'Saltejat de pèsols amb bacó, ceba i ou poxé',
            description: 'Descobreix la nostra exquisita recepta de saltejat de pèsols amb bacó, ceba i ou pochejat! Deleita’t amb aquesta combinació de sabors i gaudeix d’un àpat saludable i reconfortant. Perfecte per a qualsevol ocasió.'
        },
        {   
            url: Croisant, 
            text: 'Mini croissants de xocolata amb festucs',
            description: 'Deleita’t amb els nostres mini croissants de xocolata amb festucs: una barreja irresistible en cada mossegada. Prova la perfecció pastissera!'
        },
        {   
            url: Entrecot, 
            text: 'Entrecot de vedella amb salsa de mango i pebrots de padró',
            description: 'Recepta d’entrecot de vedella amb salsa de mango i pebrots de padró: suculent, tendre i acompanyat d’una combinació impressionant de salsa de mango i el toc picant dels pebrots de Padrón. Deliciós!',
        },
        {   
            url: Provolone, 
            text: 'Formatge provolone amb tomàquets cherry a la mel i mostassa',
            description: 'Delícia fondent: Formatge provolone i tomàquets cherry amb salsa de mel i mostassa, un matrimoni de sabors irresistible.'
        },
        {   
            url: Pollastre, 
            text: 'Pollastre amb calçots i allioli',
            description: 'Explora una experiència culinària espectacular amb la nostra recepta de pollastre amb calçots i allioli cremós. Una barreja irresistible de sabors mediterranis!'
        },
        {   
            url: Burritos, 
            text: 'Burritos de vedella amb xili i formatge cheddar',
            description: 'Recepta espectacular de burritos de vedella amb xili i formatge cheddar. Posa a prova el teu paladar amb el picant del xili!' 
        },
        {   
            url: Trufa, 
            text: 'Trufes de torró i xocolata',
            description: 'Sorprèn als teus familiars amb aquest espectacular postre de trufes de torró i xocolata.'
        },
        {   
            url: Arroz, 
            text: 'Arròs al forn amb ploma ibèrica i bolets',
            description: 'Tasta la nostra recepta d’arròs al forn amb ploma Ibèrica i bolets: Un festí de sabors exquisits!' 
        },
        {   
            url: Moniato, 
            text: 'Moniato farcit amb pollastre al curri i formatge gratinat',
            description: 'Fantàstica recepta de moniato farcit amb pollastre al curri i formatge gratinat, un festí cremós i especiat a cada mos.'
        },
    ];

    return (
        <>
            <Header />
            <div className="receptes-header">
                <img src={iconoVerde} alt="Icono Verde" className="icono-verde" />
                <h1>receptes</h1>
            </div>
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
            <Footer/>
        </>
    );
}

export default Recetas;
