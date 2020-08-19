// import './Menu.css';
import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import img1 from '../src/assets/img/img1.png';
import img2 from '../src/assets/img/img2.png';
import img3 from '../src/assets/img/img3.png';
import img4 from '../src/assets/img/img4.png';
import { PersonalizadoMoto, Valla, PasaCalle, Aviso } from './fotos';


/*import ListItem from '@material-ui/core/ListItem';*/
/*import ListItemText from '@material-ui/core/ListItemText';*/
/*import Collapse from '@material-ui/core/Collapse';*/
/*import Gal from './gallery';*/



const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
}));

const Cuadros = ({img}) => {

    return (
        <Grid item md={4} xs={4} sm={4} style={{ height: '10em' }}>
            <Fade top><div  style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center", 
                backgroundImage: "url('" + img + "')"
            }}></div></Fade>
        </Grid>
    )


}


export default function ServiMenu() {

    const classes = useStyles();

    return (

        <div className={classes.root} style={{ padding: '2em', backgroundColor: 'black' }}  >
            <Grid container spacing={3}>
                <Grid item md={12} xs={12} as={12}>
                    <Rotate><h1>Impresión digital</h1></Rotate>
                </Grid>
                <Grid container justify="center" spacing={1} >
                    <Grid item md={4} xs={4} sm={4}>
                        <div><Fade left><h2>Motos Personalizadas</h2> </Fade></div>
                    </Grid>
                    <Cuadros img={img1} />
                    <Grid item md={4} xs={4} sm={4} style={{ height: '10em' }}>
                        <Fade top><div className={classes.imgStyle} style={{ backgroundImage: "url('" + img1 + "')" }}></div></Fade>
                    </Grid>
                    <Grid item md={4} xs={4} sm={4} style={{ height: '10em' }} >
                        <Fade right> <div className={classes.imgStyle} style={{ backgroundImage: "url('" + img2 + "')" }}> </div></Fade>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={1} style={{ marginTop: '0.5em' }}  >
                    <Grid item md={6} xs={6} sm={6} style={{ height: '10em' }}>
                        <Fade bottom><div className={classes.imgStyle} style={{ backgroundImage: "url('" + img3 + "')" }}></div></Fade>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6} style={{ height: '10em' }} alignItems="center" >
                        <Fade bottom><div style={{ backgroundImage: "url('" + img4 + "')" }} className={classes.imgStyle}></div></Fade>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}