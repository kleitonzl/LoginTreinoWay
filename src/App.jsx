import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import CadastroPage from './components/pages/CadastroPage'

function App() {
    return (
        
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </Router>error: remote origin already exists.
    );
  }
  
  export default App;