import './Menu.css'
import React, { useState, useLayoutEffect } from "react";
import Grid from '@material-ui/core/Grid';

import { Link ,useLocation,useHistory} from "react-router-dom";
const menu = {
  home: 0
}
function useScroll(setActive) {
  const [scroll, setScroll] = useState(0);
  useLayoutEffect(() => {
    function updateScroll() {
      let valor = window.pageYOffset;
      setScroll(valor);
      for (let a in menu) {
        if (valor - 90 < menu[a] && valor + 90 > menu[a]) {
          setActive(a);
        }
      }
    }
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return scroll;
}




export default function MenuP() {
    const [active , setActive] = useState('home');
    const scroll = useScroll(setActive);


  return (
    <div style={{ width: "100%" }} >
      <Grid container spacing={0} className={(scroll > 50 )? 'Menu' : 'MenuScroll'}>
        <Grid item md={3} xs={3} sm={3}>
          <Link to="/Home" className={'menuText'} >Inicio</Link>
        </Grid>
        <Grid item md={3} xs={3} sm={3}>
          <Link to="/servicios" className={'menuText'} ><div>Nuestros Servicios</div></Link>
        </Grid>
        <Grid item md={3} xs={3} sm={3}>
          <Link to="/nosotros" className={'menuText'} >Quienes Somos</Link>
        </Grid>
        <Grid item md={3} xs={3} sm={3}>
          <Link to="/contactos"  className={'menuText'}>Contáctanos</Link>
        </Grid>
      </Grid>
    </div>
  );
}

