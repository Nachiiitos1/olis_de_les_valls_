import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Tienda from './tienda';
import Contacte from './contacte';
import Noticies from './Noticies';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path='/Noticies' element={<Noticies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
