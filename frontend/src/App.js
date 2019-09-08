import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import TipoUsuario from './components/TipoUsuario';

function App() {
  return (
    <Router>

      <Route path="/" exact component={ Login } />

      <Route path="/cadastro" component={ Cadastro } />

      <Route path="/tipousuario" component={ TipoUsuario } />
      
    </Router>
  );
}

export default App;
