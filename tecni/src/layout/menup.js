import './Menu.css'
import React from "react";
import ServiMenu from '../servicios.js';
import Nosotro from '../nosotros.js';
import Inicio from '../home.js';
import Contacto from '../contacto.js';
import Grid from '@material-ui/core/Grid';

import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default function MenuP() {
  return (
    <Router>
      <div style={{ width: "100%" }} >
        <Grid container spacing={0}>
          <Grid item md={3} xs={3} sm={3}>
            <Link to="/Home" style={{ textDecoration: 'none' }} >Inicio</Link>
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <Link to="/servicios" style={{ textDecoration: 'none' }} ><div>Nuestros Servicios</div></Link>
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <Link to="/nosotros" style={{ textDecoration: 'none' }} >Quienes Somos</Link>
          </Grid>
          <Grid item md={3} xs={3} sm={3}>
            <Link to="/contactos" style={{ textDecoration: 'none' }} >Contáctanos</Link>
          </Grid>
        </Grid>

      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/servicios">
          <Servicios />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Router path="/contactos">
          <Contactos />
        </Router>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2><Inicio /></h2>;
}
function Servicios() {
  return <h2><ServiMenu /></h2>;
}
function Nosotros() {
  return <h2><Nosotro /></h2>;
}
function Contactos() {
  return <h2><Contacto /></h2>;
}

