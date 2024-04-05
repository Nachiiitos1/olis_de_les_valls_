//import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importa BrowserRouter y Routes desde 'react-router-dom'
import Home from './home'

function App() {
  return (
    <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
  </Routes>
  );
}

export default App;
