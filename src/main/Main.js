import React from "react";
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';


const particlesOptions = {
    particles: {
        number: {
            value: 200,
            limit: 300,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "images/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
            }
        },
        size: {
            value: 10,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    }
};

const Main = () => {
    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am Aliaksandr <span>Lipski</span></span>
                        <ReactTypingEffect
                            text="Frontend Developer"
                        />
                    </div>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className={style.photo}>
                            <div className={style.image}>

                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
