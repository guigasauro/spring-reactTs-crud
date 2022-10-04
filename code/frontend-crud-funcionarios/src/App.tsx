import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import ListaFuncionariosComponent from './components/ListaFuncionariosComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
          <header className="container">
            <Switch>
              <Route path = "/" element={<ListaFuncionariosComponent/>}></Route>
              <Route path = "/funcionarios" element={<ListaFuncionariosComponent/>}></Route>
            </Switch>
          </header>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
