import React from 'react';
import './App.css';
import Carrusel from './layout/carousel.js';
import MenuP from './layout/menup.js';
import Redes from './layout/redes';
import './stilosRedes.css';
require('react-responsive-carousel/lib/styles/carousel.min.css')

function App() {
  return (

    <div className="App">
      <div className="topHeader" ></div>
      <header className="App-header">
        <Carrusel />
        <MenuP />
      </header>
      <footer>
        <Redes />
      </footer>
    </div>
  );
}

export default App;
