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

const Cuadros = ({img, i}) => {
    const style = {
        img: {
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", 
            backgroundImage: "url('" + img + "')"
        }
    }
    return (
        <Grid item md={(!(i%2)) ? 4: 6} xs={(!(i%2)) ? 4: 6} sm={(!(i%2)) ? 4: 6} style={{ height: '10em' }}>
            {(!(i%2)) ? 
                <Fade top><div  style={style.img}></div></Fade>
                :
                <Fade right cascade><div  style={style.img}></div></Fade>
                }
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
                    {PersonalizadoMoto.map((res, i)=>{
                        return (<Cuadros img={res.src}  i={i} key={'img'+ i} />)
                    })}
                </Grid>

                <Grid container justify="center" spacing={1} style={{ marginTop: '0.5em' }}  >
                     <Grid item md={4} xs={4} sm={4}>
                        <div><Fade left><h2>Valla publicitaria</h2> </Fade></div>
                    </Grid>
                    {Valla.map((res, i)=>{
                        return (<Cuadros img={res.src} i={i} key={'img'+ i} />)
                    })}
                </Grid>
                <Grid container justify="center" spacing={1} style={{ marginTop: '0.5em' }}  >
                     <Grid item md={4} xs={4} sm={4}>
                        <div><Fade left><h2>Pasa Calle</h2> </Fade></div>
                    </Grid>
                    {PasaCalle.map((res, i)=>{
                        return (<Cuadros img={res.src} i={i} key={'img'+ i} />)
                    })}
                </Grid>

            </Grid>
        </div>

    );
}