import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter
import Header from './header'; // Importa tu componente Header.js
import Contacte from './Contacte'; // Importa tu componente Contacte.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} /> {/* Renderiza Header en la ruta / */}
        <Route path="/contacte" element={<Contacte />} /> {/* Renderiza Contacte en la ruta /contacte */}
        
      </Routes>
    </Router>
  );
}

export default App;
