import React from 'react';
import Inicio from './home/home';
import ServiMenu from './servicios/servicios';
import Nosotros from './nosotros/nosotros';
import Contacto from './contacto/contacto';
import MenuP from './layout/menup.js';
import './App.css';
import Carrusel from './layout/carousel.js';
import Redes from './layout/redes';
import './stilosRedes.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
require('react-responsive-carousel/lib/styles/carousel.min.css');


function App() {
    return (
        <div className="App">
            <div className="topHeader" ></div>
            <Router>
                <header className="App-header">
                    <Carrusel />
                    <MenuP />
                </header>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Inicio />
                        </Route>
                        <Route path="/servicios">
                            <ServiMenu />
                        </Route>
                        <Route path="/nosotros">
                            <Nosotros />
                        </Route>
                        <Router path="/contactos">
                            <Contacto />
                        </Router>
                    </Switch>
                </div>
                <footer>
                    <Redes />
                </footer>
            </Router>
        </div>
    );
}

export default App;

