import React from 'react';
import { Parallax } from 'react-parallax';
import './home.css';
export default function Inicio() {
    return (

        <div className={'inicio'}>
           <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../assets/uno.jpg')}
            bgImageAlt="the dog"
            strength={-800}
        >
            <div className={'rightText'}>
                <div>
                    <h2>Calcomanias</h2>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
        </Parallax>
        <Parallax
            bgImage={require('../assets/dos.png')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(0, 0, 0, ${percentage * 1})`,
                        left: '0',
                        top: '0',
                        width: "100%",
                        height: 800,
                    }}
                />
            )}
        >
            <div className={'leftText'}>
                <div>
                    <h2>Calcomanias</h2>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
        </Parallax>
        <Parallax
            blur={10}
            bgImage={require('../assets/tres.jpg')}
            bgImageAlt="the cat"
            strength={-800}
        >
            <div className={'rightText'}>
                <div>
                    <h2>Calcomanias</h2>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
        </Parallax>
        <Parallax
            bgImage={require('../assets/cuatro.jpg')}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(0, 0, 0, ${percentage * 1})`,
                        left: '0',
                        top: '0',
                        width: "100%",
                        height: 800,
                    }}
                />
            )}
        >
            <div className={'leftText'}>
                <div>
                    <h2>Calcomanias</h2>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
        </Parallax>
        </div>
    );

}