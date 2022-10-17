import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListaFuncionarios from './components/ListaFuncionarios';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CadastraFuncionario from './components/CadastraFuncionario';
import AtualizaFuncionario from './components/AtualizaFuncionario';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path='/atualiza-funcionario' element={<AtualizaFuncionario/>}/>
              <Route path='/cadastra-funcionario' element={<CadastraFuncionario/>}/>
              <Route path='' element={<ListaFuncionarios/>}/>
            </Routes>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
