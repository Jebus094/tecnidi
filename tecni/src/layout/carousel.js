import React from 'react';
import Carousel from 'react-material-ui-carousel';
import imagen from '../assets/mine.png';



export default function Carrusel(props) {
    return (
        <Carousel className="Carousel">
            <img src={imagen} style={{ width: '100%', height: '60vh' }} />
            <img src={imagen} style={{ width: '100%', height: '60vh' }} />
            <img src={imagen} style={{ width: '100%', height: '60vh' }} />
        </Carousel>
    )
}

