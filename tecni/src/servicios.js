// import './Menu.css';
import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
          <Grid item md={4} xs={4} sm ={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item md={4} xs={4} sm ={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          
        
      </Grid>

      <Grid container justify = "center" spacing={1} style={{marginTop: '0.5em'}}  >

          <Grid item md={4} xs={6} sm ={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item md={4} xs={6} sm ={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
      </Grid>
      
    </Grid>
  </div>

  );
}