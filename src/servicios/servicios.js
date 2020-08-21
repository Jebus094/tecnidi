// import './Menu.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import { PersonalizadoMoto, Valla, PasaCalle } from '../fotos';


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

const Cuadros = ({img, i, gr}) => {
    const style = {
        img: {
            backgroundImage: "url('" + img + "')"
        }
    }
    return (
        <Grid item md={gr} xs={gr} sm={gr} style={{ height: '10em' }}>
            {(!(i%2)) ? 
                <Fade top><div className={'imgServicio'}  style={style.img} /></Fade>
                :
                <Fade right cascade><div className={'imgServicio'}  style={style.img} /></Fade>
                }
        </Grid>
    )


}


export default function ServiMenu() {

    const classes = useStyles();
    return (

        <div className={classes.root} style={{ padding: '2em', backgroundColor: '#1d1d1d' }}  >
            <Grid container spacing={3}>
                <Grid item md={12} xs={12} as={12}>
                    <Rotate><h1>Impresión digital</h1></Rotate>
                </Grid>
                <Grid container justify="center" spacing={1} >
                    <Grid item md={4} xs={4} sm={4}>
                        <div><Fade left><h2>Motos Personalizadas</h2> </Fade></div>
                    </Grid>
                    {PersonalizadoMoto.map((res, i)=>{
                        return (<Cuadros img={res.src} gr={res.grid}  i={i} key={'img'+ i} />)
                    })}
                </Grid>

                <Grid container justify="center" spacing={1} style={{ marginTop: '0.5em' }}  >
                     <Grid item md={4} xs={4} sm={4}>
                        <div><Fade left><h2>Valla publicitaria</h2> </Fade></div>
                    </Grid>
                    {Valla.map((res, i)=>{
                        return (<Cuadros img={res.src} gr={res.grid} i={i} key={'img'+ i} />)
                    })}
                </Grid>
                <Grid container justify="center" spacing={1} style={{ marginTop: '0.5em' }}  >
                     <Grid item md={4} xs={4} sm={4}>
                        <div><Fade left><h2>Pasa Calle</h2> </Fade></div>
                    </Grid>
                    {PasaCalle.map((res, i)=>{
                        return (<Cuadros img={res.src} gr={res.grid} i={i} key={'img'+ i} />)
                    })}
                </Grid>

                <Grid item md={12} xs={12} as={12}>
                    <Rotate><h1>Publicidad</h1></Rotate>
                </Grid>
                

            </Grid>
        </div>

    );
}