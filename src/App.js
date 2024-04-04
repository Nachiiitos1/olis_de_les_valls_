import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Routes desde 'react-router-dom'
import Home from './home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
