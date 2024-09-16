import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Tienda from './tienda'
import Producto1 from './product1'
import Producto2 from './product2'
import Producto3 from './product3'
import Producto4 from './product4'
import Producto5 from './product5'
import Producto6 from './product6'
import FinalizarCompra from './finalizarcompra';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path='/product1' element={<Producto1 />} />
          <Route path='/product2' element={<Producto2 />} />
          <Route path='/product3' element={<Producto3 />} />
          <Route path='/product4' element={<Producto4 />} />
          <Route path='/product5' element={<Producto5 />} />
          <Route path='/product6' element={<Producto6 />} />
          <Route path='/finalizarcompra' element={<FinalizarCompra />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

