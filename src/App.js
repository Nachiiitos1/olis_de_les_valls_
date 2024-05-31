import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Tienda from './tienda';
import Contacte from './contacte';
import Noticies from './Noticies';
import FotoLicor from './FotorLicor';
import Tractor from './Tractor';
import Recetas from './Recetas';
import Producto1 from './product1'
import Producto2 from './product2'

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
          <Route path='/Tractor' element={<Tractor />} />
          <Route path='/product1' element={<Producto1 />} />
          <Route path='/product2' element={<Producto2 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
