import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Correo from '../correo.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Contacto() {
  const [env, setEnv] = useState({ nombre: "", telefono: "", correo: "", ciudad: "", asunto: "", mensaje: "" });

  function handleSubmit() {
    Correo(env);
  }
  function handleChange(e) {
    e.persist();
    setEnv(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  const classes = useStyles();

  return (
    <div>
      <form id="enviar-correo" action="correo.js" className={classes.root} noValidate autoComplete="off">
        <TextField name="nombre" id="nombre" onChange={handleChange} label="Nombre" variant="outlined" value={env.nombre} />
        <TextField name="telefono" id="telefono" onChange={handleChange} label="Teléfono" variant="outlined" value={env.telefono} />
        <TextField name="correo" id="correo" onChange={handleChange} label="Correo Electronico" variant="outlined" value={env.correo} />
        <TextField name="ciudad" id="ciudad" onChange={handleChange} label="Ciudad" variant="outlined" value={env.ciudad} />
        <TextField name="asunto" id="asunto" onChange={handleChange} label="Asunto" variant="outlined" value={env.asunto} />
        <TextField name="mensaje" id="mensaje" onChange={handleChange} label="Mensaje" variant="outlined" value={env.mensaje} />
      </form>

      <div className="Benviar">
        <Grid item md={3} xs={3} sm={3}>
          <button onClick={handleSubmit} >Enviar</button>
        </Grid>
      </div>

      <div >
        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.89222189418942!2d-73.22036274846474!3d8.073353266620627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d91f4ab74956e8c!2sTECNI-DISE%C3%91OS!5e0!3m2!1ses-419!2sco!4v1588802657406!5m2!1ses-419!2sco" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>


    </div>

  );

}