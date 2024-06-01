import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Tienda from './tienda';
import Contacte from './contacte';
import Noticies from './Noticies';
import FotoLicor from './FotorLicor';
import Tractor from './Tractor';
import Recetas from './Recetas';
import Historia from './historiaaceites'
import NuestrosAceites from './nuestrosaceites'
import Politcap from './politicap';
import Politcac from './politicap';
import Avis from './avis';
import Condicions from './condicions'
import Dret from './dret'
import Producto1 from './product1'
import Producto2 from './product2'
import Producto3 from './product3'
import Producto4 from './product4'
import Producto5 from './product5'
import Producto6 from './product6'
import Productes from './productes'
import FinalizarCompra from './finalizarcompra';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path='/Recetas' element={<Recetas />} />
          <Route path='/Noticies' element={<Noticies />} />
          <Route path='/FotoLicor' element={<FotoLicor />} />
          <Route path='/Tractor' element={<Tractor />} />
          <Route path='/NuestrosAceites' element={<NuestrosAceites />} />
          <Route path='/Historia' element={<Historia />} />
          <Route path='/Productes' element={<Productes />} />
          <Route path='/politicap' element={<Politcap />} />
          <Route path='/politicac' element={<Politcac />} />
          <Route path='/product1' element={<Producto1 />} />
          <Route path='/product2' element={<Producto2 />} />
          <Route path='/product3' element={<Producto3 />} />
          <Route path='/product4' element={<Producto4 />} />
          <Route path='/product5' element={<Producto5 />} />
          <Route path='/product6' element={<Producto6 />} />
          <Route path='/condicions' element={<Condicions />} />
          <Route path='/dret' element={<Dret />} />
          <Route path='/avis' element={<Avis />} />
          <Route path='/finalizarcompra' element={<FinalizarCompra />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

