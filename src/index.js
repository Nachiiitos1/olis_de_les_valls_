
import React from 'react'; // Agrega esta línea para importar React

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';

const root = document.getElementById("root");

createRoot(root).render(
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
);