// import './Menu.css';
import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import img1 from '../src/assets/img/img1.png';
import img2 from '../src/assets/img/img2.png';
import img3 from '../src/assets/img/img3.png';
import img4 from '../src/assets/img/img4.png';

/*import ListItem from '@material-ui/core/ListItem';*/
/*import ListItemText from '@material-ui/core/ListItemText';*/
/*import Collapse from '@material-ui/core/Collapse';*/
/*import Gal from './gallery';*/
/*import { PersonalizadoMoto, Valla, PasaCalle, Aviso } from './fotos';*/



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ServiMenu() {

  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item md={12} xs={12} as={12}>
       <h1>Impresión digital</h1>
      </Grid>
      <Grid container justify = "center" spacing={1} >
       
          <Grid item md={4} xs={4} sm ={4}>
            <Paper className={classes.paper}><h2>Motos Personalizadas</h2></Paper>
          </Grid>
                 
          <Grid item md={4} xs={4} sm ={4} style={{height: '10em' }}> 
                <img src={img1} style={{width: '100%',height: '100%'}} />
          </Grid>

          <Grid item md={4} xs={4} sm ={4}style={{height: '10em' }}>
                <img src={img2} style={{width: '100%',height: '100%'}} />
          </Grid>
          
        
      </Grid>

      <Grid container justify = "center" spacing={1} style={{marginTop: '0.5em'}}  >

          <Grid item md={6} xs={6} sm ={6} style={{height: '10em' }}>
                <img src={img3} style={{width: '100%',height: '100%'}} />
          </Grid>
          <Grid item md={6} xs={6} sm ={6} style={{height: '10em' }}>
                <img src={img4} style={{width: '100%',height: '100%'}} />
          </Grid>
      </Grid>
      
    </Grid>
  </div>

  );
}