import React from 'react';
import { Parallax, Background } from 'react-parallax';
export default function Inicio() {

    return (

        <div>
           <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./assets/uno.jpg')}
            bgImageAlt="the dog"
            strength={-800}
        >
            <div style ={{postion: 'relative',height: '10em'}}>
                <div style={{position: 'absolute', width: '50%' , right: '0'}}>
                    <h3>Calcomanias</h3>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
            <div style={{ height: '200px' }} />
        </Parallax>
        <Parallax
            bgImage={require('./assets/dos.png')}
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
            <div style ={{postion: 'relative',height: '16em'}}>
                <div style={{position: 'absolute', width: '50%' , left:'0'}}>
                    <h3>Calcomanias</h3>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
        </Parallax>
        <Parallax
            blur={10}
            bgImage={require('./assets/tres.jpg')}
            bgImageAlt="the cat"
            strength={-800}
        >
            <div style ={{postion: 'relative',height: '10em'}}>
                <div style={{position: 'absolute', width: '50%' , right: '0'}}>
                    <h3>Calcomanias</h3>
                    <p>Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias Estas son unas Calcomanias 
                    Estas son unas Calcomanias 
                    </p>
                </div>
            </div>
            <div style={{ height: '200px' }} />
        </Parallax>
        <Parallax
            bgImage={require('./assets/cuatro.jpg')}
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
            <div style ={{postion: 'relative',height: '16em'}}>
                <div style={{position: 'absolute', width: '50%' , left:'0'}}>
                    <h3>Calcomanias</h3>
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