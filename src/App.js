import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter
import Header from './header'; // Importa tu componente Header.js
import Contacte from './Contacte'; // Importa tu componente Contacte.njs

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Header />} /> {/* Renderniza Header en la ruta / */}
        <Route path="/Contacte" element={<Contacte/> } /> 
        
      </Routes>
    </Router>
  );
}

export default App;
