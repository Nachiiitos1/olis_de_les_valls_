import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Tienda from './tienda';
import Contacte from './contacte';
import Noticies from './Noticies';
import FotoLicor from './FotorLicor';
import Tractor from './Tractor';
import Recetas from './Recetas';

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

        </Routes>
      </div>
    </Router>
  );
}

export default App;
