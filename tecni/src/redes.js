import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube
}   from "@fortawesome/free-brands-svg-icons";

export default function Redes() {

    return (

        <div className ="social-container" >
            <h3>Nuestras Redes</h3>
            <a  href="https://www.facebook.com/tecnidiseniosabrego" target="_blank"
                className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook}size="2x"/>
            </a>
            <a  href="https://www.instagram.com/tecnidisenosabrego" target="_blank"
                className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram}size="2x"/>
            </a>
            <a  href="https://www.youtube.com/channel/UCyr2je4A9XeYbDX-qlMZ-hg?view_as=subscriber" target="_blank"
                className="youtube social"
            >
                <FontAwesomeIcon icon={faYoutube}size="2x"/>
            </a>
        </div>

       
    );

}