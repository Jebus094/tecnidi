import './Menu.css';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, styled } from '@material-ui/core/styles';

import Gal from './gallery';
import {PersonalizadoMoto, Valla, PasaCalle, Aviso } from './fotos';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


export default function ServiMenu() {


  const classes = styled();
  const [open, setOpen] = React.useState({ ImpresionDigital: false, Cortelaser: false, CalcomaniasEnCorte: false, Polarizados: false, Bolantería: false });
  function HandleClick(Servicio) {
    setOpen({ ImpresionDigital: false, Cortelaser: false, CalcomaniasEnCorte: false, Polarizados: false, Bolantería: false })
    setOpen(prev => ({
      ...prev,
      [Servicio]: !open[Servicio]
    }));
  };

  return (
    <div className='ServiMenu'>
      <list
        component="nav"
        className={classes.root}>
        <ListItem button onClick={() => { HandleClick("ImpresionDigital") }}>
          <ListItemText primary="Impresion Digital" />
        </ListItem>
        <Collapse in={open.ImpresionDigital} timeout="auto" unmountOnExit> 

          <ParallaxProvider>     
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <div> Personalizados de motos</div>
              <div><Gal photos={PersonalizadoMoto}/></div>
              <div></div>
              <div> Personalizados de motos</div>
              <div><Gal photos={Valla}/></div>
              <div></div>
              <div> Personalizados de motos</div>
              <div><Gal photos={PasaCalle}/></div>
              <div></div>
              <div> Personalizados de motos</div>
              <div><Gal photos={Aviso}/></div>
            </Parallax>
          </ParallaxProvider>  

         

        </Collapse>
      </list>

      <list
        component="nav"
        className={classes.root}>
        <ListItem button onClick={() => { HandleClick('Cortelaser') }}>
          <ListItemText primary="Corte laser" />
        </ListItem>
        <Collapse in={open.Cortelaser} timeout="auto" unmountOnExit>
         
        <ParallaxProvider>     
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <div> Personalizados de motos</div>
              <div><Gal photos={PersonalizadoMoto}/></div>
            </Parallax>
          </ParallaxProvider>
          
        </Collapse>
      </list>

      <list
        component="nav"
        className={classes.root}>
        <ListItem button onClick={() => { HandleClick('CalcomaniasEnCorte') }}>
          <ListItemText primary="Calcomanias en Corte" />
        </ListItem>
        <Collapse in={open.CalcomaniasEnCorte} timeout="auto" unmountOnExit>
        <ParallaxProvider>     
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <div> Personalizados de motos</div>
              <div><Gal photos={PersonalizadoMoto}/></div>
            </Parallax>
          </ParallaxProvider>
        </Collapse>
      </list>

      <list
        component="nav"
        className={classes.root}>
        <ListItem button onClick={() => { HandleClick('Polarizados') }}>
          <ListItemText primary="Polarizados" />
        </ListItem>
        <Collapse in={open.Polarizados} timeout="auto" unmountOnExit>
        <ParallaxProvider>     
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <div> Personalizados de motos</div>
              <div><Gal photos={PersonalizadoMoto}/></div>
            </Parallax>
          </ParallaxProvider>
        </Collapse>
      </list>

      <list
        component="nav"
        className={classes.root}>
        <ListItem button onClick={() => { HandleClick('Bolantería') }}>
          <ListItemText primary="Volantería" />
        </ListItem>



        <Collapse in={open.Bolantería} timeout="auto" unmountOnExit>
        <div>
          <ParallaxProvider>     
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <div> Personalizados de motos</div>
              <div><Gal photos={PersonalizadoMoto}/></div>
            </Parallax>
          </ParallaxProvider>
          </div>
       
        </Collapse>
      </list>
    </div>

  );
}