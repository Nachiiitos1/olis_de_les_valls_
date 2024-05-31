import React from 'react';
import './App.css'; // Ajusta la ruta según la estructura de tu proyecto
import oli from './fotos/oli.jpg';
import oligirasol from './fotos/oli girasol.jpg';
import oliOliva from './fotos/olioliva.jpg';
import oliVerge from './fotos/oliverge.jpg';

function Productes() {
    return (
        <div>
            <h2>Productes</h2>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <img
                    src={oli}
                    style={{ width: '100%', display: 'block' }}
                />
                <div style={{ textAlign: "left", display: 'inline-block', width: '33%' }}>
                    <h3 style={{ color: "#c6d420" }}>Aceite de oliva virgen extra</h3>
                    <h4>Descripcion</h4>
                    <p>Oli d’oliva verge extra. Procedent de l’agricultura ecològica, amb denominació d’origen D.O.P les Garrigues i realitzat a base d’una rigorosa selecció de les millors olives. Ideal per als menjars més exquisits.  1L</p>
                    <img src={oliOliva} alt="Aceite de oliva" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ textAlign: "left", display: 'inline-block', width: '33%' }}>
                    <h3 style={{ color: "#c6d420" }}>Aceite de girasol</h3>
                    <h4>Descripcion</h4>
                    <p>Oli de girasol: Oli lleuger i neutre elaborat a partir de les millors llavors de girasol. </p>
                    <p>Respecta totalment el sabor natural dels aliments i no conté ni conservants ni additius. És un producte extraordinari per obtenir fregits cruixents. 1L</p>
                    <img src={oligirasol} alt="Aceite de girasol" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ textAlign: "left", display: 'inline-block', width: '33%' }}>
                    <h3 style={{ color: "#c6d420" }}>Aceite de oliva virgen</h3>
                    <h4>Descripcion</h4>
                    <p>Oli d’oliva verge: Color verdós d’oli jove i fresc. Aroma afruitat amb predomini del tomàquet i l’ametlla verda. Sabor lleugerament amarg, herbaci i té una lleugera picor. En boca és vigorós i fresc. Ideal per a pa torrat o pa amb tomàquet. També és molt apropiat per a carns blanques, verdures i peixos a la planxa. 1L</p>
                    <img src={oliVerge} alt="Aceite de oliva virgen" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ textAlign: "left", display: 'inline-block', width: '33%' }}>
                    <h3 style={{ color: "#c6d420" }}>Receta aceite de oliva virgen extra</h3>
                    <h3>Tortilla de arroz</h3>
                    <p>Información de la receta
                        Tiempo de preparación: 5 minutos
                        Tiempo de cocinado: 15 minutos
                        Tiempo total: 20 minutos
                        Raciones: 2
                        Categoría: plato principal
                        Tipo de cocina: española
                        Calorías por ración (kcal): 386</p>
                    <p>Ingredientes de la tortilla de arroz
                        40 g de cebolla
                        2 cebolletas
                        2 cucharadas de aceite de oliva virgen extra
                        2 huevos M
                        Sal
                        40 g de queso parmesano
                        1 cucharada de perejil picado
                        60 g de arroz cocido
                        Pimienta negra molida</p>
                </div>
                <div style={{ textAlign: "left", display: 'inline-block', width: '33%' }}>
                    <h3 style={{ color: "#c6d420" }}>Receta aceite de girasol</h3>
                    <h3>Cordon bleu</h3>
                    <p>Información de la receta
                        Tiempo de preparación: 20 minutos
                        Tiempo de cocinado: 5 minutos
                        Tiempo total: 25 minutos
                        Raciones: 2
                        Categoría: plato principal
                        Tipo de cocina: francesa
                        Calorías por ración (kcal): 558</p>
                    <p>Ingredientes del cordon bleu para 2 personas
                        2 filetes de ternera (unos 300 g en total)
                        Sal
                        Pimienta negra molida
                        2 lonchas de jamón cocido
                        2 lonchas de queso
                        50 g de harina de trigo
                        1 huevo
                        75 g de pan rallado
                        300 ml de aceite de grasol</p>
                </div>
                <div style={{ textAlign: "left", display: 'inline-block', width: '33%' }}>
                    <h3 style={{ color: "#c6d420" }}>Receta aceite de oliva  virgen </h3>
                    <h3>Ensalada de pasta con atún fria</h3>
                    <p>Información de la receta
                        Tiempo de preparación: 15 minutos
                        Tiempo de cocinado: 15 minutos
                        Tiempo total: 2 horas 30 minutos
                        Raciones: 4
                        Categoría: plato principal
                        Tipo de cocina: internacional
                        Calorías por ración (kcal): 868</p>
                    <p>Ingredientes de la ensalada fría de pasta con atún para 4 personas
                        ½ cucharada de sal
                        400 g de pasta corta (farfalle, fusilli, penne)
                        12 huevos de codorniz (o 3 de gallina)
                        200 g de atún en aceite de oliva (peso escurrido)
                        50 g de aceitunas verdes
                        50 g de aceitunas negras
                        1 aguacate
                        6 pimientos del piquillo
                        ½ cebolla morada
                        2 cucharadas de alcaparras
                        12 tomates cherry (opcional)
                       
                        Para el aliño:

                        100 ml de aceite de oliva virgen
                        2 cucharadas de vinagre de jerez o vino blanco
                        1 cucharadita de mostaza de Dijon
                        Cebollino
                        Sal
                        Pimienta negra molida
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Productes;
