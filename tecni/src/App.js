import React from 'react';
import './App.css';
import Carrusel from './carousel.js';
import MenuP from './menup.js';
import Redes from './redes';
import './stilosRedes.css';
require ('react-responsive-carousel/lib/styles/carousel.min.css')

function App() {
  return (
    
    <div className="App">
      <div className="topHeader" ></div>
      <header className="App-header">
      <Carrusel/>
      <MenuP/>
      </header>
      <Redes/>
       </div>
  );
}

export default App;
