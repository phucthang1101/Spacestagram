import React from 'react'
import Particles from "react-tsparticles";

const ParticlesCustom = () => {
    return (
        <Particles
            id="particles"
            options={{
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 0.4,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 80,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 1,
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
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: false,
                        },
                        onclick: {
                            enable: true,
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 800,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 800,
                            size: 80,
                            duration: 2,
                            opacity: 0.4,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }}>

        </Particles>
    )
}

export default ParticlesCustom;
